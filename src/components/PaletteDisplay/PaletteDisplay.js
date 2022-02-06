import React, { useState } from 'react';

const paletteList = [
    ["#fbf8cc","#fde4cf","#ffcfd2","#f1c0e8","#cfbaf0","#a3c4f3","#90dbf4","#8eecf5","#98f5e1","#b9fbc0"],
    ["#ffbc42","#d81159","#8f2d56","#218380","#73d2de"],
    ["#006466","#065a60","#0b525b","#144552","#1b3a4b","#212f45","#272640","#312244","#3e1f47","#4d194d"],
    ["#0d1b2a","#1b263b","#415a77","#778da9","#e0e1dd"],
    ["#45A0EA","#61A2E2","#7DA3DA","#99A5D3","#B4A6CB","#D0A8C3","#ECA9BB"],
    ["#a57548","#fcd7ad","#f6c28b","#5296a5","#82ddf0"],
]

function PaletteDisplay() {
    
    const [selectedPalette, setSelectedPalette] = useState(0);

    const changePalette = () => {
        setSelectedPalette((selectedPalette + 1) % paletteList.length);
    };

    const generatePaletteDisplay = () => paletteList[selectedPalette].map(color => {
        return <div key={`palette-color-${color}`} className="palette-column" style={{backgroundColor: color}}></div>
    });

    return (
        <div className="palette-display-container">
            <div className="frame">
                {generatePaletteDisplay()}
            </div>
            <button className="palette-button" onClick={changePalette}>Show next palette!</button>
        </div>
    );
}

export default PaletteDisplay;
