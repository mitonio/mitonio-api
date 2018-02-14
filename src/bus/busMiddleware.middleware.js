const busLibrary = require('../lib/SPTrans/busLibrary');
const env = require('../../config/environment');

module.exports.getTokenAuth = async (req, res, next) => {
  try {
    const { data, headers } = await busLibrary.loadApi(env.externalServices.busLibraryToken);
    
    req.body.auth = await { error: null, data: headers['set-cookie'] };
    return next();
  } catch (error) {
    
    req.auth = await { error, data: null };
    return next();
  }
};
