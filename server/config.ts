import fs = require('fs');

module config {
  var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

  export function getMongoConfig() {
    if (process.env.MONGO_CONNECTION) {
      return {
        uri: process.env.MONGO_CONNECTION
      };
    }
    return config.mongoDb;
  }

  export function getServerConfig() {
    if (process.env.CON_REST_PORT) {
      config.server.port = process.env.CON_REST_PORT;
    }
    return config.server;
  }
}

export = config;