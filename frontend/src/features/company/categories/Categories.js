import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from '../../../components';
import { composeSearchLinkFromCategory } from '../helpers';
import { getCategories } from './model';

export class Categories extends PureComponent {
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

    renderItems() {
        const { categories } = this.props;

        return categories.map((item) => {
            const { category: { id, name }, children } = item;

            if (children) {                
                return (
                    <Dropdown key={id} text={name} pointing className='link item'>
                        <Dropdown.Menu>
                            {children.map(category => (
                                <Dropdown.Header key={id}>
                                    <NavLink to={composeSearchLinkFromCategory(category)}>
                                        {category.name}
                                    </NavLink>                                
                                </Dropdown.Header>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>  
                )
            }
            return (
                <Menu.Item key={id}>
                    <NavLink to={`/search_results?category=${id}`}>
                        {name}
                    </NavLink>  
                </Menu.Item>
            );
        });
    }

    render() {
        return (
            <Menu text>
                {this.renderItems()}
            </Menu>
        )
    }
}

export default connect(
    state => ({
        categories: getCategories(state),
    }),
    dispatch => ({
        getCategories: dispatch.companyCategories.getCategories,
    })
)(Categories);
