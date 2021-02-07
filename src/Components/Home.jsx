import React from "react";

export default function Home(props) {
    return (
        <div>
            <div id="nav-bar">
                {/* <a href="#">Profile</a>
                <a href="#">Categories</a>
                <a href="#">Profile URL:</a> */}
            </div>

            <div id="Main-container">

                <div id="Aside">
                    <h2>Aside</h2>
                </div>

                <div id="Timeline" class="list-group overflow-auto">
                <a href="www.google.com" class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-5">List group item heading</h5>
            <small>1 day ago</small>
          </div>
          <p class="mb-5">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a href="www.google.com" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-5">List group item heading</h5>
            <small class="text-muted">2 days ago</small>
          </div>
          <p class="mb-5">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a href="www.google.com" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-5">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-5">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a href="www.google.com" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-5">List group item heading</h5>
            <small class="text-muted">4 days ago</small>
          </div>
          <p class="mb-5">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
    </div>

                <div id="Followers">
                <h2>Followers</h2>
                <h2>Following</h2>
                </div>
            </div>

        </div>
    );
}

