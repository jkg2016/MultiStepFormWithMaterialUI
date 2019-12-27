import React from 'react'
import { List, ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    
  }));

  const styles = {
      buttonStyle: {
        margin:15
       },
       paddingStyle:{
           'paddingBottom' : '15px'
       },
       padding:{
           'paddingBottom' : '15px',
           'paddingTop': '15px'
       },
       alignItems:{
           alignItems:'center'
       }
  }

const goNext = (e, props) => {
    e.preventDefault();
    props.nextStep();
} 

const goBack = (e, props) => {
    e.preventDefault();
    props.prevStep();
 } 

function Confirm(props) {
        const classes = useStyles();
        const {values: {firstName, lastName, email, occupation, bio, city}} = props;
        return (
            <div>
            <React.Fragment>
                <AppBar position="static">
                <Typography variant="h6" className={classes.title}>
                    Confirm User Data
                </Typography>
                </AppBar> 
                <br />
                <List>

                    <ListItemText  primary="First Name" secondary={firstName}></ListItemText>

                      
                    <ListItemText primary="Last Name" secondary = {lastName} />
                    <ListItemText primary="Email" secondary = {email} />
                    <ListItemText primary="Occupation" secondary = {occupation} />
                    <ListItemText primary="Bio" secondary = {bio} />
                    <ListItemText primary="City" secondary = {city} />
                </List>
               <br/>
               <Button variant="contained" color="primary" style={styles.buttonStyle} onClick={(e)=> goNext(e, props)}>"Confirm & Continue"</Button>
               <Button variant="contained" color="primary" style={styles.buttonStyle} onClick={(e)=> goBack(e, props)}>Back</Button>
            </React.Fragment>
        </div>
        )
    
}

export default Confirm
