import { format } from "date-fns";
import React from "react";
export const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id,name, slots } = treatment;
  const handleBooking = e=>{
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id,name,slot);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-2xl text-secondary text-center mb-5">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
            <input type="text" value={format(date, "PP")} readOnly disabled className="input input-bordered input-secondary w-full max-w-xs" />
            <select name="slot" className="select select-secondary w-full max-w-xs">
              {
                slots.map(slot=><option key={slot} value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="number" name="phone" placeholder="Your Number" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="submit" value="BOOK" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};
