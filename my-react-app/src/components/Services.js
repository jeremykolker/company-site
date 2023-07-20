import React from "react";

const Services = () => {
  const services = [
    "Restoration woodworking",
    "Finish carpentry and flooring",
    "Historic & modern finishes",
    "Fabrication of missing elements",
    "Hardware repair and reproduction",
    "Window repair and replacement",
    "Furniture restoration",
    "Surveys, condition reports, and consulting",
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
