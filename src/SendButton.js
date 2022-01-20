import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { showNotification } from 'react-admin';
import { push } from 'react-router-redux';

class SendButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        fetch(`/send/${record.id}`, { method: 'POST' })
            .then(() => {
                showNotification('Comment approved');
                push('/send');
            })
            .catch((e) => {
                showNotification('Error: comment not approved', 'warning')
            });
    }

    render() {
        return <Button variant="contained">Отправить пароль</Button>;
    }
}

SendButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification,
    push,
})(SendButton);