import "./styles.css";
import CorteCabelo from "../../assets/images/corteCabelo.png";
import Navbar from "../Navbar";
import ServicePrice from "../ServicePrice";
import { Service } from "../../types/service";

type Props = {
  service: Service;
};
const ServiceCard = ({ service }: Props) => {
  return (
    <>
      <div className="base-card service-card">
        <div className="card-top-container">
          <img src={service.imgUrl} alt={service.nameOfService} />
        </div>
        <div className="card-bottom-container">
          <h6>{service.nameOfService}</h6>
          <ServicePrice price={service.price} />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
