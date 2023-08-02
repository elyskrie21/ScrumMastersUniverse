import axios from "axios"

export const getEvents = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url:
      "https://www.eventbriteapi.com/v3/organizations/1594811446583/events/?status=live",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_EVENTBRITE_API_KEY}`,
    },
  };

  try {
    const {data}= await axios.request(config);
    return data;
  } catch (error) {
    console.log(error);
  }
};
