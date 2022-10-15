import logo from './logo.svg';
import './App.css';
import Devices from './components/Devices/Devices';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
    const [steps, setSteps] = useState(0);
    const books = [
        { name: 'Small Giants', author: 'bo' },
        { name: 'Build to sell', author: 'john' },
        { name: 'Grant it', author: 'Ray' },
        { name: 'Shoe DOg', author: 'bo' }
    ]
    const handleIncreaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);


    }
    useEffect(() => {
        console.log(steps);
    }, [steps])
    return ( <
        div className = "App" >
        <
        h3 > My Steps: { steps } < /h3> <
        button onClick = { handleIncreaseSteps } > Walk < /button>

        <
        p > npm = Node package manager < /p> <
        Devices name = "Phone"
        steps = { steps }
        price = "25600" / >

        <
        Books books = { books }
        />



        <
        /div>
    );
}

export default App;