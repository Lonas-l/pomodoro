import FocusSVG from "../SVGIcons/FocusSVG";
import BreakSVG from "../SVGIcons/BreakSVG";

export interface ModeData {
    text: string;
    icon: typeof FocusSVG;
    className: string;
}

export const modesData: Record<string, ModeData> = {
    pomodoro: {
        text: "Focus",
        icon: FocusSVG,
        className: 'pomodoroStyle',
    },
    shortBreak: {
        text: "Short Break",
        icon:  BreakSVG,
        className: 'shortBreakStyle',
    },
    longBreak: {
        text: "Long Break",
        icon:  BreakSVG,
        className: 'longBreakStyle',
    },
};
