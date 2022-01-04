import axios from 'axios';

class API {
  get = async (path) => {
    let response = await axios.get(path, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return response.data || [];
  }

  post = async (path, data) => {
    let response = await axios.post(path, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.parse(data)
    });

    return response.data || [];
  }
}
export default new API();
