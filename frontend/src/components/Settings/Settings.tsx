import React, {useState} from "react";
import "./Settings.scss";
import InputSettingsBlock from "./components/InputSettingsBlock";
import Button from "../Button/Button";
import {DEFAULT_USER_SETTINGS_PROPS} from "../../constants/constants";

interface SettingsProps {
    currentMode: string;
    setIsSettingsActive: (value: boolean) => void;
    timerSettings: DEFAULT_USER_SETTINGS_PROPS;
    updateTimerSettings: (value: DEFAULT_USER_SETTINGS_PROPS) => Promise<void>;
}

const Settings: React.FC<SettingsProps> = ({
                                               timerSettings,
                                               updateTimerSettings,
                                               currentMode,
                                               setIsSettingsActive
                                           }) => {

    const [initialSettings, setInitialSettings] = useState<DEFAULT_USER_SETTINGS_PROPS>(timerSettings);

    const inputFields = [
        {
            label: "Pomodoro",
            value: initialSettings.durationPomodoro,
            setState: (value: string) => setInitialSettings({...initialSettings, durationPomodoro: value})
        },
        {
            label: "Short Break",
            value: initialSettings.shortBreakDuration,
            setState: (value: string) => setInitialSettings({...initialSettings, shortBreakDuration: value})
        },
        {
            label: "Long Break",
            value: initialSettings.longBreakDuration,
            setState: (value: string) => setInitialSettings({...initialSettings, longBreakDuration: value})
        },
        {
            label: "Long Break Interval",
            value: initialSettings.breakInterval,
            setState: (value: string) => setInitialSettings({...initialSettings, breakInterval: value})
        },
    ];

    const checkboxFields = [
        {
            label: "Auto Start Breaks",
            value: initialSettings.isAutoStartBreaks,
            setState: (value: boolean) => setInitialSettings({...initialSettings, isAutoStartBreaks: value})
        },
        {
            label: "Auto Start Pomodoro",
            value: initialSettings.isAutoStartPomodoro,
            setState: (value: boolean) => setInitialSettings({...initialSettings, isAutoStartPomodoro: value})
        },
        {
            label: "Sound",
            value: initialSettings.isSoundEnabled,
            setState: (value: boolean) => setInitialSettings({...initialSettings, isSoundEnabled: value})
        },
        {
            label: "Rain",
            value: initialSettings.isRain,
            setState: (value: boolean) => setInitialSettings({...initialSettings, isRain: value})
        },
    ];

    return (
        <div className={"settingsModal " + currentMode}>

            <h2 className={"settingsTitle"}>Settings</h2>

            <div className={"timeBlock"}>
                {inputFields.map((field, index) => (
                    <InputSettingsBlock
                        key={index}
                        mode={currentMode}
                        label={field.label}
                        value={+field.value}
                        onChange={(e) => field.setState(e.toString())}
                    />
                ))}
            </div>

            {checkboxFields.map((item) => (
                <div className={"checkbox"}>
                    <p>{item.label}</p>
                    <label className="toggle-switch">
                        <input type="checkbox" checked={item.value} onChange={() => item.setState(!item.value)}/>
                        <span className="slider"></span>
                    </label>
                </div>
            ))}

            <div className={"buttonsBlock"}>
                <Button className={"closeModalButton"} mode={""} variant={"secondary"}
                        onClick={() => {
                            setInitialSettings(timerSettings);
                            setIsSettingsActive(false);
                        }}>
                    Cancel
                </Button>

                <Button className={"saveModalButton"} mode={""} variant={"secondary"}
                        onClick={() => {
                            updateTimerSettings(initialSettings).then(() => {});
                            setIsSettingsActive(false);
                        }}>
                    Save
                </Button>
            </div>

        </div>
    );
};

export default Settings;
