import React from 'react';
import { Counter } from './HookStore';
import CounterClass from './classCom';
import Counter1 from './funCom';
function App() {
    return (
        <div className="App">
            <Counter>
                <Counter1></Counter1>
                <CounterClass></CounterClass>
            </Counter>
        </div>
    );
}

export default App;
