const busLibrary = require('../lib/SPTrans/busLibrary');
const apiKey = '5243fc248bc5f64a2f29f29b106e9b1b6a0985a837063ce76a12e4bea7a325a9';

const BusController = (busService = busLibrary) => ({
  async findBusLocation(req, res) {
    const { data, headers } = await busService.loadApi(apiKey);
    const busLines = await busService.findBusByLine(8000, apiKey, headers['set-cookie']);
    
    return res.send(busLines.data);
  },

  async findStopsByBusHall(req, res) {
    const { data, headers } = await busService.loadApi(apiKey);
    const busLines = await busService.findStopsByBusLine(req.params.hall, apiKey, headers['set-cookie']);
    
    return res.send(busLines.data);
  },
});

module.exports = BusController(busLibrary);
