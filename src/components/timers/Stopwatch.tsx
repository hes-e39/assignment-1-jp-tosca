import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";



const Stopwatch = () => {

    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    const onStart = () => {
        if (status.current === 'start') return
        status.current = 'start';
        intervalRef.current = setInterval(() => {
            setTime((time) => time + 50)
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
                setTime(0);
                clearInterval(intervalRef.current);
            }}>⏹️</button>                    
        </div>
    );
};

export default Stopwatch;
