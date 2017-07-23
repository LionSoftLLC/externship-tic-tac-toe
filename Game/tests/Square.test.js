// Link.react-test.js
import React from 'react';
import Square from './../Square';
import Board from './../Board';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test(`Square should display value assigned to it by Board`, () => {
	const component = mount(
		<Board />
	);

	//get the first square on the board
	const firstSquare = component.find(Square).at(0);
	//simulate a click
	firstSquare.simulate(`click`);
	//the value should be X because the first player is X
	expect(firstSquare.props().value).toBe(`X`);
});


test(`Square values shouldn't change after initial click`, () => {
	const component = mount(
		<Board />
	);

	//get the first square on the board
	const firstSquare = component.find(Square).at(0);
	//simulate a click
	firstSquare.simulate(`click`);
	//simulate another click
	firstSquare.simulate(`click`);
	//the value shouldn't change
	expect(firstSquare.props().value).toBe(`X`);
});
