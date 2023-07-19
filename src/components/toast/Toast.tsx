// src/components/Toast.tsx
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toast, removeToast } from '../../store/slices/toastSlice/toast.slice';

interface ToastProps {
  toast: Toast;
  index: number;
}

const ToastComponent: FC<ToastProps> = ({ toast, index }) => {
  const dispatch = useDispatch();
  const position = index * 50;
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, toast.id]);

  return (
    <div
      className={`toast toast-${toast.type}`}
      style={{
        position: 'absolute',
        backgroundColor: 'green',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
        textAlign: 'center',
        top: `${position}px`,
      }}
    >
      <div className='toast-content'>{toast.message}</div>
    </div>
  );
};

export default ToastComponent;
