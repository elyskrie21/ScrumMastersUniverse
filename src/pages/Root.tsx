import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import {
  FaDiscord,
  FaLinkedin,
  FaMeetup,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <section>
        <div className="">
          <img src="https://live.staticflickr.com/65535/53098245539_68c31c5a13_c.jpg" className="md:hidden" />
          <img src="https://live.staticflickr.com/65535/53098225494_8cf4fa2fe1_h.jpg" className="hidden md:block" />
        </div>
      </section>
      <div className="gradient">
        <section>
          <div className="pt-24 pb-6  px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 h-64">
              <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Unleash your Agile might and join the ranks of the Scrum Masters
                of the Universe!
              </h2>
              <p className="mb-10 font-light sm:text-xl dark:text-gray-400 ">
                As a global virtual community of Agile professionals, we offer a
                fortress of collaboration and growth for all those seeking to
                master their craft.
              </p>
            </div>
          </div>
        </section>

        <section className="dark:bg-gray-900 mx-8">
          <div className="mx-auto max-w-screen-xl text-center mb-8 lg:mb-12">
            <div className="mt-10 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="mx-auto max-w-screen-md text-center px-4 mb-8 lg:text-left md:px-0 lg:mb-12">
                <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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

        <section className="md:my-24 dark:bg-gray-900">
          <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 lg:px-6">
            <img
              src="https://live.staticflickr.com/65535/53085690248_d60b99272e_o.png"
              className="mx-auto"
              width="600"
              height="600"
              alt="xconvert.com"
            />
            <div className="mt-4 md:mt-0">
              <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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

        <section className="body-font max-w-screen-xl mx-auto">
          <div className="container px-5 pt-24  md:py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="font-trifuno text-2xl font-bold title-font  text-gray-900 tracking-widest">
                OUR LEADERSHIP TEAM
              </h1>
            </div>
            <div className="flex flex-wrap m-4 justify-center">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53082988986_12dd56942b_n.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Jamie Kriegel
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Founder / Primary Trainer
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53083392535_679223d590_w.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Mark Metze
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Professional Scrum Master
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53083183209_ffafb39c12_w.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Anuradha Aravindh Raj
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Professional Scrum Master
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53085674708_c825ccfa25_n.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Mary Nogami
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Professional Scrum Master
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53084488637_27847ef405_c.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Marco Burville
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Agile Coach/Consultant
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53083483128_c22384e339_w.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Jeff Colvin
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Professional Scrum Master
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://live.staticflickr.com/65535/53083483258_efe12f80c4_w.jpg"
                    width="338"
                    height="400"
                    alt="DonnaReynolds"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-gray-900">
                      Donna Reynolds
                    </h2>
                    <h3 className="text-gray-500 mb-3">
                      Professional Scrum Master
                    </h3>
                    <p className="mb-4">
                      SMOTU Meetup Leadership Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2"></div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="font-trifuno text-base font-semibold leading-7 text-indigo-600">
                    Unrivaled Quality
                  </h2>
                  <p className="font-trifuno mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
                      <dt className="inline text-xl font-semibold text-gray-900">
                        Training: {" "}
                      </dt>
                      <p className="inline text-lg">
                        Scrum Masters of the Universe LLC is licensed by the
                        {" "}
                        <Link
                          to={"https://agilemasteryinstitute.com/guide/jamie-kriegel/"}
                          target="_blank"
                          className="text-blue-600 transition-all duration-200 hover:underline"
                        >
                          Agile Mastery Institute
                        </Link>{" "}
                        to deliver the Scrum Mastery Pathway ™
                      </p>
                      <img
                        src="https://live.staticflickr.com/65535/53085666595_4b2f1d3a58_o.png"
                        width="800"
                        height="361"
                        alt="ami-logo"
                      />
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline text-xl font-semibold text-gray-900">
                        Events: {" "}
                      </dt>
                      <p className="inline text-lg">
                        <Link
                          to={"https://www.meetup.com/scrum-masters-of-the-universe/"}
                          target="_blank"
                          className="text-red-500 font-bold hover:underline"
                        >
                          Scrum Masters of the Universe
                        </Link>{" "}
                        has a growing Meetup Community where we strive to bring
                        you the best of the best in Agile Thought Leadership! We
                        offer weekly Meetups on a variety of topics. There's
                        something for everyone!
                      </p>
                    </div>
                  </dl>
                </div>
              </div>
              <img
                className="w-full hidden dark:hidden lg:block"
                src="https://live.staticflickr.com/65535/53085414729_5420bd3336_o.png"
                width="600"
                height="600"
                alt="planet"
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
                src="https://live.staticflickr.com/65535/53085244946_0ae61eb0ac_o.png"
                width="600"
                height="600"
                alt="newsletter"
              />
            </div>
            <div className="md:col-span-3 px-4">
              <h2 className="font-trifuno mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">
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
