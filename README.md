## About GenZilla
GenZilla is an ecommerce platform made for Gen Z. It has a collection of products based on the latest trends, including prints, artwork, and lifestyle items. The platform is easy to use, works well on all devices, and offers secure payment options.

## Frontend Repo : https://github.com/paragmilmile24/GenZilla-Frontend

## Technologies Used

- **Frontend**: React, Redux Toolkit, Vite, SCSS
- **Backend**: Strapi, SQLite, Cloudinary
- **Payments**: Stripe

---

## Features

### Backend
- Powered by **Strapi**, a headless CMS for managing content.
- REST API for products, categories, and orders.
- **Cloudinary** integration for media uploads.
- **SQLite** database for local development (can be switched to MySQL/PostgreSQL for production).
## Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Clone the Repository
```bash
git clone https://github.com/paragmilmile24/GenZilla-Backend
```
### Install Dependencies

#### Backend
```bash
cd GenZilla-Backend
npm install
```

## Environment Variables

### Frontend
Create a `.env` file in the `ecommerce-website` directory:
```properties
VITE_SERVER_BASE_URL=http://localhost:1337/api
VITE_SERVER_API_TOKEN=<your_strapi_api_token>
VITE_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
```

### Backend
Create a `.env` file in the `server` directory:
```properties
HOST=0.0.0.0
PORT=1337
APP_KEYS=<your_app_keys>
API_TOKEN_SALT=<your_api_token_salt>
ADMIN_JWT_SECRET=<your_admin_jwt_secret>
TRANSFER_TOKEN_SALT=<your_transfer_token_salt>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_KEY=<your_cloudinary_key>
CLOUDINARY_SECRET=<your_cloudinary_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
CLIENT_BASE_URL=http://localhost:5173
```

## Running the Project

### Start the Backend
```bash
cd GenZilla-Backend
npm run develop
```

## Deployment

Build the backend admin panel:
```bash
cd GenZilla-Backend
npm run build
```
