import "./styles.css";
import Barber from "../../assets/images/barber.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="menu-home-container wrapper box">
          <div>
            <Link to="/kindofservice">
              <h1>BARBER SYSTEM</h1>
            </Link>
          </div>
          <div className="img-home">
            <Link to="/kindofservice">
              <img src={Barber} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
