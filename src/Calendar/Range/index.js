import {getSortedDate} from '../../utils'

export const EVENT_TYPE = {
  END: 3,
  HOVER: 2,
  START: 1,
};

export function getSortedSelection({start, end}) {
  return getSortedDate(start, end);
}

export function getInitialDate({selected}) {
  return selected && selected.start || new Date();
}
