const busLibrary = require('../lib/SPTrans/busLibrary');
const apiKey = '5243fc248bc5f64a2f29f29b106e9b1b6a0985a837063ce76a12e4bea7a325a9';

module.exports.getTokenAuth = async (apiKey = apiKey) => {
  try {
    const { data, headers } = await busLibrary.loadApi(apiKey);
    return { error: null, data, header };
  } catch (error) {
    return { error, data: null, header: null };
  }
};
