import React from 'react'
import ReactDOM from 'react-dom/client'
import UseState from './hooks/UseState'
import UseEffect from './hooks/UseEffect'

ReactDOM.createRoot(document.getElementById('root')).render
(
  <React.StrictMode>
    <UseState/>
    <UseEffect/>
  </React.StrictMode>
);
