import { Event } from "../../interfaces/event.interface";
import dateFormat from "dateformat";

export const EventCard = (props: { data: Event }) => {
  const event = props.data;
  return (
    <article className="flex flex-col justify-center items-center lg:flex-row bg-gray-100 transition mx-4 md:mx-0 hover:shadow-xl">
      <div className="w-full lg:w-3/5 mb-4 md:mb-1">
        <img
          alt="Guitar"
          src={event.images.header}
          className="w-full"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-4">
        <div className="sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">
              {event.name}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-lg text-gray-700">
            {dateFormat(
              new Date(event.start.iso),
              "mmm dS, yyyy @ h:MM TT",
            )} - {dateFormat(
              new Date(event.end.iso),
              "mmm dS, yyyy @ h:MM TT",
            )}
          </p>

         <p className="hidden  text-lg">{event.description}</p>
          <div className="flex gap-3 pt-4">
            <a
              className="inline-flex items-center rounded border border-primary-600 bg-primary-600 px-4 text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500"
              href={event.url}
              target="_blank"
            >
              <span className="text-sm font-medium">More Info</span>
           </a>
            <button
              className="inline-flex items-center rounded border border-red-600 bg-red-600 px-4 py-2 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
              onClick={() => {
                const id = event.id.split("_")[1]
                // @ts-ignore
                TTWidget.loadEventOccurrence('scrummastersoftheuniverse', id);
              }}
            >
              Buy Tickets
           </button>
          </div>
        </div>
      </div>
    </article>
  );
};
