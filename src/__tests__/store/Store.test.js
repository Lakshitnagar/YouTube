import store from '../../store/Store';

describe('Store', () => {
    it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            "youtubeSearchResults": null,
            "youtubeSearchKeyword": null,
            "presentationConfig": {
                "apiStatus": []
            }
        };
        expect(actual).toEqual(expected);
    });
});
