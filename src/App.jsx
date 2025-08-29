import React, { useState } from 'react';
import WinBox from 'react-winbox';
import 'winbox/dist/css/winbox.min.css';
import './App.css';

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
      <div>

      <button
      className="button-tile"
      onClick={() => addWinBox('Information', 'We have solid experience with biomedical engineering and communication with medical personel. Our journey began with master thesis in algorithm optimizations for bone imaging and osteoporosis research. We have since then created simulationa of both nuclear phenomena and anatomical structures.')}
      >
      Biomedical engineering
      </button>
      <button
      className="button-tile"
      onClick={() => addWinBox('Information', 'Nuclear simulations for education: In our beginnings we provided schools with educational tools to improve understanding of (intl schools) chemistry for students. We still offer services for education with our individual approach to student.')}
      >
      Nuclear simulations for education
      </button>

      <button
      className="button-tile"
      onClick={() => addWinBox('Information', 'Osteoporosis is common among elderly patients and treatment is expensive. We have during our cooperation witv Lund University developed software for medical applications. The research aimed to improve technology used in computer tomography, X-ray imaging and magnetic resonance.')}
      >
# Osteoporosis in focus
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('Information', 'We have done multiple beautiful CAD designs in collaboration with Lund University. Our focus is on printed circuit boards and application specific integrated circuits. We have done designs for 3D printing for various applications, including robotics, radio, audio and digital music instruments.')}
      >
# CAD/CAM design
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('Information', 'We offer software development and maintenance. We have successfully developed and served multiple commercial projects for both private and public clients. Our clients appreciate great quality, reliability and extreme ease of use of software in all types of applications. We put lots of effort to make sure that the client receives a solution for their needs.')}
      >
# Software maintenance and development
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('Information', 'We developed software for quality assurance in production process. This software is used to guarantee quality of products of our client today.')}
      >
# Quality assurance 
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('Information', 'As computers have completely dominated our lives, we can see new applications emerging. This development creates many opportunities, but also some new challenges as well. Therefore we have a great demand for companies which help out with these new challenges. Computers becomes direct reflection of our imagination. It is our responsibility to make sure that we use the technology to become as rich and as beautiful as we potentially can be. We specialize in practical algorithm implementation and optimization in applications for scientific purposes and have experience with real case applications in production environments. We thrive as best in areas that align with our interests and are open to exploring new arwas. We don\'t care about prestige, we are here for you to help. So tell us, what bothers you? How can we help today?')}
      >
# Many branches one company
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('Information', 'If we can fill a gap in your organization or institution, we are happy to fill it for you. The services come at various price levels and you can find the pricing below.')}
      >
# If you think we are right for you
        </button>

        <button
        className="button-tile"
        onClick={() => addWinBox('First WinBox', 'This is the first WinBox window.')}
      >
        First
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Second WinBox', 'This is the second WinBox window.')}
      >
        Second
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Third WinBox', 'This is the third WinBox window.')}
      >
        Third
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Message', 'DFT (Design for Test) refers to the techniques and methodologies used to ensure that the final chip can be effectively tested for manufacturing defects')}
      >
        DFT
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Message', 'Scan chains, BIST, Boundary Scan JTAG, test compression, at-speed testing, memory test, analog mixed-signal testing')}
      >
        Scan chains
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Message', 'Cadence Modus, Synopsys DFTMAX, Mentor Tessent')}
      >
        Tools
        </button>
        <button
        className="button-tile"
        onClick={() => addWinBox('Message', "is used to specify the smallest <button onClick={() => addWinBox(\'Message\', \'Important\')}> time</button> interval between two consecutive rising or falling edges of the clock that the cell can tolerate. This is also known as the minimum clock period for which the cell is designed to operate correctly")}
      >
        critical path
        </button>
        <button
        className="button-tile"
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
            <div class="winbox-content">{winBox.content}</div>
            </WinBox>
            ))}
      </div>
        );
}

export default App;
