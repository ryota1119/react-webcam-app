import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture";

function App() {
    return (
        <div className="App">
            <header>
                <h1>森永製菓 webcam デモ</h1>
            </header>
            <WebcamCapture/>
        </div>
    );
}

export default App;
