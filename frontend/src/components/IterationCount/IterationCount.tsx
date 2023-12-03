import React from "react";
import "./IterationCount.scss";

interface IterationCountProps {
    count: number;
}

const IterationCount: React.FC<IterationCountProps> = ({count}) => {

    if (count > 0) {
        return (
            <span data-testId={'iterationCount'} className={"iterationCount"}>
                Your iteration: {count}
            </span>
        );
    } else
        return (<></>);
};

export default IterationCount;
