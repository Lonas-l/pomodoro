import exp from "constants";

export const TIMERMODE: string[] = ["pomodoro", "shortBreak", "longBreak"];

export interface DEFAULT_USER_SETTINGS_PROPS {
    durationPomodoro: string;
    shortBreakDuration: string;
    longBreakDuration: string;
    isAutoStartBreaks: boolean;
    isAutoStartPomodoro: boolean;
    isSoundEnabled: boolean;
    isRain: boolean;
    breakInterval: string;
}

export const DEFAULT_USER_SETTINGS: DEFAULT_USER_SETTINGS_PROPS = {
    durationPomodoro: "10",
    shortBreakDuration: "5",
    longBreakDuration: "15",
    isAutoStartBreaks: false,
    isAutoStartPomodoro: false,
    isSoundEnabled: false,
    isRain: false,
    breakInterval: "4"
};

export const TOAST_SETTINGS : {} = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "dark",
};