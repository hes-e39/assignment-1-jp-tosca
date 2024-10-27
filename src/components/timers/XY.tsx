import TimerButton from "../generic/TimerButton.tsx";

import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard,
         onStopInterval,
         onStartIntervalsStandard } from "../generic/TimerFunctionsUtil.tsx";

type XYProps = {
    initTime: number;
    initRounds: number;
    refreshRate: number;
};

const XY = ({initTime, initRounds, refreshRate}:XYProps) => {

    const [rounds, setRounds] = useState(initRounds);
    const [time, setTime] = useState(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <h1>Rounds: {rounds}</h1>
            <h1>Time: {milisecondsToTime(time)}</h1>
            <TimerButton onClickParam={() => onStartIntervalsStandard(status, intervalRef, refreshRate, initTime, initRounds, setTime, setRounds)} timerButtonLabel="▶️" />
            <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
            <TimerButton onClickParam={() => onStopInterval(status, intervalRef, initTime, initRounds, setTime, setRounds)} timerButtonLabel="⏹️" />                                     
        </div>
    );
};

export default XY;
