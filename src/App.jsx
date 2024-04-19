import daniel from "./assets/Daniel_Head.png";
import background from "./assets/background.webp";
import planets from "./assets/planets.webp";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { HomePage } from "./pages/HomePage";
import { useRef } from "react";
import { Navbar } from "./components/Navbar";

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
            backgroundImage: `url(${planets})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer>
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
          <h1>Welcome to my website</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Web development is fun!</h1>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img src={daniel} />
        </ParallaxLayer>
      </Parallax>
      <HomePage />
    </div>
  );
}

export default App;
