import TimerButton from "../generic/TimerButton.tsx";

import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard, 
         onStartBackwardStandard,
         onStopStandard } from "../generic/TimerFunctionsUtil.tsx";

type CountdownProps = {
    initTime: number;
    refreshRate: number;
};

const Countdown = ({initTime, refreshRate}: CountdownProps) => {

    const [time, setTime] = useState<number>(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <h1>{milisecondsToTime(time)}</h1>
            <TimerButton onClickParam={() => onStartBackwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="▶️" />
            <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
            <TimerButton onClickParam={() => onStopStandard(status, intervalRef, setTime)} timerButtonLabel="⏹️" />                   
        </div>
    );
};

export default Countdown;
