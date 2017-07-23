// Link.react-test.js
import React from 'react';
import Board from './../Board';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test(`The Board Should be empty on startup`, () => {
	const component = mount(
		<Board />
	);
	//make sure we start with empty squares
	expect(component.state().squares).toEqual(Array(9).fill(null));
});

test(`The Board Should be reset after reset button is clicked.`, () => {

	const component = mount(
		<Board />
	);
	//manually call reset function
	component.instance().handleResetClick();
	//the board should be reset after the button is clicked
	expect(component.state()).toEqual({
		squares: Array(9).fill(null),
		xIsNext: true,
		status: null,
	});
});

test(`Clicking a the first square should mark it with an X.`, () => {

	const component = mount(
		<Board />
	);
	const index = 1;
	//manually call reset function
	component.instance().handleSquareClick(index, null);
	//the board should be reset after the button is clicked
	expect(component.state().squares[index]).toEqual(`X`);
});

test(`Clicking the second square should mark it with a O.`, () => {

	const component = mount(
		<Board />
	);
	const index = 1;
	//manually call reset function
	component.instance().handleSquareClick(index, null);

	//fix for async setState
	setTimeout(() => {
		component.instance().handleSquareClick(index + 1, null);
		//the board should be reset after the button is clicked
		expect(component.state().squares[index]).toEqual(`O`);
	}, 1);
});


test(`Clicking a square after is has already been selected should negate the action`, () => {

	const component = mount(
		<Board />
	);
	const index = 1;
	//manually call reset function
	component.instance().handleSquareClick(index, null);
	//fix for async setState
	setTimeout(() => {
		component.instance().handleSquareClick(index, null);
		//the board should be reset after the button is clicked
		expect(component.state().squares[index]).toEqual(`X`);
		//the board should warn the user that they can't select that spot
		expect(component.state().status).toEqual(`You can't go there!`);
	}, 1);
});

test(`Board Should successfully calculate a winner`, () => {

	const component = mount(
		<Board />
	);
	const index = 0;
	//make X's first move
	component.instance().handleSquareClick(index, null);
	//fix for async setState
	setTimeout(() => {
		//make O's first move
		component.instance().handleSquareClick(index + 3, null);
		//we shouldn't have a winner yet
		expect(component.instance().calculateWinner(component.state().squares)).toBeNull();
		setTimeout(() => {
			//make X's second move
			component.instance().handleSquareClick(index + 1, null);
			//we shouldn't have a winner yet
			expect(component.instance().calculateWinner(component.state().squares)).toBeNull();
			setTimeout(() => {
				//make O's second move
				component.instance().handleSquareClick(index, null);
				//we shouldn't have a winner yet
				expect(component.instance().calculateWinner(component.state().squares)).toBeNull();
				setTimeout(() => {
					//make X's third move
					component.instance().handleSquareClick(index, null);
					//the winner should be X!
					expect(component.instance().calculateWinner(component.state().squares)).toEqual(`X`);
				}, 1);
			}, 1);
		}, 1);
	}, 1);
});
