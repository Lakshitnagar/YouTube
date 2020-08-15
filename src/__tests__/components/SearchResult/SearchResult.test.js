import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import SearchResult from "../../../components/SearchResult/SearchResult";

describe('SearchResult', function () {
    it('should render and match snapshot', function () {
        const component = <SearchResult/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
