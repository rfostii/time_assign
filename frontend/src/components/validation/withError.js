import React, { Fragment } from 'react';
import { Message } from '../';

export default Component => props => (
    <Fragment>
      <Component {...props} />
      {props.meta.touched &&
        ((props.meta.error && <Message error content={props.meta.error} />) ||
          (props.meta.warning && <Message warn content={props.meta.warning} />))}
    </Fragment>
);
