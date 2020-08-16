import {get} from './Client';
import {getYTSearchUrl} from "../helpers/UrlHelper";

export async function searchByKeyword(keyword) {
    const YTSearchUrl = getYTSearchUrl();
    const res = await get(YTSearchUrl);
    return res.data;
}
