import * as listAction from '../../constants/actions/list.js';

export function changeSorting(value) {
    return (dispatch) => {
        dispatch({type: listAction.SORTING_LIST, sorting: value });
    };
}