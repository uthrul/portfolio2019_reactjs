import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Footer from "./footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <Grid className="landing-grid">
            <Cell col={12}>
              <img
                src="https://scontent.fcgk9-1.fna.fbcdn.net/v/t1.0-9/51279097_2403925136319294_1911865268309590016_n.jpg?_nc_cat=102&_nc_eui2=AeHHJdO0M6rwwUtgJro3kwSkvdqFhDB8Q44Bq65FGZFKyiEnJ0pMg0WaZv9IwJTrj18IWe_ISy6a64MyNX4g4LaRXXlnJ2apY6pQPm3hJ_qViw&_nc_oc=AQnrS4-J3XnVl_2ka4R5bBZUNn2yZX9vvOCvXJEwhZBV1cLbUON8bCdnh0KeCaE21VY&_nc_ht=scontent.fcgk9-1.fna&oh=8b24165241bf6bed9f23da1d7d18edab&oe=5E604A45"
                alt="avatar"
                className="avatar-img-1"
              />
              <div className="banner-text">
                <h1>Front End</h1>
                <hr />
                <p>React Js | Ruby On rails | React Native | Game</p>

                <div className="social-links">
                  {/* github */}
                  <a
                    href="https://github.com/uthrul"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-github-square" aria-hidden="true"></i>
                  </a>

                  {/* facebook */}
                  <a
                    href="https://web.facebook.com/sauthrully"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>

                  {/* instagram */}
                  <a
                    href="https://www.instagram.com/codinghood/"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>

                  {/* twitter */}
                  <a
                    href="https://twitter.com/sauthrully"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>

                  {/* youtube */}
                  <a
                    href="https://www.youtube.com/channel/UC8fi7ZzeH56sCvnBUIkwPXg?view_as=subscriber"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-youtube-square" aria-hidden="true"></i>
                  </a>

                  {/* blog */}
                  <a
                    href="http://codinghood.herokuapp.com/"
                    rel="noonpener norefrrer"
                    target="balnk"
                  >
                    <i className="fa fa-globe" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Landing;
