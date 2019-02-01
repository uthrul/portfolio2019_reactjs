import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4uhGqQrsvQ8E4MmuO7aWiB0YklpZSeO9gpguRz6QvajXfFRwpw"
              alt="avatar"
              className="avatar-img-1"
            />

            <div className="banner-text">
              <h1>Front End Web</h1>
              <hr />
              <p>React Js | Ruby On rails | Hugo | Game</p>
              <div className="social-links">
                {/* <a href="http://google.com" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a> */}

                {/* github */}
                <a href="https://github.com/uthrul" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                {/* facebook */}
                <a href="https://web.facebook.com/sauthrully" rel="noonpener norefrrer" target="balnk">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>

                {/* instagram */}
                <a href="https://www.instagram.com/s_a_u_t_h/" rel="noonpener norefrrer" target="balnk">
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
