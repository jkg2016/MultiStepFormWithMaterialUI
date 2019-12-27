import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';

export class UserForm extends Component {
    state = {
        step:1,
        firstName: "",
        lastName: "",
        email: "",
        occupation: "",
        city: "",
        bio: "",
        errFirstName:false,
        errLastName:false,
        errAge:false,
        errOccupation: false,
        errBio: false,
        errCity: false

    }

    nextStep = () => {
        const {step} = this.state;
        switch (step) {
            case 1:
                if (this.validateStep1() === false)
                {
                    break;
                }
                else
                { 
                    this.addStep();
                    break;
                }
            case 2:
                if (this.validateStep2() === false)
                {
                    break;
                }
                else
                { 
                    this.addStep();
                    break;
                }
            case 3:
                this.addStep();
                break;
            default:
                break;
        }    
       
    }

    addStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
        console.log(this.state.step)
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    validateStep1 = () => {
        const { firstName, lastName, email} = this.state;
        let errFirstName, errLastName, errEmail = false;

        if (firstName === "")
        {
            errFirstName = true;
        }

        if(lastName === "")
        {
            errLastName = true
        }

        if(email === "")
        {
            errEmail = true
        }

        this.setState({errFirstName: errFirstName, errLastName: errLastName, errEmail: errEmail})
        if ((errFirstName === true) || (errLastName === true) || (errEmail === true))
        {
            return false;
        }
        return true;
    }

    validateStep2 = () => {
        const { occupation, bio, city} = this.state;
        let errOccupation, errBio, errCity = false;

        if (occupation === "")
        {
            errOccupation = true;
        }

        if(bio === "")
        {
            errBio = true
        }

        if(city === "")
        {
            errCity = true
        }

        this.setState({errOccupation: errOccupation, errBio: errBio, errCity: errCity})
        if ((errOccupation === true) || (errBio === true) || (errCity === true))
        {
            return false;
        }
        return true;
    }
    //Handle fields change

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio, errFirstName, errLastName, errEmail, errOccupation, errBio, errCity} = this.state;
        const values =  { firstName, lastName, email, occupation, city, bio, errFirstName, errLastName, errEmail, errOccupation, errBio, errCity}
        
        switch(step){
            case 1:
                return(
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
                )
            case 3:
                return(
                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
                )
            case 4:
                return(
                    <h1>Success</h1>
                )
            default:
                return(<h1>Error</h1>)
        }
    }
}

export default UserForm;
