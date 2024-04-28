import "./TechStack.scss";

export const TechStack = () => {
  return (
    <div className="techStack">
      <div className="titleContainer">
        <h1>Tech Stack</h1>
        <hr />
      </div>
      <div className="listContainer">
        <div className="list">
          <div className="listSection frontEnd">
            <h2>Frontend</h2>
            <hr />
            <h4>JavaScript</h4>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>React</h4>
            <h4>Next.js</h4>
          </div>
          <div className="listSection backEnd">
            <h2>Backend</h2>
            <hr />
            <h4>MongoDB</h4>
            <h4>Express.js</h4>
            <h4>Node.js</h4>
            <h4>Postman</h4>
          </div>
          <div className="listSection monitoring">
            <h2>Monitoring</h2>
            <hr />
            <h4>Sentry</h4>
            <h4>Google Crashlytics</h4>
          </div>
          <div className="listSection misc">
            <h2>Misc</h2>
            <hr />
            <h4>Codemagic</h4>
            <h4>GitHub</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
