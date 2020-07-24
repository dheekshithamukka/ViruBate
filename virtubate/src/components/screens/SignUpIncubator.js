// import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom'
// //import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// //import Box from '@material-ui/core/Box';
// //import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// import cielogo from '../../images/cie_iiit.png';
// import virtubate_logo from '../../images/virtubate_logo.jpg';
// import M from 'materialize-css'


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUpIncubator() {
//   const classes = useStyles();
//   const history = useHistory()
//   const [orgName, setOrgName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confPassword, setConfPassword] = useState("")


//   const PostData = () => {
//     if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
//       M.toast({html: "Invalid email address",classes:"#c62828 red darken-3"})
//       return
//   }
//     fetch("/signupInc", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         orgName,
//         email,
//         password,
//         confPassword
//       })
//     }).then(res => res.json())
//       .then(data => {
//         if (data.error) {
//           M.toast({ html: data.error, classes: "#c62828 red darken-3" })
//         }
//         else {
//           M.toast({ html: data.message, classes: "#c62828 green darken-3" })
//           history.push('/signin')
//         }
//       }).catch(err => {
//         console.log(err)
//       })
//   }



//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <div>
//           <img src={cielogo} alt="Virtubatelogo" width="250" height="150" style={{padding:"10px"}}></img>
//           <img src={virtubate_logo} alt="Virtubatelogo" width="140" height="150" style={{padding:"20px"}}></img>
        
//         </div>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
        
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="orgname"
//                 name="orgName"
//                 variant="outlined"
//                 multiline
//                 required
//                 fullWidth
//                 id="orgname"
//                 label="Organization Name"
//                 autoFocus
//                 value={orgName}
//                 onChange={(e) => setOrgName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 multiline
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 multiline
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 multiline
//                 name="confirmpassword"
//                 label="Confirm Password"
//                 type="password"
//                 id="confirmpassword"
//                 autoComplete="current-password"
//                 value={confPassword}
//                 onChange={(e) => setConfPassword(e.target.value)}
//               />
//             </Grid>
//             {/* <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               /> 
//   </Grid> */}
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={() => PostData()}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
        
//       </div>
      
//     </Container>
//   );
// }






import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';

// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import {Row,Col} from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Dropdown from 'react-bootstrap/DropdownButton';
import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextareaAutosize from "@material-ui/core/TextField";
import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

// import ReactDOM from "react-dom";
import cielogo from '../../images/cie_iiit.png';
import virtubate_logo from '../../images/virtubate_logo.jpg';
import M from 'materialize-css'
import signupbg from '../../images/1397.jpg';

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



var register_container1={
  backgroundImage: `url(${signupbg})`,
  width: "100%",
  height: "100%",
        backgroundRepeat  : 'no-repeat',
      //  backgroundSize:'cover',
        backgroundAttachment:'fixed'
        
}

const SignUpIncubator = () => {
  // export default class App extends Component{  

  // const onchange = (e) => {
  //   console.log('assas')
  //   let files = e.target.files
  // }

  // const fileref = React.createRef(null);
  // const fileupload = (e) => {
  //   console.log('assas');
  //   this.fileref.current.click();
  // }

  const [incubatorName, setIncName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [ceoname, setCeoname] = useState("")
  const [website, setWebsite] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [focus, setFocus] = useState("")
  const [desc, setDesc] = useState("")
  const [logo, setLogo] = useState("")
  const [url, setUrlLogo] = useState(undefined)
  const history = useHistory()


  useEffect(() => {
    if(url){
      uploadFields()
    }
  }, [url])

  const uploadPic = () => {
    const data = new FormData()
    data.append("file", logo)
    data.append("upload_preset", "VirtuBate")
    data.append("cloud_name", "dpt8wpg3a")
    fetch(" https://api.cloudinary.com/v1_1/dpt8wpg3a/image/upload", {
      method: "post",
      body: data
    })
    .then(res=>res.json())
    .then(data=>{
      setUrlLogo(data.url)
    })
    .catch(err => {
      console.log(err)
    })
  }


  const uploadFields = () => {
  //   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
  //     M.toast({html: "Invalid email address",classes:"#c62828 red darken-3"})
  //     return
  // }
    fetch("/signupInc", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        incubatorName,
        email,
        password,
        confPassword,
        ceoname,
        website,
        phone,
        address,
        focus,
        desc,
        country,
        state,
        city,
        logo: url
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#c62828 green darken-3" })
          history.push('/signin');
        }
      }).catch(err => {
        console.log(err)
      })
  }


  const PostData = () => {
    if(logo){
      uploadPic()
    }
    else{
      uploadFields()
    }
  }




  return (
    //<div>
    <div style={register_container1}>
    <Container maxWidth="xs" style={{backgroundColor:"#FFFFFF",borderRadius:20,marginLeft:800 }}>
      {/* <p styles={{backgroundImage: `url(${virtubate_logo})`}}>
      <img src={virtubate_logo} alt="Virtubatelogo" ></img></p> */}
      {/* <div styles={{backgroundImage:`url(${cielogo})` }}>
       <div>
       <img src={virtubate_logo} alt="Virtubatelogo" width="140" height="150" style={{padding:"20px"}}></img>
        <img src={cielogo} alt="cielogo" width="250" height="150" style={{padding:"10px"}}></img>
         
    
      </div> */}
      <div>
        <br />
      <Typography component="h1" variant="h5">
      <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
      SIGN UP!
    </Box>
      </Typography>
      
         
         <Grid container justify="center" spacing={2}>
          
         
          <Grid item xs={12}  >
            <TextField
              autoComplete="Iname"
              name="Incubator name"
              required
              fullWidth       
              id="IncubatorName"
              label="Incubator name"
              onChange={(e) => setIncName(e.target.value)}
              InputProps={{
                disableUnderline:true,
              }}
             
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              
             required
              fullWidth
       
              id="email"
              label="Incubator email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                disableUnderline:true,
              }}
            />
          </Grid>
          <Grid item xs={12} >
          <TextField
          required
          id="password"
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
            fullWidth
            required
            color="primary"
            InputProps={{
              disableUnderline:true,
            }}
            />
         </Grid>
         
          <Grid item sm={12} >
          <TextField
          required
          id="password"
          label="Confirm Password"
          type="password"
          onChange={(e) => setConfPassword(e.target.value)}
          autoComplete="current-password"
            fullWidth
            required
            color="primary"
            InputProps={{
              disableUnderline:true,
            }}
            />
          </Grid>

<Grid item xs={12} >
            <TextField  
              fullWidth
              required
              id="ceoname"
              label="CEO Name"
              name="ceoname"
              onChange={(e) => setCeoname(e.target.value)}
              autoComplete="ceoname"
              InputProps={{
                disableUnderline:true,
              }}
              
            />
          </Grid>




      <Grid item  xs={12}>
            <TextField
              fullWidth
              required
              name="website"
              label="Website"
              id="website"
              onChange={(e) => setWebsite(e.target.value)}
              autoComplete="website"
              InputProps={{
                disableUnderline:true,
              }}
            />
            <short style={{color: "grey"}}>Include http or https to your website link. </short>
          </Grid>


          <Grid item xs={12} >
              <TextField  
                fullWidth
                required
                id="focus"
                label="Focus of Incubator"
                name="focus"
                autoComplete="Focus of Incubator"
                InputProps={{
                  disableUnderline:true,
                }}
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                
              />
            </Grid>
            <br/>
            <Grid item xs={12} >
              <TextField  
                fullWidth
                required
                id="Description"
                label="Description"
                name="Description"
                autoComplete="Description"
                InputProps={{
                  disableUnderline:true,
                }}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                
              />
            </Grid>
            <br/>



<Grid item xs={12}>


<PhoneInput class="abc"
  //style={{width:250 , innerHeight:100}}
  placeholder="Enter code and ph.no."
  //value={value}
  onChange={(e) => setPhone(e.target.value)}
  variant="outlined"
  // autoFocus
  multiline
  value={phone} 
  onChange={(e) => setPhone(e)}
/>

</Grid>






  <Grid item xs={12}>
            <TextField
              id="outlined-textarea"
              onChange={(e) => setAddress(e.target.value)}
              label="Address of Incubator"
              required
              multiline
              fullWidth
            
            />
          </Grid>
          <Grid item xs={12}  >
            <TextField
              autoComplete="Country"
              name="Country"
              onChange={(e) => setCountry(e.target.value)}
              required
              fullWidth       
              id="Country"
              label="Country"
              InputProps={{
                disableUnderline:true,
              }}
             
            />
            </Grid>
            <Grid item xs={12}  >
            <TextField
              autoComplete="State"
              onChange={(e) => setState(e.target.value)}
              name="State"
              required
              fullWidth       
              id="State"
              label="State"
              InputProps={{
                disableUnderline:true,
              }}
             
            />
            </Grid>
            <Grid item xs={12}  >
            <TextField
              autoComplete="City"
              name="City"
              onChange={(e) => setCity(e.target.value)}
              required
              fullWidth       
              id="City"
              label="City"
              InputProps={{
                disableUnderline:true,
              }}
             
            />
            </Grid>

      <Grid xs={12}>
         <div>Incubator Logo  </div>
          <div class="file-field input-field">
    <div class="btn">
      <span>File</span>
      <input type="file" onChange = {(e) => setLogo(e.target.files[0])}/>
    </div>
    <div class="file-path-wrapper">
      <input class="file-path validate" type="text"
      placeholder = "Choose a file "
      />
    </div>
  </div>
  </Grid>
  
 

        
            
        

      {/* <Grid item xs={12}>
              <p> country state city </p>
              <div>
      <CountryDropdown
        value={country}
        onChange={(val) => this.selectCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => this.selectRegion(val)} />
    </div>
          </Grid> */}
   {/* <Country /> */}

         
  <button className="btn waves-effect waves-light #64b5f6 blue darken-1" style={{marginLeft: 320}}
     onClick={() => PostData()} >
        Sign Up
          </button>

  <br />
  <br />

          </Grid>
          
      </div>
 
   
    </Container>
    </div>
  );
}

export default SignUpIncubator