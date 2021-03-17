import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch as useDispatchHook,
	useSelector as useSelectorHook,
} from 'react-redux';
import cart from './cart';
import checkout from './checkout';

export const store = configureStore({
	reducer: {
		cart,
		checkout,
	},
});

// Export Typed Redux Hooks

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchHook<Dispatch>();
export const useSelector: TypedUseSelectorHook<State> = useSelectorHook;

//
