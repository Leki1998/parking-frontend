import React from 'react'
import Reserved from "../Imgs/reserved.png";
import EmptySpace from "../Imgs/empty-space.jpg";
import './Display.css'

function Display() {
  return (
    <React.Fragment>
        <div className="controls">
            <h2>Parking Status</h2>
            <div className="section">
                <div className="second-floor">
                    <div className="slot-control">
                        <p>SLOT 1</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 3</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 4</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 5</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                </div>
                <div className="floor">
                    Second Floor
                </div>
            </div>
            <div className="section">
                <div className="second-floor">
                    <div className="slot-control">
                        <p>SLOT 1</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 3</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 4</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 5</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                </div>
                <div className="floor">
                    First Floor
                </div>
            </div>
            <div className="section">
                <div className="second-floor">
                    <div className="slot-control">
                        <p>SLOT 1</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 3</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 4</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 5</p>
                        <img src={Reserved} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Reserved</p>
                    </div>
                </div>
                <div className="floor">
                    Ground Floor
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Display
