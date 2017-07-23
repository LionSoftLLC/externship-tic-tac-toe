// Link.react-test.js
import React from 'react';
import Game from './../index.js';
import renderer from 'react-test-renderer';

test(`The Game Object Should Exist`, () => {
	const component = renderer.create(
		<Game />
	);
	const tree = component.toJSON();
	expect(tree).not.toBeNull();
});
