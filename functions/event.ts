import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

import axios from "axios";
import { Event } from "./event.interface";
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

    data.data.sort((a: Event, b: Event) => {
      const date1 = Date.parse(a.start.iso);
      const date2 = Date.parse(b.start.iso);
      return date1 - date2;
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
    };
  }
};

export { handler };
