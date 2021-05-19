import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const handleChange = (event: any, newValue: number | number[]) => {
        if (newValue instanceof Array) {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{display: 'flex', marginLeft: '10px', justifyContent: 'space-between', width: '180px'}}>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>

            <div style={{display: 'flex', marginLeft: '10px', justifyContent: 'space-between', width: '200px'}}>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={handleChange}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
