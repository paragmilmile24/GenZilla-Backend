
export default {
    routes: [
      {
        method: 'GET',
        path: '/order/orderDetails',
        handler: 'api::order.order.customOrderConroller', // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller
      },
    ],
  };