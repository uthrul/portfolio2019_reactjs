import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body1">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Saud Maruli Sihombing</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4uhGqQrsvQ8E4MmuO7aWiB0YklpZSeO9gpguRz6QvajXfFRwpw"
              alt="avatar"
              className="avatar-img-3"
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
              Hello , My name Saud Maruli Sihombing A.K.A <a href="https://codinghood.herokuapp.com/">Codinghood</a>.
              You can find me speaking Whatsapp and sharing on Github.
            </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{justifyContent:'center', fontSize: '20px', fontFamily: 'Anton' }}>
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    0813 - 80090865
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{justifyContent:'center', fontSize: '20px', fontFamily: 'Anton' }}>
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                    0858 - 10169910
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{justifyContent:'center', fontSize: '15px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    sauthrully@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
