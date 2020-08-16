import {searchByKeyword} from "../../http/YoutubeClient";
import * as Client from "../../http/Client";
import * as UrlHelper from "../../helpers/UrlHelper";

describe('YoutubeClient', function () {

    describe('searchByKeyword', function () {
        beforeEach(()=>{
            spyOn(Client, 'get').and.returnValue(searchResponse);
            spyOn(UrlHelper, 'getYTSearchUrl').and.returnValue("YouTubeSearchBykeywordUrl");
        });

        const searchResponse = {
            data: [{
                id: "video1",
                url: "video1_url"
            },{
                id: "video1",
                url: "video1_url"
            }]
        };

        it('should fetch video results by given keyword', async function () {
            const data = await searchByKeyword("testKeyword");

            expect(data).toEqual([{
                id: "video1",
                url: "video1_url"
            },{
                id: "video1",
                url: "video1_url"
            }]);

            expect(Client.get).toHaveBeenCalledWith("YouTubeSearchBykeywordUrl", {"key": "AIzaSyAJ2wbkcR5-AMEuy4orWFyOOaMnb5ETxns", "maxResults": 25, "part": "snippet", "q": "testKeyword"});
        });
    });
});
