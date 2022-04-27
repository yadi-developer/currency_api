const axios = require("axios");

async function get_data(url) {
  const response = await axios.get(url);
  return response.data;
  //console.log(6);
}

module.exports = get_data;
