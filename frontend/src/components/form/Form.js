import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Form as BaseForm } from 'semantic-ui-react';
import { Form as InformedForm } from 'informed';
import { Message } from '../';

import './style.css';

export default class Form extends PureComponent {
    static propTypes = {
        error: PropTypes.string,
        onFormChange: PropTypes.func,
    };

    static defaultProps = {
        error: null,
        onFormChange: null,
    };

    static getDerivedStateFromProps(props, state) {
        const { error } = props;
        const { hasError } = state;

        return {
            hasError: hasError || !!error,
        };
    }

    state = {
        hasError: false
    };

    checkForErrors = (state) => {
        const { errors } = state;
        this.setState(() => ({ hasError: !isEmpty(errors) }));
    }

    onChange = (state) => {
        const { onFormChange } = this.props;
        this.checkForErrors(state);
        onFormChange && onFormChange(state);
    }

    render() {
        const { children, onFormChange, error, ...rest } = this.props;
        const { hasError }  = this.state;        
        return (
            <BaseForm
                className="ta-form"
                as={InformedForm}
                error={hasError}
                onChange={this.onChange}
                {...rest}
            >
                {error && <Message error content={error} />}
                {children}
            </BaseForm>
        );
    }
}
