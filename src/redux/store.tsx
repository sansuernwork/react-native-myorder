import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

const store: any = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const ReduxProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
