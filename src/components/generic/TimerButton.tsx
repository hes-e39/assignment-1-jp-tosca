
type TimerButtonProps = {
    onClickParam: () => void;
    timerButtonLabel: string;
}

const TimerButton = ({onClickParam, timerButtonLabel}: TimerButtonProps) => {
    return (
        <button onClick={onClickParam}> {timerButtonLabel} </button>
    );
}

export default TimerButton;