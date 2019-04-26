import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">

          <div class="grid-item">
            {/* react 1 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto',fontSize:'20', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A'}}>
              <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://scontent.fcgk9-2.fna.fbcdn.net/v/t1.0-9/51369893_2390892770955864_8688166644452687872_o.jpg?_nc_cat=104&_nc_eui2=AeHxEGGHI3AqQc3PpjKAlcVYGuJkegSmN-ttwuv5glGGGQjslr83JNjOZQW4Ql4mAuus1asOnb8qlC437NcYh1bOTMRn-uR-3a6Vmz7Q9npVGA&_nc_ht=scontent.fcgk9-2.fna&oh=0c9fc7850999d6e8b3af3a522455b9fb&oe=5D6CC535) center / cover' }}></CardTitle>
              <CardText >
                MovieTic
            </CardText >
              <CardActions border>
                <a href="https://movietic.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/MovieApp_reactJs" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

          <div class="grid-item">
            {/* react 2 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A'}}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/50862988_2390892574289217_4658805138264162304_n.jpg?_nc_cat=108&_nc_eui2=AeH_W0k9xgADI_bu1hCxpbx70OnfWrDq2votNHdQnU6ByecbOAPM7A9vXuSFUVwZoxAGtbxz2SfsNx-ND9o1DJq7XEILeTG9i9Al0pVP6iLW_Q&_nc_ht=scontent.fcgk8-1.fna&oh=784b4de610ccf5f3a008c7ed4001ad15&oe=5D32861A) center / cover' }}></CardTitle>
              <CardText>
                TO DO LIST
            </CardText>
              <CardActions border>
                <a href="https://todoworks.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/TO_DO_LIST_reactjs" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">

          <div class="grid-item">
            {/* rails 1 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/50959503_2390892657622542_811034338249408512_o.jpg?_nc_cat=102&_nc_eui2=AeHEBifPGpsMd81lKr8AlSbHoLQ5KxQilBEH10Leubqk85YBbgi7TBWyzKUrzYjYVVut4h_tVVeW5IKYsrWIb16nnOGI6pg-bJJeu0Y9oKsfcg&_nc_ht=scontent.fcgk8-2.fna&oh=88e1a228903492b1e517cecb7dca4612&oe=5CEBC1AD) center / cover' }}></CardTitle>
              <CardText >
                Motionpix
            </CardText>
              <CardActions border>
                <a href="https://motionpix.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/RubyOnRails_ClonePinteres" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

          <div class="grid-item">
            {/* rails 2 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk9-1.fna.fbcdn.net/v/t1.0-9/51462489_2390892600955881_5723469729272692736_o.jpg?_nc_cat=110&_nc_eui2=AeFTXB2y0nyZpvmX8YZbYdofxHDaZdEICdufhIsAZFu4suy_jZEp52fJa2iLXBK-_RwpjjXCv9j-iP2mLeLIPXwj9jMji4Mn2JcKDqYxCZmDUw&_nc_ht=scontent.fcgk9-1.fna&oh=0b42aed2c3931f3e57743b8c20e7b606&oe=5CC198BF) center / cover' }}></CardTitle>
              <CardText>
                Blog
            </CardText>
              <CardActions border>
                <a href="https://codinghood.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/podcast_fm" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

          <div class="grid-item">
            {/* rails 3 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/50984035_2390892670955874_664506216071823360_n.jpg?_nc_cat=111&_nc_eui2=AeHn35wOIqGdDvmgrSzS0jpsj--Lza3M6HuiY2AOo0W_yWOer9zTKpmQlB_UdFQLPh-dypGzAKoG78WUwDyloSj9w9OLgyEMcqjQ2pC9gIxbHg&_nc_ht=scontent.fcgk8-1.fna&oh=e0e2a219e16a3108b6106b98415705c3&oe=5D6DD442) center / cover' }}></CardTitle>
              <CardText>
                Podcats Fm
            </CardText>
              <CardActions border>
                <a href="https://podcatsfm.herokuapp.com//" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/blog2019" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

          <div class="grid-item">
            {/* rails 4 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk9-2.fna.fbcdn.net/v/t1.0-9/50979538_2390892674289207_2929448195891134464_o.jpg?_nc_cat=106&_nc_eui2=AeHcMsHAfL-VLSD_b4j4R9J0DzHdauGEgfqYt3bZ2tSTI4L8UJ7nvVaOOJqODNOzjqBbXqrbqqowY4go126yZ8431HGeLkVQLYnSp99IbhAHoQ&_nc_ht=scontent.fcgk9-2.fna&oh=c8e296f6dfc15952b2aff0b67cb8bc67&oe=5CF20553) center / cover' }}></CardTitle>
              <CardText>
                Stockerbitcoin
            </CardText>
              <CardActions border>
                <a href="https://stockerbitcoin.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/strocker_for_company" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

          <div class="grid-item">
            {/* rails 5 */}
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk9-1.fna.fbcdn.net/v/t1.0-9/52276859_2424960627549078_6132890531895705600_o.jpg?_nc_cat=102&_nc_eui2=AeGcIdKmpldFyEMnx-sLKUrGPlfF_z2J7U9Njo2x7wJzXw0M6tbQ2XrXzehZSDI37OCMwhfjyo1k9SzuoBPc-OXAQkxAgpMvccMJ3wGC4et9ig&_nc_ht=scontent.fcgk9-1.fna&oh=7928a0ec984ecdca95716a0243c91f78&oe=5D28759A) center / cover' }}></CardTitle>
              <CardText>
                Food Anthem
            </CardText>
              <CardActions border>
                <a href="https://foodanthem.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul/portfolio2019_reactjs" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>

        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* react Native expo*/}
          <div class="grid-item">
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{
                color: '#fff', height: '176px', background: 'url(https://image.slidesharecdn.com/slides-180226015341/95/react-native-expo-11-638.jpg?cb=1519610124) center / cover'
              }}></CardTitle>
              <CardText>
                Design Mobile App React native & Expo
          </CardText>
              <CardActions border>
                <a href="https://expo.io/@sauthrully">
                  <Button colored>Get Started</Button>
                </a>
                <a href="https://github.com/uthrul?utf8=✓&tab=repositories&q=expo&type=&language=" rel="noonpener norefrrer" target="balnk">
                  <Button colored>GitHub</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>

      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <div class="grid-item">
            <Card shadow={3} style={{ width: '512px', margin: 'auto', fontFamily: 'Rock Salt', textShadow: '3px 3px 3px  #FBAB5A' }}>
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvODAyNjgvMzc4Mjc3LnBuZw==/347x500/%2FutF%2F%2B.png) center / cover' }}></CardTitle>
              <CardText>
                Tower Defense Game
          </CardText>
              <CardActions border>
                <a href="https://rocketbrain.itch.io/batak-kingdom-defense">
                  <Button colored>Get Started</Button>
                </a>
              </CardActions>
            </Card>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <div className="category-tabs">
          <h5 style={{ fontSize: '45px', fontFamily: 'Rock Salt', textShadow:'3px 3px 3px  #FBAB5A'}}>Example Projects</h5>
          <br/>
          <p style={{ fontSize: '15px', fontFamily: 'Anton', fontWeight: 'normal',}}>
            Studies from Udemy, Youtube, Github, Books, Bootcamp and Another screencast
          </p>
        </div>
        <Tabs style={{ fontFamily: 'Anton', }} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>ReactJs</Tab>
          <Tab>RubyOnRails</Tab>
          <Tab>ReactNative</Tab>
          <Tab>GAME</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCategories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Project;
