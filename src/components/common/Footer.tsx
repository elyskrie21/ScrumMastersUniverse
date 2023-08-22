import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex justify-center">
              <img
                className="h-48 mr-3"
                src="https://live.staticflickr.com/65535/53083183099_0207f8eedb_n.jpg"
                alt="Scrum Masters of the Universe Logo"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://drive.google.com/file/d/1tzV3o70EJXoCjOxp7KRUO5uRQVS12ja0/view?usp=sharing"
                      className="hover:underline"
                      target="_blank"
                    >
                      Agile Mastery Insitute
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="hover:underline"
                      href="https://youtu.be/SzOpc22BNXM"
                      target="_blank"
                    >
                      Scrum Mastery Pathway Overview
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:underline"
                      href="https://agilemasteryinstitute.com/app/uploads/2022/11/Scrum-Mastery-Pathway-Overview.pdf"
                      target="_blank"
                    >
                      Meaningful Agile Certification
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="http://bit.ly/smotu-meetup"
                      className="hover:underline"
                      target="_blank"
                    >
                      Meetup
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="http://bit.ly/smotu-youtube"
                      className="hover:underline"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://bit.ly/smotu-discordserver"
                      className="hover:underline"
                      target="_blank"
                    >
                      Discord
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://bit.ly/smotu-twitter"
                      className="hover:underline"
                      target="_blankj"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/smotu/"
                      className="hover:underline"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Pages
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to={"/training"}>Training</Link>
                  </li>
                  <li className="mb-4">
                    <Link to={"/"}>Events</Link>
                  </li>
                  <li className="mb-4">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{"  "}
              <a href="https://flowbite.com/" className="hover:underline">
                Scrum Masters of the Universe LLC
              </a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
