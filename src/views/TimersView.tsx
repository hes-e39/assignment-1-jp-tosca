import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div``;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch refreshRate={1000}/> },
    { title: "Countdown", C: <Countdown initTime={60000000000000} refreshRate={1000} /> },
    { title: "XY", C: <XY initTime={2000} initRounds={2} refreshRate={1000}/> },
    { title: "Tabata", C: <Tabata initWorkTime={3000} initRestTime={2000} initRounds={4} refreshRate={1000}/> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
};

export default TimersView;
