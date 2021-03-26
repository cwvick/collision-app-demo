import { render, screen, within } from '@testing-library/react';
import InputBox from './InputBox';

test('Render the input boxes', () => {
  const items = [
    {
      id: 'test01',
      inputVal: 'ABCD'
    },
    {
      id: 'test02',
      inputVal: 'FRONTEND'
    },
    {
      id: 'test03',
      inputVal: 'REACTJS'
    },
    {
      id: 'test04',
      inputVal: 'TESTING'
    }
  ];

  const collisionList = [
    [1, 2, 3],
    [],
    [0, 3],
    [0]
  ];

  const ItemList = () => items.map((item, index) => {
    return (
      <InputBox 
        key={item.id}
        index={index}
        item={item}
        collisionList={collisionList}
      />
    )
  });

  render(<ItemList />);

  const inputBoxes = screen.getAllByRole('inputbox');
  // Check the amount of input boxes
  expect(inputBoxes).toHaveLength(items.length);

  inputBoxes.forEach((inputBox, index) => {
    const { getByRole, getByTestId } = within(inputBox);

    // Check index
    const indexLabel = getByRole('label');
    expect(indexLabel.innerHTML).toBe(index + '');

    // Check input strings
    const inputStr = getByTestId('input-string').querySelector('input');
    expect(inputStr).toHaveValue(items[index].inputVal);

    // Check collision values
    const inputCollision = getByTestId('input-collision').querySelector('input');
    expect(inputCollision).toHaveValue(collisionList[index].join(','));
  });
});