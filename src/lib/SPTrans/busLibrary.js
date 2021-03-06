const Axios = require('axios').default;
const env = require('../../../config/environment');
const baseUrl = env.externalServices.busLibraryService;

module.exports.loadApi = async (apiKey) => {
  try {
    const data = await Axios.post(`${baseUrl}/Login/Autenticar?token=${apiKey}`);
    
    return { ...data, error: null}; 
  } catch (error) {
    return {data: null, error};
  }
};

module.exports.findBusByLine = async (line, authCookie) => {
    try {
      const { data } = await Axios.get(`${baseUrl}/Linha/Buscar?termosBusca=${line}`, {
        withCredentials: true,
        headers: {
          cookie: authCookie
        }
      });
      
      return { data, error: null };
    } catch (error) {
      console.log('error: ', error);
      return {data: null, error};
    }
};

module.exports.findStopsByBusLine = async (hallNumber, authCookie) => {
  try {
    const { data } = await Axios.get(`${baseUrl}/Parada/BuscarParadasPorCorredor?codigoCorredor=${hallNumber}`, {
      withCredentials: true,
      headers: {
        cookie: authCookie
      }
    });
    
    return { data, error: null };
  } catch (error) {
    return {data: null, error};
  }
};

module.exports.findBusLocalization = async (busNumber, authCookie) => {
  try {
    const { data } = await Axios.get(`${baseUrl}/Parada/Buscar?termosBusca=${busNumber}`, {
      withCredentials: true,
      headers: {
        cookie: authCookie
      }
    });
    
    return { data, error: null };
  } catch (error) {
    return {data: null, error};
  }
}