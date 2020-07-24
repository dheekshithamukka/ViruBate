import React, { Component, useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

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
import Register_Background from '../../images/reg.PNG';
import M from 'materialize-css'
import Spacer from 'react-add-space';




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
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));





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





var register_container={
  backgroundImage: `url(${Register_Background})`,
  width: "100%",
  height: "100%",
        backgroundRepeat  : 'no-repeat',
       backgroundSize:'cover',
        backgroundAttachment:'fixed'
}


const SignUp = () => {
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

  const [founderName, setFounderName] = useState("")
  const [email, setEmail] = useState("")
  const [startUpName, setStartUpName] = useState("")
  const [website, setWebsite] = useState("")
  const [descStartUp, setDescStartUp] = useState("")
  const [descPs, setDescPs] = useState("")
  const [ageOfS, setAgeOfS] = useState("")
  const [stage, setStage] = useState("")
  const [phone, setPhone] = useState("")
  const [selectPro, setSelectPro] = useState("")
  const [invest, setInvest] = useState("")
  const [hear, setHear] = useState("")
  const [check, setCheck] = useState(false)
  const [file, setFile] = useState("")
  const [logo, setLogo] = useState("")
  const [url, setUrlLogo] = useState(undefined)


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
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        founderName,
        email,
        startUpName,
        website,
        descStartUp,
        descPs,
        ageOfS,
        stage,
        phone,
        selectPro,
        hear,
        invest,
        check,
        logo: url,
        file
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" })
        }
        else {
          M.toast({ html: data.message, classes: "#c62828 green darken-3" })
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


  // #F9DB5F

  return (
    //<div>
    <div style={register_container}>
      <Container maxWidth="xs" style={{backgroundColor:"#F8F9F9",borderRadius:20,marginLeft:533 }}>
    {/* <Container maxWidth="xs"> */}
    <Spacer amount={50} />
      {/* <div styles={{ backgroundImage: `url(${cielogo})` }}>
        <img src={cielogo} alt="Cielogo" width="250" height="150" style={{padding:"10px"}}/>
        <img src={virtubate_logo} alt="Virtubatelogo" width="140" height="150" style={{padding:"20px"}}></img>
        <br />
        {/* <Typography component="h1" variant="h5"  weight="bold">
          Hello Start Up
        </Typography> */}
        {/* <Typography component="h1" variant="h5">
          <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
            HELLO STARTUP!!
      </Box>
        </Typography> */}
        <Typography component="h1" variant="h5">
        <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
        APPLY HERE! 
      </Box>
        </Typography>
        <Spacer amount={50} />
        {/* <br /> */}


        <Grid container justify="center" spacing={2}>

          <Grid item xs={12} sm={6} >
            <TextField
              autoComplete="fname"
              name="Founder Name"
              variant="outlined"
              multiline
              id="firstName"
              label="Founder Name"
              value={founderName}
              onChange={(e) => setFounderName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              variant="outlined"
              multiline

              id="email"
              label="Founder email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              multiline

              name="startupname"
              label="Start Up Name"
              id="startupname"
              value={startUpName}
              onChange={(e) => setStartUpName(e.target.value)}

            />
          </Grid>


          <Grid item xs={6} >
            <TextField
              variant="outlined"
              multiline

              name="website"
              label="Website"
              id="website"
              autoComplete="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <short style={{color: "grey"}}>Include http or https to your website link. </short>
          </Grid>



          <Grid item xs={12}>
            <TextField
              id="outlined-textarea"
              label="Brief description of Startup"
              // placeholder="Brief description of Startup "
              multiline
              fullWidth
              variant="outlined"
              value={descStartUp}
              onChange={(e) => setDescStartUp(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="outlined-textarea"
              label="Please describe your problem statement"
              // placeholder="Please describe your problem statement"
              multiline
              fullWidth
              variant="outlined"
              value={descPs}
              onChange={(e) => setDescPs(e.target.value)}
            />

          </Grid>





          <Grid item xs={6}>
            <FormControl size='medium' style={{ minwidth: 120 }}



            >
              <InputLabel


              >Age of startup</InputLabel>
              <Select

                native

                //value={state.age}
                //onChange={handleChange}
                label="item"
                autosize={true}

                inputProps={{

                  name: 'items',
                  id: 'outlined-age-native-simple',
                }}

                value={ageOfS}
                onChange={(e) => setAgeOfS(e.target.value)}
              >
                <option aria-label="None" value="" />

                <option>1 year</option>
                <option>2 years</option>
                <option>3 years</option>
                <option>4 years</option>
                <option>5 years</option>

                <option>greater than 5 years</option>
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={6}>
            <FormControl variant="standard" size='medium' style={{ minwidth: 120 }}>
              <InputLabel

              >Stage of the Startup</InputLabel>
              <Select

                native

                //value={state.age}
                //onChange={handleChange}
                label="item"
                autosize={true}

                inputProps={{

                  name: 'items',
                  id: 'outlined-age-native-simple',
                }}

                value={stage}
                onChange={(e) => setStage(e.target.value)}

              >
                <option aria-label="None" value="" />
                <option>Idea Stage</option>
                <option>Prototype</option>
                <option>Customer Evaluation</option>
                <option>Early Revenue</option>
                <option>Early Scale</option>
                <option>Scale</option>
                <option>Others</option>
              </Select>
            </FormControl>



          </Grid>


          <Grid xs={12}>

            <p>
              Upload the pitch deck/challenges slide that you would like to seek help for
              </p>


            {/* <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file"  value={file} onChange={(e) => setFile(e.target.value)}/>
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"
                  placeholder="Choose a file " 
                />  
              </div>
            </div> */}


{/* <Grid item xs={12}> */}
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Hearaboutus"
              label="Upload drive link"
              id="outlined-textarea"
              multiline
              value={file} 
              onChange={(e) => setFile(e.target.value)}
            />
          {/* </Grid> */}


          </Grid>



          <Grid item xs={12} >


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

          <Grid item xs={6}>
            <FormControl variant="standard" size='medium' style={{ minwidth: 120 }}>
              <InputLabel

              >Select your Program</InputLabel>
              <Select

                native

                //value={state.age}
                //onChange={handleChange}
                label="item"
                autosize={true}

                inputProps={{

                  name: 'items',
                  id: 'outlined-age-native-simple',
                }}
                value={selectPro} 
                onChange={(e) => setSelectPro(e.target.value)}

              >
                <option aria-label="None" value="" />
                <option>DeepTech labs</option>
                <option >Tvarit-Path to MVP</option>
                <option >Tvarit-Product Strategy</option>
                <option>Tvarit-Go To Market</option>
                <option >Tvarit-StartUp Corporate Connect</option>
                <option >Tvarit-Go To Angels</option>
                <option>Tvarit-UI/UX</option>
              </Select>
            </FormControl>

          </Grid>




          <Grid item xs={6}>
            <FormControl variant="standard" size='medium' style={{ minwidth: 120}}>
            <InputLabel
  
              >Investment Stage</InputLabel>
               
              <Select
  
    native
  
    value={invest}
    onChange={(e) => setInvest(e.target.value)}
    label="item"
    autosize={true}
  
    inputProps={{
  
      name: 'items',
      id: 'outlined-age-native-simple',
    }}
  >
    <option aria-label="None" value="" />
    <option>F and F stage: (less than 25 lakhs)      </option>
    <option>Seed stage: (less than 50 lakhs)</option>
    <option>Pre-angel: (.5-2Cr)</option>
    <option>Angel: (greater than 2Cr)</option>
    <option>Pre VC</option>
    <option>VC A</option>
    //<option>Others</option>
  </Select>
  </FormControl>
  
  
  
            </Grid>



          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Hearaboutus"
              label="How did you hear about us"
              id="outlined-textarea"
              multiline
              value={hear} 
              onChange={(e) => setHear(e.target.value)}
            />
          </Grid>

          <Grid xs={12}>

            <p>
              Upload your logo
              </p>


            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file" onChange = {(e) => setLogo(e.target.files[0])} />
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text"
                  placeholder="Choose a file "
                />
              </div>
            </div>
          </Grid>

          <div>
      Program Fee:<br /><br /><label>
        <input class="filled-in" type="checkbox" value={check} onChange={() => setCheck(!check)} required />
        <span style={{color:"black"}}>Volunteer success fee based on the outcomes of the program</span>
      </label>
    </div>

          <button className="btn waves-effect waves-light #64b5f6 blue darken-1" style={{marginLeft: 320}}
          onClick={() => PostData()}
        >
          Submit
            </button>

            <br /> 
            <br /> 
            <br /> 
            <br /> 

        </Grid>
      {/* </div> */}
      <Spacer amount={50} />
      
      </Container>
      </div>

    // </Container>
  );
}

export default SignUp















