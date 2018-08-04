import React from 'react';
import { Grid } from 'semantic-ui-react';
import Category from './Category';

export default (props) => (
    <Grid doubling columns={3} textAlign="center" verticalAlign="middle">
        <Grid.Column>
            <Category />
        </Grid.Column>
        <Grid.Column>
            <Category />
        </Grid.Column>
        <Grid.Column>
            <Category />
        </Grid.Column>
    </Grid>
)