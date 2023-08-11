import FeatherIcon from "feather-icons-react";
import me from "../img/IMG_6944.PNG";

export default function Basket() {
  return (
    <div className="basket w-100  d-flex justify-content-between">
      <div className="github d-flex align-items-center justify-content-center">
        <a href="https://github.com/Adel-233" target="_blank">
          <FeatherIcon icon="github" />
        </a>
      </div>
      <div className="about-me d-flex">
        <div className="me">
          <img src={me} alt="" />
        </div>
        <div className="inf text-align-center text-capitalize">
          <h3 className="name">i'm adel almubarak</h3>
          <p>
            this is my first project, god willing, in the future, i will be
            better than this.
          </p>
        </div>
      </div>
      {/* <div className="bag text-align-center">
        <FeatherIcon icon="shopping-bag" />
        <button className="pay">pay</button>
      </div> */}
    </div>
  );
}
