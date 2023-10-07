import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import React, { useRef } from "react";

import emailjs from "emailjs-com";

import {
  RxArrowRight,
} from "react-icons/rx";

const Contact = () => {
  const form = useRef();



  const sendEmail = (e) => {
    emailjs
      .sendForm(
        'gmail',
        "service_wgi1xan",
        "template_l45oqpz",
        e.target,
        "mN0toCpARyFK1SNXi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let’s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="user_name"
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="user_email"
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
            />
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let’s talk
              </span>
              <RxArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-2xl" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
