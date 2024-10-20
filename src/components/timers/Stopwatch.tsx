import { useState, useRef } from "react";
import Helpers from "../../utils/helpers";



const Stopwatch = () => {

    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const prom = new Promise(() => {
        console.log(status.current);
        setTimeout(() => {
            if(status.current === 'run') {
                setTime(time + 1000);
            }
        }, 1000);   
    });
    
    
    
      

    return (
        <div>
            <h1>{Helpers.milisecondsToTime(time)}</h1>
            <button onClick={() => {
                status.current = 'run';
                console.log(status.current);
            }}>▶️</button>

            <button onClick={() => {
                console.log(status.current);
                if (status.current !== 'pause') {
                    status.current = 'pause';
                } else {
                    status.current = 'run';
                };
                console.log(status.current);
            }}>⏸️</button>

            <button onClick={() => {
                status.current = 'stop';
                setTime(0);
            }}>⏹️</button>                    
        </div>
    );
};

export default Stopwatch;
