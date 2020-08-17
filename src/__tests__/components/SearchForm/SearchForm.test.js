import React, {useState as useStateMock} from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import {mapDispatchToProps, SearchForm} from "../../../components/SearchForm/SearchForm";
import * as YouTubeActions from "../../../store/actions/YouTubeActions";

jest.mock('../../../assets/images/search_18dp.svg', () => 'mockSearchIcon');
const mockFetchYouTubeVideosByKeyword = jest.fn();
const mockSetSearchKeyword = jest.fn();
const mockPreventDefault = jest.fn();

jest.mock("react", () => {
    return {
        ...jest.requireActual("react"),
        useState: jest.fn()
    }
});

describe('SearchForm', function () {

    beforeEach(() => {
        useStateMock.mockImplementation(init => [init, mockSetSearchKeyword]);
    });

    it('should render and match snapshot', function () {
        const component = <SearchForm/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should save input value in local store on change', function () {

        const component = <SearchForm/>;

        const wrapper = shallow(component);

        wrapper.find('input').simulate('change', {
            target: {
                value: 'changedText'
            }
        });

        expect(mockSetSearchKeyword).toHaveBeenCalledWith('changedText');
    });

    it('should not search for youtube videos on form submit when user does not enter search keyword', function () {
        const component = <SearchForm fetchYouTubeVideosByKeyword={mockFetchYouTubeVideosByKeyword}/>;

        const wrapper = shallow(component);

        wrapper.find('form').simulate('submit', {
            preventDefault: mockPreventDefault
        });

        expect(mockPreventDefault).toHaveBeenCalled();
        expect(mockFetchYouTubeVideosByKeyword).toHaveBeenCalledTimes(0);
    });

    it('should search for youtube videos on form submit', function () {
        useStateMock.mockImplementation(init => ['h', mockSetSearchKeyword]);

        const component = <SearchForm fetchYouTubeVideosByKeyword={mockFetchYouTubeVideosByKeyword}/>;

        const wrapper = shallow(component);

        wrapper.find('form').simulate('submit', {
            preventDefault: mockPreventDefault
        });

        expect(mockPreventDefault).toHaveBeenCalled();
        expect(mockFetchYouTubeVideosByKeyword).toHaveBeenCalled();
    });
});

describe('mapDispatchToProps', () => {
    it('should add dispatches to props', () => {
        const dispatch = jest.fn();
        spyOn(YouTubeActions, 'fetchYouTubeVideosByKeyword').and.returnValue(mockFetchYouTubeVideosByKeyword);

        const actual = mapDispatchToProps(dispatch);

        actual.fetchYouTubeVideosByKeyword('hello');

        expect(Object.getOwnPropertyNames(actual)).toEqual(['fetchYouTubeVideosByKeyword']);
        expect(dispatch).toHaveBeenCalledWith(mockFetchYouTubeVideosByKeyword);
    });
});
