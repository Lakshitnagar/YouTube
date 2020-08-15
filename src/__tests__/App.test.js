import React from 'react';
import App from "../App";
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";

describe('App', function () {
    it('should render and match snapshot', function () {
        const component = <App />;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper.childAt(0))).toMatchSnapshot();
    });
});
