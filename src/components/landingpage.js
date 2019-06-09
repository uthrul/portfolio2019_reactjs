import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div class="container-fluid">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fcgk9-1.fna.fbcdn.net/v/t1.0-9/51279097_2403925136319294_1911865268309590016_n.jpg?_nc_cat=102&_nc_eui2=AeHZvltA4Ylpp1RDPAQDJaaO0nJWU2EpM3y9MaTpXC4G2a2fMMFg1zo4BSum3QRFJGbrDj6ky6Ablx2xHpIHMwvcNu1md0JJ28lkBpKzFYSvug&_nc_ht=scontent.fcgk9-1.fna&oh=ecb7214e84f2e20276f8a0100afa6284&oe=5D9A8945"
              alt="avatar"
              className="avatar-img-1"
            />
            <div className="banner-text">
              <h1>Front End</h1>
              <hr />
              <p>React Js | Ruby On rails | React Native | Game</p>
              
              <div className="social-links">

                {/* github */}
                <a href="https://github.com/uthrul" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                {/* facebook */}
                <a href="https://web.facebook.com/sauthrully" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                {/* instagram */}
                <a href="https://www.instagram.com/codinghood/" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>

                {/* twitter */}
                <a href="https://twitter.com/sauthrully" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a>

                {/* youtube */}
                <a href="https://www.youtube.com/channel/UC8fi7ZzeH56sCvnBUIkwPXg?view_as=subscriber" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-youtube-square" aria-hidden="true"></i>
                </a>

                {/* blog */}
                <a href="http://codinghood.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
