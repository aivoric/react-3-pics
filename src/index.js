import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

// searchImages("cats");

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

root.render(<App />);


// Access key: CXDmmhX5HFeCAEGUhQsRNTtjAxnMIAxydsqdh1P0oYQ
// Secret key: KidygjYhKtxnvdkDlb44vqxLskk_Ymk1AkGgQOtTO-Y
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY