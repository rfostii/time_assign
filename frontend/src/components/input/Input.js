import React from 'react';
import { asField } from 'informed';
import { Input as BaseInput, Form } from 'semantic-ui-react';
import { Message } from '../';

const Input = ({ fieldState, fieldApi, ...props }) => {
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
    return (
        <Form.Field>
            <BaseInput
                {...rest}
                ref={forwardedRef}
                value={!value && value !== 0 ? '' : value}
                onChange={e => {
                    setValue(e.target.value);
                    if (onChange) {
                    onChange(e);
                    }
                }}
                onBlur={e => {
                    setTouched();
                    if (onBlur) {
                    onBlur(e);
                    }
                }}
                error={!!fieldState.error}            
            />
            {fieldState.error 
                ? <Message error content={fieldState.error} />
                : null
            }
        </Form.Field>
    );
};

export default asField(Input);
