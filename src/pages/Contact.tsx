import { FormEvent, useRef, useState } from "react";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/Navbar";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SecondaryHeader } from "../components/basic/SecondaryHeader";

export const Contact = () => {
  const form = useRef(null);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const setTextMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const setNewName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const setNewEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      if (!message || !name || !email) {
        toast.error("Enter all fields");
        return;
      }
      toast.info("Sending email");
      emailjs
        .sendForm(
          "contact_service",
          "template_20851p7",
          form.current,
          "j2AI_o6wvqhpXUMPz",
        )
        .then(
          (result) => {
            if (result.status == 200) {
              toast.success("Email successfully sent!");
            } else {
              toast.error("Email not sent :(");
            }
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <NavBar />
      <SecondaryHeader />

      <div className="gradient">
        <section className="dark:bg-gray-900">
          <div>
            <ToastContainer />
          </div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white">
            <h2 className="font-trifuno mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a question? Want to send feedback? Need more details? Let us
              know.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  name="from_name"
                  type="email"
                  id="email"
                  onChange={setNewEmail}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  onChange={setNewName}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  onChange={setTextMessage}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                >
                </textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
