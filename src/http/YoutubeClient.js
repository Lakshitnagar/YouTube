import {get} from './Client';
import {getYTSearchUrl} from "../helpers/UrlHelper";

const searchByKeywordParams = {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: 'AIzaSyDTtjYkL2ZIgGLSY8Sn2yEUev6zSk8nwxI'
};

export async function searchByKeyword(keyword) {
    const YTSearchUrl = getYTSearchUrl();
    const res = await get(YTSearchUrl, {...searchByKeywordParams, ...{q: keyword}});
    return res.data;
}

export async function searchByKeywordNextPage(keyword, nextPageToken) {
    const YTSearchUrl = getYTSearchUrl();
    const res = await get(YTSearchUrl, {...searchByKeywordParams, ...{q: keyword, pageToken: nextPageToken?nextPageToken:''}});
    return res.data;
}
