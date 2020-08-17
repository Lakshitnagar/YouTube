import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import VideoListItem from "../../../components/VideoListItem/VideoListItem";
import * as TimeUtil from "../../../Utils/TimeUtil";

describe('VideoListItem', function () {
    beforeEach(()=>{
        spyOn(TimeUtil, 'getVideoDisplayDate').and.returnValue('DISPLAY_DATE');
    });
    it('should render and match snapshot', function () {
        const videoDetail = {
            snippet: {
                thumbnails: {
                    medium: {url: 'THUMBNAIL_URL'}
                },
                title: 'VIDEO_TITLE',
                channelTitle: 'CHANNEL_TITLE',
                publishedAt: 'PUBLISHED_AT'
            }
        };

        const component = <VideoListItem videoDetail={videoDetail}/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
        expect(TimeUtil.getVideoDisplayDate).toHaveBeenCalledWith('PUBLISHED_AT');
    });
});
