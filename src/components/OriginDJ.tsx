import Header from "./header";
import "../styles/OriginDJ.css";
import originLit from "../assets/origin_lit_up.png";
import originGUI from "../assets/origin_gui.png";

const OriginDJ: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="title">Origin DJ Board</div>
      <div className="project-subtext">
        Your in-house UX DJ board for Origin vehicles
      </div>
      <img className="main-image" src={originLit} alt="Artwork" />
      <div className="intro">
        GM Cruise's Origin vehicles may look beautiful and seem intuitive to
        use, but creating that experience came with a host of technical problems
        for the UX team. Getting test displays on the in-car screens, turning on
        and off lights, and installing audio all required many lines of code and
        terminal commands, which were often show-stopping hurdles. Intrudocing:
        the Origin UX DJ board, a tool that allows designers to interact with
        the car from a web app.
      </div>
      <div className="text-block">
        <img src={originGUI} alt="origin GUI" />
      </div>
    </div>
  );
};

export default OriginDJ;
