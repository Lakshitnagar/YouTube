import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import VideoListItem from "../../../components/VideoListItem/VideoListItem";

describe('VideoListItem', function () {
    it('should render and match snapshot', function () {
        const videoDetail = {
            snippet: {
                thumbnails: {
                    medium: {url: 'THUMBNAIL_URL'}
                }
            }
        };

        const component = <VideoListItem videoDetail={videoDetail}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });
});
