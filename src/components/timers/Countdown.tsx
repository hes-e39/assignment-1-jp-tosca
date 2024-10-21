import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";

type CountdownProps = {
    initTime: number;
};

const Countdown = ({initTime}: CountdownProps) => {

    

    const [time, setTime] = useState<number>(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    const onStart = () => {
        if (status.current === 'start') return
        status.current = 'start';
        intervalRef.current = setInterval(() => {
            setTime((time) => time - 50)
        }, 50);
    }

    return (
        <div>
            <h1>{milisecondsToTime(time)}</h1>
            <button onClick={onStart}>▶️</button>

            <button onClick={() => {
               status.current = 'pause';
               clearInterval(intervalRef.current);
            }}>⏸️</button>

            <button onClick={() => {
                status.current = 'stop';
                setTime(initTime);
                clearInterval(intervalRef.current);
            }}>⏹️</button>                    
        </div>
    );
};

export default Countdown;
