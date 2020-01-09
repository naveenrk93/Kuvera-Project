export default (state={}, action) => {
    switch(action.type){
        case "SORT_FUNDS":
            return {field: action.payload.field, order: action.payload.order};
        default:
            return state;
    }
}

