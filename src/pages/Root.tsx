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
      <section className="bg-center bg-no-repeat intro bg-blend-multiply">
        <div className="px-4 w-full mx-auto max-w-screen-xl text-center py-32 lg:py-56">
        </div>
      </section>

      <div className="gradient">
        <section className="dark:bg-gray-900">
          <div className="py-24 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 h-64">
              <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Unleash your Agile might and join the ranks of the Scrum Masters
                of the Universe!
              </h2>
              <p className="font-trifuno mb-10 font-light sm:text-xl dark:text-gray-400 ">
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
              <div className="mx-auto max-w-screen-md text-center px-4 mb-8 lg:text-left md:px-0 lg:mb-12">
                <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Core Values
                </h2>
                <p className="font-trifuno mb-5 font-light sm:text-xl dark:text-gray-400">
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
                <h2 className="font-trifuno mb-4 text-3xl font-bold text-white backdrop-brightness-50">
                  Connection
                </h2>
              </div>
              <div
                id="collaboration"
                className="flex border-gray-200 w-full justify-center border flex-col p-6 mx-auto my-8 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h2 className="font-trifuno mb-4 text-3xl font-bold text-white backdrop-brightness-50">
                  Collaboration
                </h2>
              </div>
              <div
                id="community"
                className="flex flex-col p-6 w-full justify-center mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
               <h3 className="mb-4 font-trifuno text-3xl font-bold text-white backdrop-brightness-50">
                  Community
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="my-24 dark:bg-gray-900">
          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <a
              data-flickr-embed="true"
              href="https://www.flickr.com/photos/198849856@N02/53085690248/in/dateposted/"
              title="xconvert.com"
            >
              <img
                src="https://live.staticflickr.com/65535/53085690248_d60b99272e_o.png"
                width="600"
                height="600"
                alt="xconvert.com"
              />
            </a>
            <script
              async
              src="//embedr.flickr.com/assets/client-code.js"
            >
            </script>{" "}
            <div className="mt-4 md:mt-0">
              <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Get Involved
              </h2>
              <p className="font-trifuno mb-6 font-light md:text-lg dark:text-gray-400">
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
              <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Leadership Team
              </h2>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53082988986/in/dateposted/"
                  title="jamie-kriegel"
                >
                  <img
                    className="rounded-lg  sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53082988986_12dd56942b_n.jpg"
                    width="320"
                    height="319"
                    alt="jamie-kriegel"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>
                <div className="p-5">
                  <h3 className="text-xl font-trifuno font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Jamie Kriegel</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Founder
                  </p>
                  <p className="font-trifuno">
                    Primary Trainer
                  </p>
                  <p className="font-trifuno">
                    Professional Scrum Master
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53083392535/in/dateposted/"
                  title="mark-metze"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:max-h-48"
                    src="https://live.staticflickr.com/65535/53083392535_679223d590_w.jpg"
                    width="297"
                    height="400"
                    alt="mark-metze"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>{" "}
                <div className="p-5">
                  <h3 className="text-xl font-bold font-trifuno tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Mark Metze</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p className="font-trifuno">
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53083183209/in/dateposted/"
                  title="anuradha"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53083183209_ffafb39c12_w.jpg"
                    width="300"
                    height="400"
                    alt="anuradha"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>{" "}
                <div className="p-5">
                  <h3 className="text-xl font-trifuno font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Anuradha Aravindh Raj</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p className="font-trifuno">
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53085481815/in/dateposted-public/"
                  title="Ramya Shastri"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53085481815_dcc77dc19e.jpg"
                    width="375"
                    height="500"
                    alt="Ramya Shastri"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Ramya Shastri</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53085674708/in/dateposted/"
                  title="Mary"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53085674708_c825ccfa25_n.jpg"
                    width="320"
                    height="320"
                    alt="Mary"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>{" "}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Mary Nogami</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53083392535/in/dateposted/"
                  title="mark-metze"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53083392535_679223d590_w.jpg"
                    width="297"
                    height="400"
                    alt="mark-metze"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>{" "}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Jeff Colvin</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53083483258/in/dateposted/"
                  title="DonnaReynolds"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53083483258_efe12f80c4_w.jpg"
                    width="338"
                    height="400"
                    alt="DonnaReynolds"
                  />
                </a>
                <script
                  async
                  src="//embedr.flickr.com/assets/client-code.js"
                >
                </script>{" "}
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Donna Reynolds</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
                    Professional Scrum Master
                  </p>
                  <p>
                    SMOTU Meetup Leadership Team Member
                  </p>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53084488637/in/dateposted-public/"
                  title="Maco&#x27;s image"
                >
                  <img
                    className="rounded-lg sm:w-full sm:rounded-none sm:rounded-l-lg lg:h-48"
                    src="https://live.staticflickr.com/65535/53084488637_27847ef405_c.jpg"
                    width="600"
                    height="800"
                    alt="Maco&#x27;s image"
                  />
                  <script
                    async
                    src="//embedr.flickr.com/assets/client-code.js"
                  >
                  </script>
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Marco Burville</a>
                  </h3>
                  <p className="font-trifuno dark:text-gray-400">
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
                  <h2 className="font-trifuno text-base font-semibold leading-7 text-indigo-600">
                    Unrivaled Quality
                  </h2>
                  <p className="font-trifuno mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What we provide
                  </p>
                  <p className="font-trifuno mt-6 text-lg leading-8 ">
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
                      <p className="font-trifuno inline text-lg">
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
                      <a
                        data-flickr-embed="true"
                        href="https://www.flickr.com/photos/198849856@N02/53085666595/in/dateposted/"
                        title="ami-logo"
                      >
                        <img
                          src="https://live.staticflickr.com/65535/53085666595_4b2f1d3a58_o.png"
                          width="800"
                          height="361"
                          alt="ami-logo"
                        />
                      </a>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline text-xl font-semibold text-gray-900">
                        Events: {" "}
                      </dt>
                      <p className="font-trifuno inline text-lg">
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
              <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/198849856@N02/53085414729/in/dateposted/"
                title="planet"
              >
                <img
                  className="w-full hidden dark:hidden lg:block"
                  src="https://live.staticflickr.com/65535/53085414729_5420bd3336_o.png"
                  width="600"
                  height="600"
                  alt="planet"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-secondary-100 py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="sm:text-center grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex justify-center">
              <a
                data-flickr-embed="true"
                href="https://www.flickr.com/photos/198849856@N02/53085244946/in/dateposted/"
                title="newsletter"
              >
                <img
                  className="h-64 md:h-full"
                  src="https://live.staticflickr.com/65535/53085244946_0ae61eb0ac_o.png"
                  width="600"
                  height="600"
                  alt="newsletter"
                />
              </a>
              <script
                async
                src="//embedr.flickr.com/assets/client-code.js"
              >
              </script>
            </div>
            <div className="md:col-span-3 px-4">
              <h2 className="font-trifuno mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">
                Sign up for our newsletter
              </h2>
              <p className="font-trifuno mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl dark:text-gray-400">
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
