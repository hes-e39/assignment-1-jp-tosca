import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";

type XYProps = {
    initTime: number;
    initRounds: number;
};

const XY = ({initTime, initRounds}:XYProps) => {


    const [rounds, setRounds] = useState(initRounds);
    const [time, setTime] = useState(initTime);
    const status = useRef('stop');
    
    const intervalRef = useRef<number | undefined>(undefined);

    const onStart = () => {
        if (status.current === 'start') return
        status.current = 'start';
        intervalRef.current = window.setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    setRounds((rounds) => {
                        if (rounds <= 1) {
                            clearInterval(intervalRef.current);
                            status.current = 'stop';
                            return initRounds;
                            
                        }
                        return rounds - 1;
                    });
                    return initTime;
                } else {
                    return prevTime - 50;
                }
            });
        }, 50);
    }

    return (
        <div>
            <h1>{rounds}</h1>
            <h1>{milisecondsToTime(time)}</h1>
            <button onClick={onStart}>▶️</button>

            <button onClick={() => {
               status.current = 'pause';
               clearInterval(intervalRef.current);
            }}>⏸️</button>

            <button onClick={() => {
                status.current = 'stop';
                setTime(initTime);
                setRounds(initRounds);
                clearInterval(intervalRef.current);
            }}>⏹️</button>                    
        </div>
    );
};

export default XY;
