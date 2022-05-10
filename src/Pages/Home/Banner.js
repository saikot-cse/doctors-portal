import React from "react";
import chair from "../../assets/images/chair.png";
export const Banner = () => {
  return (
    <div class="hero min-h-screen bg-banner bg-banner-opacity-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt="" class="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-6xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
          <button class="btn btn-primary uppercase text-base-100 font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
