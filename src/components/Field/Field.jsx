import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPlayer, setIsDraw, setField, setIsGameEnded } from '../../actions';
import { FieldLayout } from './FieldLayout.jsx';

class Field extends Component {
	handleCellClick = (index) => {
		const { field, currentPlayer, isGameEnded } = this.props;
		const { setField, setCurrentPlayer, setIsDraw, setIsGameEnded } = this.props;

		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;

		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		const win = WIN_PATTERNS.some(
			([a, b, c]) =>
				newField[a] && newField[a] === newField[b] && newField[a] === newField[c],
		);

		setField(newField);

		if (win) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			const next = currentPlayer === 'X' ? 'O' : 'X';
			setCurrentPlayer(next);
		}
	};

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} handleCellClick={this.handleCellClick} />;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
	setField: (field) => dispatch(setField(field)),
	setCurrentPlayer: (player) => dispatch(setCurrentPlayer(player)),
	setIsDraw: (value) => dispatch(setIsDraw(value)),
	setIsGameEnded: (value) => dispatch(setIsGameEnded(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
