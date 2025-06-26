import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { baseApi } from './api/baseApi';

export const store = configureStore({
    reducer: {
        // Подключаем редьюсер, сгенерированный RTK Query
        [baseApi.reducerPath]: baseApi.reducer,
        // Здесь вы можете добавить другие редьюсеры
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

// Настройка для поддержки рефетчинга
setupListeners(store.dispatch);

// Типизированные хуки для использования в компонентах
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
