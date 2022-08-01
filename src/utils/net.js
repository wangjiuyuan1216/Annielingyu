import axios from 'axios';
import queryString from 'query-string';

const parsed = queryString.parse(location.search || '') || {};
let urlPrefix = 'https://mail.kinjarun.com';

let isChina = false;
// if (location.hostname.indexOf('static-pi-china.habby.cn') >= 0) {
//     isChina = true
// }

if (isChina) {
    if (parsed.env === 'test') {
        urlPrefix = '';
    } else {
        urlPrefix = '';
    }
} else {
    if (location.hostname === 'test-reserve.kinjarun.com') {
        urlPrefix = 'https://test-mail.kinjarun.com';
    }
}

if (['localhost'].indexOf(location.hostname) >= 0) {
    urlPrefix = 'https://test-mail.kinjarun.com';

}

if (location.hostname.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/)) {
    urlPrefix = 'https://test-mail.kinjarun.com';

}

if (parsed.local === '1') {
    urlPrefix = 'http://127.0.0.1:8888';
}

function addURLPrefix(url) {
    if (url && url.charAt(0) === '/') {
        url = urlPrefix + url;
    }
    return url;
}

const headers = {
    habbysecret: ''
};

export const myHTTP = {
    get: function (url) {
        url = addURLPrefix(url);
        return axios.get(url);
    },
    post: function (url, data) {
        const config = {};
        if (url && url.charAt(0) === '/') {
            config.headers = {
                headers,
            };
        }
        url = addURLPrefix(url);
        return axios.post(url, data, config);
    },
    put: function (url, data) {
        const config = {};
        if (url && url.charAt(0) === '/') {
            config.headers = {
                headers,
            };
        }
        url = addURLPrefix(url);
        return axios.put(url, data, config);
    },
    delete: function (url, data) {
        const config = {};
        if (url && url.charAt(0) === '/') {
            config.headers = {
                headers,
            };
        }
        url = addURLPrefix(url);
        return axios.delete(url, config);
    }
}

// let version = '09.18.16:56'
