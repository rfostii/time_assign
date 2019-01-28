import React, { PureComponent } from 'react';
import {
    Button,
    Modal,
    Icon,
    Header
} from '../../components';
import Filters from './Filters';

export class FiltersModal extends PureComponent {
    render() {
        return (
            <Modal trigger={<Button>Long Modal</Button>}>
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Header>Modal Header</Header>
                        <Filters />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}
