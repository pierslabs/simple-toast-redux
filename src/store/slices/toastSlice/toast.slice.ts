import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Toast {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error'; // Agrega otros tipos según tus necesidades
}

export interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload);
    },

    removeToast: (state, action: PayloadAction<number>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToast, removeToast } = toastSlice.actions;
