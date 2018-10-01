import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router/lib';
import Company from 'components/Company/CompanyItem';


class CompanyContainer extends Component {
    componentDidMount() {
        this.props.loadCompanyBySlug(this.props.params.slug);
    }

    render() {
        const { company } = this.props;

        return (
            <Company company={company} />
        );
    }
}

const mapStateToProps = ({ company }) => ({ company });

const mapDispatchToProps = dispatch => ({
    loadCompanyBySlug: slug => dispatch.company.loadCompanyBySlug(slug),
});
   
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withRouter
)(CompanyContainer);