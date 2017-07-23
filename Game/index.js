/**
 *
 * Game.react.js
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
import Board from './Board';
/* local classes */
/* instansiated */

/**
* Game:
* @desc The main Gamelication
*/
const Game = class Game extends React.Component {
	constructor(props) {
		/* run parent constructor */
		super(props);
		/* init props */
		this.state = {
		};
	}

	////////////////////
	// UTILITY METHODS//
	////////////////////

	////////////////////////////
	// EVENT HANDLING METHODS //
	////////////////////////////


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


		return (
		<div className="game">
			<div className="game-board" style={{ display: `flex`, margin: `auto` }}>
				<Board />
			</div>
		</div>
		);
	}
};

Game.propTypes = {
};

Game.defaultProps = {
};

export default Game;
