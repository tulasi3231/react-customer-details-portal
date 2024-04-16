import React, { useState } from 'react';
import './App.css';
import CustomerList from './Components/CustomerList';
import {CustomerDetails} from './Components/CustomerDetails';
import customersData from './data/customers.json';

const App: React.FC = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

    const handleCustomerSelect = (id: number) => {
        setSelectedCustomerId(id);
    };

    return (
        <div className="">
          <h2 className="Title"> Customer Details Portal </h2>
          <div className="app">

            <CustomerList
                customers={customersData}
                selectedCustomerId={selectedCustomerId}
                onCustomerSelect={handleCustomerSelect}
            />
            <CustomerDetails customerId={selectedCustomerId} />
        </div>
        </div>
    );
};

export default App;
