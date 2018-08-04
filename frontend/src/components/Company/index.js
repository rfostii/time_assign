import React from 'react';
import { Item } from 'semantic-ui-react';


const Company = ({ company }) => (
    <Item.Group>
        <Item>
            <Item.Image size='tiny' src={company.logo} />
            <Item.Content>
                <Item.Header>{company.name}</Item.Header>
                <Item.Meta>{ [ company.city, company.street + ' ' + company.house_number ].join(', ') }</Item.Meta>
                <Item.Description>
                    {company.description}
                </Item.Description>
                <Item.Extra>{ company.phone_number }</Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
)

export default Company;