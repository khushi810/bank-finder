import axios from 'axios';
import _ from 'lodash';
import { message } from 'antd';

// Given API Endpoint
const API_ENDPOINT = "https://vast-shore-74260.herokuapp.com/banks"

// API call
export const fetchBanks = async city => {
  let formatted_city = _.upperCase(city);
  try {
    // Call the API for  specific city
    const promise = await axios.get(`${API_ENDPOINT}?city=${formatted_city}`)
    return promise;
  } catch(error) {
    // catch the error and show the message
    message.error("Error in fetching banks")
  }
}