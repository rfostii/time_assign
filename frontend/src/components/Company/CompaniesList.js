import React from 'react';
import { Item } from 'semantic-ui-react/dist/commonjs';
import map from 'lodash/map';
import Company from './CompanyItem';


export default ({ companies }) => (
    <Item.Group>
        {map(companies, company => 
            <Company key={company.id} company={company} />
        )}
    </Item.Group>
);