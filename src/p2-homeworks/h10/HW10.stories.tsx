import {Meta} from '@storybook/react';
import HW10 from './HW10';
import {Provider} from 'react-redux';
import store from './bll/store';


export default {
    title: 'Home works/HW10',
    component: HW10,
    decorators: [(storyFn) => <Provider store={store}>{storyFn()}</Provider>]
} as Meta

export const HW10BaseExample = () => <HW10/>