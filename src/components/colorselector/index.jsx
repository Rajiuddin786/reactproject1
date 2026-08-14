import { useState } from 'react';

import './styles.css';

export default function RandomColorSelector() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function handleRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    function handleRandomRgbColor() {
        //rbg(0-255,0-255,0-255)
        const rgbColor = []
        for (let i = 0; i < 3; i++) {
            rgbColor.push(Math.floor(Math.random() * 256));
        }
        console.log(`rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`);
        setColor(`rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`);
    }


    return (
        <div style={{
            width: '100%',
            height: '100vh',
            color: "#ffffff",
            background: color,
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor == 'hex' ? () => handleRandomHexColor() : () => handleRandomRgbColor()}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                fontSize: '30px',
            }}>
                <h1>{typeOfColor == 'hex' ? "HexColor" : "RGBColor"}</h1>
                <span>{color}</span>
            </div>
        </div>
    );
}