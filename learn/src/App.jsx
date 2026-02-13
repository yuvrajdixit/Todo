import React from 'react';
import Navigation from './components/Navigation';
import Task from './components/Task';

const App = () => {
    return (
        <>
        <div className='Background'></div>
        <div className='content' >
            <Navigation />
            <Task />
        </div>

        </>
    )
}

export default App