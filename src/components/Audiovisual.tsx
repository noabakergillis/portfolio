import Header from "./header";
import "../styles/Pav.css";
import vj1 from "../assets/vj1.png";
import vj2 from "../assets/vj2.png";
import vj3 from "../assets/vj3.png";
import vj4 from "../assets/vj4.png";
import vj5 from "../assets/vj5.png";
import vjphilly from "../assets/vjphilly.jpeg";

const Audiovisual: React.FC = () => {
  const items = [
    vj1,
    "/vjvideo.mp4",
    vjphilly,
    "/eye-drop-cropped.mp4",
    vj2,
    vj3,
    "/dancing-loop2.mp4",
    vj4,
    vj5,
  ];

  return (
    <div style={{ backgroundColor: "#E6E1DA" }}>
      <div>
        <Header />
      </div>
      <div className="pav-title">Audio Visual Work</div>
      <div className="pav-intro">
        Magnetform is a system that allows designers to experiment with building
        shape-changing interfaces. Magnetform explores movement as an element of
        design for everyday objects.
      </div>
      <div className="pav-intro">
        My team designed Magnetform as an exploration tool rather than a final
        product. We built a platform with four hidden robotic arms, each holding
        a magnet, and built it into a table. The textile on top had embedded
        magnets. We also built a simple interface that allowed users to control
        the movement of magnetform. I focused primarily on designing the
        movements of Magnetform, and writing the Arduino code for the interface.
      </div>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            {item.split(".").length != 2 && (
              <img src={item} alt={`Item ${index + 1}`} />
            )}
            {item.split(".").length == 2 && (
              <video controls>
                <source src={item} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Audiovisual;
