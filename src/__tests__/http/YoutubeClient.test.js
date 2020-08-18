import {searchByKeyword, searchByKeywordNextPage} from "../../http/YoutubeClient";
import * as Client from "../../http/Client";
import * as UrlHelper from "../../helpers/UrlHelper";

describe('YoutubeClient', function () {

    describe('searchByKeyword', function () {
        beforeEach(() => {
            spyOn(Client, 'get').and.returnValue(searchResponse);
            spyOn(UrlHelper, 'getYTSearchUrl').and.returnValue("YouTubeSearchBykeywordUrl");
        });

        const searchResponse = {
            data: [{
                id: "video1",
                url: "video1_url"
            }, {
                id: "video1",
                url: "video1_url"
            }]
        };

        it('should fetch video results by given keyword', async function () {
            const data = await searchByKeyword("testKeyword");

            expect(data).toEqual([{
                id: "video1",
                url: "video1_url"
            }, {
                id: "video1",
                url: "video1_url"
            }]);

            expect(Client.get).toHaveBeenCalledWith("YouTubeSearchBykeywordUrl", {
                "key": "AIzaSyDTtjYkL2ZIgGLSY8Sn2yEUev6zSk8nwxI",
                "maxResults": 25,
                "part": "snippet",
                "q": "testKeyword",
                "type": "video"
            });
        });
    });

    describe('searchByKeywordNextPage', function () {
        beforeEach(() => {
            spyOn(Client, 'get').and.returnValue(searchResponse);
            spyOn(UrlHelper, 'getYTSearchUrl').and.returnValue("YouTubeSearchBykeywordUrl");
        });

        const searchResponse = {
            data: [{
                id: "video1",
                url: "video1_url"
            }, {
                id: "video1",
                url: "video1_url"
            }]
        };

        it('should fetch video results by given keyword and nextPageToken', async function () {
            const data = await searchByKeywordNextPage("testKeyword", "nextPageToken");

            expect(data).toEqual([{
                id: "video1",
                url: "video1_url"
            }, {
                id: "video1",
                url: "video1_url"
            }]);

            expect(Client.get).toHaveBeenCalledWith("YouTubeSearchBykeywordUrl", {
                "key": "AIzaSyDTtjYkL2ZIgGLSY8Sn2yEUev6zSk8nwxI",
                "maxResults": 25,
                "part": "snippet",
                "q": "testKeyword",
                "pageToken": "nextPageToken",
                "type": "video"
            });
        });

        it('should fetch video results by given keyword but not nextPageToken', async function () {
            const data = await searchByKeywordNextPage("testKeyword");

            expect(data).toEqual([{
                id: "video1",
                url: "video1_url"
            }, {
                id: "video1",
                url: "video1_url"
            }]);

            expect(Client.get).toHaveBeenCalledWith("YouTubeSearchBykeywordUrl", {
                "key": "AIzaSyDTtjYkL2ZIgGLSY8Sn2yEUev6zSk8nwxI",
                "maxResults": 25,
                "part": "snippet",
                "q": "testKeyword",
                "pageToken": "",
                "type": "video"
            });
        });
    });
});
