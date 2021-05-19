import React from 'react';
import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: any, value: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider
                style={{margin: '0 10px', height: '10px'}}
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
