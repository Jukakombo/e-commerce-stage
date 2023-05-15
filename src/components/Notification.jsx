import React from "react";

function Notification() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#44bba4] py-4">
      <div className="w-11/12 m-auto md:flex py-8 grid md:grid-cols-2  items-center md:justify-between">
        <div className="">
          <h1 className="text-4xl font-bold text-white">
            Get all notification from us
          </h1>
          <p className="text-xl text-white">
            Subscribe & get all notification from us
          </p>
        </div>
        <div className="bg-white rounded ">
          <form
            onSubmit={handleSubmit}
            className="items-center flex grid md:grid-cols-2 p-4  "
          >
            <input
              type="email"
              placeholder="Enter your email "
              className="outline-none  sm:my-4 md:my-0"
            />
            <button
              className="bg-[#44bba4] p-4 notification_button text-white font-bold flex-1 "
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="h-[40px] md:bg-white"></div>
    </div>
  );
}

export default Notification;
