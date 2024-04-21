import { motion } from "framer-motion";
import "./Hero.scss";

const textVeriants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVeriants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVeriants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVeriants}>DANIEL BUDIANSKY</motion.h2>
          <motion.h1 variants={textVeriants}>
            Full stack web developer
          </motion.h1>
          <motion.div className="buttons" variants={textVeriants}>
            <motion.button variants={textVeriants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVeriants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll down icon"
            variants={textVeriants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVeriants}
        initial="initial"
        animate="animate"
      >
        React TypeScript Express Node.JS MongoDB Flutter
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="picture of Daniel Budiansky" />
      </div>
    </div>
  );
};
