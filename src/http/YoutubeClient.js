import {get} from './Client';
import {getYTSearchUrl} from "../helpers/UrlHelper";

const searchByKeywordParams = {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: 'AIzaSyAJ2wbkcR5-AMEuy4orWFyOOaMnb5ETxns'
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
