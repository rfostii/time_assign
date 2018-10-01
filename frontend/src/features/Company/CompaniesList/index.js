import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router/lib';
import CompaniesList from 'components/Company/CompaniesList';


class CompaniesListContainer extends Component {
    componentDidMount() {
        this.props.loadCompanies(this.props.params.company_id);
    }

    render() {
        const { companies } = this.props;

        return (
            <CompaniesList companies={companies} />
        );
    }
}

const mapStateToProps = ({ searchResults }) => ({ companies: searchResults });

const mapDispatchToProps = dispatch => ({
    loadCompanies: slug => dispatch.company.loadCompanies(slug),
});
   
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
)(CompaniesListContainer);