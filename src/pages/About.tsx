import { Link } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";

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
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 mt-10 ">
              <div className="sm:py-8  md:col-span-2 mx-auto">
                <div className=" mx-auto px-4  text-gray-600">
                  <a
                    data-flickr-embed="true"
                    href="https://www.flickr.com/photos/198849856@N02/53082988986/in/dateposted/"
                    title="jamie-kriegel"
                  >
                    <img
                      src="https://live.staticflickr.com/65535/53082988986_12dd56942b_n.jpg"
                      className="md:w-64"
                      width="320"
                      height="319"
                      alt="jamie-kriegel"
                    />
                  </a>
                </div>
                <div className="flex flex-col items-center text-center ">
                  <h2 className="title-font font-bold mt-4  text-2xl">
                    Jamie Kriegel
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base font-bold mb-4">Founder of SMOTU</p>
                  <p className="text-base font-bold mb-4">
                    Profesional Scrum Master
                  </p>
                  <p className="text-base font-bold ">Licensed Guide</p>
                </div>
                <div className=" mx-auto pt-8 px-4 text-gray-600">
                  <a
                    data-flickr-embed="true"
                    href="https://www.flickr.com/photos/198849856@N02/53082988986/in/dateposted/"
                    title="jamie-kriegel"
                  >
                    <img
                      src="https://live.staticflickr.com/65535/53086987867_5bbe892b56_o.png"
                      className="md:w-64"
                      width="320"
                      height="319"
                      alt="jamie-kriegel"
                    />
                  </a>
                </div>
              </div>
              <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center md:col-span-4 lg:col-span-4 sm:text-left">
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
              <div className="text-center px-4 md:col-span-6 lg:col-span-2  md:col-span-2 mx-auto ">
                <div className="flex flex-col items-center text-center justify-center ">
                  <h2 className="title-font font-bold mt-4  text-2xl">
                    Also Certified In
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base font-bold mb-4">Scrum.org</p>
                  <div className="flex flex-wrap justify-center gap-3 align-center">
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088013120_ddbfbb32e9_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088013120_ddbfbb32e9_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087044967_d58395646a_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087044967_d58395646a_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087795569_ec26c2051a_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087795569_ec26c2051a_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088104313_352f463e44_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088104313_352f463e44_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087608001_9095d0694f_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087608001_9095d0694f_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087795549_1bbb250861_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087795549_1bbb250861_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                  </div>
                  <p className="text-base pt-8 font-bold mb-4">
                    Scrum Alliance
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 align-center">
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087607926_5e02157c19_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087607926_5e02157c19_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087607921_95cf95a9c4_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087607921_95cf95a9c4_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088104283_5d976861c0_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088104283_5d976861c0_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088104288_275fc3d62d_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088104288_275fc3d62d_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088104358_c2c47f791d_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088104358_c2c47f791d_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                  </div>
                  <p className="text-base pt-8 font-bold mb-4">ICAgile</p>
                  <div className="flex flex-wrap justify-center gap-3 align-center">
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53087607951_818a63e984_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53087607951_818a63e984_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                    <a
                      data-flickr-embed="true"
                      href="https://live.staticflickr.com/65535/53088013085_4b3bb0292d_o.png"
                      title="jamie-kriegel"
                    >
                      <img
                        src="https://live.staticflickr.com/65535/53088013085_4b3bb0292d_o.png"
                        className="w-24"
                        width="320"
                        height="319"
                        alt="jamie-kriegel"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="text-gray-600 body-font">
        <div className="flex justify-center">
          <h1 className="font-extrabold text-3xl">Testimonials</h1>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  className="h-48 mb-8 object-cover object-center rounded-full inline-block "
                  src="https://live.staticflickr.com/65535/53090121254_7e6aae9c34_n.jpg"
                  alt="Bob Galen Cropped"
                />
                <p className="leading-relaxed">
                  "I'm looking forward to the influence Jamie will have in
                  bringing craft and mastery to members of our agile community."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                  Bob Galen
                </h2>
                <a
                  className="text-gray-500 hover:underline"
                  href="https://www.agile-moose.com/blog/2023/4/20/beyond-the-agile-certification-alphabet-soup"
                  target="_blank"
                >
                  Best Selling Author of "Extraordinarily Badass Agile Coaching:
                  The Journey from Beginner to Mastery and Beyond
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  className="h-48 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://live.staticflickr.com/65535/53090146624_88aa2e8695_n.jpg"
                  alt="1645208998187"
                />
                <p className="leading-relaxed">
                  "I had the privilege of getting to partner with Jamie as she
                  launched a Scrum Master community meetup. She has done an
                  amazing job creating one of the premiere scrum master meetups
                  in the country. She tirelessly works to get incredible
                  speakers that are helping to develop 100s of scrum masters
                  around the country. It's amazing to see her passion for this
                  industry and benefit from her leadership in this space."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                  Danny Presten
                </h2>
                <p className="text-gray-500">
                  Industrial and Systems Engineer, Experienced Agilist,
                  Innovation and Improvement Guide, Community Builder
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  className="w-100 h-100 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://live.staticflickr.com/65535/53090429148_61301b5654_o.jpg"
                  alt="1607719925845"
                />
                <p className="leading-relaxed">
                  "Jamie came into this team to establish scrum processes and
                  help to unite the scrum team with client goals and vision.
                  Immediately, she had the full team onboard with her leadership
                  and began implementing processes to ensure the success of the
                  team. I can’t speak highly enough of her and her ability."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                  Sydney Dingman
                </h2>
                <p className="text-gray-500">Program Manager at Evergreen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
