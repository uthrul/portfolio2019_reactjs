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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>
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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>
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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>
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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>
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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>
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
            <CardMenu style={{ color: '#fff' }}>
              <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
                <IconButton name="share" />
              </a>
            </CardMenu>

          </Card>
        </div>

      )
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}></CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={0} style={{ width: '720px', margin: 'auto' }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://img.itch.zone/aW1hZ2UvODAyNjgvMzc4Mjc3LnBuZw==/347x500/%2FutF%2F%2B.png) center / cover' }}></CardTitle>
          <CardText>
            Tower Defense Game
          </CardText>
          <CardActions border>
            <a href="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/-PAXP-deijE.gif?_nc_eui2=AeGm3HxRoqHLnv9bNAb-bae2RPDClxfKeaCmbR6gzslqiMw51bY1p_u2DbSFWmd3UkB5DtdOARfGSa0DSH3r1yge782-0hYvFNri3Tyt18IKtg" rel="noonpener norefrrer" target="balnk">
              <Button colored>Get Started</Button>
            </a>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <a href="https://www.facebook.com/sharer/sharer.php?u=" rel="noonpener norefrrer" target="balnk">
              <IconButton name="share" />
            </a>
          </CardMenu>
        </Card>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <div className="category-tabs">
          <h5 style={{ fontSize: '25px', fontFamily: 'Anton', }}>Example Project</h5>
        </div>
        <Tabs style={{ fontSize: '30px', fontFamily: 'Anton', }} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React Js</Tab>
          <Tab>Ruby On Rails</Tab>
          <Tab>H U G O</Tab>
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
