import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './reducer';
// import { QueryClient, QueryClientProvider } from 'react-query';


// const client = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
);
