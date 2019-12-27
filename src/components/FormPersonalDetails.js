import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
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

function FormPersonalDetails(props){
    
    const classes = useStyles();
    const {values, handleChange} = props;

 
    return (
        <div>
            <React.Fragment>
                <AppBar position="static">
                <Typography variant="h6" className={classes.title}>
                    User Details Form
                </Typography>
                </AppBar> 
                <br />
                <TextField 
                    placeholder = "Enter Your Occupation"
                    label="Occupation"
                    onChange = {handleChange('occupation')}
                    defaultValue={values.occupation}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error ={values.errOccupation}
                />
                <br/>
                <TextField 
                    placeholder = "Enter Your Bio"
                    label="Bio"
                    onChange = {handleChange('bio')}
                    defaultValue={values.bio}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error = {values.errBio}
                />
                <br/>
                <TextField 
                    placeholder = "Enter Your City"
                    label="City"
                    onChange = {handleChange('city')}
                    defaultValue={values.city}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error = {values.errCity}
                />
               <br/>
               <Button variant="contained" color="primary" style={styles.buttonStyle} onClick={(e)=> goNext(e, props)}>Continue</Button>
               <Button variant="contained" color="primary" style={styles.buttonStyle} onClick={(e)=> goBack(e, props)}>Back</Button>
            </React.Fragment>
        </div>
    )
}

export default FormPersonalDetails;