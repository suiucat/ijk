import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App, { Search, Table, Button} from './App';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('has a vaild snapshot', () => {
    const component = renderer.create(
      <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Search', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
  });

  test('has a vaild snapshot', () => {
    const component = renderer.create(
      <Search />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Button', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  test('has a vaild snapshot', () => {
    const component = renderer.create(
      <Button />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Table', () => {
  const props = {
    list: [{ title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
           { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
          ],
    sortKey: 'TITLE',
    isSortReverse: false,
    };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props }/>, div);
  });

  test('has a vaild snapshot', () => {
    const component = renderer.create(
      <Table { ...props }/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});