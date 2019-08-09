import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Controls from './Controls.js';

// afterEach(cleanup);

describe('<Controls />', () => {
  it('renders without crashing', () => {
    render(<Controls />);
  });
  it('strike', () => {
    let clicked = false;
    const { getByText } = render(<Controls strike={() => clicked = true} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(clicked).toBe(true);
  });
  it('strike with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls strike={click} />);
    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    expect(click).toBeCalled();
  });
  it('ball with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls ball={click} />);
    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    expect(click).toBeCalled();
  });
  it('foul with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls foul={click} />);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    expect(click).toBeCalled();
  });
  it('hit with mocked function', () => {
    const click = jest.fn();
    const { getByText } = render(<Controls hit={click} />);
    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    expect(click).toBeCalled();
  });
  // it('all buttons work', () => {
  //   const buttonText = ['strike', 'ball', 'foul', 'hit'];
  //   const buttonFns = buttonText.map(() => jest.fn());
  //   const props = buttonText.reduce((acc, text, index) => ({...acc, [text]: buttonFns[index]}) , {});
  //   const {getByText} = render(<Controls {...props} />);
  //   const buttons = buttonText.map(text => getByText(new RegExp(text, 'i')));
  //   buttons.forEach((button, index) => {
  //     fireEvent.click(button);
  //     expect(buttonFns[index]).toBeCalled();
  //   });
  // });

});
