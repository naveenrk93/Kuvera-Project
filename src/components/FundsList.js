import React from 'react';
import {fetchFunds, changePage, SortFunds, Search, UpdateSearchField} from "../actions";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {Pagination} from "semantic-ui-react";

class FundsList extends React.Component{

    SortBy = (field) => {
        let order=1;
        if(this.props.currentlySortedField.field===field)
            order=-1*this.props.currentlySortedField.order;

        this.props.SortFunds(field, order);
    };

    componentDidMount() {
        this.props.fetchFunds();
    }

    renderAttentionIcon = () => {
        return <i className="attention icon"></i>;
    };

    renderList = () => {
        let FUNDS = this.props.funds;

        return FUNDS.filter((fund) => {
            let SEARCHFIELD = typeof(this.props.searchField)=="string"? this.props.searchField: "name";
            if(!this.props.searchTerm || typeof (this.props.searchTerm) != "string")
                return true;
            else
            {   let FieldValue = typeof(fund[SEARCHFIELD])=="string"?fund[SEARCHFIELD].toLowerCase():"";
                return FieldValue.indexOf(this.props.searchTerm.toLowerCase())>-1;
            }
        }).slice((this.props.page-1)*100,(this.props.page-1)*100+100).map(fund => {
            return (
                <tr key={fund.code}>
                    <Link to={`/explore/${fund.code}`} onClick={(event)=>{event.stopPropagation()}}><td>{fund.name}</td></Link>
                    <td className={fund.fund_category?"":"error"}>{fund.fund_category?fund.fund_category:this.renderAttentionIcon()}</td>
                    <td className={fund.fund_type?"":"error"}>{fund.fund_type?fund.fund_type:this.renderAttentionIcon()}</td>
                    <td className={fund.plan?"":"error"}>{fund.plan?fund.plan:this.renderAttentionIcon()}</td>
                    <td className={fund.returns.year_1!==undefined?"":"error"}>{fund.returns.year_1!==undefined?fund.returns.year_1:this.renderAttentionIcon()}</td>
                    <td className={fund.returns.year_3!==undefined?"":"error"}>{fund.returns.year_3!==undefined?fund.returns.year_3:this.renderAttentionIcon()}</td>
                    <td className={fund.returns.year_5!==undefined?"":"error"}>{fund.returns.year_5!==undefined?fund.returns.year_5:this.renderAttentionIcon()}</td>
                </tr>
            );
        })
    };

    handlePaginationChange = (e, { activePage }) => this.props.changePage(activePage);

    render = () => {
        return(
            <div>
            <Pagination activePage={Number.isInteger(this.props.page)?this.props.page:1} onPageChange={this.handlePaginationChange} totalPages={parseInt(this.props.funds.filter((fund) => {
                let SEARCHFIELD = typeof(this.props.searchField)=="string"? this.props.searchField: "name";
                if(!this.props.searchTerm || typeof (this.props.searchTerm) != "string")
                    return true;
                else
                {   let FieldValue = typeof(fund[SEARCHFIELD])=="string"?fund[SEARCHFIELD].toLowerCase():"";
                    return FieldValue.indexOf(this.props.searchTerm.toLowerCase())>-1;
                }
            }).length/100)}/>
                <select className="ui dropdown" onChange={({target})=>{this.props.UpdateSearchField(target.value)}}>
                    <option value="name" selected={true}>Name</option>
                    <option value="fund_category">Fund Category</option>
                    <option value="fund_type">Fund Type</option>
                    <option value="plan">Plan</option>
                </select>
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search Name..." value={typeof(this.props.searchTerm)=="string"?this.props.searchTerm:""} onChange={({target}) => { this.props.Search(target.value)}}/>
                        <i onClick={() => this.handleSearch()} className="search icon"/>
                </div>
            </div>
            <table className="ui celled selectable sortable padded striped table" id="TABLE">
                <thead>
                    <tr>
                        <th onClick={() => this.SortBy("name")}>Name</th>
                        <th onClick={() => this.SortBy("fund_category")}>Fund Category</th>
                        <th onClick={() => this.SortBy("fund_type")}>Fund Type</th>
                        <th onClick={() => this.SortBy("plan")}>Plan</th>
                        <th onClick={() => this.SortBy(1)}>Year 1 Returns</th>
                        <th onClick={() => this.SortBy(3)}>Year 3 Returns</th>
                        <th onClick={() => this.SortBy(5)}>Year 5 Returns</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        funds: Object.values(state.funds),
        page: state.page,
        currentlySortedField: state.currentlySortedField,
        searchTerm: state.searchTerm,
        searchField: state.searchField
    }
};

export default connect(mapStateToProps, {fetchFunds, changePage, SortFunds, Search, UpdateSearchField})(FundsList);