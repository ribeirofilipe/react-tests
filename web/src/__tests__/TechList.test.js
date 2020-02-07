import React from 'react';
import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import { addTech } from '~/store/modules/techs/actions';
import TechList from '~/components/TechList';

jest.mock('react-redux');

describe('Techslist component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'ReactJS'],
    }));

    const { getByText, getByTestId } = render(<TechList />);
    
    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
  });

  it('should be able to add new tech', () => {
    const { getByLabelText, getByTestId } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' }});
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toBeCalledWith(addTech('Node.js'));
  });
});