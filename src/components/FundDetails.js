import React from "react";
import {connect} from "react-redux";
import {fetchFund} from "../actions";
import { Link } from "react-router-dom";


class FundDetails extends React.Component{

    componentDidMount() {
        let code=this.props.fetchFund(this.props.match.params.code);
    }

    render() {
        return (
            <div>
                <div className="ui card">
                    <div className="content"><div className="center aligned header">{this.props.selectedFund.name}</div></div>
                    <div className="content">
                        <div className="description">
                            <p><b>Investment Objective </b>: {this.props.selectedFund.investment_objective}</p>
                            <p><b>Plan </b>: {this.props.selectedFund.plan}</p>
                            <p><b>Crisil Rating </b>: {this.props.selectedFund.crisil_rating}</p>
                            <p><b>YEAR 1 RETURNS </b>: {this.props.selectedFund.returns?this.props.selectedFund.returns.year_1:0}</p>
                            <p><b>YEAR 3 RETURNS </b>: {this.props.selectedFund.returns?this.props.selectedFund.returns.year_3:0}</p>
                            <p><b>YEAR 5 RETURNS </b>: {this.props.selectedFund.returns?this.props.selectedFund.returns.year_5:0}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <p>Fund Manager : {this.props.selectedFund.fund_manager}<br/>
                            Category : {this.props.selectedFund.category}
                        </p>
                    </div>
                </div>
                <div className="link card">
                    <Link to={`/explore`} onClick={(event)=>{event.stopPropagation()}} className="ui button red">Back</Link>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedFund : state.selectedFund
    }
};

export default connect(mapStateToProps, {fetchFund})(FundDetails);