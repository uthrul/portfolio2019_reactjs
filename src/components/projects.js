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
              <CardTitle style={{ color: '#black', height: '176px', background: 'url(https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/51097720_2390892774289197_114607920938745856_n.jpg?_nc_cat=107&_nc_eui2=AeEKwpWafzXycg_2SetmcJrhrlH3H6RchPQahs5Goi9QX049KjcjemVgXYW-byqdkkJdwzXocBZ0z5bvPYxkkRVkZnB6VoNIEk8HcppIhKVeTA&_nc_oc=AQkViIT3i46crnPjfgFWWqG9sEGkgb9agqYfpTp_sjmldB5NgmlNkDUFQXv-_023nFs&_nc_ht=scontent.fcgk8-2.fna&oh=e8287e43893226319c8e80a74303a259&oe=5E21CDD2) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/50862988_2390892574289217_4658805138264162304_n.jpg?_nc_cat=108&_nc_eui2=AeGzn02ojswGi4i6GI2ushlBZjeOuPR587jc3Axg9iDHEIonJSSeI8R-XUqamM26XYurcsHLkPeOcPSatiLPJE13aVQqsyZ_r4P9cN_I2eSTcw&_nc_oc=AQkzjCi5yU0WgZ0QDRBhDM5CLiFsJQakAQJlTEX-tSlVztMkBPFkYdYiYcn_z3srCVs&_nc_ht=scontent.fcgk8-1.fna&oh=50e11dd3f79d0bc23071ffe6d7365a8c&oe=5E1FD41A) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-2.fna.fbcdn.net/v/t1.0-9/51431095_2390892654289209_7197394705875730432_n.jpg?_nc_cat=109&_nc_eui2=AeEbJ5Je373Cd6ZhR2FUFuNwo6DlIsyAnEjhpcZbwlzs21HGYfmWlNP4iQvBila6YsmUI5ZRjiUWenE85WD1HrKGm5uTFK9ltpfSHNkLdN2aMw&_nc_oc=AQnU995lHAfESWOPhbedX_xb9F17PZQ3S_Ovg2MxeRa7wJds1UW74KlCRqZLPgggHTw&_nc_ht=scontent.fcgk8-2.fna&oh=f46d60ec5115b880dadcd289efdbe675&oe=5E6432F8) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk9-2.fna.fbcdn.net/v/t1.0-9/50894827_2390892604289214_4956696746995482624_n.jpg?_nc_cat=101&_nc_eui2=AeFs9PleQepF4jdoZFZVlxiTH31Kzp02pEvfCJWwP5pUIo_DOVziTrE5jPic0NGjFgR41d4cwI53oe37kiWcxqFCcU2QBs5n7kivdtI6aboqPg&_nc_oc=AQmTjK611kB9AOm9sh20JetaTiCM4CXM08ffgEwhTFkn51EOuutYqXUG3RfvmeFn0S4&_nc_ht=scontent.fcgk9-2.fna&oh=f5ef5fd6410e609c3eb16cbecd94e2be&oe=5E1A8F12) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/50984035_2390892670955874_664506216071823360_n.jpg?_nc_cat=111&_nc_eui2=AeG4FmYS9g6JOlWMU7UpOufe4R6QCpfnPewqDkkqD83yFHGiS4loQ67QUN58LRD4amkq6vVxVdw0S2sRKXuLB9QwbdQXSlJp_k2lwHbekyFjog&_nc_oc=AQm8vyGKM0mAwwJ4t3UAbKWe-Agno6agreu3G3iDOLgtb0w5ZqWfnhfkX8eGfB4i7J8&_nc_ht=scontent.fcgk8-1.fna&oh=3eeebc73b869af588d0df988d1746c01&oe=5E5B2242) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/51014128_2390892677622540_5152818323964035072_n.jpg?_nc_cat=100&_nc_eui2=AeFMgcxMqhUXwpZhVgVnB7HwdIJsh0gkZi5RehUXDTkJMv2g8hPVX4FMYTfievLi7o5fyaE8lGVVwfpGbYj72KyRw2faH7YH_c55xPxkEYXjmw&_nc_oc=AQneKKTDeHDRPNwDojEeoJMsOb7hcUbxIlQ5Eb6AsQcvB-VtntdihpyXsQCdBLLSh18&_nc_ht=scontent.fcgk8-1.fna&oh=6eb3f7967f710c77fcd5c6f8514cdaf5&oe=5E2DED6C) center / cover' }}></CardTitle>
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
              <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://scontent.fcgk8-1.fna.fbcdn.net/v/t1.0-9/52591437_2424960630882411_2359201956322344960_n.jpg?_nc_cat=111&_nc_eui2=AeFjKOqXuOzBTbvZ1PiB2_qDAzd64fnFQCw45J2EOwjvPfIRJgfzzkRbfNx_d-7HMza1YiTp79XBAYhPSnWzVnY59RC6s8oxYhH93-4ym0b4Mw&_nc_oc=AQlWYA1sG2esj4GI0mY4h1P2ErME0zbU12pL9u_yOez6gMW2yTWDRfXXsK6X8x0e0ss&_nc_ht=scontent.fcgk8-1.fna&oh=ae0f280db30252af6f21156824e811a9&oe=5E64E998) center / cover' }}></CardTitle>
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
          <Tab>React</Tab>
          <Tab>Rails FrontEnd</Tab>
          <Tab>ReactNative</Tab>
          <Tab>DESIGN & GAME</Tab>
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
