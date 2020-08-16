import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {
    fetchYouTubeVideosByKeyword,
    resetYouTubeSearchResults,
    setYouTubeSearchResults
} from "../../../store/actions/YouTubeActions";
import {searchByKeyword} from "../../../http/YoutubeClient";

jest.mock('../../../http/YoutubeClient');

describe('YouTubeActions', () => {

    describe('setYouTubeSearchResults', () => {
        it('should dispatch setYouTubeSearchResults action', () => {
            const payload = 123;
            const type = 'SET_YOU_TUBE_SEARCH_RESULTS';
            const action = setYouTubeSearchResults(payload);

            expect(action).toEqual({type, payload})
        });
    });

    describe('resetYouTubeSearchResults', () => {
        it('should return action type and payload', () => {
            const type = 'RESET_YOU_TUBE_SEARCH_RESULTS';
            const action = resetYouTubeSearchResults();

            expect(action).toEqual({type})
        });
    });

    describe('fetchYouTubeVideosByKeyword', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});

        beforeEach(() => {
            store.clearActions();
        });

        it('should fetch results and save it to redux', async () => {
            const searchByKeywordResponse = 'SEARCH_BY_KEYWORD_RESPONSE';

            searchByKeyword.mockResolvedValue(searchByKeywordResponse);

            await fetchYouTubeVideosByKeyword('keyword')(store.dispatch);

            const actions = store.getActions();
            expect(actions).toEqual([{"payload": "SEARCH_BY_KEYWORD_RESPONSE", "type": "SET_YOU_TUBE_SEARCH_RESULTS"}]);
        });
    });
});
