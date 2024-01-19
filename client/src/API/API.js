import axios from "axios";

// ***** GET SEND EMAIL ***** //
export const SendEmail = async ( firstName, lastName, email, phone, message, setSend ) => {
  try {
    const data = { firstName, lastName, email, phone, message }
    let response = await axios.get(`/api/send`, data);

    if (response) {
      console.log('response:', response.data);
    //   setSend(response.data);
    }
  } catch (error) {
    console.log('ERROR SEND:', error);
    alert(error.response.data.message);
  }
};