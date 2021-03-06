import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bg_logo from './bg_login.PNG';
import { Link, Grid, Dialog } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
// import tile_date from './tile_data';
import  Login from '../images/bg_login.PNG';
import Dropdown from 'react-bootstrap/Dropdown';
// import { DropdownList } from 'react-widgets';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Modal from '@material-ui/core/Modal';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
// import ModalHeader from 'react-bootstrap/esm/ModalHeader';
// import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

// import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Container,Row,Col} from 'reactstrap';
import M from 'materialize-css';
// import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 350 ,
    maxHeight: 'auto',

     borderRadius: 20.0,
  },
  media: {
    height: 85,
    width: 85,
    //  borderRadius : 20,
  },
  gridList : {
    // blockSize : 
    // width:500,
    // height : 450,
    display : "flex",
    // overflow : "visible",
    justifyContent: 'space-around',
    borderSpacing : 10,
  },
  modal_style: {
   
      position: 'absolute',
      width: 400,
      // backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    
  },
  popup_card:{
    // width: 1000,
    // height: 1000,
  },
  dialog_box:{
    // width: 1000,
    // height: 1000,
  }
}));

const styles2 = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles2)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);










export default function MediaCard() {
  const classes = useStyles();
  const [open_modal,setopen_modal]=useState(false);
  // const [modalData,setmodal_data]=useState({});
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const [data, setData] = useState([])
  const [filterStage, setFilterStage] = useState([])
  const [filterAge, setFilterAge] = useState([])
  const [modalData, setModalData] = useState({})


  useEffect(() => {
        fetch('/shortlisted', {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          }
        })
          .then(res => res.json())
          .then(result => {
            console.log(result.cards)
            setData(result.cards)
          })
      }, [])
      const UpdateStatus = (modalData)=>{
            console.log(modalData._id)
            fetch(`status/${modalData._id}`, {
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
               if(data.error){
                  M.toast({html: data.error,classes:"#c62828 red darken-3"})

               }
               else{
        
                   M.toast({html:data.message,classes:"#43a047 green darken-1"})
                  //  {handemodal_close}
               }
            }).catch(err=>{
                console.log(err)
            })
            
        }
  
  
  const handle_modal = (item) => {
      setopen_modal(true);
      setModalData(item)
      //show_modal();
      //setmodal_data(true);
  };

  const handemodal_close =() => {
      setopen_modal(false);
  };


    const postData=()=>{
    if(filterStage!="" && filterAge!=""){
    fetch(`filter-shortlisted/${filterAge}/${filterStage}`, {
      //method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      
    }).then(res => res.json())
    .then(result => {
      if (result.error) {
        M.toast({ html: result.error, classes: "#c62828 red darken-3" })
      }
      else{
      console.log(result.cards)
      setData(result.cards)
      }
    })
  }
  else if(filterStage!=""){
    fetch(`stage-filter-shortlisted/${filterStage}`, {
      //method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      
    }).then(res => res.json())
    .then(result => {
      if (result.error) {
        M.toast({ html: result.error, classes: "#c62828 red darken-3" })
      }
      else{
      console.log(result.cards)
      setData(result.cards)
      }
    })
  }
  else{
    fetch(`age-filter-shortlisted/${filterAge}`, {
      //method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      
    }).then(res => res.json())
    .then(result => {
      if (result.error) {
        M.toast({ html: result.error, classes: "#c62828 red darken-3" })
      }
      else{
      console.log(result.cards)
      setData(result.cards)
      }
    })

  }
}





//   const tile_date = [
//     {
//         img:Login,
//         title: 'SignUp',
//         author: 'pratyusha',
//         cols :2 ,
//     },
//     {
//         img:Login,
//         title: 'Login',
//         author: 'Customer Evaluation',
//         cols :2 ,
//     },
//     {
//       img:Login,
//       title: 'Login',
//       author: 'Customer Evaluation',
//       cols :2 ,
//   },
//   {
//     img:Login,
//     title: 'Login',
//     author: 'Customer Evaluation',
//     cols :2 ,
// },
// {
//   img:Login,
//   title: 'Login',
//   author: 'Customer Evaluation',
//   cols :2 ,
// },
// {
//   img:Login,
//   title: 'Login',
//   author: 'Customer Evaluation',
//   cols :2 ,
// },
// {
//   img:Login,
//   title: 'Login',
//   author: 'Customer Evaluation',
//   cols :2 ,
// },


//   ];

  return (
    
        <div>
       
        <Grid>
          <div>
        
            <FormControl size='medium' style={{paddingRight:10,minWidth:120 , marginTop : 70, marginLeft: 300 }} autosize>
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
                value={filterAge}
                onChange={(e) => setFilterAge(e.target.value)}

              >
                <option aria-label="None" value="" /> 
                
                <option >1 year</option>
                <option >2 years</option>
                <option >3 years</option>
                <option >4 years</option>
                <option >5 years</option>
                
                <option>greater than 5 years</option>
              </Select>
            </FormControl>
                
         
           

            {/* <Grid item xs={12}> */}
            <FormControl variant="standard" size='medium' style={{ paddingRight:10 ,minWidth:120, marginTop : 70}} autosize>
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
    value={filterStage}
    onChange={(e) => setFilterStage(e.target.value)}
  >
    <option aria-label="None" value="" />
    <option >Idea Stage</option>
    <option >Prototype</option>
    <option >Customer Evaluation</option>
    <option >Early Revenue</option>
    <option >Early Scale</option>
    <option >Scale</option>
    <option >Others</option>
  </Select>
  </FormControl>
  </div>
  
  <button className="btn waves-effect waves-light #64b5f6 blue darken-1" style={{marginTop:10, marginLeft: 420}} onClick={() => postData()}>Filter</button>
  
            {/* </Grid> */}
          
            </Grid>
            <br/>
        
        <GridList cellHeight={300}  className={classes.gridList} >
        
        {
          data.map((item, index) => (
        //{/* {tile_date.map((tile) => ( */}
          <Grid xs="12" md="4" >
         <Card className={classes.root} variant="outlined" style={{backgroundColor : "white"}}>
         <CardActionArea onClick={() => handle_modal(item)}>
         <CardMedia
          centered
           className={classes.media}
           image={item.logo}
            title="Contemplative Reptile"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2" className="startupname">
             Startup name: {item.startUpName}
           </Typography>

           <Typography gutterBottom variant="h5" component="h2" className="stageofstartup">
             Stage: {item.stage}
           </Typography>
           {/* <Typography gutterBottom variant="h5" component="h2" className="website">
             <Link >
             Website
             </Link>
           </Typography> */}
         </CardContent>
       </CardActionArea>
     </Card> 
     </Grid>
        ))
          
}
    </GridList>
     <Dialog 
     className={classes.dialog_box}
     open={open_modal}
     aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
     >
     <DialogTitle closeButton>
           <IconButton />
          </DialogTitle>
        <DialogContent dividers>
                <Card className={classes.popup_card} variant="outlined" style={{backgroundColor : "white"}}>
                  <CardContent>
                    <Container>
                      <Row>
                        <Col>
                      {/* <Grid xs={12} sm={6} > */}
                <Typography gutterBottom variant="h5" component="h2" className="foundername">
           Founder name: 
           <p>{modalData.startUpName}</p>
                   </Typography>
                   <br/>
        <Typography gutterBottom variant="h5" component="h2" className="founderemail">
           Founder Email:  
           <p>{modalData.email}</p>
                   </Typography>
                   <br/>
                   <Typography gutterBottom variant="h5" component="h2" className="startupname">
           StartUp Name:
           <p>{modalData.startUpName}</p>
                   </Typography>
                   <br/>
        <Typography gutterBottom variant="h5" component="h2" className="website">
           Website:  
           <p>
           <a href={modalData.website} target="_blank">
           {modalData.website}
           </a>
           </p>
                   </Typography>
                   <br/>
                   <Typography gutterBottom variant="h5" component="h2" className="descrip">
           Brief description of Startup: 
           <p>{modalData.descStartUp}</p> 
                   </Typography>
                   <br/>
                   <Typography gutterBottom variant="h5" component="h2" className="problem">
           Please describe your problem statement:
           <p>{modalData.descPs}</p>
                   </Typography>
                   <br/>
       
                   {/* </Grid> */}
                   </Col>
                  <Col> 
                  {/* <Grid  sm={6}> */}
         <Typography gutterBottom variant="h5" component="h2" className="ageofstartup">
           <a target="_blank">
             Age of Startup: 
             <p>{modalData.ageOfS}</p>
                     </a>
         </Typography>
         <br/>
         <Typography gutterBottom variant="h5" component="h2" className="stageofstartup">
            Stage of Startup : 
            <p>{modalData.stage}</p>
         </Typography>
         <br/>
         <Typography gutterBottom variant="h5" component="h2" className="Upload">
             Upload the pitch deck/challenges slide that you would like to seek help for: 
             <p>
           <a href={modalData.file} target="_blank">
           {modalData.file}
           </a>
           </p>
         </Typography>
         <br/>
         <Typography gutterBottom variant="h5" component="h2" className="phnumber">
           {/* <a  target="_blank"> */}
             Phone Number: 
             <p>{modalData.phone}</p>
                     {/* </a> */}
         </Typography>
         <br/>
         <Typography gutterBottom variant="h5" component="h2" className="select">
           {/* <a  target="_blank"> */}
             Select your Program: 
             <p>{modalData.selectPro}</p>
                     {/* </a> */}
         </Typography>
         <br/>
         <Typography gutterBottom variant="h5" component="h2" className="about">
           {/* <a  target="_blank"> */}
             How did you hear about us: 
             <p>{modalData.hear}</p>
                     {/* </a> */}
         </Typography>
         <br/>
         {/* </Grid> */}
         </Col>
         </Row>
         </Container>
         </CardContent>
                </Card>
         </DialogContent>
              <DialogActions>
              <Button autoFocus onClick={handemodal_close} color="primary">
             Close
           </Button>
           {/* <Button autoFocus onClick={()=>UpdateStatus(modalData)} color="primary">
             Accept
           </Button> */}

         </DialogActions>
     </Dialog>

     
    </div>
  );
}