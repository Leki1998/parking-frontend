import React from 'react'
import './Control.css'

function Control() {
  return (
    <React.Fragment>
        <div className="control-wrapper">
          <h2 className="display-heading">Slots Control</h2>
          <div className="floor-wrapper">
            <div className="floors">
               <h5>Ground Floor</h5>
                <div className="slot-wrapper">
                    <div className="slot">
                        <p>Slot 1</p>
                        <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                    </div>
                    <div className="slot">
                        <p>Slot 2</p>
                        <button onClick={() => localStorage.setItem('2','0')} className="off status">OFF</button>
                          <button onClick={() => localStorage.setItem('2','1')} className="on status">ON</button>
                    </div>
                    <div className="slot">
                        <p>Slot 3</p>
                        <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                    </div>
                    <div className="slot">
                        <p>Slot 4</p>
                        <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                    </div>
                    <div className="slot">
                        <p>Slot 5</p>
                        <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                    </div>
                </div>
            </div>
              <div className="floors">
                  <h5>First Floor</h5>
                  <div className="slot-wrapper">
                      <div className="slot">
                          <p>Slot 1</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 2</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 3</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 4</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 5</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                  </div>
              </div>
              <div className="floors">
                  <h5>Second Floor</h5>
                  <div className="slot-wrapper">
                      <div className="slot">
                          <p>Slot 1</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 2</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 3</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 4</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                      <div className="slot">
                          <p>Slot 5</p>
                          <button className="off status">OFF</button>
                          <button className="on status">ON</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Control
