import { combineReducers } from 'redux';
import categories from 'reducers/categories';
import paper from 'reducers/paper';
import chemistry from 'reducers/chemistry';
import towel from 'reducers/towel';
import active from 'reducers/active';

export default combineReducers({
  categories,
  paper,
  chemistry,
  towel,
  active
})

