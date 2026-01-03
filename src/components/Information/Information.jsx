import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout.jsx';

class Information extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;

		let message = `Ходит: ${currentPlayer}`;
		if (isDraw) message = 'Ничья!';
		else if (isGameEnded) message = `Победа: ${currentPlayer}`;

		return <InformationLayout message={message} />;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
