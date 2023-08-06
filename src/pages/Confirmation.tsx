import { SecondaryHeader } from "../components/basic/SecondaryHeader";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <NavBar />
      <SecondaryHeader />
      <section className="body-font text-center py-16 px-6 md:w-1/2 mx-auto">
        <div className="mb-4">
          <h1 className="font-bold font-trifuno text-2xl">
            Thank You for Embarking on the Scrum Mastery Pathway!
          </h1>
          <p className="pt-4 text-lg">
            Your journey to elevate from a good Scrum Master to an extraordinary
            Agile Sorcerer is about to begin. Here's a glimpse of what awaits
            you:
          </p>
        </div>
        <div className="mb-4 flex gap-3 text-left">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f6e1/32.png"
            className="h-8"
          />
          <p className="text-lg">
            <span className="font-bold font-trifuno font-xl">
              The Explorer's Guide: {" "}
            </span>
            Navigate through the mystical realms of Scrum, unlocking deeper
            insights and practices that remain uncharted to many.
          </p>
        </div>
        <div className="mb-4 flex gap-3 text-left">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f4d6/32.png"
            className="h-8"
          />
          <p className="text-lg">
            <span className="font-bold font-trifuno font-xl">
              Spells of Knowledge: {" "}
            </span>
            Delve into curated sessions that empower you with techniques and
            skills pivotal to true Scrum Mastery.
          </p>
        </div>
        <div className="mb-4 flex gap-3 text-left">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f300/32.png"
            className="h-8"
          />
          <p className="text-lg">
            <span className="font-bold font-trifuno font-xl">
              Transformation Awaits: {" "}
            </span>
            As you journey through this pathway, you'll metamorphose from
            understanding the rudiments to mastering the finesse of Scrum
            practices.
          </p>
        </div>
        <div className="mb-4 flex gap-3 text-left">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f387/32.png"
            className="h-8"
          />
          <p className="text-lg">
            <span className="font-bold font-trifuno font-xl">
              Ignite Teams with Magic: {" "}
            </span>
            This isn't just about personal growth. By the end, you'll be poised
            to bring out the best in your teams, leading them to new pinnacles
            of success.
          </p>
        </div>
        <div className="w-2/3 mx-auto h-1 bg-indigo-500 rounded mt-2 mb-4">
        </div>
        <div className="text-left mt-8 mb-8">
          <div className="mb-4 flex gap-3 text-left">
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f4cc/32.png"
              className="h-8"
            />

            <p className="font-bold font-trifuno font-xl">
              Points to Note:
            </p>
          </div>
          <ol className="list-disc px-8 sm:text-lg">
            <li>
              Secure a reliable internet connection for an uninterrupted
              experience.
            </li>
            <li>
              Keep your devices ready – especially your microphone and camera.
            </li>
            <li>
              Feel free to embrace the theme – capes, wands, and any magical
              paraphernalia are heartily welcome, though entirely optional!
            </li>
          </ol>
        </div>
        <div className="w-2/3 mx-auto h-1 bg-indigo-500 rounded mt-2 mb-4">
        </div>
        <div className="mt-8">
          <p>
            For queries or support,{" "}
            <Link to="/contact" className="text-primary-600 hover:underline">
              reach out to our mystical support team
            </Link>{" "}
            who are always at the ready!
          </p>
          <div className="mb-4 justify-center my-6  flex gap-3 text-left">
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f30c/32.png"
              className="h-6"
            />
            <p className="font-bold self-center font-lg">
              Gear up for a magical transformation!
            </p>
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/15.0/1f30c/32.png"
              className="h-6"
            />
          </div>
        </div>
      </section>{" "}
      <Footer />
    </div>
  );
};
