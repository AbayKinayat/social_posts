import { AppDispatch } from 'app/providers/StoreProvider';
import { useDispatch } from 'react-redux';

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;
