import { Link } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";

import JamieKriegel from "../assets/img/jamie-kriegel.png";

export const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <NavBar />
      <section className="bg-planets bg-blend-multiply bg-center bg-no-repeat bg-cover">
        <div className="px-4 mx-auto max-w-screen-2xl text-center py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
            About
          </h1>
        </div>
      </section>
      <section className="body-font">
        <div className="container px-5 py-16 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-32 h-32 rounded-full inline-flex items-center md:w-64 md:h-64 justify-center bg-gray-800 text-gray-600">
                <a
                  data-flickr-embed="true"
                  href="https://www.flickr.com/photos/198849856@N02/53082988986/in/dateposted/"
                  title="jamie-kriegel"
                >
                  <img
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
 
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="title-font font-bold mt-4  text-2xl">
                    Jamie Kriegel
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4">
                  </div>
                  <p className="text-base font-bold mb-4">
                    Founder of SMOTU
                  </p>
                  <p className="text-base font-bold mb-4">
                    Profesional Scrum Master
                  </p>
                  <p className="text-base font-bold ">
                    Primary Instructor
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  I’m Jamie Kriegel, a dynamic Agile advocate, mentor, and
                  strategic problem-solver. As someone who thrives on challenges
                  and values lifelong learning, my passion is to spark a similar
                  fire in the hearts of aspiring Scrum Masters.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Over the years, I’ve successfully steered substantial Scrum,
                  Agile, and Lean product development initiatives, transforming
                  concepts into dynamic projects that enhance performance,
                  efficiency, and precision. My ability to build influential
                  partnerships and implement transformative strategies has
                  allowed me to align organizations with ever-evolving product
                  development needs.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  In my role as a servant-leader, I’ve honed a collaborative
                  communication style that encourages transparency, inspection,
                  and adaptation. It’s my goal to bridge gaps between teams and
                  motivate them towards excellence, contributing to their
                  personal growth and the sustained success of the organizations
                  they serve.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  As an educator, I bring Scrum concepts to life with creative
                  metaphors, engaging my learners with dynamic and interactive
                  environments. Using Liberating Structures, I ensure active
                  participation and foster a deep understanding of even the most
                  complex Scrum principles.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  But what really sets me apart is my commitment to making
                  learning fun. I believe in the power of play and engagement in
                  education, which not only enhances individual performance but
                  also boosts the overall productivity and success of the teams
                  and organizations that my learners are a part of.
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  My mission? To empower the Scrum Masters of tomorrow. By
                  equipping them with essential knowledge, skills, and tools, I
                  help them unlock their full potential. Through my passionate
                  advocacy for Scrum and Agile methodologies as evidenced
                  through my Meetup Group,{" "}
                  <Link
                    to={"http://bit.ly/smotu-meetup"}
                    className="font-bold text-red-500 hover:underline"
                    target="_blank"
                  >
                    Scrum Masters of the Universe
                  </Link>{" "}
                  , I aim to foster a culture of continuous improvement in the
                  industry. After all, the journey towards growth never truly
                  ends—it just becomes more exciting!
                </p>
                <a
                  href="https://agilemasteryinstitute.com/guide/jamie-kriegel/"
                  target="_blank"
                  className="text-indigo-400 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <Footer />
    </div>
  );
};
