const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  app: {
    host: 'localhost',
    port: process.env.PORT || 3001,
  }, externalServices: {
    busLibraryService: process.env.busLibraryService || 'http://api.olhovivo.sptrans.com.br/v2.1',
    busLibraryToken: process.env.busLibraryToken
  }
};