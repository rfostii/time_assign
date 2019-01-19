import React from 'react';
import shortid from 'shortid';
import { asField } from 'informed';
import { Select } from 'semantic-ui-react';

const InputSelect = ({ fieldState, fieldApi, ...props }) => {
    const { value, error } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const { 
        onChange, onBlur, value: initialValue,
        forwardedRef, field, label, 
        showError = true, 
        ...rest
    } = props;
    const id = shortid.generate();
    
    return (
        <div className="field">
            {label && <label forHtml={id}>{label}</label>}
            <Select
                id={id}
                {...rest}
                ref={forwardedRef}
                field={field}
                name={field}
                value={value || initialValue}
                onChange={(e, control) => {
                    const { value } = control;

                    setValue(value);
                    if (onChange) {
                        onChange(control);
                    }
                }}
                onBlur={(e, control) => {                    
                    setTouched();
                    if (onBlur) {
                        onBlur(e, control);
                    }
                }}
                error={!!error}
            />
            {error && showError
                ? <div className="ta-validation-error">{error}</div>
                : null
            }
        </div>        
    );
};

export default asField(InputSelect);
