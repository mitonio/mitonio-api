const expect = require('chai').expect;
const request = require('superagent');
const busController = require('./Bus.controller');

describe('Smoke test: Bus Controller', () => {
  it('should be an object', () => {
    expect(busController).to.be.instanceOf(Object);
  });

  it('should have inner properties', () => {
    expect(busController).to.contains.members;
  });
});

describe('Unit test: Bus Controller', () => {
  describe('Good way', () => {
    describe('busController.findBusByLine', () => {
      it('should return JSON with statusCode 200', async () => {
        const busLineRequest = await request
          .get('192.168.33.10:3001/bus/line/8000');

        expect(await busLineRequest.statusCode).to.be.equal(200);
      });
      
      it('should return JSON with data not null and error null', async () => {
        const busLineRequest = await request
          .get('192.168.33.10:3001/bus/line/8000');
        
        expect(await busLineRequest.body.data).to.not.be.empty;
        expect(await busLineRequest.body.error).to.be.null;
      });
    });

    describe('busController.findStopsByBusLine', () => {
      it('should return JSON with statusCode 200', async () => {
        const busStopRequest = await request
          .get('192.168.33.10:3001/bus/stop/8000');

        expect(await busStopRequest.statusCode).to.be.equal(200);
      });

      it('should return JSON with data not null and error null', async () => {
        const busStopRequest = await request
          .get('192.168.33.10:3001/bus/stop/8000');
        
        expect(await busStopRequest.body.data).to.not.be.empty;
        expect(await busStopRequest.body.error).to.be.null;
      });
    });
  });
});
