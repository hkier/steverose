import React from 'react'

const Endorsements = () => {
    return (
        <div>
            <h2 align="center">
                Endorsed by...
            </h2>
            <div>
            <img src="./images/Steve and Raja.jpg" className="Photo-med" alt="Steven Rosenblum" />
            </div>
            <ul className="List">
                <li className="List-item">
                    U.S. Congressman Raja Krishnamoorthi:
                    <p className="Italic">
                        “I endorse Steven Rosenblum for Township High School District 211’s
                        Board of Education. A fellow resident of Schaumburg, Steven is dedicated to public service
                        and the support of  public education. He is committed to our community, and he knows
                        that our children and public schools are critical to our community’s success.”
                    </p>
                </li>
                <li className="List-item">
                    Hoffman Estates Mayor William McLeod
                </li>
                <li className="List-item">
                    State Representatives Michelle Mussman and Fred Crespo
                </li>
                <li className="List-item">
                    Township High School District 211 Board of Education President Mucia Burke
                </li>
                <li className="List-item">
                Hoffman Estates Park District Board of Commissioners President Robert Kaplan
                </li>
                <li className="List-item">
                    Elementary School District 54 Board President Mary Kay Prusnick
                </li>
                <li className="List-item">
                    Hoffman Estates Park District Board of Commissioners Vice President Patrick Kinnane
                </li>
            </ul>
        </div>

    )
}

export default Endorsements;