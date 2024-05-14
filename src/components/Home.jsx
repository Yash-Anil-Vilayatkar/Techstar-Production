import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
    return (
      <>
        <div className="home" id="home" >
          <main>
            <h1>TechStar</h1>
            <p>Solution to all your problems</p>
          </main>
        </div>

        <div className="home2">
          <img src={vg} alt="Graphics"/>
          <div>
            <p>
              We are your one and only solution to the tech problem you face every day.
              We are leading tech company whose aim is to increase the problem
              solving ability of children.
            </p>
          </div>
        </div>

        <div className="home3" id="about">
          <div>
            <h1>who we are?</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, incidunt? Totam nemo asperiores, omnis, alias consectetur commodi corporis explicabo dicta laboriosam, nam minus natus beatae suscipit facere tempore in deleniti!
            A architecto quo enim placeat dolorum, doloremque id, fugit iure sit, reiciendis corporis ea. Dolorum, tempore quaerat, ipsam dolorem rerum consectetur provident minus laboriearum eos rem exercitationem odio temporibus eum quos in impedit blanditiis, atque vitae dolorem ex! Recusandae, soluta nihil.
            Tempora, excepturi dicta. Velit magni voluptas sentium a, eum fuga esse eaque ea asperiores. Vero ipsam, modi inventore eaque, iste consequuntur repudiandae accusamus soluta facilis fuga nam quo laborum.
            </p>
          </div>
        </div>

        <div className="home4" id="brands">
          <div>
            <h1>Brands</h1>
            <article>
              <div style={{
                animationDelay:"0.3s",
              }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>

              <div style={{
                animationDelay:"0.5s",
              }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>

              <div style={{
                animationDelay:"0.5s",
              }}>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>

              <div style={{
                animationDelay:"0.7s",
              }}>
                <AiFillInstagram/>
                <p>Instgram</p>
              </div>

            </article>
          </div>
        </div>

      </>
    
        
    );
};

export default Home;