import axios from "axios";

export const getEvents = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "/.netlify/functions/event",
    headers: {},
  };

  try {
    const { data } = await axios.request(config);
    return data;
  } catch (error) {
    console.log(error);
  }
};
