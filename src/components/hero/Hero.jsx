import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>DANIEL BUDIANSKY</h2>
          <h1>Full stack web developer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="scroll down icon" />
        </div>
      </div>
      <div className="slidingTextContainer">
        Writer content creater polyglot
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="picture of Daniel Budiansky" />
      </div>
    </div>
  );
};
