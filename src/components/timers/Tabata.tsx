import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";

type XYProps = {
    workTime: number;
    restTime: number;
    initRounds: number;
};

const Tabata = ({workTime, restTime, initRounds}:XYProps) => {


    const [rounds, setRounds] = useState(initRounds*2);
    const [time, setTime] = useState(workTime);
    const status = useRef('stop');
    const displayTimer = useRef(0);
    const intervalRef = useRef<number | undefined>(undefined);

    const onStart = () => {
        if (status.current === 'start') return
        status.current = 'start';
        intervalRef.current = window.setInterval(() => {
            setTime((time) => {
                if (time < 0) {
                   
                    setRounds((rounds) => {
                        if(rounds%2 === 0){
                            displayTimer.current = restTime;
                        } else {
                            displayTimer.current = workTime;
                        }

                        if (rounds <= 1) {
                            clearInterval(intervalRef.current);
                            status.current = 'stop';
                            displayTimer.current = workTime;
                            return initRounds*2;
                        }
                        return rounds - 1;
                    });
                    return displayTimer.current;
                   
                   
                   
                                        
                } else {
                    return time - 50;
                }
            });
        }, 50);
    }

    return (
        <div>
            <h1>{Math.ceil(rounds/2)}</h1>
            <h1>{milisecondsToTime(time)}</h1>
            <button onClick={onStart}>▶️</button>

            <button onClick={() => {
               status.current = 'pause';
               clearInterval(intervalRef.current);
            }}>⏸️</button>

            <button onClick={() => {
                status.current = 'stop';
                setTime(workTime);
                setRounds(initRounds);
                clearInterval(intervalRef.current);
            }}>⏹️</button>                    
        </div>
    );
};


export default Tabata;
