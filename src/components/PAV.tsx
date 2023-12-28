import Header from "./header";
import "../styles/Pav.css";
import pavScreen from "../assets/pav_screen.png";
import cabinControls from "../assets/cabin_controls.png";
import pavModes from "../assets/pav_modes.png";

const Pav: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="title">Personal Autonomous Vehicle</div>
      <div className="project-subtext">Your personal robot chauffeur</div>
      <img className="main-image" src={pavScreen} alt="Artwork" />
      <div className="intro">
        GM Cruise cars are usually robotaxis, designed to get as many people
        from one place to the other as possible, as safely as possible. But what
        if you could own a Cruise car? Introducing: PAV, the personal autonomous
        Cruise car. I focused specifically on designing and building PAV's
        central infotainment and navigation systems, which are the user's main
        interactions with the car.
      </div>
      <div className="cabin-controls-block">
        <img src={cabinControls} alt="cabinControls" />
        <video width="550" controls>
          <source src="/pav_tv.mp4" type="video/mp4" />
        </video>
        <video style={{ borderRadius: "5px" }} width="380" controls>
          <source src="/seats.mov" type="video/mp4" />
        </video>
      </div>
      <div className="title">Cabin Controls</div>
      <div className="intro">
        My team envisions PAV to be more than a car; PAV is your personal pod
        space, where you can do anything as you travel: watch movies, get a good
        rest as PAV takes you on an overnight drive, or have a full days' work
        as PAV optimizes your route for best cell reception. PAV has unique
        features like a built-in 60" flatscreen TV, a retractable tablet,
        self-tinting windows, and RGB halo lights.
      </div>
      <div className="navigation-block">
        <div>
          <video width="500" controls>
            <source src="/compressed_park.mp4" type="video/mp4" />
          </video>
          <video style={{ borderRadius: "5px" }} width="500" controls>
            <source src="/compressed_drive_and_park.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="navigation-text-block">
          <div className="title">Navigation</div>
          <div className="intro" style={{ width: "70%" }}>
            To allow users to maintain a sense of trust in and control of the
            PAV, I designed the navigation system to be in entirely 3D space. I
            designed and built this 3D navigation world entirely in Unity and
            C++, exporting the Unity project as a library and embedding it in
            the rest of the Android app. The PAV sends its perception
            information to the Android app, which translates it over to Unity
            and 3D renderings. Users can drag and drop the car in the Unity
            scene, and then experience PAV responding as it mimics the action in
            real life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pav;
