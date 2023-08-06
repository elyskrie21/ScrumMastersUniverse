import { useEffect, useState } from "react";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { getEvents } from "../api/eventbrite";
import { Event, TicketTailorEvents } from "../interfaces/event.interface";
import dateFormat from "dateformat";
export const Training = () => {
  const [faqNum, setFaqNum] = useState(0);
  const [event, setEvent] = useState<Event | undefined>();

  useEffect(() => {
    const getData = async () => {
      const res: TicketTailorEvents | undefined = await getEvents();

      if (res && res.data.length > 0) {
        const e = res.data.at(0);
        setEvent(e);
      }
    };

    getData();
  }, []);
  return (
    <div className=" max-w-screen-2xl mx-auto ">
      <NavBar />
      <section>
        <div className="">
          <img
            src="https://live.staticflickr.com/65535/53098245539_68c31c5a13_c.jpg"
            className="md:hidden"
          />
          <img
            src="https://live.staticflickr.com/65535/53098225494_8cf4fa2fe1_h.jpg"
            className="hidden md:block"
          />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-12 lg:gap-8 my-8">
          <div className="rounded-lg mx-auto  lg:col-span-7">
            <div className="pb-8">
              <h1 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold uppercase dark:text-white">
                Scrum Mastery Pathway
              </h1>
              <p className="font-light sm:text-lg dark:text-gray-400">
                This is no ordinary training course. Embark on the Scrum Mastery
                Pathway where we elevate Scrum Masters to Agile Wizards.
                Navigate mystical realms, harness spells of knowledge, and
                inspire high-performing teams. From Good to Great, we're
                transforming ordinary Scrum Masters into extraordinary Agile
                Sorcerers. Don your cape, grab your wand and join us on this
                spellbinding journey to Scrum Mastery!
              </p>
            </div>
            <div className="pb-8 ">
              <h1 className="font-trifuno my-2 text-3xl tracking-tight font-extrabold  dark:text-white">
                Who is this for?
              </h1>
              <p className="font-light sm:text-lg dark:text-gray-400">
                Scrum Masters who want to become better at their job through a
                combination of classroom, coaching, and community. The program
                is aimed at those who are currently, or intend to be, practicing
                as Scrum Masters. A working knowledge of Scrum is required to
                attend this class.
              </p>
            </div>
            <div>
              <h1 className="font-trifuno my-2 text-3xl tracking-tight font-extrabold  dark:text-white">
                Pathway Details
              </h1>
              <div className="pb-4">
                <h2 className="my-2 text-xl tracking-tight font-bold dark:text-white">
                  Workshop One (Explorer) - 2 days
                </h2>

                <p className="font-light sm:text-lg dark:text-gray-400">
                  In the first workshop you will meet your fellow learning
                  cohort and ‘explore’ every aspect of what it takes to be a
                  great Scrum Master. You will work through every aspect of
                  Geoff Watts RE-TRAINED model and develop your skills to become
                  more:
                </p>
                <ol className="list-disc mx-8 sm:text-lg">
                  <li>Respected</li>
                  <li>Enabling</li>
                  <li>Tactful</li>
                  <li>Resourceful</li>
                  <li>Alternative</li>
                  <li>Inspiring</li>
                  <li>Nurturing</li>
                  <li>Empathic</li>
                  <li>Disruptive</li>
                </ol>
              </div>
              <div className="pb-4">
                <h2 className="my-2 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Supported Deliberate Practice (Navigator) - 6 months
                </h2>
                <p className="font-light sm:text-lg dark:text-gray-400">
                  After the first workshop you will return to your team(s) and
                  begin to apply what you have learned, however, you will not be
                  alone. You will support and be supported by your learning
                  cohort. Through five monthly group supervision sessions and
                  your own unique commitments to one another, you will
                  ‘navigate’ the specific challenges you face day to day.
                </p>
              </div>
              <div className="pb-4">
                <h2 className="my-2 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                  Workshop Two (Adventurer) - 2 days
                </h2>
                <p className="font-light sm:text-lg dark:text-gray-400">
                  After six months of hands-on practice and group supervision
                  you will return for another two-day workshop. Here you will be
                  provided with more, and deeper, theory and guided practice to
                  prepare you for your future ‘adventures’ as a great Scrum
                  Master. Your Scrum Mastery skills will be taken to another
                  level and learn how to:
                </p>
                <ol className="list-disc mx-8 sm:text-lg">
                  <li>Build a psychologically-safe culture</li>
                  <li>Serve yourself so you can serve others</li>
                  <li>Master the power of silence</li>
                  <li>Tackle your cognitive biases</li>
                  <li>Keep a sense of togetherness even when apart</li>
                  <li>Coach for change</li>
                  <li>Grow a more ORGANIC culture within your organization</li>
                </ol>
              </div>
              <h2 className="my-2 text-xl tracking-tight font-bold dark:text-white">
                Lifetime Ticket(s)
              </h2>
              <p className="font-light sm:text-lg dark:text-gray-400">
                After leaving the course, not only will you have developed great
                habits and a supportive network of other Scrum Masters but you
                will also receive:-
              </p>
              <ol className="list-disc mx-8 sm:text-lg">
                <li>A unique model to display your certificates</li>
                <li>A copy of Geoff Watts book Scrum Mastery (2nd edition)</li>
                <li>Values and Persuasion Pack decks of cards</li>
                <li>Lifetime access to the learning cohort platform</li>
                <li>
                  A digital bundle of cards on the Agile Coaching Cards
                  smartphone app
                </li>
                <li>
                  Lifetime access to the eCourse of pre-recorded Scrum Mastery
                  videos from Geoff allowing you to revisit any aspect of your
                  training at any time...forever!
                </li>
              </ol>
            </div>
          </div>
          <div className="rounded-lg lg:col-span-5 aspect-w-16 aspect-h-9 ">
            <div>
              <img
                className="py-8 mx-auto"
                src="https://static.wixstatic.com/media/451ead_e3129dd52b8547c2800f13db9a74e229~mv2.jpg/v1/fill/w_600,h_751,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Road.jpg"
                alt="Road.jpg"
                width="600"
                height="751"
              />

              <iframe
                className="lg:w-full aspect-video h-auto mx-auto w-4/5"
                src="https://www.youtube.com/embed/-GZYX3HJXWk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              >
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="cohort pt-16 text-white">
        <div className="flex flex-col w-full ">
          <p className="flex justify-center my-2 ">Join An Upcoming Cohort</p>
          <h1 className="font-trifuno flex justify-center text-3xl text-extrabold">
            Scrum Mastery Pathway
          </h1>
          <div className="flex flex-col justify-center w-2/3 mx-auto text-center border my-8  gap-8 p-4 md:flex-row md:rounded-full">
            <div>
              <p className="font-bold">Upcoming</p>
              <p className="text-sm">{event?.name}</p>
            </div>
            <div>
              <p className="font-bold">Date</p>
              <p className="text-sm">{dateFormat(event?.start.date)}</p>
            </div>
            <div>
              <p className="font-bold">Price</p>
              <p className="text-sm">${event?.ticket_types.at(0)?.price}</p>
            </div>
            <div>
              <p className="font-bold">Tickets Available</p>
              <p className="text-sm">{event?.ticket_types.at(0)?.quantity}</p>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <a
              className="inline-block rounded border px-12 py-3 text-sm font-medium  hover:text-white focus:outline-none focus:ring hover:scale-125"
              href={event?.url}
              target="_blank"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </section>
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-trifuno text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Heres are some of the most asked questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                onClick={() => faqNum == 1 ? setFaqNum(0) : setFaqNum(1)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  What's with the sorcerer?
                </span>
                {faqNum == 1
                  ? <MdKeyboardArrowUp />
                  : <MdOutlineKeyboardArrowDown />}
              </button>
              {faqNum == 1 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    To add some fun and creativity to our Pathway, I decided to
                    use a metaphor of a sorcerer as Scrum Master. I got the idea
                    from a blog post written by Geoff Watts (link to post:{" "}
                    <a
                      href="https://agilemasteryinstitute.com/blog/unleashing-the-mighty-scrum-master-unraveling-the-secrets-of-agile-mastery/"
                      target="_blank"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      Here
                    </a>{" "}
                    ) and with his permission decided to use it for our Pathway.
                  </p>
                </div>
              )}
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                onClick={() => faqNum == 2 ? setFaqNum(0) : setFaqNum(2)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-left text-lg font-semibold text-black">
                  What does the price of the class include?
                </span>
                {faqNum == 2
                  ? <MdKeyboardArrowUp />
                  : <MdOutlineKeyboardArrowDown />}
              </button>
              {faqNum == 2 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    For the price of a normal two-day certification class, we
                    offer more value and a more meaningful experience where you
                    learn to apply what you learned in real world scenarios. The
                    Scrum Master Pathway includes: Two-day Explorer Class, Five
                    90-min Navigator workshops, Two-day Adventurer Class, Access
                    to the Agile Mastery Community, Access to Video Modules,
                    Smartphone App, and Best Selling "Scrum Mastery" Book.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                onClick={() => faqNum == 3 ? setFaqNum(0) : setFaqNum(3)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg text-left font-semibold text-black">
                  Is a refund available if for some reason I can't participate
                  in the Pathway cohort?
                </span>
                {faqNum == 3
                  ? <MdKeyboardArrowUp />
                  : <MdOutlineKeyboardArrowDown />}
              </button>
              {faqNum == 3 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Yes, you will receive a refund minus the Eventbrite fees if
                    you let us know at least five days in advance.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white shadow-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                onClick={() => faqNum == 4 ? setFaqNum(0) : setFaqNum(4)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-left text-lg font-semibold text-black">
                  What if I miss a Navigator workshop?
                </span>
                {faqNum == 4
                  ? <MdKeyboardArrowUp />
                  : <MdOutlineKeyboardArrowDown />}
              </button>
              {faqNum == 4 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    We will record each session for you to view at your
                    convenience, however as this is the heart of the Pathway,
                    where connection and collaboration with your peers about
                    real life scenarios happen, we do request that you attend
                    most in person in order to be eligible to move on to the
                    Adventurer class.
                  </p>
                </div>
              )}
            </div>
            <div className="transition-all duration-200 bg-white border shadow-lg border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                onClick={() => faqNum == 5 ? setFaqNum(0) : setFaqNum(5)}
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  What is Scrum Mastery?
                </span>
                {faqNum == 5
                  ? <MdKeyboardArrowUp />
                  : <MdOutlineKeyboardArrowDown />}
              </button>
              {faqNum == 5 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    As Geoff Watts says, "Scrum Mastery is the difference
                    between doing agile and being agile. A good Scrum Master
                    takes a 2-day certified class. A GREAT scrum Master takes
                    the Scrum Master Pathway."
                  </p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <Link
              to="/contact"
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact us
            </Link>{"  "}
            or read the{"   "}
            <a
              href="https://agilemasteryinstitute.com/app/uploads/2022/11/Scrum-Mastery-Pathway-Overview.pdf"
              target="_blank"
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Scrum Mastery Pathway Overview
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
