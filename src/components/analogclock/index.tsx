import useTimer from "../hooks/useTimer";
import "../analogclock/style.scss";
import DigitalClock from "../digitalclock";

//Analog Clock displayed Digtal clock and Analog Clock both!
const AnalogClock = () => {

  //this is  custom hook for return date!
  const date = useTimer();

// The hoursDegrees and minutesDegree abd SecondsDegree!
  const hoursDateDegress = date.getHours() * 30 + date.getMinutes() / 2;
  const minutesDateDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
  const secondsDateDegrees = date.getSeconds() * 6;

  //Rotate the styleHours for hours
  const styleHours = {
    transform: "rotateZ(" + hoursDateDegress + "deg)",
  };

  
  //Rotate the styleMinutes for minutes
  const styleMinutes = {
    transform: "rotateZ(" + minutesDateDegrees + "deg)",
  };

  //Rotate the styleSeconds for minutes
  const styleSeconds = {
    transform: "rotateZ(" + secondsDateDegrees + "deg)",
  };
   //JSX elements for hours minutes and secodns
  return (
    <>
      <div className="__timer__content"></div>
      <div className="__timer__clock">
        <div
          className={
            "__indicator __indicator__hours " +
            (date.getHours() === 0 ? "" : "transition-effect")
          }
          style={styleHours}
        ></div>
        <div
          className={
            "__indicator __indicator__minutes " +
            (date.getMinutes() === 0 ? "" : "transition-effect")
          }
          style={styleMinutes}
        ></div>
        <div
          className={
            "__indicator __indicator__seconds " +
            (date.getSeconds() === 0 ? "" : "transition-effect")
          }
          style={styleSeconds}
        ></div>
        <div className="__cover__indicator"></div>
        <DigitalClock />
      </div>
    </>
  );
};

export default AnalogClock;
