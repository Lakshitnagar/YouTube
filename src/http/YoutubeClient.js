import {get} from './Client';
import {getYTSearchUrl} from "../helpers/UrlHelper";

const searchByKeywordParams = {
    part: 'snippet',
    maxResults: 25,
    key: 'QUl6YVN5QUoyd2JrY1I1LUFNRXV5NG9yV0Z5T09hTW5iNUVUeG5z'
};

export async function searchByKeyword(keyword) {
    const YTSearchUrl = getYTSearchUrl();
    const res = await get(YTSearchUrl, {...searchByKeywordParams, ...{q: keyword}});
    return res.data;
}
