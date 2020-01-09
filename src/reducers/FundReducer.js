export default (state={}, action) => {
    switch(action.type){
        case "FETCH_FUNDS":
            return {...state, ...action.payload};

        case "SORT_FUNDS":
            let NewFunds=Object.values(state);
            let field=action.payload.field;
            let order=action.payload.order;

            if(typeof field==="string")
                NewFunds.sort((a,b) => {
                    // Use toUpperCase() to ignore character casing
                    const bandA = a[field]?a[field].toUpperCase():"ZZZZZZZZZZZZZZZZ";
                    const bandB = b[field]?b[field].toUpperCase():"ZZZZZZZZZZZZZZZZ";
                    let comparison = 0;
                    if (bandA > bandB) {
                        comparison = 1;
                    } else if (bandA < bandB) {
                        comparison = -1;
                    }
                    return comparison*order;
                });
            else
                NewFunds.sort(((a,b) => {
                    let bandA=a.returns!=undefined?a.returns["year_"+field]:1000;
                    let bandB=b.returns!=undefined?b.returns["year_"+field]:1000;

                    bandA=bandA!=undefined?bandA:1000;
                    bandB=bandB!=undefined?bandB:1000;
                    let comparison = 0;
                    if (bandA > bandB) {
                        comparison = 1;
                    } else if (bandA < bandB) {
                        comparison = -1;
                    }
                    return comparison*order;
                }));
            return {...NewFunds};
       default:
            return state;
    }
}