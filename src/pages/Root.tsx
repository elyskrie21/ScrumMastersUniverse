import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import {
  FaDiscord,
  FaLinkedin,
  FaMeetup,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import MarkMetze from "../assets/img/mark-metze.png";
import JamieKriegel from "../assets/img/jamie-kriegel.png";
import Anu from "../assets/img/anuradha.jpeg";
import JeffColvin from "../assets/img/jeff-colvin.jpg";
import Donna from "../assets/img/DonnaReynolds.jpeg";
import NewsletterImage from "../assets/img/f8.png";

export const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <section className="bg-center bg-no-repeat intro bg-blend-multiply">
        <div className="px-4 w-full mx-auto max-w-screen-xl text-center lg:py-56">
        </div>
      </section>

      <div className="gradient">
        <section className="dark:bg-gray-900">
          <div className="py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 h-64">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Unleash your Agile might and join the ranks of the Scrum Masters
                of the Universe!
              </h2>
              <p className="mb-10 font-light sm:text-xl dark:text-gray-400">
                As a global virtual community of Agile professionals, we offer a
                fortress of collaboration and growth for all those seeking to
                master their craft.
              </p>
            </div>
          </div>
        </section>

        <section className="my-24 dark:bg-gray-900">
          <div className="mx-auto max-w-screen-xl text-center mb-8 lg:mb-12">
            <div className="my-8 mt-10 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="mx-auto max-w-screen-md text-left mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Core Values
                </h2>
                <p className="mb-5 font-light sm:text-xl dark:text-gray-400">
                  Whether you're a seasoned Scrum Master or just starting your
                  Agile journey, you'll find a place at our table. We are
                  dedicated to supporting all levels of experience and
                  backgrounds and strive to foster a safe and inclusive
                  environment for everyone.
                </p>
              </div>
              <div
                id="connection"
                className="flex flex-col p-6 w-full mx-auto max-w-lg text-center justify-center my-8 text-gray-900 ug-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h2 className="mb-4 text-3xl font-bold text-white backdrop-brightness-50">
                  Connection
                </h2>
              </div>
              <div
                id="collaboration"
                className="flex border-gray-200 w-full justify-center border flex-col p-6 mx-auto my-8 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h2 className="mb-4 text-3xl font-bold text-white backdrop-brightness-50">
                  Collaboration
                </h2>
              </div>
              <div
                id="community"
                className="flex flex-col p-6 w-full justify-center mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h3 className="mb-4 text-3xl font-bold text-white backdrop-brightness-50">
                  Community
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="my-24 dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img
              className="w-full dark:hidden"
              src="./src/assets/img/f3.png"
              alt="dashboard image"
            />
            <img
              className="w-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
              alt="dashboard image"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Get Involved
              </h2>
              <p className="mb-6 font-light md:text-lg dark:text-gray-400">
                Here, at Scrum Masters of the Universe, you'll connect with a
                diverse group of Agile enthusiasts from all corners of the world
                and tap into their collective intelligence to elevate your
                skills and drive value for your teams and organizations. So,
                getting involved here is an exciting and rewarding journey! To
                become part of our dynamic team, follow these steps: First,
                explore our website thoroughly to gain a comprehensive
                understanding of our vision, values, and the services we offer.
                Next, join any of our social media communities by click on the
                respective icon down below.
              </p>
              <a
                href="http://bit.ly/smotu-meetup"
                target="_blank"
                className="inline-flex items-center text-red-500 text-6xl focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                <FaMeetup />
              </a>{" "}
              <a
                href="http://bit.ly/smotu-youtube"
                target="_blank"
                className="inline-flex items-center text-red-600 text-6xl focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                <FaYoutube />
              </a>
              <a
                href="https://bit.ly/smotu-discordserver"
                target="_blank"
                className="inline-flex items-center text-6xl text-purple-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                <FaDiscord />
              </a>
              <a
                href="https://bit.ly/smotu-twitter"
                target="_blank"
                className="inline-flex items-center text-6xl text-primary-600 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/smotu/"
                target="_blank"
                className="inline-flex items-center text-6xl focus:ring-4 text-primary-600 focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-primary-900"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Leadership Team
              </h2>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src={JamieKriegel}
                    alt="Bonnie Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Jamie Kriegel</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Founder
                  </p>
                  <p>
                    Primary Trainer
                  </p>
                  <p>
                    Professional Scrum Master
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg  sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src={MarkMetze}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Mark Metze</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:max-h-48"
                    src={Anu}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Anuradha Aravindh Raj</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:w-48"
                    src={JamieKriegel}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Mary Nogami</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src={JeffColvin}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Jeff Colvin</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:w-48"
                    src={Donna}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Donna Reynolds</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:w-48"
                    src={JamieKriegel}
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Marco Burville</a>
                  </h3>
                  <p className="dark:text-gray-400">
                    Agile Coach/Consultant
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Unrivaled Quality
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What we provide
                  </p>
                  <p className="mt-6 text-lg leading-8 ">
                    At the core of Scrum Masters of the Universe's mission lies
                    the commitment to offer high quality services to both
                    individuals and organizations. Whether it's our training,
                    courses, or events, rest assured that we excel in delivering
                    exceptional results for you. We prioritize agility in our
                    operations, ensuring that we lead by example and truly
                    embody the principles we advocate.
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Training:
                      </dt>
                      <dd className="inline">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Courses
                      </dt>
                      <dd className="inline">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo.
                      </dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <svg
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                          <path
                            fill-rule="evenodd"
                            d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Events:
                      </dt>
                      <p className="inline">
                        Ac tincidunt sapien vehicula erat auctor pellentesque
                        rhoncus. Et magna sit morbi lobortis.
                      </p>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                className="w-full hidden dark:hidden lg:block"
                src="src/assets/img/f2.png"
                alt="dashboard image"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-secondary-100 py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="sm:text-center grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex justify-center">
              <img
                className="h-64 md:h-full"
                src={NewsletterImage}
                alt="Person image"
              />
            </div>
            <div className="md:col-span-3 px-4">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl dark:text-gray-400">
                Want to keep up on Scrum Masters of the Universe latest news?
                Sign up for our Newsletter to be the first to know of new course
                offerings, Meetup Events and special deals from our amazing
                sponsors!
              </p>
              <div className="items-center flex justify-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <a
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7088995230884007936"
                  target="_blank"
                  className="py-3 w-64 text-sm font-medium text-center text-white cursor-pointer bg-primary-700 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Subscribe on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
