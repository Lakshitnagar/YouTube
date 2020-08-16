import axios from 'axios';

export const get = (url, params) => {
    return axios({
        method: 'get',
        url: url,
        params: params ? params : {}
    });
};
