import {Meta} from '@storybook/react';
import {HW13} from './HW13';
import {Provider} from 'react-redux';
import store from '../h10/bll/store';


export default {
    title: 'Home works/HW13',
    component: HW13,
    decorators: [storyFn => <Provider store={store}>{storyFn()}</Provider>]
} as Meta

export const HW13BaseExample = () => <HW13/>