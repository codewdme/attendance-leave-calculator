import React, { useState } from "react";
import Result from "./Result";

const Calculate = (props) => {
  console.log(props);
  return (
    <div className={props.show ? "hidden" : ""}>
      <div className=" w-[100%]  calculate-card ">
        <div className="text-black flex flex-col justify-center align-center mb-[3rem]">
          <div className="text-[50px]">Attendance Calculator</div>
          <form className="text-black flex flex-col justify-center align-center gap-2">
            <div>Total no. of classes</div>
            <div>
              <input
                min="0"
                onkeypress="return (event.charCode != 45 && event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                className="rounded-lg border-2 text-black p-2 w-full"
                type="number"
                name="totalClasses"
                onChange={props.handleChange}
              />
            </div>
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
              className="bg-cyan-500 hover:bg-cyan-600 hover:text-white rounded-lg text-black p-2 mt-2"
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
