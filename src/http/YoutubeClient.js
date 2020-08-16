import {get} from './Client';
import {getYTSearchUrl} from "../helpers/UrlHelper";

const searchByKeywordParams = {
    part: 'snippet',
    maxResults: 25,
    key: 'AIzaSyAJ2wbkcR5-AMEuy4orWFyOOaMnb5ETxns'
};

export async function searchByKeyword(keyword) {
    const YTSearchUrl = getYTSearchUrl();
    const res = await get(YTSearchUrl, {...searchByKeywordParams, ...{q: keyword}});
    return res.data;
}
