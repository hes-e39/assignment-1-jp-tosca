import TimerButton from "../generic/TimerButton.tsx";

import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard, 
         onStartForwardStandard,
         onStopStandard } from "../generic/TimerFunctionsUtil.tsx";

type StopwatchProps = {
    refreshRate: number;
};

const Stopwatch = ({refreshRate}: StopwatchProps) => {

    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <h1>{milisecondsToTime(time)}</h1>
            <TimerButton onClickParam={() => onStartForwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="▶️" />
            <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
            <TimerButton onClickParam={() => onStopStandard(status, intervalRef, setTime)} timerButtonLabel="⏹️" />                   
        </div>
    );
};

export default Stopwatch;
