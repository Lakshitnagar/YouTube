import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import {mapDispatchToProps, PopularSearches} from "../../../components/PopularSearches/PopularSearches";
import * as YouTubeActions from "../../../store/actions/YouTubeActions";

describe('PopularSearches', function () {
    it('should render and match snapshot', function () {
        const component = <PopularSearches/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});

describe('mapDispatchToProps', () => {
    it('should add dispatches to props', () => {
        const mockFetchYouTubeVideosByKeyword = jest.fn();
        const dispatch = jest.fn();
        spyOn(YouTubeActions, 'fetchYouTubeVideosByKeyword').and.returnValue(mockFetchYouTubeVideosByKeyword);

        const actual = mapDispatchToProps(dispatch);

        actual.fetchYouTubeVideosByKeyword('hello');

        expect(Object.getOwnPropertyNames(actual)).toEqual(['fetchYouTubeVideosByKeyword']);
        expect(dispatch).toHaveBeenCalledWith(mockFetchYouTubeVideosByKeyword);
    });
});
