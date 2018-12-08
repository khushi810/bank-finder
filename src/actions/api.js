import axios from 'axios';
import _ from 'lodash';
import { message } from 'antd';

const API_ENDPOINT = "https://vast-shore-74260.herokuapp.com/banks"

export const fetchBanks = async city => {
  let formatted_city = _.upperCase(city);
  // let response = await fetch(
  // `${API_ENDPOINT}?city=${formatted_city}`
  // )
  // let data = response.json();
  // console.log(data)
  // return data;
  try {
    const promise = await axios.get(`${API_ENDPOINT}?city=${formatted_city}`)
    return promise;
  } catch(error) {
    message.error("Error in fetching banks")
  }
}