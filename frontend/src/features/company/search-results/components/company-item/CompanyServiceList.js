import React from 'react';
import { Button, List } from '../../../../../components';

export default ({ services }) => (    
    <List divided verticalAlign='middle'>
        {services.map((service) => (
            <List.Item>                
                <List.Content floated='right'>
                    <Button>Замовити</Button>
                </List.Content>
                <List.Content>
                    {service.name}
                    {service.price}
                    {service.currency}
                </List.Content>
            </List.Item>
        ))}        
  </List>
);
