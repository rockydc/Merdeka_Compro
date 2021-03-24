import axios from 'axios'
import { APIKEY, API_REGISTRATION_URL, API_PASSWORD } from '../constant/Kontak.constant'

export const useSubmit = async (data) => {
  const {
    name,
    subject,
    email,
    question
  } = data

  const user_data = {
    name,
    subject,
    email,
    question
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