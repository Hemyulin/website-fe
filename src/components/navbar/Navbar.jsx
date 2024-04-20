import { Sidebar } from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Daniel Budiansky
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram logo" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube logo" />
          </a>
          <a href="#">
            <img src="/github-mark.webp" alt="github logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
