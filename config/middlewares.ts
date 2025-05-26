export default [
  'strapi::logger',
  'strapi::errors',
  {
    "name": 'strapi::security',
    "config": {
      "contentSecurityPolicy": {
        "useDefaults": true,
        "directives": {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          "upgradeInsecureRequests": null,
        },
      },
    },
  },
  {
    "name": 'strapi::cors',
    "config": {
        "origin": '*', // Add your frontend's origin
        "headers": "*", // Allow required headers
    },
},
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
