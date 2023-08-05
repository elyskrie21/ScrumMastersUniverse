import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

import axios from "axios";
const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext,
) => {
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

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 400
    }
  }
};

export { handler };
