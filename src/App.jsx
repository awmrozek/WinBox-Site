import React from 'react';
import WinBox from 'react-winbox';
import 'winbox/dist/css/winbox.min.css';

function App() {
  return (
    <div>
      <WinBox
        title="Sample WinBox"
        width={400}
        height={300}
        x="center"
        y="center"
        onClose={() => console.log('Window closed')}
      >
        <div style={{ padding: '10px' }}>Hello, WinBox!</div>
      </WinBox>
    </div>
  );
}

export default App;
