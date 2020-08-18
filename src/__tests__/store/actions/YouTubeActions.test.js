import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {
    fetchYouTubeVideosByKeyword,
    fetchYouTubeVideosByKeywordNextPage,
    resetYouTubeSearchKeyword,
    resetYouTubeSearchResults,
    setYouTubeSearchKeyword,
    setYouTubeSearchResults,
    updateYouTubeSearchResults
} from "../../../store/actions/YouTubeActions";
import {searchByKeyword, searchByKeywordNextPage} from "../../../http/YoutubeClient";

jest.mock('../../../http/YoutubeClient');

describe('YouTubeActions', () => {

    describe('setYouTubeSearchResults', () => {
        it('should return action type and payload', () => {
            const payload = 123;
            const type = 'SET_YOU_TUBE_SEARCH_RESULTS';
            const action = setYouTubeSearchResults(payload);

            expect(action).toEqual({type, payload})
        });
    });

    describe('updateYouTubeSearchResults', () => {
        it('should return action type and payload', () => {
            const payload = 123;
            const type = 'UPDATE_YOU_TUBE_SEARCH_RESULTS';
            const action = updateYouTubeSearchResults(payload);

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

    describe('setYouTubeSearchKeyword', () => {
        it('should return action type and payload', () => {
            const payload = 123;
            const type = 'SET_YOU_TUBE_SEARCH_KEYWORD';
            const action = setYouTubeSearchKeyword(payload);

            expect(action).toEqual({type, payload})
        });
    });

    describe('resetYouTubeSearchKeyword', () => {
        it('should return action type and payload', () => {
            const type = 'RESET_YOU_TUBE_SEARCH_KEYWORD';
            const action = resetYouTubeSearchKeyword();

            expect(action).toEqual({type})
        });
    });

    describe('fetchYouTubeVideosByKeyword', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});

        beforeEach(() => {
            store.clearActions();
        });

        it('should fetch from youtube with same keyword', async () => {
            const searchByKeywordResponse = 'SEARCH_BY_KEYWORD_RESPONSE';
            searchByKeyword.mockResolvedValue(searchByKeywordResponse);

            await fetchYouTubeVideosByKeyword('keyword')(store.dispatch);

            expect(searchByKeyword).toHaveBeenCalledWith('keyword');
        });

        it('should fetch results and save it to redux', async () => {
            const searchByKeywordResponse = 'SEARCH_BY_KEYWORD_RESPONSE';

            searchByKeyword.mockResolvedValue(searchByKeywordResponse);

            await fetchYouTubeVideosByKeyword('keyword')(store.dispatch);

            const actions = store.getActions();
            expect(actions).toEqual([
                {"payload": "keyword", "type": "SET_YOU_TUBE_SEARCH_KEYWORD"},
                {"payload": "YOUTUBE_SEACRH_API", "type": "REMOVE_API_FAILURE_STATUS"},
                {"payload": "SEARCH_BY_KEYWORD_RESPONSE", "type": "SET_YOU_TUBE_SEARCH_RESULTS"}
            ]);
        });

        it('should save api failure status on error', async () => {
            const searchByKeywordResponse = 'SEARCH_BY_KEYWORD_RESPONSE';

            searchByKeyword.mockRejectedValue(searchByKeywordResponse);

            await fetchYouTubeVideosByKeyword('keyword')(store.dispatch);

            const actions = store.getActions();
            expect(actions).toEqual([
                {"payload": "keyword", "type": "SET_YOU_TUBE_SEARCH_KEYWORD"},
                {"payload": "YOUTUBE_SEACRH_API", "type": "REMOVE_API_FAILURE_STATUS"},
                {"payload": "YOUTUBE_SEACRH_API", "type": "ADD_API_FAILURE_STATUS"}
            ]);
        });
    });

    describe('fetchYouTubeVideosByKeywordNextPage', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({});
        const searchByKeywordNextPageResponse = 'SEARCH_BY_KEYWORD_NEXT_PAGE_RESPONSE';

        beforeEach(() => {
            store.clearActions();

        });
        it('should fetch from youtube with same keyword and nextPageToken', async () => {
            searchByKeywordNextPage.mockResolvedValue(searchByKeywordNextPageResponse);

            await fetchYouTubeVideosByKeywordNextPage('keyword', 'nextPageToken')(store.dispatch);

            expect(searchByKeywordNextPage).toHaveBeenCalledWith('keyword', 'nextPageToken');
        });

        it('should fetch results and update search results', async () => {

            searchByKeywordNextPage.mockResolvedValue(searchByKeywordNextPageResponse);

            await fetchYouTubeVideosByKeywordNextPage('keyword', 'nextPageToken')(store.dispatch);

            const actions = store.getActions();
            expect(actions).toEqual([
                {"payload": "YOUTUBE_SEACRH_API_NEXT_PAGE", "type": "REMOVE_API_FAILURE_STATUS"},
                {"payload": "SEARCH_BY_KEYWORD_NEXT_PAGE_RESPONSE", "type": "UPDATE_YOU_TUBE_SEARCH_RESULTS"}
            ]);
        });

        it('should save api failure status on error', async () => {

            searchByKeywordNextPage.mockRejectedValue(searchByKeywordNextPage());

            await fetchYouTubeVideosByKeywordNextPage('keyword', 'nextPageToken')(store.dispatch);

            const actions = store.getActions();
            expect(actions).toEqual([
                {"payload": "YOUTUBE_SEACRH_API_NEXT_PAGE", "type": "REMOVE_API_FAILURE_STATUS"},
                {"payload": "YOUTUBE_SEACRH_API_NEXT_PAGE", "type": "ADD_API_FAILURE_STATUS"}
            ]);
        });
    });
});
