import HW12, {THW12Props} from './HW12';
import {Meta, Story} from '@storybook/react';
import {Provider} from 'react-redux';
import store from '../h10/bll/store';


export default {
    title: 'Home works/HW12',
    component: HW12,
    decorators: [(storyFn) => <Provider store={store}>{storyFn()}</Provider>]
} as Meta

const Template: Story<THW12Props> = (args) => <HW12 {...args}/>

export const HW12BaseThemeExample = Template.bind({})
HW12BaseThemeExample.args = {
    theme: 'some'
}

export const HW12RedThemeExample = Template.bind({})
HW12RedThemeExample.args = {
    theme: 'red'
}

export const HW12MyThemeExample = Template.bind({})
HW12MyThemeExample.args = {
    theme: 'myTheme'
}