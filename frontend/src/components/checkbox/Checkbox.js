import React from 'react';
import shortid from 'shortid';
import { asField } from 'informed';
import { Form } from 'semantic-ui-react';

import './style.css'

const Checkbox = ({ fieldState, fieldApi, ...props }) => {   
    const { setValue } = fieldApi;
    const {
        onChange, forwardedRef, field, label, ...rest 
    } = props;
    const id = shortid.generate();
    return (
        <label forHtml={id} className="ta-checkbox">            
            <Form.Checkbox
                id={id}
                className="ta-checkbox__input"
                {...rest}
                ref={forwardedRef}
                field={field}
                name={field}
                onChange={e => {
                    const { checked, value } = e.target;

                    setValue(checked);
                    if (onChange) {
                        onChange(value, checked);
                    }
                }}        
            />
            {label}
        </label>
    );
};

export default asField(Checkbox);
