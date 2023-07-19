// src/App.tsx
import { useDispatch, useSelector } from 'react-redux';
import { addToast } from './store/slices/toastSlice/toast.slice';
import { RootState } from './store/store';
import { FC, useState } from 'react';
import ToastComponent from './components/toast/Toast';

const App: FC = () => {
  const dispatch = useDispatch();

  const toasts = useSelector((state: RootState) => state.toast.toasts);
  const [number, setNumber] = useState<number>(0);

  const handleAddToast = () => {
    setNumber((prev) => prev + 1);
    dispatch(
      addToast({
        id: Date.now(),
        message: `Pero Queeeee!!! ${number}`,
        type: 'info',
      })
    );
  };

  return (
    <>
      <div className='toast-container'>
        {toasts.map((toast, index) => (
          <ToastComponent key={toast.id} toast={toast} index={index} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>
          <button onClick={handleAddToast}>Agregar Toast</button>
        </div>
      </div>
    </>
  );
};

export default App;
