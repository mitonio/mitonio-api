const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  app: {
    host: process.env.host,
    port: 8000,
  }, externalServices: {
    busLibraryService: process.env.busLibraryService || 'http://api.olhovivo.sptrans.com.br/v2.1',
    busLibraryToken: process.env.busLibraryToken
  }
};