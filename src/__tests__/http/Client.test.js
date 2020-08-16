import axios from 'axios';
import {get} from "../../http/Client";

jest.mock('axios');

describe('Client', function () {
    it('should fetch data from GET request', async function () {
        const response = {data: 'ok Google!'};
        axios.mockResolvedValue(response);

        const actual = await get('google.com');

        expect(actual).toEqual(response);
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: 'google.com',
            params: {}
        });
    });

    it('should fetch data from GET request with query params', async function () {
        const response = {data: 'ok Google!'};
        axios.mockResolvedValue(response);

        const actual = await get('google.com', {q:'hello world'});

        expect(actual).toEqual(response);
        expect(axios).toHaveBeenCalledWith({
            method: 'get',
            url: 'google.com',
            params: {q:'hello world'}
        });
    });
});
