const config = {};

config.environment = process.env.NODE_ENV || 'development';

// Server settings
config.server = {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 3000
};

// Token settings
config.token = {
    secret: process.env.TOKEN_SECRET || 'hemoHeroesTOKEN',
    expiration: process.env.TOKEN_EXPIRATION || 60*60*24 //24 hours
};

// Export configuration object
module.exports = config;
