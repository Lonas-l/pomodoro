import React, {useEffect, useState} from "react";
import "./HomePage.scss";
import Timer from "../../components/Timer/Timer";
import Settings from "../../components/Settings/Settings";
import ModesBlock from "../../components/modesBlock/ModesBlock";
import {DEFAULT_USER_SETTINGS_PROPS} from "../../constants/constants";
import RainDrop from "../../components/Rain/RainDrop";
import {fetchTimerSettings, updateTimerSettings} from "../../service/authService";
import TimersButton from "../../components/TimersButton/TimersButton";
import IterationCount from "../../components/IterationCount/IterationCount";

interface HomePageProps {
    timerSettings: DEFAULT_USER_SETTINGS_PROPS,
    setTimerSettings: (value: DEFAULT_USER_SETTINGS_PROPS) => void,
    token: string
}

function HomePage({timerSettings, setTimerSettings, token}: HomePageProps) {

    const [isPause, setIsPause] = useState<boolean>(true);
    const [isSettingsActive, setIsSettingsActive] = useState<boolean>(false);
    const getSettings = () => {
        fetchTimerSettings(token)
            .then((settings) => {
                if (settings) {
                    setTimerSettings(settings);
                }
            });
    };
    const next = () => {
        if (currentMode === "pomodoro") {
            if (iterationCount % +timerSettings.breakInterval !== 0) {
                setCurrentMode("shortBreak");
            } else {
                setCurrentMode("longBreak");
            }
        } else if (currentMode === "shortBreak" || currentMode === "longBreak") {
            setCurrentMode("pomodoro");
            setIterationCount(iterationCount + 1);
        }

        setTimeout(() => {
            if ((currentMode === "pomodoro" && timerSettings.isAutoStartBreaks) || (currentMode === "longBreak" || currentMode === "shortBreak" && timerSettings.isAutoStartPomodoro)) {
                setIsPause(false);
            } else {
                setIsPause(true);
            }
        }, 0);
    };
    const updateSettings = async (settings: DEFAULT_USER_SETTINGS_PROPS) => {
        updateTimerSettings(token, settings).then(() => getSettings());
    };

    useEffect(() => {
        getSettings();
    }, []);

    const [currentMode, setCurrentMode] = useState<string>("pomodoro");

    const [iterationCount, setIterationCount] = useState<number>(1);

    return (
        <div className={"homePage " + currentMode}>

            {timerSettings.isRain && <RainDrop/>}

            {isSettingsActive &&
                <div className={"settingsBlock"}>
                    <Settings updateTimerSettings={updateSettings}
                              timerSettings={timerSettings} currentMode={currentMode}
                              setIsSettingsActive={setIsSettingsActive}/>
                </div>}
            <ModesBlock mode={currentMode}/>

            <Timer minutes={
                currentMode == "pomodoro" ? +timerSettings.durationPomodoro : currentMode == "shortBreak" ? +timerSettings.shortBreakDuration : +timerSettings.longBreakDuration}
                   mode={currentMode}
                   isPause={isPause}
                   setIsPause={setIsPause}
                   next={next}
                   isAutoStartBreaks={timerSettings.isAutoStartBreaks}
                   isAutoStartPomodoro={timerSettings.isAutoStartPomodoro}
                   isSoundEnabled={timerSettings.isSoundEnabled}
            />

            <TimersButton currentMode={currentMode} isPause={isPause} setIsPause={setIsPause} next={next}
                          setIsSettingsActive={setIsSettingsActive} isSettingsActive={isSettingsActive}/>

            <IterationCount count={iterationCount}/>
        </div>
    );
}

export default HomePage;
