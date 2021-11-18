import React from 'react';
import './PokerGoHoldEm.css';

import Footer from '../../Components/Footer/Footer';

function PokerGoHoldEm() {
return (
    <>
        <div className="PokerGo-header">
            <h1 classname="PokerGo-headerText">Portfolio</h1>
        </div>
    
        <body>
            <div className="PokerGo-bodybackground">
                <div className="PokerGo-bodyContainer">
                    <div className="PokerGo-leftBox">
                        <div className="PokerGo-imageBox">
                            <img src= "../Images/Projects/PokerGOHoldEm.png" className="PokerGo-projectImage" />
                        </div>
                    </div>

                    <div className="PokerGo-rightBox">
                        <h2 className="PokerGo-projectTitle">Poker Go Holdem</h2>

                        <h3 className="PokerGo-descriptionTitle">Description:</h3>
                        <p className="PokerGo-projectDescription">
                            Built off of an existing engine, my team was tasked with creating a new UI and fixing the old engines many issues. 
                            I was tasked with restructuring old UI and adding new UI to fit better with the theme the client wanted.
                            Working mostly on the gameplay UI, Shop UI, and some of the Main Menu UI, as well as adding winning VFX to the gameplay.
                            Along with the previous tasks, I was also tasked with adding general systems, fixing and adding minor backend systems, and QA.
                        </p>
                        
                        <h3 className="PokerGo-linkTitle">Link:</h3>
                        <div className="PokerGo-linkDiv">
                            <a href="https://play.google.com/store/apps/details?id=com.PokerGO.Holdem&hl=en_US&gl=US" className="PokerGo-link" target="_blank">Check it out on the Google Play store</a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </body>
    </>
)};

export default PokerGoHoldEm;
