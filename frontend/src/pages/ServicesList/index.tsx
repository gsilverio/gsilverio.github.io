import "./styles.css";
import axios from "axios";
import ServiceCard from "../../components/ServiceCard";
import { useState, useEffect } from "react";
import { Service } from "../../types/service";
import { Link } from "react-router-dom";
import { AxiosParams, SpringPage } from "../../types/vendor/axios";
import { BASE_URL } from "../../util/requests";
const ServiceList = () => {
  const [page, setPage] = useState<SpringPage<Service>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: "GET",
      url: `${BASE_URL}/kindofservice`,
    };
    axios(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <>
      <div className="container my-4 servicelist-container">
        <h3>Serviços Disponiveis</h3>
        <div className="row">
          {page?.content.map((service) => {
            return (
              <div className="col-xl-4">
                <Link to={`/kindofservice/${service.id}`}>
                  <ServiceCard service={service} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceList;
