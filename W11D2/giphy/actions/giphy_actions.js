import * as APIUtil from '../util/api_util';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';
export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';

export const receiveSearchGiphys = (giphys) => {
    return {
        type: RECEIVE_SEARCH_GIPHYS,
        giphys
    }
}

export const fetchSearchGiphys = (giphys) => {
    return (dispatch) => {
        return APIUtil.fetchSearchGiphys(giphys)
        .then((giphys) => dispatch(receiveSearchGiphys(giphys.data)));
    }
}