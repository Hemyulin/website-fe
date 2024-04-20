import daniel from "./assets/Daniel_Head.png";
import background from "./assets/background.webp";
import planets from "./assets/planets.webp";
import hobbies from "./assets/hobbies.webp";
import hobbies2 from "./assets/hobbies2.webp";
import blackbackground from "./assets/background-black.webp";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { HomePage } from "./pages/HomePage";
import { useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Infobox } from "./components/Infobox";

function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${blackbackground})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 4 }}>
          <Navbar />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1 className="home-page-welcome">Hi, my name is Daniel</h1>
          <div className="home-info-div">
            <Infobox />
            <Infobox />
            <Infobox />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Web development is fun!</h1>
        </ParallaxLayer>

        {/* <ParallaxLayer sticky={{ start: 1.1, end: 2.5 }} speed={0.3}>
          <img src={daniel} />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}

export default App;
