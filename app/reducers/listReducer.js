import * as listActions from '../constants/actions/list.js';

const initialState = {
    list: [
        {
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 14 Feb 2011 12:45:44 GMT',
            "views": "125"
        },
        {
            "id": 2,
            "title": "repellat provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 05 Feb 2012 12:45:44 GMT',
            "views": "100"
        },
        {
            "id": 3,
            "title": "provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 06 Feb 2011 12:45:44 GMT',
            "views": "365"
        },
        {
            "id": 4,
            "title": "aut facere occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 18 Feb 2011 10:45:44 GMT',
            "views": "79"
        },
        {
            "id": 5,
            "title": "facere repellat provident occaecati excepturi optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 11 Feb 2011 14:45:44 GMT',
            "views": "834"
        },
        {
            "id": 6,
            "title": "facere repellat provident occaecati  optio reprehenderit",
            "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "date": 'Wed, 28 Feb 2011 17:45:44 GMT',
            "views": "549"
        }
    ],
    search: '',
    sorting: "views"
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case listActions.SHOW_LIST:
            return {
                ...state,
                list: action.list
            };

        case listActions.SEARCH_ITEM:
            return {
                ...state,
                search: action.text
        };

        case listActions.SORTING_LIST:
            return {
                ...state,
                sorting: action.sorting
        };

        default:
            return state;
    }
};

export default listReducer;
