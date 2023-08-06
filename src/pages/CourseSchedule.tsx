import { useEffect, useState } from "react";
import { EventCard } from "../components/basic/EventCard";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import { getEvents } from "../api/eventbrite";
import { TicketTailorEvents } from "../interfaces/event.interface";
import { Loader } from "../components/basic/Loader";
import { SecondaryHeader } from "../components/basic/SecondaryHeader";

export const CourseSchedule = () => {
  const [events, setEvents] = useState<TicketTailorEvents | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res: TicketTailorEvents | undefined = await getEvents();

      if (res) {
        setEvents(res);
      }
      setLoading(false);
    };

    getData();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <SecondaryHeader />
      <section>
        <div className="flex justify-center py-16">
          <h1 className="font-trifuno text-2xl font-bold">
            Our <span className="text-red-500">Course Schedule</span>
          </h1>
        </div>
        {loading ? <Loader /> : (
          <div>
            {events?.data.map((value, index) => (
              <div key={index} className="mx-auto md:w-2/3 pb-16">
                <EventCard data={value} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};
