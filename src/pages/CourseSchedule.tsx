import { useEffect, useState } from "react";
import { EventCard } from "../components/basic/EventCard";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import { EventbriteEvent } from "../interfaces/event.interface";
import { getEvents } from "../api/eventbrite";

export const CourseSchedule = () => {
  const [events, setEvents] = useState<EventbriteEvent | undefined>();

  useEffect(() => {
    const getData = async () => {
      const res: EventbriteEvent | undefined = await getEvents();

      if (res) {
        setEvents(res);
      }
    };

    getData();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <section className="bg-planets bg-blend-multiply bg-center bg-no-repeat bg-cover">
        <div className="px-4 mx-auto max-w-screen-2xl text-center py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
            Schedule
          </h1>
        </div>
      </section>
      <section>
        <div className="flex justify-center py-16">
          <h1 className="text-2xl font-bold">
            Our <span className="text-red-500">Course Schdule</span>
          </h1>
        </div>
       {events?.events.map((value, index) => (
          <div key={index} className="mx-auto md:w-2/3 pb-16">
            <EventCard data={value} />
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};
