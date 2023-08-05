import { Event } from "../../interfaces/event.interface";
import dateFormat from "dateformat";

export const EventCard = (props: { data: Event }) => {
  const event = props.data;
  return (
    <article className="flex mx-8 flex-col justify-center items-center lg:flex-row bg-gray-100 transition hover:shadow-xl">
      <div>
        <img
          alt="Guitar"
          src={event.images.header}
          className="md:w-96"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between ">
        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900">
              {event.name}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-lg text-gray-700">
            {dateFormat(
              new Date(event.start.date),
              "mmm dS, yyyy @ h:MM:ss TT",
            )} - {dateFormat(
              new Date(event.end.date),
              "mmm dS, yyyy @ h:MM:ss TT",
            )}
          </p>

          <p className="mt-2 text-lg ">
            Hosted by Jamie Kriegel
          </p>
          <p className="hidden mt-2  text-lg">{event.description}</p>
          <div className="flex gap-3 pt-4">
            <a
              className="inline-flex items-center gap-2 rounded border border-red-600 bg-red-600 px-8 py-3 text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
              href={event.url}
              target="_blank"
            >
              <span className="text-sm font-medium">Enroll Now</span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <button
              onClick={() => {
                // @ts-ignore
                TTWidget.loadEvent('scrummastersoftheuniverse',977996);
              }}
            >
              <img
                src="https://app.tickettailor.com/images/btns/bt_wh.gif"
                alt="Buy tickets"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
