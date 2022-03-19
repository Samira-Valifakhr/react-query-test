import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Users } from './components/users/Users';
import Navbar from './components/navbar/Navbar';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div data-test='component-app'>
        <Navbar data-test='navbar-display' />
        <div className='section__padding'>
          <Users data-test='users-display' />
        </div>
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
