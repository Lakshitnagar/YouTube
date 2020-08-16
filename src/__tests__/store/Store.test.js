import store from '../../store/Store';

describe('Store', () => {
    it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            "youtubeSearchResults": null
        };
        expect(actual).toEqual(expected);
    });
});
