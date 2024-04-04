import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider, metamaskWallet, walletConnect } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ThirdwebProvider
        supportedWallets={[
            metamaskWallet({ recommended: true }),
            walletConnect({ recommended: true }), 
        ]}
        clientId='12b5089cdcb733f1be13648c8cf2e97b'
        rpcUrl='http://127.0.0.1:8545'
    >
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
);
