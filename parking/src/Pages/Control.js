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
                        <p className="off status">OFF</p>
                        <p className="on status">ON</p>
                    </div>
                    <div className="slot">
                        <p>Slot 2</p>
                        <p className="off status">OFF</p>
                        <p className="on status">ON</p>
                    </div>
                    <div className="slot">
                        <p>Slot 3</p>
                        <p className="off status">OFF</p>
                        <p className="on status">ON</p>
                    </div>
                    <div className="slot">
                        <p>Slot 4</p>
                        <p className="off status">OFF</p>
                        <p className="on status">ON</p>
                    </div>
                    <div className="slot">
                        <p>Slot 5</p>
                        <p className="off status">OFF</p>
                        <p className="on status">ON</p>
                    </div>
                </div>
            </div>
              <div className="floors">
                  <h5>First Floor</h5>
                  <div className="slot-wrapper">
                      <div className="slot">
                          <p>Slot 1</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 2</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 3</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 4</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 5</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                  </div>
              </div>
              <div className="floors">
                  <h5>Second Floor</h5>
                  <div className="slot-wrapper">
                      <div className="slot">
                          <p>Slot 1</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 2</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 3</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 4</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                      <div className="slot">
                          <p>Slot 5</p>
                          <p className="off status">OFF</p>
                          <p className="on status">ON</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Control
