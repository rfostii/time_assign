import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';


export default ({ company }) => (    
    <Item>
        <Item.Image size='tiny' src={company.logo} />
        <Item.Content>
            <Item.Header>
                <Link to={'/company/' + company.slug}>
                    {company.name}
                </Link>
            </Item.Header>
            <Item.Meta>{ [ company.city, company.street + ' ' + company.house_number ].join(', ') }</Item.Meta>
            <Item.Description>
                {company.description}
            </Item.Description>
            <Item.Extra>{ company.phone_number }</Item.Extra>
        </Item.Content>
    </Item>    
);