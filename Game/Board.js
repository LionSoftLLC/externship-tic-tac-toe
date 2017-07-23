/**
 *
 * Board.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

/* dependencies */
import React, { PropTypes } from 'react';
/* local classes */
import Square from './Square';
/* instansiated */

/**
* Board:
* @desc The main Boardlication
*/
const Board = class Board extends React.Component {
	constructor(props) {
		/* run parent constructor */
		super(props);
		/* init props */
		this.state = this.getStartingState();
	}

	////////////////////
	// RENDER METHODS //
	////////////////////

	renderSquare(i, gameOver) {
		// preserve context
		const _this = this;

		return (
			<Square
				//check if we won
				disabled={(gameOver != null)}
				value={_this.state.squares[i]}
				onClick={
					() => {
						_this.handleSquareClick(i);
					}
				}
			/>
		);
	}

	////////////////////
	// UTILITY METHODS//
	////////////////////

	getStartingState() {
		// preserve context
		const _this = this;

		return {
			squares: Array(9).fill(null),
			xIsNext: true,
			status: null,
		};
	}

	calculateWinner(squares) {
		const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}

	////////////////////////////
	// EVENT HANDLING METHODS //
	////////////////////////////

	handleResetClick() {
		// preserve context
		const _this = this;

		_this.setState(_this.getStartingState());
	}

	handleSquareClick(i) {
		// preserve context
		const _this = this;
		//creates a copy of the existing array
		const squares = this.state.squares.slice();
		// lets make sure the square isn't already taken
		if (squares[i]) {
			_this.setState({ status: `You can't go there!` });
			return;
		}

		//determine whether to play an X or an O
		squares[i] = this.state.xIsNext ? `X` : `O`;

		this.setState({
			status: null,
			squares,
			//flip the value to the other players turn
			xIsNext: !this.state.xIsNext,
		});
	}

	////////////////////////////
	//REACT LIFECYCLE METHODS //
	////////////////////////////

	/**
	 * componentWillUpdate: fires immediately before a component updates
	 */
	componentWillUpdate(nextProps, nextState) {
		/* preserve context */
		const _this = this;
	}

	/**
	 * componentDidUpdate: fires immediately after a component updates and DOM has been rendered
	 */
	componentDidUpdate() {
		/* preserve context */
		const _this = this;
	}

	/**
	 * componentDidMount: fires immediately after a component mounts
	 */
	componentDidMount() {
		/* preserve context */
		const _this = this;

	}

	componentWillUnmount() {
		/* preserve context */
		const _this = this;
	}

	/**
	 * render: renders the component
	 */

	render() {
		// preserve context
		const _this = this;
		const winner = _this.calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = `Winner: ${winner}`;
		} else {
			status = _this.state.status || `Next player: ${(_this.state.xIsNext ? `X` : `O`)}`;
		}

		return (
			<div>
				<div className="status">{status} | <button style={{ display: `inline`, borderRadius: 10, padding: 5, border: `1px solid black`, }} onClick={_this.handleResetClick.bind(_this)} > Reset</button></div>
				<div className="board-row">
					{this.renderSquare(0, winner)}
					{this.renderSquare(1, winner)}
					{this.renderSquare(2, winner)}
				</div>
				<div className="board-row">
					{this.renderSquare(3, winner)}
					{this.renderSquare(4, winner)}
					{this.renderSquare(5, winner)}
				</div>
				<div className="board-row">
					{this.renderSquare(6, winner)}
					{this.renderSquare(7, winner)}
					{this.renderSquare(8, winner)}
				</div>
			</div>
		);
	}
};

Board.propTypes = {
};

Board.defaultProps = {
};

export default Board;
