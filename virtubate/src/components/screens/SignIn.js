import React, { useState } from 'react';
import clsx from 'clsx';
import {useHistory} from 'react-router-dom';
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
import './Login.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import cielogo from '../../images/cie_iiit.png';
import virtubate_logo from '../../images/virtubate_logo.jpg';
import Background1 from '../../images/37672.jpg';
// import bg_login from '../../images/bg_login.PNG';
// import logo192 from '../../../public/logo192.png';
import M from 'materialize-css'
import disableBrowserBackButton from 'disable-browser-back-navigation';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    //background: Background,
    backgroundRepeat: 'no-repeat',
    backgroundColor:'pink',
    // backgroundColor:
      // theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  // root: {
  //   height: '100vh',
    
  // },
  image: {
    backgroundImage: Background1,
    backgroundRepeat: 'no-repeat',
    //backgroundColor:'red',
    // backgroundColor:
      // theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  form_grid:{
    backgroundColor: '#FFEFD5',
  },
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
    // width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    backgroundColor:'red',
    marginLeft: '100'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  disableBrowserBackButton()
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const PostData = () => {
    // if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    //   M.toast({ html: "Invalid email or password", classes: "#c62828 red darken-3" })
    //   return
    // }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        email,
        password
      })

    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          localStorage.setItem("jwt",data.token)
          localStorage.setItem("user",JSON.stringify(data.user))
          console.log("He")
         // M.toast({ html: "Signed in successfully", classes: "#c62828 green darken-3" })
          history.push('/dashboard');
        }
      }).catch(err => {
        console.log(err)
      })
  }

  return (
//     <Container component="main" maxWidth="xs"
//       // style={{
//       //   // backgroundImage: `url(${bg_login})`,
//       //   backgroundRepeat: "no-repeat",
//       //   backgroundSize: "cover",
//       //   marginLeft: "675",
//       //   marginTop: "50"
//       // }}
//     >
//       <Grid container component="main" className={clsx(classes.root,"image_grid")}>
//       <CssBaseline />
//       <div className={classes.paper}>
//         <div styles={{ backgroundImage: `url(${cielogo})` }}>
//           <img src={cielogo} alt="Virtubatelogo" width="250" height="150" style={{ padding: "10px" }}></img>
//           <img src={virtubate_logo} alt="Virtubatelogo" width="140" height="150" style={{ padding: "20px" }}></img>
//           {/* <img src={bg_login} alt="Virtubatelogo" width="140" height="150" style={{ padding: "20px" }}></img> */}
//         </div>

//         <Typography component="h1" variant="h5">
//           <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
//             LogIn
//       </Box>

//         </Typography>





// <TextField
            
//             margin="normal"
//             required
            
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             InputProps={{
//               classes: {
//                 notchedOutline: classes.notchedOutline,
//                 focused: classes.focused
//               }
//             }}
//             InputProps={{
//               disableUnderline:true,
//             }}
//             value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           />

//       <TextField

//           id="password"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           fullWidth
//           required
//           color="primary"
//           InputProps={{
//             classes: {
//               notchedOutline: classes.notchedOutline,
//               focused: classes.focused
//             }
//           }}
//           InputProps={{
//             disableUnderline:true,
//           }}
//           value={password}
//             onChange = {(e) => setPassword(e.target.value)}
//         />




//         {/* <div class="row">
//         <div class="input-field col s12">
//           <input id="password" type="password" class="validate" />
//           <label for="password">Password</label>
//         </div>
//       </div> */}

//         {/* <div className="item">
//         <TextField
//           variant="outlined"
//           margin="normal"
//           required
//           fullWidth
//           id="standard-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         />
//         </div> */}





//         {/* <FormControlLabel
//             control={<Checkbox value="remember" color="primary"  />}
//             label="Remember me"
//           /> */}
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           color="primary"
//           className={classes.submit}
//           onClick={() => PostData()}
//         >
//           Sign In
//           </Button>
//         <Grid container>
//           <Grid item xs>
//             <Link href="/reset" variant="body2">
//               Forgot password?
//               </Link>
//           </Grid>
//           <Grid item>
//             <Link href="/signupInc" variant="body2">
//               {"Don't have an account? Sign Up"}
//             </Link>
//           </Grid>
//         </Grid>
//       </div>
//       <Box mt={8}>

//       </Box>
//       </Grid>
//     </Container>







<Grid container component="main" className={clsx(classes.root,"image_grid")}>
      <CssBaseline/>
      <Grid item xs={false} sm={5} md={8} />
      <Grid item xs={8} sm={7} md={3} component={Paper} elevation={10} style={{marginLeft:'-70px'}}className={classes.form_grid}>
        <div className={classes.paper}>
        <Typography component="h1" variant="h5" >
        <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
        Login
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

<TextField

          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          required
          color="primary"
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline,
              focused: classes.focused
            }
          }}
          InputProps={{
            disableUnderline:true,
          }}
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
        />

          
        <br />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary"  />}
            label="Remember me"
          /> */}
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => PostData()}
          >
            Sign In
          </Button>
           <Grid container>
           <Grid item xs>
             <Link href="/reset" variant="body2">
               Forgot password?
               </Link>
           </Grid>
              {/* <Spacer amount={20} /> */}
           
              <Grid item>
             <Link href="/signupInc" variant="body2">
               {"Don't have an account? Sign Up"}
             </Link>
           </Grid>
            </Grid>
          {/* </Grid>          */}
        </div>
      </Grid>
    </Grid>
    // </div>




    
  );
}