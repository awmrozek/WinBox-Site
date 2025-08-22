import React, { useState } from 'react';
import WinBox from 'react-winbox';
import 'winbox/dist/css/winbox.min.css';

function App() {
  // State to keep track of active WinBoxes
  const [winBoxes, setWinBoxes] = useState([]);

  // Function to add a new WinBox
  const addWinBox = (title, content) => {
    const newWinBox = {
      id: Date.now(), // Unique ID for each WinBox
      title: title,
      content: content,
      width: 300,
      height: 200,
      x: 'center',
      y: 'center',
      border: 3,
      borderColor: '#002266',
      background: '#599764'
    };

    setWinBoxes([...winBoxes, newWinBox]);
  };

  // Function to remove a WinBox when closed
  const removeWinBox = (id) => {
    setWinBoxes(winBoxes.filter(winBox => winBox.id !== id));
  };

  return (
    <div>
      {/* Labels (buttons) to add new WinBoxes */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => addWinBox('First WinBox', 'This is the first WinBox window.')}
          style={{ marginRight: '10px' }}
        >
          Add First WinBox
        </button>
        <button
          onClick={() => addWinBox('Second WinBox', 'This is the second WinBox window.')}
        >
          Add Second WinBox
        </button>
	<button
          onClick={() => addWinBox('Third WinBox', 'This is the third WinBox window.')}
        >
          Add Third WinBox
        </button>
        <button
           onClick={() => addWinBox('Message', 'DFT (Design for Test) refers to the techniques and methodologies used to ensure that the final chip can be effectively tested for manufacturing defects')}
	>
	DFT
	</button>
        <button
           onClick={() => addWinBox('Message', 'Scan chains, BIST, Boundary Scan JTAG, test compression, at-speed testing, memory test, analog mixed-signal testing')}
	>
	Scan chains
	</button>
        <button
           onClick={() => addWinBox('Message', 'Cadence Modus, Synopsys DFTMAX, Mentor Tessent')}
	>
	Tools
	</button>
        <button
           onClick={() => addWinBox('Message', "used to specify the smallest <button onClick={() => addWinBox(\'Message\', \'Important\')}> time</button> interval between two consecutive rising or falling edges of the clock that the cell can tolerate. This is also known as the minimum clock period for which the cell is designed to operate correctly")}
	>
	critical path
	</button>
        <button
           onClick={() => addWinBox('Message', 'IR drop in ASIC (Application-Specific Integrated Circuit) design refers to the voltage drop that occurs when current flows through the resistive elements')}
	>
	Voltage drop
	</button>
      </div>

      {/* Render all active WinBoxes */}
      {winBoxes.map(winBox => (
        <WinBox
          key={winBox.id}
          title={winBox.title}
          width={winBox.width}
          height={winBox.height}
          x={winBox.x}
          y={winBox.y}
          onClose={() => removeWinBox(winBox.id)}
          border={winBox.border}
          borderColor={winBox.borderColor}
          background={winBox.background}
        >
          <div style={{ padding: '10px' }}>{winBox.content}</div>
        </WinBox>
      ))}
    </div>
  );
}

export default App;
