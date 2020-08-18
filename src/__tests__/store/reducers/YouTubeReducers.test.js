import {
    resetYouTubeSearchKeyword,
    resetYouTubeSearchResults,
    setYouTubeSearchKeyword,
    setYouTubeSearchResults,
    updateYouTubeSearchResults
} from "../../../store/actions/YouTubeActions";
import {youTubeKeywordReducer, YouTubeReducers} from "../../../store/reducers/YouTubeReducers";

jest.mock('../../../store/Store');

describe('YouTubeReducers', () => {
    it('should save result on action request', () => {
        const action = setYouTubeSearchResults('abc');
        const state = {};

        expect(YouTubeReducers(state, action)).toEqual('abc');
    });

    it('should return initial state on reset', () => {
        const action = resetYouTubeSearchResults();
        const state = {};

        expect(YouTubeReducers(state, action)).toEqual(null);
    });

    it('should update result on action request', function () {
        const existingResult = {'prop1': 'value1', items: [1, 2, 3]};
        const nextResult = {'prop2': 'value2', items: [4, 5, 6]};

        let state = {};

        const saveResultAction = setYouTubeSearchResults(existingResult);
        state = YouTubeReducers(state, saveResultAction);

        const updateAction = updateYouTubeSearchResults(nextResult);

        expect(YouTubeReducers(state, updateAction)).toEqual({'prop2': 'value2', items: [1, 2, 3, 4, 5, 6]});
    });

    it('should save new result on action request when no result pre exist', function () {
        const nextResult = {'prop2': 'value2', items: [4, 5, 6]};

        let state = {};

        const resetResultAction = resetYouTubeSearchResults();
        state = YouTubeReducers(state, resetResultAction);

        const updateAction = updateYouTubeSearchResults(nextResult);

        expect(YouTubeReducers(state, updateAction)).toEqual({'prop2': 'value2', items: [4, 5, 6]});
    });
});

describe('youTubeKeywordReducer', () => {
    it('should return action payload', () => {
        const action = setYouTubeSearchKeyword('abc');
        const state = {};

        expect(youTubeKeywordReducer(state, action)).toEqual('abc');
    });

    it('should return initial state on reset', () => {
        const action = resetYouTubeSearchKeyword();
        const state = {};

        expect(youTubeKeywordReducer(state, action)).toEqual(null);
    });
});
