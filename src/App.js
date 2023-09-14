import React, { useState } from "react";
import Calculate from "./components/Calculate";
import Result from "./components/Result";

const App = () => {
  const [totalClasses, setTotalClasses] = useState(null);
  const [totalClassesAttended, setTotalClassesAttended] = useState(null);
  const [totalAttendance, setTotalAttendance] = useState(null);
  const [totalAvailableLeaves, setTotalAvailableLeaves] = useState(null);
  const [totalClassesToAttend, setTotalClassesToAttend] = useState(null);

  function handleChange(e) {
    let newTotalClasses = e.target.value;
    setTotalClasses(newTotalClasses);
  }

  function handleChange2(e) {
    let newTotalClassesAttended = e.target.value;
    setTotalClassesAttended(newTotalClassesAttended);
  }

  function handleSubmit(e) {
    let newTotalAttendance = totalAttendance;
    newTotalAttendance = Math.floor(
      (totalClassesAttended / totalClasses) * 100
    );

    setTotalAttendance(newTotalAttendance);
    let newTotalAvailableLeaves = Math.floor(
      (totalClassesAttended - 0.75 * totalClasses) / 0.75
    );
    let newTotalClassesToAttend = Math.floor(
      (0.75 * totalClasses - totalClassesAttended) / 0.25
    );
    setTotalAvailableLeaves(newTotalAvailableLeaves);
    setTotalClassesToAttend(newTotalClassesToAttend);
    e.preventDefault();
    toggle();
  }

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  return (
    <div className="flex justify-center align-center">
      <div className="flex justify-center align-center gap-10 bg-white rounded-xl p-8 w-[80%] md:w-[600px]">
        <Calculate
          toggle={toggle}
          show={show}
          handleChange={handleChange}
          handleChange2={handleChange2}
          handleSubmit={handleSubmit}
        />
        <Result
          toggle={toggle}
          show={show}
          totalAttendance={totalAttendance}
          totalAvailableLeaves={totalAvailableLeaves}
          totalClassesToAttend={totalClassesToAttend}
        />
      </div>
    </div>
  );
};

export default App;
