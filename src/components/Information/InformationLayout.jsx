import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		const { message } = this.props;
		return <h1 className="m-0 text-[20px] tracking-[-0.2px] text-accent">{message}</h1>;
	}
}

InformationLayout.propTypes = {
	message: PropTypes.string.isRequired,
};
