import React from "react";

const Result = (props) => {
  if (props.totalAttendance < 75 && props.totalAttendance >= 0) {
    return (
      <div className={props.show ? "" : "hidden"}>
        <div className="flex flex-col justify-center align-center gap-4 w-[100%]  result-card">
          <div className="text-[20px] ">
            Your current Attendance : <br />
            <p className="inline text-[30px] text-[#F22724]">
              <b>{props.totalAttendance}</b>
            </p>
            <span> %</span>
          </div>
          <div>
            You need to attend{" "}
            <span className="text-[#F22724]">
              {props.totalClassesToAttend}{" "}
            </span>{" "}
            lectures more to maintain aggregate 75 % attendance.
          </div>
          <button
            type="submit"
            onClick={props.toggle}
            className="bg-cyan-500 hover:bg-cyan-600 hover:text-white rounded-lg text-black p-2 mt-2"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  } else if (props.totalAttendance === 75) {
    return (
      <div className={props.show ? "" : "hidden"}>
        <div className="flex flex-col justify-center align-center gap-4 w-[100 %]  result-card">
          <div className="text-[20px] ">
            Your current Attendance :{"  "}
            <br />
            <p className="inline text-[#CCCC00] text-[30px]">
              <b>{props.totalAttendance}</b>
            </p>
            <span> %</span>
          </div>
          <div>
            You need to take regular classes to maintain 75 % attendance. Sorry
            to say! but you cannot take any leaves.
          </div>
          <button
            type="submit"
            onClick={props.toggle}
            className="flex items-center justify-center h-[7rem] p-6  bg-blue-200 rounded-xl cursor-pointer  hover:scale-105 transition hover:ease-in-out shadow-lg border-2 border-white hover:border-black "
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  } else if (props.totalAttendance > 75 && props.totalAttendance <= 100) {
    return (
      <div className={props.show ? "" : "hidden"}>
        <div className="flex flex-col justify-center align-center gap-4 w-[100 %]  result-card">
          <div className="text-[20px] ">
            Your current Attendance :{"  "}
            <br />
            <p className="inline text-[30px] text-[#24A31D] ">
              <b>{props.totalAttendance}</b>
            </p>
            <span> %</span>
          </div>
          <div>
            You can skip{" "}
            <span className="text-[#24A31D]">
              <b>{props.totalAvailableLeaves}</b>{" "}
            </span>{" "}
            lectures and still maintain aggregate 75 % attendance.
          </div>
          <button
            type="submit"
            onClick={props.toggle}
            className="p-2 px-4 transition hover:ease-in-out text-black border-2 border-white hover:border-black shadow-lg hover:scale-105 rounded-md flex items-center "
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.show ? "" : "hidden"}>
        <div>
          <h3> Please provide Valid Input.</h3>
          <button
            type="submit"
            onClick={props.toggle}
            className="bg-cyan-500 hover:bg-cyan-600 hover:text-white rounded-lg text-black p-2 mt-2"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  }
};

export default Result;
