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
      background: '#002266'
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
