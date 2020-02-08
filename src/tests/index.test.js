import React from 'react';

describe('JSX', () => {
  it('calls React.creatElement', () => {
    const creatElementSpy = jest.spyOn(React, 'createElement');
    <h1>Hello, JSX!</h1>;
    expect(creatElementSpy).toHaveBeenCalledWith('h1', null, 'Hello, JSX!');
  });
});
