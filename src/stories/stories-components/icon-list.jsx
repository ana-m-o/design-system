import React, { Component } from 'react';
import Tag from '../../components/Tag';

export default class Icon extends Component {

    static defaultProps = {
        name: null,
        code: null,
    };

    render() {
        const {
            name,
            code,
        } = this.props;

        return (
            <div className="example-item">
                <span className={name}></span>
                <span className="name">{name}</span>
                <span><Tag className="code">{code}</Tag></span>
            </div>
        );
    }
}
