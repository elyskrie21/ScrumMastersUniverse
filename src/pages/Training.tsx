import { SecondaryHeader } from "../components/basic/SecondaryHeader";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";

export const Training = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto ">
      <NavBar />
      <SecondaryHeader />
      <section>
        <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-12 lg:gap-8 my-8">
          <div className="rounded-lg mx-auto  lg:col-span-7">
            <div>
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold uppercase dark:text-white">
                Scrum Mastery Pathway
              </h1>
              <p className="font-light sm:text-lg dark:text-gray-400">
                A quick main overview of what it is
              </p>
            </div>
            <div>
              <h1 className="my-2 text-3xl tracking-tight font-extrabold  dark:text-white">
                Who is this for?
              </h1>
              <p className="font-light sm:text-lg dark:text-gray-400">
                explain who this is for
              </p>
            </div>
            <div>
              <h1 className="my-2 text-3xl tracking-tight font-extrabold  dark:text-white">
                What is this class?
              </h1>
              <h2 className="my-2 text-xl tracking-tight font-bold dark:text-white">
                Workshop One (Explorer) - 2 days
              </h2>

              <p className="font-light sm:text-lg dark:text-gray-400">
                In the first workshop you will meet your fellow learning cohort
                and ‘explore’ every aspect of what it takes to be a great Scrum
                Master. You will work through every aspect of Geoff Watts
                RE-TRAINED model and develop your skills to become more:
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
              <h2 className="my-2 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                Supported Deliberate Practice (Navigator) - 6 months
              </h2>
              <p className="font-light sm:text-lg dark:text-gray-400">
                After the first workshop you will return to your team(s) and
                begin to apply what you have learned, however, you will not be
                alone. You will support and be supported by your learning
                cohort. Through five monthly group supervision sessions and your
                own unique commitments to one another, you will ‘navigate’ the
                specific challenges you face day to day.
              </p>
              <h2 className="my-2 text-xl tracking-tight font-bold text-gray-900 dark:text-white">
                Workshop Two (Adventurer) - 2 days
              </h2>
              <p className="font-light sm:text-lg dark:text-gray-400">
                After six months of hands-on practice and group supervision you
                will return for another two-day workshop. Here you will be
                provided with more, and deeper, theory and guided practice to
                prepare you for your future ‘adventures’ as a great Scrum
                Master. Your Scrum Mastery skills will be taken to another level
                and learn how to:
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
          <p className="flex justify-center my-2 ">join an upcoming cohort</p>
          <h1 className="flex justify-center text-3xl text-extrabold">
            Scrum Mastery Pathway
          </h1>
          <div className="flex justify-center">
            <div className="text-center border my-8 grid grid-cols-4 gap-8 p-4 rounded-full">
              <div>
                <p>Upcoming</p>
                <p>Cohort 1</p>
              </div>
              <div>
                <p>Dates</p>
                <p>September 30, 2023</p>
              </div>

              <div px-4>
                <p>Payment Deadline</p>
                <p>September 1, 2023</p>
              </div>
              <div>
                <p className="sm:text-xl">cost</p>
                <p>$10</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <a
              className="inline-block rounded border px-12 py-3 text-sm font-medium  hover:text-white focus:outline-none focus:ring hover:scale-125"
              href="/download"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </section>
      <section className="py-10  sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  How to create an account?
                </span>

                <svg
                  className="w-6 h-6 text-gray-400 rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  How can I make payment using Paypal?
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <div className="">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    Can I cancel my plan?
                  </span>

                  <svg
                    className="w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline"
                    >
                      aliqua dolor
                    </a>{" "}
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>

            <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  How can I reach to support?
                </span>

                <svg
                  className="w-6 h-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
                <p>
                  Amet minim mollit non deserunt ullamco est sit{" "}
                  <a
                    href="#"
                    title=""
                    className="text-blue-600 transition-all duration-200 hover:underline"
                  >
                    aliqua dolor
                  </a>{" "}
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
