import  axios from "axios";

export const getEvents = async () => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://eo4tfeurlluwvcf.m.pipedream.net",
    headers: {},
  };

  try {
    const { data } = await axios.request(config);

    return data;
  } catch (error) {
    console.log(error);
  }
};
