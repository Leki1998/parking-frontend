import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Reserved from "../Imgs/reserved.png";
import EmptySpace from "../Imgs/empty-space.png";
import './Display.css'

function Display() {


        const [data, setData] = useState(1);

        useEffect(() => {
            const socket = io('http://localhost:3001'); // Replace with your server URL

            socket.on('connect', () => {
                console.log('Connected to Socket.IO');
            });

            socket.on('data', (newData) => {
                setData((prevData) => newData['0']?.value);
                console.log(newData)
                console.log(data)
            });

            socket.on('initialData', (initialData) => {
                setData(initialData);
            });

            socket.on('disconnect', () => {
                console.log('Disconnected from Socket.IO');
            });

            return () => {
                socket.disconnect();
            };
        }, []);
  return (
    <React.Fragment>
        <div className="controls">
            <h2>Parking Status</h2>
            <div className="section">
                <div className="second-floor">
                    <div className="slot-control">
                        <p>SLOT 1</p>
                        <img src={!data ? Reserved : EmptySpace} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        {!data ? <p>Reserved</p> : <p>Empty</p>}
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={!+localStorage.getItem('2') ? Reserved : EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        {!+localStorage.getItem('2') ? <p>Reserved</p> : <p>Empty</p>}
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
              
                </div>
                <div className="floor">
                    Second Floor
                </div>
            </div>
            <div className="section">
                <div className="second-floor">
                <div className="slot-control">
                        <p>SLOT 1</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 3</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 4</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
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
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 2</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 3</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-reserved" alt="reserved"/>
                        <p>Empty</p>
                    </div>
                    <div className="slot-control">
                        <p>SLOT 4</p>
                        <img src={EmptySpace} width="100px" height="100px" className="img-border-empty" alt="reserved"/>
                        <p>Empty</p>
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
