import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServicePrice from "../../components/ServicePrice";
import { Service } from "../../types/service";
import { BASE_URL } from "../../util/requests";
import "./styles.css";

type UrlParams = {
  serviceId: string;
};

const ServiceDetails = () => {
  const { serviceId } = useParams<UrlParams>();

  const [service, setService] = useState<Service>();
  useEffect(() => {
    axios.get(BASE_URL + `/kindofservice/${serviceId}`).then((response) => {
      setService(response.data);
    });
  }, [serviceId]);

  return (
    <>
      <div className="serviceContainer">
        <div className="serviceName">
          <h3>Serviço</h3>
        </div>
        <div className="base-card service-details-container">
          <div className="img-container">
            <img src={service?.imgUrl} alt="" />
          </div>
          <div className="name-price-container">
            <h1>{service?.nameOfService}</h1>
            {service && <ServicePrice price={service?.price} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
