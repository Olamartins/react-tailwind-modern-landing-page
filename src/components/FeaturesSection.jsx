import React from "react";
import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="about">
      {/* heading texts */}
      <motion.div
        variants={fadeIn("right", 0.9)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-3"
      >
        <h2 className="text-3xl font-bold mb-4">
          How can we help your business?
        </h2>
        <p className="text-sm text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* festures boxes */}

      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-6">
            <div
              className="w-16 h-16 rounded-full mb-6 flex items-center justify-center mx-auto"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFF0" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-xl">{feature.icon}</div>
            </div>

            <h3 className="font-medium text-xl mb-3 ">{feature.title}</h3>

            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </motion.div>

      {/* cta button */}

      <motion.div 
      variants={fadeIn("down", 1)}
        initial="hidden"
        whileInView="show"
      className="text-center mt-12">
        <button className="bg-blue-700 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors relative ">
          Become a Partner
          <div className="absolute -z-10 w-full h-full bg-blue-600/30 blur-xl top-0 left-0"></div>
        </button>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
