import React, {useEffect, useState} from "react";
import "./RainDrop.scss";
import {Raindrop} from "../../interface/Raindrop";

const RainDrop = () => {

    const [numberOfRaindrops, setNumberOfRaindrops] = useState(1000);
    const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

    function createRaindrop() {
        if (raindrops.length < numberOfRaindrops) {
            const left = Math.random() * window.innerWidth;
            const duration = 2000 + Math.random() * 2000;
            setRaindrops((prevRaindrops) => [
                ...prevRaindrops,
                {left, duration},
            ]);
        }
    }

    useEffect(() => {

        const interval = setInterval(createRaindrop, 10);

        return () => {
            clearInterval(interval);
        };
    }, [raindrops, numberOfRaindrops]);

    return (
        <div className={'rainDrop'}>
            {raindrops.map((raindrop: any, index: number) => (
                <div
                    key={index}
                    className="raindrop"
                    style={{
                        left: raindrop.left + "px",
                        animationDuration: raindrop.duration / 1000 + "s",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default RainDrop;
