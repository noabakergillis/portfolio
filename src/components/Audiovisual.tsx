import Header from "./header";
import "../styles/Pav.css";
import vj1 from "../assets/vj1-min.png";
import vj2 from "../assets/vj2-min.png";
import vj3 from "../assets/vj3-min.png";
import vj4 from "../assets/vj4-min.png";
import vj5 from "../assets/vj5-min.png";
import vjphilly from "../assets/vjphilly.jpeg";

const Audiovisual: React.FC = () => {
  const items = [
    vj1,
    "/vjvideo.mp4",
    vjphilly,
    "/eye-drop-cropped.mp4",
    vj2,
    vj3,
    vj4,
    vj5,
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pav-title">Audio Visual Work</div>
      <div className="pav-intro">
        Outside of my work as a design engineer, I work as an audio visual
        artist. In my day job, I curate the experience of technology; as an
        audiovisual artist, I curate the experience of music and other people.
      </div>
      <div className="pav-intro">
        I started doing art and light installations in Tel Aviv in 2019, and
        continue my work in various venues around Philadelphia.
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
