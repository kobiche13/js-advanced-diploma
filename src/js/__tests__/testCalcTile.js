import {calcTileType} from '../utils';
const dataList = [
  ['top-left', 0, 8],
  ['top-right', 7, 8],
  ['top', 5, 8],
  ['bottom-left', 56, 8],
  ['bottom-right', 63, 8],
  ['bottom', 58, 8],
  ['right', 23, 8],
  ['left', 24, 8],
  ['center', 33, 8]
];

const testing = test.each(dataList);
testing('test position %s in board', (position, index, boardSize) => {
  const result = calcTileType(index, boardSize);
  expect(result).toBe(position);
})

test('position error', () =>{
  expect(() => calcTileType(64, 8)).toThrow(Error);
})

