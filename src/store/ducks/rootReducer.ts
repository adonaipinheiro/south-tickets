import { combineReducers } from 'redux';

// Reducers
import auth from './auth';
import user from './user';
import toast from './toast';

export default combineReducers({
  auth,
  user,
  toast,
});
