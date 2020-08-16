import {getVideoList} from "../../helpers/SearchResultHelper";

describe('getVideoList', function () {
    it('should return video list as empty when search result does not exist', function () {
        const videoList = getVideoList(null);

        expect(videoList).toEqual([]);
    });

    it('should return video list from search result', function () {
        const videoList = getVideoList({items: 'VIDEO_LIST'});

        expect(videoList).toEqual("VIDEO_LIST");
    });
});
