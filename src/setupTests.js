// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Enzyme 
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme to JSON
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() }); // Configure Enzyme
expect.addSnapshotSerializer(createSerializer({mode: 'deep'})); // Configure Enzyme to JSON

