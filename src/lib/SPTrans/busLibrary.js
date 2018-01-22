const Axios = require('axios').default;

const baseUrl = 'http://api.olhovivo.sptrans.com.br/v2.1';

module.exports.loadApi = async (apiKey) => {
  try {
    const data = await Axios.post(`${baseUrl}/Login/Autenticar?token=${apiKey}`);

    return {...data, error: null}; 
  } catch (error) {
    return {data: null, error};
  }
};

module.exports.findBusByLine = async (line, apiKey, authCookie) => {
    try {
      const { data } = await Axios.get(`${baseUrl}/Linha/Buscar?termosBusca=${line}`, {
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

module.exports.findStopsByBusLine = async (hallNumber, apiKey, authCookie) => {
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
