import React from 'react';
import {shallow, mount} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import {mapDispatchToProps, PopularSearches} from "../../../components/PopularSearches/PopularSearches";
import * as YouTubeActions from "../../../store/actions/YouTubeActions";

const mockFetchYouTubeVideosByKeyword = jest.fn();

describe('PopularSearches', function () {
    it('should render and match snapshot', function () {
        const component = <PopularSearches/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should fetch and save youtube search result on clicking a chip with keyword as text on the chip', function () {
        const component = <PopularSearches fetchYouTubeVideosByKeyword={mockFetchYouTubeVideosByKeyword}/>;

        const wrapper = mount(component);

        wrapper.find('Chip').at(3).simulate('click');
        expect(mockFetchYouTubeVideosByKeyword).toHaveBeenCalledWith('Thrillers');
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
