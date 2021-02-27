import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
// import Login from '../Login/Login';
import InvoiceGenerator from 'invoice-generator/src/invoiceGenerator'
import { data } from './data'

export default function App() {
   /*  const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken} />
      } */

    const downloadInvoice = (data) => {
      InvoiceGenerator(data, 'test', 'download')
    }

    return <>
      <div className="dashboard">
        {/**
         * TODO: ADD form to populate invoice data array.
         * 
         * TODO : add invoice-generator module
        */}
        <Button onClick={() => downloadInvoice(data)}>Download Invoice</Button>
      </div>
      </>
    
  }
