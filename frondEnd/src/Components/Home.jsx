import React, { Fragment, useState } from "react";
import Modal from "./Modal";

const Home = () => {
  const [available, setAvailable] = useState(false);

  return (
    <Fragment>
      <div className="w-full h-full flex items-center justify-center">
        {!available && (
          <div className="glassCard rounded border w-80 p-10 flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-5 font-bold uppercase">
              <h1 className="text-white ">Please Login </h1>
            </div>
            <button
              onClick={() => setAvailable(true)}
              className="font-bold  px-5  py-1.5 rounded bg-blue-700 hover:bg-blue-800 text-white"
            >
              Login
            </button>
          </div>
        )}
      </div>
      <Modal
        isAvailable={available}
        onClose={() => {
          setAvailable(false);
        }}
      />
    </Fragment>
  );
};

export default Home;
