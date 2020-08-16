import {getYTSearchUrl} from "../../helpers/UrlHelper";

describe('getYTSearchUrl', function () {
    it('should return youtube url to search by keyword', function () {
        const url = getYTSearchUrl();

        expect(url).toEqual("https://www.googleapis.com/youtube/v3/search");
    });
});
