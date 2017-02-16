import {defaultCellRangeRenderer} from 'react-virtualized';

// Workaround for https://github.com/bvaughn/react-virtualized/pull/579
export default function cellRangeRenderer({rowStartIndex, ...rest}) {
  return defaultCellRangeRenderer({
    rowStartIndex: Math.max(0, rowStartIndex - 1),
    ...rest
  });
}
