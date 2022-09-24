import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch } from './hooks';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import THEME from './theme';
import { NotificationsService } from 'src/services';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useLayoutEffect } from 'react';
THEME.injectStyles();

let basename = '/';

if (process.env.REACT_APP_FOR_GITHUB)
    basename = '/makers.bolt.fun/'

export const useWrapperSetup = () => {

    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        // Setting CSS Vars
        let root = document.documentElement;
        root.style.setProperty('--primary', THEME.colors.primary[500]);
        // root.style.setProperty('--secondary', THEME.colors.secondary[500]);
    }, [])

}


const queryClient = new QueryClient()

export default function Wrapper(props: any) {

    return (
        <>
            <QueryClientProvider client={queryClient}>

                <Provider store={store}>
                    <BrowserRouter basename={basename}>
                        {props.children}
                    </BrowserRouter>
                </Provider>
                <ToastContainer
                    {...NotificationsService.defaultOptions}
                    newestOnTop={false}
                    limit={2}
                />
            </QueryClientProvider>
        </>
    )
}
