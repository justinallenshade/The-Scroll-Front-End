import React from "react";

export default function Home(props) {
  return (
    <div>
      <div id="main-container">
        <header>
          <div id="img-block">
            <img
              src="https://www.nme.com/wp-content/uploads/2016/09/2013NickOffermanPA-14923554290713-696x464.jpg"
              alt="mug shot"
              id="profile-photo"
            />
          </div>

          <div id="blog-info">
            <ul>
              <li>I do woodwork and drink lagavulin whiskey.</li>
              <br />
              <li>Name: Ron Swanson</li>
              <li>Location: Pawnee, IN</li>
              <li>Joined: Jan, 10, 2021</li>
            </ul>
          </div>

          <div id="follow-count">
            <h3>Followers</h3>
            <p>150</p>
            <h3>Following</h3>
            <p>300,000</p>
            <h3>Posts</h3>
            <p>100</p>
          </div>
        </header>

        <div id="content-wrap">
          <h1>
            <u>The Scroll TimeLine</u>
          </h1>
          <section>
            <h2>Title1</h2>
            <img src="https://picsum.photos/200/200" alt="" />
            <div id="text1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> In
              ipsa, reprehenderit, error, harum perspiciatis cumque ipsam
              officiis omnis voluptatibus <br /> accusantium deleniti veniam
              consequatur corporis placeat quas consectetur exercitationem fuga
              non?
            </div>
          </section>

          <section>
            <h2>Title2</h2>
            <img src="https://picsum.photos/200/200" alt="" />
            <div id="text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Minus accusamus quidem alias culpa tempore est officia id iure
              totam esse, odit perferendis <br /> dolore placeat, laboriosam
              consequuntur veritatis nihil ea aut.
            </div>
          </section>

          <section>
            <h2>Title3</h2>
            <img src="https://picsum.photos/200/200" alt="" />
            <div id="text3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
              Cum laborum ex nisi reiciendis culpa accusamus, deserunt dicta
              assumenda eum ab itaque dolore <br /> totam nihil ducimus quod
              ipsum amet soluta aut.
            </div>
          </section>

          <section>
            <h2>Title4</h2>
            <img src="https://picsum.photos/200/200" alt="" />
            <div id="text4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
              Corrupti omnis cupiditate inventore quidem tenetur nostrum sunt
              ut, labore nesciunt quod officiis <br /> at, asperiores, delectus
              quaerat distinctio voluptates mollitia. Quod, distinctio.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
