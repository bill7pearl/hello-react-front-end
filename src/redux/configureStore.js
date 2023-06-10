import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetingsReducer';

export default configureStore({ reducer: greetingSlice });
