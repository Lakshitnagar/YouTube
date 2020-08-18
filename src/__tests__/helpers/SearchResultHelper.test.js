import {getNextPageToken, getVideoList} from "../../helpers/SearchResultHelper";

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

describe('getNextPageToken', function () {
    it('should return empty nextPageToken when search result does not exist', function () {
        const nextPageToken = getNextPageToken(null);

        expect(nextPageToken).toEqual('');
    });

    it('should return nextPageToken from search result', function () {
        const nextPageToken = getNextPageToken({nextPageToken: 'NEXT_PAGE_TOKEN'});

        expect(nextPageToken).toEqual("NEXT_PAGE_TOKEN");
    });
});
