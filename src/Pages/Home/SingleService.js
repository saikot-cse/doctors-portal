import React from "react";

export const SingleService = ({service}) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={service.image} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.title}</h2>
        <p>{service.desc}</p>
      </div>
    </div>
  );
};
