import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import {mapStateToProps, SearchResult} from "../../../components/SearchResult/SearchResult";
import * as SearchResultHelper from "../../../helpers/SearchResultHelper";

describe('SearchResult', function () {

    it('should render and match snapshot', function () {
        const component = <SearchResult videoList={[{}, {}, {}]}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should render and match snapshot on error', function () {
        const component = <SearchResult isError={true}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});

describe('mapStateToProps', function () {
    beforeEach(()=>{
        spyOn(SearchResultHelper, 'getVideoList').and.returnValue('VIDEO_LIST');
    });

    it('should add some processed state variables to props', function () {
        const state = {
            youtubeSearchResults: {},
            presentationConfig: {
                apiStatus: ['YOUTUBE_SEACRH_API']
            }
        };
        const actual = mapStateToProps(state);

        expect(actual).toEqual({
            videoList: 'VIDEO_LIST',
            isError: true
        });
    });
});
