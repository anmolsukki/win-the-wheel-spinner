import React, {useEffect, useState} from "react";

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const prize = ['PRIZE 1', 'PRIZE 2', 'PRIZE 3', 'PRIZE 4', 'PRIZE 5', 'PRIZE 6', 'PRIZE 7', 'PRIZE 8'];
  const spinning = selectedItem !== null ? 'spinning' : '';
  const wheelVars = { '--nb-item': prize.length, '--selected-item': selectedItem };

  const startSpin = () => {
    if (selectedItem === null) {
      const roundSelected = Math.floor(Math.random() * prize.length);
      setSelectedItem(roundSelected);
    } else {
      setSelectedItem(null);
      setTimeout(this.selectItem, 500);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      setTimeout(() => {
        alert('You have won PRIZE ' + parseInt(selectedItem + 1));
      }, 1500);
    }
  }, [selectedItem])

  return (
    <div className="App">
      <div className="col-12 col-lg-12 text-center text-lg-right">
        <div className="wheel-container">
          <div className={`wheel ${spinning}`} style={wheelVars}>
            {prize.map((item, index) => (
              <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <button id="spin_button" onClick={() => startSpin()}>
          TAP TO SPIN
        </button>
      </div>
    </div>
  );
}

export default App;
