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

          {/* react 1 */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/51097720_2390892774289197_114607920938745856_n.jpg?_nc_cat=107&_nc_eui2=AeFXjONcv8R2mkpv8vILf47SDeK4nM_J9jrhbIiJENZMa1-_Yadmzc5dT9YcjwcLzlx88rheLKwVd3jH6O-0NeX1ma-usuW2O4t1p3rrRUQ34Q&_nc_ht=scontent.fcgk8-2.fna&oh=6f85d3f45eb6e19b66e6d75eb4544239&oe=5CBDD8D2) center / cover' }}></CardTitle>
            <CardText>
              MovieTic
            </CardText>
            <CardActions border>
              <a href="https://movietic.herokuapp.com/" rel="noonpener norefrrer" target="balnk">
                <Button colored>Get Started</Button>
              </a>
              <a href="https://github.com/uthrul/MovieApp_reactJs" rel="noonpener norefrrer" target="balnk">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>

          {/* react 2 */}
          <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/50862988_2390892574289217_4658805138264162304_n.jpg?_nc_cat=108&_nc_eui2=AeH_W0k9xgADI_bu1hCxpbx70OnfWrDq2votNHdQnU6ByecbOAPM7A9vXuSFUVwZoxAGtbxz2SfsNx-ND9o1DJq7XEILeTG9i9Al0pVP6iLW_Q&_nc_ht=scontent.fcgk8-1.fna&oh=afbb0d8047eac836050ec680c287341c&oe=5CBBDF1A) center / cover' }}></CardTitle>
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
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* rails 1 */}
          <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
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

          {/* rails 2 */}
          <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
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

          {/* rails 3 */}
          <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk9-1.fna.fbcdn.net/v/t1.0-9/51396403_2390892667622541_4291181174954393600_o.jpg?_nc_cat=105&_nc_eui2=AeGGGf5uM-bE1dRI9TyWWhW81Rx6Si4NSwY6uUuWsbAJ-tWGeO0K2JxrL-Wam-DGgMiJvmk9g_Fyt-L7omAkZQBzxRUtWcix6GJJ1yM59FpICA&_nc_ht=scontent.fcgk9-1.fna&oh=fb43ba0f8905567590903eecb574d982&oe=5CB4733E) center / cover' }}></CardTitle>
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

          {/* rails 4 */}
          <Card shadow={0} style={{ width: '300px', margin: 'auto' }}>
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

      )
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover' }}></CardTitle>
          <CardText>
            React native & Expo
          </CardText>
          <CardActions border>
            <a href="https://expo.io/@sauthrully">
              <Button colored>Get Started</Button>
            </a>
          </CardActions>
        </Card>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvODAyNjgvMzc4Mjc3LnBuZw==/347x500/%2FutF%2F%2B.png) center / cover' }}></CardTitle>
          <CardText>
            Tower Defense Game
          </CardText>
          <CardActions border>
            <a href="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif?_nc_eui2=AeGm3HxRoqHLnv9bNAb-bae2RPDClxfKeaCmbR6gzslqiMw51bY1p_u2DbSFWmd3UkB5DtdOARfGSa0DSH3r1yge782-0hYvFNri3Tyt18IKtg" rel="noonpener norefrrer" target="balnk">
              <Button colored>Get Started</Button>
            </a>
          </CardActions>
        </Card>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <div className="category-tabs">
          <h5 style={{ fontSize: '30px', fontFamily: 'Anton', }}>Example Projects</h5>
          <p style={{ fontSize: '15px', fontFamily: 'Anton', fontWeight: 'normal', }}>I am looking for case studies from Udemy, Youtube and Github</p>
        </div>
        <Tabs style={{ fontSize: '30px', fontFamily: 'Anton', }} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React Js</Tab>
          <Tab>Ruby On Rails</Tab>
          <Tab>React Native</Tab>
          <Tab>G A M E</Tab>
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
