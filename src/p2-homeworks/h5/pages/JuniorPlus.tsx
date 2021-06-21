import React from 'react'
import HW12 from '../../h12/HW12';
import {Provider} from 'react-redux';
import store from '../../h10/bll/store';
import {HW13} from '../../h13/HW13';

function JuniorPlus() {
    return (
        <div>
            <hr/>
            <Provider store={store} >
                <HW12/>
                <hr/>
                <HW13/>
            </Provider>
            {/*<HW14/>*/}
            {/*<HW15/>*/}
            {/*<HW16/>*/}

        </div>
    )
}

export default JuniorPlus