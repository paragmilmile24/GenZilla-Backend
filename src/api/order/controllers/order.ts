/**
 * order controller
 */

import { factories } from '@strapi/strapi'
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default factories.createCoreController('api::order.order', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async customOrderConroller(ctx) {
      try {
        const bodyData = ctx.body;
        const entries = await strapi.documents('api::product.product').findMany({
            fields : ['title']
        })

        return {data : entries}
      } catch (err) {
        ctx.body = err;
      }
    },

    async create(ctx){
        const {products} = ctx.request.body;

        const lineItems = await Promise.all(products.map(async (product) => {

			const productEntities = await strapi.entityService.findMany("api::product.product", {
				filters: {
					key: product.key
				}
			})
			const realProduct = productEntities[0];
			  const image = product.image
			  return {
				  price_data: {
					currency: 'inr',
					product_data: {
						name: realProduct.title,
						images: [image]
					},
					unit_amount: realProduct.price * 100
				  },
				  quantity: product.quantity
			  }
		  }));

        const session = await stripe.checkout.sessions.create({
            shipping_address_collection: {
				allowed_countries: ['IN']
			},
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.CLIENT_BASE_URL}/orderstatus/success`,
            cancel_url: `${process.env.CLIENT_BASE_URL}/orderstatus/failed`,
          });

        try {
            await strapi.documents('api::order.order').create({
                data: {
                  products,
                  stripeid : session.id,
                }
              })

              return {products,stripeid : session.id}
        } catch (error) {
            console.log("Error in create order", error);
            ctx.response.status = 500;
            return error;
        }
        
    }
}));
