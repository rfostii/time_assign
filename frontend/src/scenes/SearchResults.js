import React, { Component } from 'react';
import { 
    Container, Grid, Dimmer, Loader, Item, Label,
    Button, Icon, Breadcrumb
} from 'semantic-ui-react';
import Navigation from 'components/Navigation'; 
import Search from 'features/SearchCompany';
import Filter from 'features/Filter';
import './SearchResults.css';

class SearchResults extends Component {  
  render() {
    return (
        <Container className="tm-search-results">
            <Navigation />              
            <Breadcrumb className="ta-breadcrumb">
                <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>Search Results</Breadcrumb.Section>                
            </Breadcrumb>            
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Search />
                    <Filter />
                    </Grid.Column>
                    <Grid.Column width={12}>                                                
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>  
                        <Item.Group divided>
                            <Item>
                                <Item.Image src='/assets/images/wireframe/image.png' />
                                <Item.Content>
                                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                                    <Item.Meta>
                                        <span className='cinema'>Union Square 14</span>
                                    </Item.Meta>
                                    <Item.Description>text</Item.Description>
                                    <Item.Extra>
                                        <Button primary floated='right'>
                                            Buy tickets
                                            <Icon name='right chevron' />
                                        </Button>
                                        <Label>Limited</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                            <Item>
                                <Item.Image src='/assets/images/wireframe/image.png' />
                                <Item.Content>
                                    <Item.Header as='a'>12 Years a Slave</Item.Header>
                                    <Item.Meta>
                                        <span className='cinema'>Union Square 14</span>
                                    </Item.Meta>
                                    <Item.Description>text</Item.Description>
                                    <Item.Extra>
                                        <Button primary floated='right'>
                                            Buy tickets
                                            <Icon name='right chevron' />
                                        </Button>
                                        <Label>Limited</Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>                        
        </Container>
    );  
  }
}

export default SearchResults;
