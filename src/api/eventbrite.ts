import axios from "axios";

export const getEvents = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.tickettailor.com/v1/events?status=published",
    headers: {
      "Accept": "application/json",
      "Authorization":
        "Basic c2tfMzk0Ml8xNTI1ODRfOTAwZTUzNjUzMWU3YjAxMTg4MGEwNzNkNzViNjdhZjk6",
    },
  };

  try {
    const { data } = await axios.request(config);
    return data;
  } catch (error) {
    console.log(error);
  }
};

