import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
