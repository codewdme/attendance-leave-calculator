import React, { useState } from "react";

const Calculate = (props) => {
  console.log(props);
  return (
    <div className={`${props.show ? "hidden" : ""}  `}>
      <div className=" w-[100%]  calculate-card ">
        <div className="text-black flex flex-col gap-6 justify-center align-center mb-[3rem]">
          <div className="text-[50px]">Attendance Calculator</div>
          <form className="text-black flex flex-col gap-2 justify-center align-center ">
            <div>Total no. of classes</div>

            <input
              min="0"
              onkeypress="return (event.charCode != 45 && event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              className="rounded-lg border-2 text-black p-2 w-full"
              type="number"
              name="totalClasses"
              onChange={props.handleChange}
            />

            <div>Total classes Attended</div>
            <input
              min="0"
              onkeypress="return (event.charCode != 45 && event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              className="rounded-lg border-2 text-black p-2 w-full"
              type="number"
              name="totalClassesAttended"
              onChange={props.handleChange2}
            />

            <button
              type="submit"
              onClick={props.handleSubmit}
              className="flex items-center justify-center mt-10 p-2 rounded-xl cursor-pointer  hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black "
            >
              Calculate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
