import React from 'react';
import { Loader } from 'semantic-ui-react';
import { Dimmer } from '../';

export default ({ content = 'Завантаження', size = 'huge' }) => (
    <Dimmer active inverted>
        <Loader size={size} content={content} />
    </Dimmer>
);
