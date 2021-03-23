import axios from 'axios'
import { APIKEY, API_REGISTRATION_URL, API_PASSWORD } from '../constant/Pendaftaran.constant'

export const useSubmit = async (data) => {
  const {
    company_name,
    pic_name,
    pic_phone,
    company_email,
    company_phone,
    company_province,
    company_address,
    company_city,
  } = data

  const user_data = {
    company_name,
    pic_name,
    pic_phone,
    company_email,
    company_phone,
    company_province,
    company_address,
    company_city
  }

  const headers = {
    'Content-Type': 'application/json',
    'apikey': APIKEY,
    'apipassword': API_PASSWORD
  }
  try {
    let response = await axios.post(API_REGISTRATION_URL, user_data, { headers })
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}