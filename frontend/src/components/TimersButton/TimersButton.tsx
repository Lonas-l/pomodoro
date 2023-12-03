import React from "react";
import "./TimersButton.scss";
import Button from "../Button/Button";
import SettingsSVG from "../SVGIcons/SettingsSVG";
import PlaySVG from "../SVGIcons/PlaySVG";
import PauseSVG from "../SVGIcons/PauseSVG";
import NextSVG from "../SVGIcons/NextSVG";

interface TimersButtonProps {
    setIsPause: (value: boolean) => void,
    setIsSettingsActive: (value: boolean) => void,
    currentMode: string,
    isPause: boolean,
    next: () => void,
    isSettingsActive: boolean
}

const TimersButton: React.FC<TimersButtonProps> = ({
                                                       setIsPause,
                                                       setIsSettingsActive,
                                                       currentMode,
                                                       isPause,
                                                       next,
                                                       isSettingsActive
                                                   }) => {

    const pauseResume = () => {
        setIsPause(!isPause);
    };

    const openSettingModal = () => {
        setIsSettingsActive(!isSettingsActive);
    };


    return (
        <div className="buttons">

            <Button dataTestId={'settingsButton'} className={"rewindButton"} onClick={openSettingModal}
                    variant={"secondary"} mode={currentMode}>
                <SettingsSVG/>
            </Button>

            <Button dataTestId={'playPauseButton'} className={"pomodoroButton"} onClick={pauseResume} variant={"primary"}
                    mode={currentMode}>
                {isPause && <PlaySVG/>}
                {!isPause && <PauseSVG/>}
            </Button>

            <Button dataTestId={'nextButton'} className={"nextButton"} onClick={next} variant={"secondary"} mode={currentMode}>
                <NextSVG/>
            </Button>
        </div>
    );
};

export default TimersButton;
