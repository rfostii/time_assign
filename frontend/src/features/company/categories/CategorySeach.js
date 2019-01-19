import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select } from '../../../components';
import { getAllSubCategories } from './model';

export class CategorySeach extends PureComponent {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        getCategories: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { categories, getCategories } = this.props;

        if (!categories.length) {
            getCategories();
        }
    }

    render() {
        const { attributes, categories, ...rest } = this.props;

        return (
            <Select
                fluid
                search 
                selection
                field="category"
                placeholder="Виберіть категорію"
                noResultsMessage="Нічого не знайдено"
                options={
                    categories.map(({ id, name }) => ({
                        key: id,
                        value: id,
                        text: name
                    }))
                }
                {...rest}
            />
        )
    }
}

export default connect(
    state => ({
        categories: getAllSubCategories(state),
    }),
    dispatch => ({
        getCategories: dispatch.companyCategories.getCategories,
    })
)(CategorySeach);
