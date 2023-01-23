import React from 'react';

const Donate = () => {
    return (
            <div className="text">
                <h2 align="center">
                    Donate
        </h2>
                <div>
                    <img src="./images/Candidate Steve 2.jpg" className="Photo-med" alt="Steven Rosenblum" />
                </div>
                <p>
                    Monetary contributions to my campaign are very helpful and greatly appreciated.
                    To support, please contribute online via Venmo directly to steven.rosenblum4d211@gmail.com.
                </p>
                <p>
                    Thank you!
                </p>
                <div>
                    <img src="./images/QR Code.jpg" width="10%" alt="QR Code" />
                </div>
                <p>
                A copy of our report filed with the State Board of Elections is (or will be) 
                available on the Board’s official website (
                <a href="https://www.elections.il.gov/">
                www.elections.il.gov
                </a>
                ) or for purchase from the 
                State Board of Elections, Springfield, Illinois.
                </p>
            </div>

    )
}

export default Donate;