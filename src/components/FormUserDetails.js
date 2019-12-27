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


function FormUserDetails(props){
    

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
                    placeholder = "Enter Your First Name"
                    label="First Name"
                    onChange = {handleChange('firstName')}
                    defaultValue={values.firstName}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error = {values.errFirstName}
                />
                <br/>
                <TextField 
                    placeholder = "Enter Your Last Name"
                    label="Last Name"
                    onChange = {handleChange('lastName')}
                    defaultValue={values.lastName}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error = {values.errLastName}
                />
                <br/>
                <TextField 
                    placeholder = "Enter Your Email"
                    label="Email"
                    onChange = {handleChange('email')}
                    defaultValue={values.email}
                    variant = 'outlined'
                    style = {styles.paddingStyle}
                    error = {values.errEmail}
                />
               <br/>
               <Button variant="contained" color="primary" style={styles.buttonStyle} onClick={(e)=> goNext(e, props)}>Continue</Button>
            </React.Fragment>
        </div>
    )
}

export default FormUserDetails;