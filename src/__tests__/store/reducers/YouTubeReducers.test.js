import {resetYouTubeSearchResults, setYouTubeSearchResults} from "../../../store/actions/YouTubeActions";
import {YouTubeReducers} from "../../../store/reducers/YouTubeReducers";

jest.mock('../../../store/Store');

describe('YouTubeReducers', () => {
    it('should return action payload', () => {
        const action = setYouTubeSearchResults('abc');
        const state = {};

        expect(YouTubeReducers(state, action)).toEqual('abc');
    });

    it('should return initial state on reset', () => {
        const action = resetYouTubeSearchResults();
        const state = {};

        expect(YouTubeReducers(state, action)).toEqual(null);
    });
});
