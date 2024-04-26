import { useRef, useState } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const [modalIsShow, setModalIsShow] = useState(false);
  const [modalIs2Show, setModalIs2Show] = useState(false);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("Portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleModal = () => {
    setModalIsShow(!modalIsShow);
  };

  const toggleModal2 = () => {
    setModalIs2Show(!modalIs2Show);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Mastering the Essentials,
          <br /> Inspiring Change Everywhere
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button onClick={scrollToContact}>CONTACT ME</button>
        </div>
        {modalIsShow && (
          <div className="backdrop">
            <div className="modal">
              <h1>Collaborative Leadership</h1>
              <p>
                I lead with compassion and inclusivity, prioritizing my
                colleagues' well-being to ensure everyone feels valued. Drawing
                from my experience as a tank commander, I understand the
                importance of clear communication and decisive leadership,
                particularly in high-pressure situations. I believe a great team
                thrives on happiness, so I aim to foster a workplace where joy
                and productivity coexist. For me, leadership is about guiding
                and empowering, directing our collective efforts toward shared
                goals with empathy and understanding.
              </p>
              <button onClick={toggleModal}>Got it</button>
            </div>
          </div>
        )}
        {modalIs2Show && (
          <div className="backdrop">
            <div className="modal">
              <h1>Humor in Tech</h1>
              <p>
                In my work approach, I subtly integrate humor to alleviate
                stress and foster a positive team environment. This balanced use
                of humor enhances creativity and engagement, ensuring we
                navigate challenges effectively while maintaining
                professionalism in all settings.
              </p>
              <button onClick={toggleModal2}>Got it</button>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Web Design</h2>
          <p>
            I craft visually appealing and responsive websites that remain true
            to your design vision. I ensure your site looks great and functions
            flawlessly on any device, providing an optimal user experience.
          </p>
          <button onClick={scrollToPortfolio}>See My Work</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Reliable Backend Development</h2>
          <p>
            I develop robust and secure backend solutions that power seamless
            user experiences. With a focus on performance and scalability, I
            build backends that you can depend on.
          </p>
          <button onClick={scrollToPortfolio}>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Collaborative Leadership</h2>
          <p>
            I thrive in roles that merge leadership with team engagement. By
            guiding projects with a cooperative spirit, I ensure that every
            contribution is valued and every voice is heard, empowering
            teammates for our collective success.
          </p>

          <button onClick={toggleModal}>Explore Leadership Style</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Humor in Tech</h2>
          <p>
            I mix a sense of humor into the high-stakes world of tech. By
            keeping the mood light and spirits high, I foster a creative and
            positive working environment that enhances productivity and team
            cohesion.
          </p>
          <button onClick={toggleModal2}>Why It Matters</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
