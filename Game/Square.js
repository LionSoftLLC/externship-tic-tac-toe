/**
 *
 * Square.react.js
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
/* instansiated */

/**
* Square:
* @desc The main Squarelication
*/
const Square = class Square extends React.Component {
	constructor(props) {
		/* run parent constructor */
		super(props);
		/* init props */
		this.state = {
			value: null,
		};
	}

	////////////////////
	// UTILITY METHODS//
	////////////////////

	////////////////////////////
	// EVENT HANDLING METHODS //
	////////////////////////////

	handleButtonClick() {
		// preserve context
		const _this = this;

		_this.props.onClick();
		_this.setState({
			value: `X`,
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


		return (
		<button disabled={_this.props.disabled} style={{ backgroundColor: (_this.props.disabled) ? `gray` : `white` }} className="square" onClick={_this.handleButtonClick.bind(_this)}>
				<span>{_this.props.value}</span>
		</button>
		);
	}
};

Square.propTypes = {
	value: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
};

Square.defaultProps = {
	disabled: false,
};

export default Square;
