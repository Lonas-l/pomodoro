import React from "react";
import './InputSettingsBlock.scss';
interface InputSettingsProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    mode : string
}

const InputSettingsBlock: React.FC<InputSettingsProps> = ({ label, value, onChange, mode }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(+e.target.value);
    };

    return (
        <div className={'inputSettingsBlock ' + mode + "Input"}>
            <label htmlFor={label}>{label}</label>
            <input
                className={'inputSettings'}
                type="number"
                value={value == 0 ? "" : value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputSettingsBlock;
