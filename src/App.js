import React from 'react';
import './App.css';

function App() {
  return (
      <div className="container">
          <div className="row">
              <div className="heading">
                <h1>TODO List</h1>
                <ul className="list-unstyled">
                        <li className="ui-state-default">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Buy vegetables</label>
                            </div>
                        </li>
                        <li className="ui-state-default">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Complete Java assignment </label>
                            </div>
                        </li>
                        <li className="ui-state-default">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Pay electricty bill</label>
                            </div>
                        </li>
                        <li className="ui-state-default">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/>Fix kitchen bulb </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </div>
  );
}

export default App;
