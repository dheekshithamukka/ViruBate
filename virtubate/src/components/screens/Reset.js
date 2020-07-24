import React, { useState, useHistory } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import PasswordInput from 'material-ui-password-field';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import cielogo from '../../images/cie_iiit.png';
import virtubate_logo from '../../images/virtubate_logo.jpg';
// import bg_login from '../../images/bg_login.PNG';
// import logo192 from '../../../public/logo192.png';
import M from 'materialize-css'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Reset() {

  const classes = useStyles()
  // const history = useHistory()
  const [email, setEmail] = useState("")


  const PostData = () => {
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      M.toast({ html: "Invalid email or password", classes: "#c62828 red darken-3" })
      return
    }
    fetch("/reset-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        email
      })

    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {

          M.toast({ html: data.message, classes: "#c62828 green darken-3" })
          // history.push('/signin')
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <Container component="main" maxWidth="xs"
      // style={{
      //   // backgroundImage: `url(${bg_login})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   marginLeft: "675",
      //   marginTop: "50"
      // }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        {/* <div styles={{ backgroundImage: `url(${cielogo})` }}> */}
          {/* <img src={cielogo} alt="Virtubatelogo" width="250" height="150" style={{ padding: "10px" }}></img> */}
          {/* <img src={virtubate_logo} alt="Virtubatelogo" width="140" height="150" style={{ padding: "20px" }}></img> */}
          {/* <img src={bg_login} alt="Virtubatelogo" width="140" height="150" style={{ padding: "20px" }}></img> */}
        {/* </div> */}

        <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
            LogIn
      </Box>

        </Typography>

<TextField
            
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                focused: classes.focused
              }
            }}
            InputProps={{
              disableUnderline:true,
            }}
            value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => PostData()}
        >
          Reset password
          </Button>
        {/* </Grid> */}
      </div>
      <Box mt={8}>

      </Box>
    </Container>
  );
}