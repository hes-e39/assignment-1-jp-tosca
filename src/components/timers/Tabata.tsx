import TimerButton from "../generic/TimerButton.tsx";
import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";


import { onPauseStandard,
         onStopDoubleIntervals,
         onStartIntervalsWorkRest
    } from "../generic/TimerFunctionsUtil.tsx";

type TabataProps = {
    initWorkTime: number;
    initRestTime: number;
    initRounds: number;
    refreshRate: number;
};

const Tabata = ({initWorkTime, initRestTime, initRounds, refreshRate}:TabataProps) => {

    const [rounds, setRounds] = useState(initRounds*2);
    const [time, setTime] = useState(initWorkTime);
    const status = useRef('stop');
    const displayTimer = useRef(0);
    const intervalRef = useRef<number | undefined>(undefined);
    
    return (
        <div>
            <h1>Period: {rounds%2 === 0 ? 'Work' : 'Rest'}</h1>
            <h1>Rounds: {Math.ceil(rounds/2)}</h1>
            <h1>Time: {milisecondsToTime(time)}</h1>
            <TimerButton onClickParam={() => onStartIntervalsWorkRest(status, intervalRef, refreshRate, initRestTime, initWorkTime, initRounds, displayTimer, setTime, setRounds)} timerButtonLabel="▶️" />
            <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
            <TimerButton onClickParam={() => onStopDoubleIntervals(status, intervalRef, initWorkTime, initRounds, setTime, setRounds)} timerButtonLabel="⏹️" />                                     
        </div>
    );
};


export default Tabata;
