import React, {useEffect, useState} from "react";
import alarm from "../../assets/sounds/alarm.wav";
import "./Timer.scss";
interface TimerProps {
    minutes: number,
    isPause: boolean,
    next: () => void,
    setIsPause: (value: boolean) => void,
    isSoundEnabled: boolean,
    isAutoStartPomodoro: boolean,
    isAutoStartBreaks: boolean,
    mode: string,
}

const Timer: React.FC<TimerProps> = ({
                                         minutes,
                                         isPause,
                                         setIsPause,
                                         next,
                                         isSoundEnabled,
                                         isAutoStartBreaks,
                                         isAutoStartPomodoro,
                                         mode
                                     }) => {

    const [seconds, setSeconds] = useState(1);

    function play() {
        new Audio(alarm).play().then(r => {
        });
    }

    useEffect(() => {
        setSeconds(1);
    }, [minutes]);

    useEffect(() => {
        let timerInterval: NodeJS.Timeout | undefined;

        if (!isPause && seconds > 0) {
            timerInterval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {

            if (timerInterval) {
                clearInterval(timerInterval);
            }

            setIsPause(true);
            if (isSoundEnabled) play();

            setTimeout(() => {
                next();
            }, isSoundEnabled ? 2000 : 0);

        }

        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, [isPause, seconds]);

    return (
        <div className={"time" + (isPause ? " paused" : " resume")}>
            {seconds < 600 ? "0" : ""}
            {Math.floor(seconds / 60)}
            <br/>
            {seconds % 60 < 10 ? "0" : ""}
            {seconds % 60}
        </div>
    );
};

export default Timer;
