import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('Intial condintions', () => {
  render(<App />);
  
  // Check add button
  const addBtn = screen.getByRole('button', { name: /add/i });
  expect(addBtn).toBeInTheDocument();

  // Check the integer field
  const intInput = screen.getByTestId('input-number');
  expect(intInput).toBeInTheDocument();
});

test('Click the add button to generate the input box', () => {
  render(<App />);

  const addBtn = screen.getByRole('button', { name: /add/i });

  fireEvent.click(addBtn);
  let inputBoxes = screen.getAllByRole('inputbox');
  expect(inputBoxes).toHaveLength(1);

  fireEvent.click(addBtn);
  inputBoxes = screen.getAllByRole('inputbox');
  expect(inputBoxes).toHaveLength(2);

  fireEvent.click(addBtn);
  inputBoxes = screen.getAllByRole('inputbox');
  expect(inputBoxes).toHaveLength(3);

  // Check index fields correctly
  inputBoxes.forEach((inputBox, index) => {
    const { getByText } = within(inputBox);
    expect(getByText(index)).toBeInTheDocument();
  });
});

test('Analyze collision', () => {
  render(<App />);

  const addBtn = screen.getByRole('button', { name: /add/i });

  // Add three new input boxes
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);

  const inputBoxes = screen.getAllByRole('inputbox');
  const testString = ['ABCD', 'CGH', 'ABC'];
  const expectedCollision = ['2', '', '0']

  // Enter the string in the inputs
  inputBoxes.forEach((inputBox, index) => {
    const { getByTestId } = within(inputBox);
    const inputStr = getByTestId('input-string').querySelector('input');
    fireEvent.change(inputStr, { 'target': { 'value': testString[index] } });
  });

  // Check the collision values, should be ['2', '', '0']
  inputBoxes.forEach((inputBox, index) => {
    const { getByTestId } = within(inputBox);
    const inputCollision = getByTestId('input-collision').querySelector('input');
    expect(inputCollision).toHaveValue(expectedCollision[index]);
  });

  // Change integer to 4, collision should be updated to ['', '', '']
  const intInput = screen.getByTestId('input-number').querySelector('input');
  fireEvent.change(intInput, { 'target': { 'value': 4 } });
  const expectedCollision_2 = ['', '', ''];
  inputBoxes.forEach((inputBox, index) => {
    const { getByTestId } = within(inputBox);
    const inputCollision = getByTestId('input-collision').querySelector('input');
    expect(inputCollision).toHaveValue(expectedCollision_2[index]);
  });

  // Click the delete button to remove the second input box and update integer to 3
  const secondInputBox = within(inputBoxes[1]);
  const secondDeleteBtn = secondInputBox.getByRole('button');
  fireEvent.click(secondDeleteBtn);
  fireEvent.change(intInput, { 'target': { 'value': 3 } });
  const inputBoxes_2 = screen.getAllByRole('inputbox');
  expect(inputBoxes_2).toHaveLength(2);

  // Check index updated
  inputBoxes_2.forEach((inputBox, index) => {
    const { getByRole } = within(inputBox);
    const indexLabel = getByRole('label');
    expect(indexLabel.innerHTML).toBe(index + '');
  });

  // Check collision updated
  const expectedCollision_3 = ['1', '0'];
  inputBoxes_2.forEach((inputBox, index) => {
    const { getByTestId } = within(inputBox);
    const inputCollision = getByTestId('input-collision').querySelector('input');
    expect(inputCollision).toHaveValue(expectedCollision_3[index]);
  });

  // Delete all input boxes
  inputBoxes_2.forEach(inputBox => {
    const { getByRole } = within(inputBox);
    const deleteBtn = getByRole('button');
    fireEvent.click(deleteBtn);
  });

  // Check the input boxes should not present
  const inputBoxesEmpty = screen.queryAllByRole('inputbox');
  expect(inputBoxesEmpty).toEqual([]);
});
