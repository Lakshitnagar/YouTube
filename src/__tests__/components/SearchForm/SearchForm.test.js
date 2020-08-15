import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import SearchForm from "../../../components/SearchForm/SearchForm";

jest.mock('../../../assets/images/search_18dp.svg', () => 'mockSearchIcon');

describe('SearchForm', function () {
    it('should render and match snapshot', function () {
        const component = <SearchForm />;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
