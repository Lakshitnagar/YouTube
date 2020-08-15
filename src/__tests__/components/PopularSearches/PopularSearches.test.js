import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import PopularSearches from "../../../components/PopularSearches/PopularSearches";

describe('PopularSearches', function () {
    it('should render and match snapshot', function () {
        const component = <PopularSearches/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
