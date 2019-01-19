import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { getCompany } from './model';

export class CompanyDetails extends PureComponent {
    static propTypes = {
        company: PropTypes.object.isRequired,
        loadCompany: PropTypes.func.isRequired,        
    };

    componentDidMount() {        
        const { loadCompany, match: { params: { slug } } } = this.props;
        loadCompany(slug);
    }
    
    render() {
        const { company } = this.props;

        return (
            <div>Details {company.name}</div>
        );
    }
}
   
export default compose(
    connect(
        state => ({
            company: getCompany(state),
        }),
        dispatch => ({
            loadCompany: dispatch.companyDetails.loadCompany,
        })
    ),
    withRouter
)(CompanyDetails);
