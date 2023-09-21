import axios from "axios";
import { API_URL } from "../constants/constants";

// To Submit card data to https://jsonplaceholder.typicode.com/posts by post method

export const sendCardInfo = async (data: any): Promise<any> => {
  try{
    const response = await axios.post(`${API_URL}`, data)
    return response.data
  }catch(error: any){
    if (error.response && error.response.data) {
      throw new Error(`Failed to submit form: ${error.response.data.message}`);
    } else {
      throw new Error(`Failed to submit form: ${error.message}`);
    }
  }
  
}

export default sendCardInfo