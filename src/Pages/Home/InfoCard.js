import React from "react";

export const InfoCard = ({img,cardTitle,cardDesc,bgClass}) => {
  return (
    <div class={`card lg:card-side shadow-xl ${bgClass}`}>
      <figure className="pl-5">
        <img className="mt-8 mb-8" src={img} alt="Album" />
      </figure>
      <div class="card-body text-white">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
};
