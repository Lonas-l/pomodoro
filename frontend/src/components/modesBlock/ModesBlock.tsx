import React from "react";
import './ModesBlock.scss';
import {modesData} from "./modesData";
interface InputSettingsBlockProps {
    mode: string;
}
const ModesBlock: React.FC<InputSettingsBlockProps> = ({mode}) => {

    const modeData = modesData[mode] || modesData.pomodoro;

    return (
        <div className={'modesBlock ' + modeData.className}>
            <modeData.icon />
            <p>{modeData.text}</p>
        </div>
    );
};

export default ModesBlock;
