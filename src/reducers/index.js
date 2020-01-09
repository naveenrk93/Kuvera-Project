import {combineReducers} from "redux";
import FundReducer from "./FundReducer";
import PageReducer from "./PageReducer";
import currentlySortedReducer from './currentlySortedReducer';
import selectedFundReducer from './selectedFundReducer';
import searchReducer from "./searchReducer";
import searchFieldReducer from "./searchFieldReducer";

export default combineReducers({
    funds: FundReducer,
    page: PageReducer,
    currentlySortedField: currentlySortedReducer,
    selectedFund: selectedFundReducer,
    searchTerm: searchReducer,
    searchField: searchFieldReducer,
});