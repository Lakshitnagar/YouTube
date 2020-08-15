import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";

import AppHeader from "../../../components/AppHeader/AppHeader";

describe('AppHeader', function () {
    it('should render and match snapshot', function () {
        const component = <AppHeader />;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
