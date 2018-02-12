const busLibrary = require('../lib/SPTrans/busLibrary');
const apiKey = '5243fc248bc5f64a2f29f29b106e9b1b6a0985a837063ce76a12e4bea7a325a9';

const BusController = (busService = busLibrary) => ({

  async findBusByLine(req, res) {
    try {
      const busLines = await busService.findBusByLine(req.params.busNumber, req.body.auth.data);

      return res.json({ data: await busLines.data, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  },

  async findStopsByBusLine(req, res) {
    try {
      const busStop = await busService.findStopsByBusLine(req.params.hall, req.body.auth.data);

      return res.json({ data: await busStop.data, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  },

  async findBusLocalization(req, res) {
    try {
      const busLines = await busService.findBusLocalization(req.params.busNumber, req.body.auth.data);

      return res.json({ data: busLines, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  }
});

module.exports = BusController(busLibrary);
