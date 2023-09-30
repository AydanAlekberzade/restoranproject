import { combineReducers, createStore } from 'redux';
import { blogReducer } from '../reducer/blogReducer';

export interface RootState {
  blog: any; 
}

const rootReducer = combineReducers({
  blog: blogReducer,
});

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
