const busLibrary = require('../lib/SPTrans/busLibrary');

const BusController = (busService = busLibrary) => ({

  async findBusByLine(req, res) {
    try {
      const busLines = await busService.findBusByLine(req.params.busNumber, req.body.auth.data);
      
      if (!busLines.data) {
        return res.status(204).json({ data: busLines.data, error: null });
      }

      return res.status(200).json({ data: busLines.data, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  },

  async findStopsByBusLine(req, res) {
    try {
      const busStop = await busService.findStopsByBusLine(req.params.hall, req.body.auth.data);

      return res.json({ data: busStop.data, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  },

  async findBusLocalization(req, res) {
    try {
      const busLines = await busService.findBusLocalization(req.params.busNumber, req.body.auth.data);

      return res.json({ data: busLines.data, error: null });
    } catch (error) {
      return res.json({ data: null, error });
    }
  }
});

module.exports = BusController(busLibrary);
