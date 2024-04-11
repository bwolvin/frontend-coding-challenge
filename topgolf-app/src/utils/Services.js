import axios from "axios";

export const FetchData = () => {
  return axios.get("http://localhost:3000/api/locations").then(res => {
      return res.data.response
    }).catch(err => {
      console.err(err)
    })
}