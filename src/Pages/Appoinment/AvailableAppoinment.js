import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { BookingModal } from "./BookingModal";
import { Service } from "./Service";

export const AvailableAppoinment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="my-12 text-secondary text-xl font-bold text-center">Available Appointments on: {format(date, "PP")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment} />
        ))}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}/>}
    </div>
  );
};
