import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';

const CategoryCard = () => (
  <Card>
    <Image src='/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon='star' defaultRating={3} maxRating={4} />
    </Card.Content>
  </Card>
);

export default CategoryCard;