import { Component } from 'react';
import { connect } from 'react-redux';
import { RESET_GAME } from './actions';
import { GameLayout } from './GameLayout';

class Game extends Component {
	handleRestartClick = () => {
		this.props.resetGame();
	};

	render() {
		return <GameLayout handleRestartClick={this.handleRestartClick} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	resetGame: () => dispatch(RESET_GAME),
});

export default connect(null, mapDispatchToProps)(Game);
