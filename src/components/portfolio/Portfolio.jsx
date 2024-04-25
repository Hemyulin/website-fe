import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "JS-Chess",
    img: "https://github.com/Hemyulin/js-chess/raw/main/assets/img/game_screenshot1.png",
    desc: "This project is a simple implementation of a chess game using JavaScript.",
  },
  {
    id: 2,
    title: "IronSteam",
    img: "https://github.com/Hemyulin/js-chess/raw/main/assets/img/game_screenshot1.png",
    desc: "Welcome to IronSteam, the premier platform for showcasing and distributing JavaScript games created by our talented cohort. IronSteam allows developers to register, login, and publish their games, providing a dedicated space for their creations to be enjoyed by players worldwide.",
  },
  {
    id: 3,
    title: "Apartment Checker",
    img: "https://github.com/Hemyulin/js-chess/raw/main/assets/img/game_screenshot1.png",
    desc: "Apartment Checker is a JavaScript-based application designed to automatically scrape the WBM Website for new apartment listings every 7 minutes. Using the Pushover service, it sends real-time notifications to your phone, helping you stay ahead in the competitive apartment hunting process.",
  },
  // {
  //   id: 4,
  //   title: "JS-Chess",
  //   img: "https://github.com/Hemyulin/js-chess/raw/main/assets/img/game_screenshot1.png",
  //   desc: "This project is a simple implementation of a chess game using JavaScript.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="project image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
