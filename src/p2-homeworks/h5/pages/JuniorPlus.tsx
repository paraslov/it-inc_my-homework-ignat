import React from 'react'
import HW12 from '../../h12/HW12';
import {Provider} from 'react-redux';
import store from '../../h10/bll/store';

function JuniorPlus() {
    return (
        <div>
            <hr/>
            Junior Plus homeworks will be placed here soon enough...
            <hr/>
            <Provider store={store} >
                <HW12/>
            </Provider>
            {/*<HW13/>*/}
            {/*<HW14/>*/}
            {/*<HW15/>*/}
            {/*<HW16/>*/}

        </div>
    )
}

export default JuniorPlus