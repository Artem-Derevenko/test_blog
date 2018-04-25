import * as listAction from '../../constants/actions/list.js';

export function changeSorting(value) {
    return (dispatch) => {
        dispatch({type: listAction.SORTING_LIST, sorting: value });
    };
}

export function searchItem(str) {
    return (dispatch) => {
        dispatch({type: listAction.SEARCH_ITEM, text:str });
    };
}