import KuveraApi from '../APIS/kuvera';

export const fetchFunds = () => async dispatch => {
    const response = await KuveraApi.get('/funds.json');
    dispatch({
        type: "FETCH_FUNDS",
        payload: response.data
    });
};

export const changePage = (page) => async dispatch => {
    dispatch({
        type: "CHANGE_PAGE",
        payload: page
    });
};

export const SortFunds = (field, order) => async dispatch => {
    dispatch({
        type: "SORT_FUNDS",
        payload: {field, order}
    })
};

export const Search = (searchTerm) => async dispatch => {
    dispatch({
        type: "SEARCH",
        payload: searchTerm
    })
};

export const UpdateSearchField = (field) => async dispatch => {
    dispatch({
        type: "SEARCH_FIELD",
        payload: field
    })
};

export const fetchFund = (code) => async dispatch => {
    const response = await KuveraApi.get(`/funds/${code}.json`);
    dispatch({
        type: "FETCH_FUND",
        payload: response.data[0]
    });
};