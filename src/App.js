import React from 'react';
import './App.css';

function App() {
    let heading="todo list";
    let items=[
        {
            id:1,
            text:'Complete Java assignment',
            done:false
        },
        {
            id:2,
            text:'Buy vegetables',
            done:false
        },
        {
            id:3,
            text:'Pay electricty bill',
            done:false
        },
        {
            id:4,
            text:'Fix kitchen bulb ',
            done:false
        },
        {
            id:5,
            text:'Buy home decore',
            done:false
        }
    ]
  return (
      <div className="container">
          <div className="row">
              <div className="heading">
                <h1>{heading.toUpperCase()}</h1>
                <ul className="list-unstyled">
                        {items.map (item =>(
                            <li key={item.id} className="ui-state-default">
                                <div className="checkbox">
                                    <label>
                                        <input type ="checkbox" value=""/>
                                        {item.text}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
      </div>
  );
}

export default App;
