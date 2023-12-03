import React from "react";
import './InputSettingsBlock.scss';
interface InputSettingsProps {
    label: string;
    value: number;
    minValue: number;
    onChange: (value: number) => void;
    mode : string
}

const InputSettingsBlock: React.FC<InputSettingsProps> = ({ label, value, minValue, onChange, mode }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(+e.target.value);
    };

    return (
        <div className={'inputSettingsBlock ' + mode + "Input"}>
            <label htmlFor={label}>{label}</label>
            <input
                data-testId={label.replace(' ', '').toLowerCase()}
                min={minValue}
                className={'inputSettings'}
                type="number"
                value={value === 0 ? '' : value}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputSettingsBlock;
