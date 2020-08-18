import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import {mapStateToProps, SearchResult} from "../../../components/SearchResult/SearchResult";
import * as SearchResultHelper from "../../../helpers/SearchResultHelper";
import * as YouTubeActions from "../../../store/actions/YouTubeActions";
import {mapDispatchToProps} from "../../../components/SearchResult/SearchResult";

const mockFetchYouTubeVideosByKeywordNextPage = jest.fn();

describe('SearchResult', function () {

    it('should render and match snapshot', function () {
        const component = <SearchResult videoList={[{}, {}, {}]} searchKeyword={'hello kitty'}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render and match snapshot on error', function () {
        const component = <SearchResult isError={true}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render and match snapshot on empty result', function () {
        const component = <SearchResult videoList={[]}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should not fetch next page results if not scrolled to bottom', function () {
        const component = <SearchResult videoList={[]} fetchYouTubeVideosByKeywordNextPage={mockFetchYouTubeVideosByKeywordNextPage}/>;

        const wrapper = shallow(component);

        wrapper.find('.search').simulate('scroll', {
            target: {
                scrollTop: 25,
                clientHeight: 50,
                scrollHeight: 100
            }
        });

        expect(mockFetchYouTubeVideosByKeywordNextPage).toHaveBeenCalledTimes(0);
    });

    it('should fetch next page results scrolled to bottom', function () {
        const component = <SearchResult videoList={[]} fetchYouTubeVideosByKeywordNextPage={mockFetchYouTubeVideosByKeywordNextPage}
        searchKeyword={'keyword'} nextPageToken={'nextPageToken'}/>;

        const wrapper = shallow(component);

        wrapper.find('.search').simulate('scroll', {
            target: {
                scrollTop: 50,
                clientHeight: 50,
                scrollHeight: 100
            }
        });

        expect(mockFetchYouTubeVideosByKeywordNextPage).toHaveBeenCalledWith('keyword', 'nextPageToken');
    });
});

describe('mapStateToProps', function () {
    beforeEach(()=>{
        spyOn(SearchResultHelper, 'getVideoList').and.returnValue('VIDEO_LIST');
        spyOn(SearchResultHelper, 'getNextPageToken').and.returnValue('NEXT_PAGE_TOKEN');
    });

    it('should add some processed state variables to props', function () {
        const state = {
            youtubeSearchResults: {},
            youtubeSearchKeyword: 'SEARCH_KEYWORD',
            presentationConfig: {
                apiStatus: ['YOUTUBE_SEACRH_API']
            }
        };
        const actual = mapStateToProps(state);

        expect(actual).toEqual({
            videoList: 'VIDEO_LIST',
            nextPageToken: 'NEXT_PAGE_TOKEN',
            searchKeyword: 'SEARCH_KEYWORD',
            isError: true
        });
    });
});

describe('mapDispatchToProps', () => {
    it('should add dispatches to props', () => {
        const dispatch = jest.fn();
        spyOn(YouTubeActions, 'fetchYouTubeVideosByKeywordNextPage').and.returnValue(mockFetchYouTubeVideosByKeywordNextPage);

        const actual = mapDispatchToProps(dispatch);

        actual.fetchYouTubeVideosByKeywordNextPage('hello', 'nextPageToken');

        expect(Object.getOwnPropertyNames(actual)).toEqual(['fetchYouTubeVideosByKeywordNextPage']);
        expect(dispatch).toHaveBeenCalledWith(mockFetchYouTubeVideosByKeywordNextPage);
    });
});
