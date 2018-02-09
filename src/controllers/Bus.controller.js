const busLibrary = require('../lib/SPTrans/busLibrary');
const apiKey = '5243fc248bc5f64a2f29f29b106e9b1b6a0985a837063ce76a12e4bea7a325a9';

const BusController = (busService = busLibrary) => ({

  async findBusByLine(req, res) {
    const { data, headers } = await busService.loadApi(apiKey);
    const busLines = await busService.findBusByLine(req.params.busNumber, apiKey, headers['set-cookie']);
    
    return res.send(busLines.data);
  },

  async findStopsByBusLine(req, res) {
    const { data, headers } = await busService.loadApi(apiKey);
    const busLines = await busService.findStopsByBusLine(req.params.hall, apiKey, headers['set-cookie']);
    
    return res.send(busLines.data);
  },

  async findBusLocalization(req, res) {
    const { data, headers } = await busService.loadApi(apiKey);
    const busLines = await busService.findBusLocalization(req.params.busNumber, headers['set-cookie']);
  },
});

module.exports = BusController(busLibrary);
