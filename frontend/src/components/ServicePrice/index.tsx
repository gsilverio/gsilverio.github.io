import "./styles.css";
import { Service } from "../../types/service";

type Props = {
  price: number;
};

const ServicePrice = ({ price }: Props) => {
  return (
    <>
      <div className="service-price-container">
        <span>R$</span>
        <h3>{price}</h3>
      </div>
    </>
  );
};

export default ServicePrice;
