import React from 'react';
import { asField } from 'informed';
import { Form } from 'semantic-ui-react';
import { Header } from '../'
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './style.css';

const Range = ({ fieldState, fieldApi, ...props }) => {
    const { value } = fieldState;
    const { setValue } = fieldApi;
    const { onChange, onChangeComplete, onBlur, initialValue, forwardedRef, field, title, ...rest } = props;
    
    return (
        <Form.Field className="ta-range">
            <Header as="h4">{title}</Header>
            <div className="ta-range__container">
                <InputRange
                    {...rest}
                    ref={forwardedRef}
                    field={field}
                    name={field}
                    value={!value && value !== 0 ? props.value || '' : value}
                    onChange={value => {
                        setValue(value);
                        if (onChange) {
                            onChange(value);
                        }
                    }}
                    onChangeComplete={value => {
                        setValue(value);
                        if (onChangeComplete) {
                            onChangeComplete(value);
                        }
                    }}
                />
            </div>            
        </Form.Field>
    );
};

export default asField(Range);
