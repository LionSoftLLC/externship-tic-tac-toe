/**
 *
 * App.react.js
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
import ReactDOM from 'react-dom';
/* local classes */
import Game from './Game';
/* instansiated */

/**
* App:
* @desc The main Application
*/
const App = class App extends React.Component {
	constructor(props) {
		/* run parent constructor */
		super(props);
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
			<div className="App" style={{ height: window.innerHeight, width: window.innerWidth, display: `flex`, justifyContent: `center` }}>
				<Game />
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
