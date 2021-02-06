import React from "react";

export default function Home(props) {
    return (
        <div>
            <div id="nav-bar">
                <a href="#">Header</a>
                <a href="#">Categories</a>
                <a href="#">URL:</a>
            </div>

            <div id="Main-container">

                <div id="Aside">
                    <h2>Aside</h2>
                </div>

                <div id="Timeline">
                    <h2>Timeline</h2>
                </div>

                <div id="Followers">
                <h2>Followers</h2>
                </div>
            </div>

        </div>
    );
}

