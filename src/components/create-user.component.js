import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function success(){
  alert("User Information Registered");
}

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

  const passRegex = RegExp(
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/ );

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



export default class CreateUser extends Component {



  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    //this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    //this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
    //this.onChangeUserAadharNo = this.onChangeUserAadharNo.bind(this);
    this.onChangeUserEducation = this.onChangeUserEducation.bind(this);
    this.onChangeUserKeySkills = this.onChangeUserKeySkills.bind(this);
    this.onChangeUserExperience = this.onChangeUserExperience.bind(this);
    //this.onChangeUserPassword = this.onChangeUserPassword.bind(this);


    this.onSubmit = this.onSubmit.bind(this);


        // Setting up state
        this.state = {
          name: '',
          address: '',
          phonenumber: '',
          aadharno: '',
          education: '',
          keyskills:'',
          experience:'',
                email: '',
          password:'',
          formErrors: {
                email: "",
                password: "",
                aadharno: "",
                phonenumber:"",

              }


        }

  }



  handleChange = e => {
    e.preventDefault();
    const { name, value} = e.target;
    let formErrors = { ...this.state.formErrors };
    switch(name){
      case "email":
      formErrors.email = emailRegex.test(value)
        ? ""
        : "invalid email address" ;
      break;
      case "password":
        formErrors.password = passRegex.test(value)
        ? ""
        : "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  ;
        break;
    case "phonenumber":
        formErrors.phonenumber =
          value.length < 10 ? "Invalid" : "";
        break;

    case "aadharno":
          formErrors.aadharno =
            value.length < 12 ? "Invalid" : "";
          break;
    default:
      break;
    }

    this.setState({ formErrors, [name]: value}, () => console.log(this.state));
  };

  onChangeUserName(e) {
  this.setState({ name: e.target.value })
}

onChangeUserAddress(e) {
  this.setState({ address: e.target.value })
}

// onChangeUserEmail(e) {
//   this.setState({ email: e.target.value })
// }

// onChangeUserPhoneNumber(e) {
//   this.setState({ phonenumber: e.target.value })
// }

// onChangeUserAadharNo(e) {
//   this.setState({ aadharno: e.target.value })
// }

onChangeUserEducation(e) {
  this.setState({ education: e.target.value })
}

onChangeUserKeySkills(e) {
  this.setState({ keyskills: e.target.value })
}

onChangeUserExperience(e) {
  this.setState({ experience: e.target.value })
}

// onChangeUserPassword(e) {
//   this.setState({ password: e.target.value })
// }
  onSubmit(e) {
    e.preventDefault()

    if (formValid(this.state)) {
    console.log(`
      Email: ${this.state.email}
      Password: ${this.state.password}
      AadharNo:${this.state.aadharno}
      Phonenumber: ${this.state.phonenumber}
    `);

  } else {
    console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  }

    const userObject = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      aadharno: this.state.aadharno,
      education: this.state.education,
      keyskills: this.state.keyskills,
      experience: this.state.experience,
      password: this.state.password
    };

    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      address: '',
      email: '',
      phonenumber: '',
      aadharno: '',
      education: '',
keyskills:'',
experience:'',
password:''
    });


  }

  render() {
      const { formErrors } = this.state;

      return (<div className="form-wrapper">
    <Form onSubmit={this.onSubmit}>

      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} required/>
      </Form.Group>

      <Form.Group controlId="Email">
          <div className="email">
      <Form.Label>Email</Form.Label>

              <Form.Control
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                 noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
              </div>
              </Form.Group>

                    <Form.Group controlId="Password">
                  <div className="password">
                      <Form.Label>Password</Form.Label>
                    <Form.Control
                      className={formErrors.password.length > 0 ? "error" : null}
                      placeholder="Password"
                      type="password"
                      name="password"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">{formErrors.password}</span>
                    )}
                  </div>
                      </Form.Group>
      <Form.Group controlId="Address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" value={this.state.address} onChange={this.onChangeUserAddress} required/>
      </Form.Group>

<Form.Group controlId="Phonenumber">
<div className="phonenumber">

<Form.Label>Phone Number</Form.Label>
<Form.Control
className={formErrors.phonenumber.length > 0 ? "error" : null}
placeholder="Phone Number"
type="number"
name="phonenumber"
noValidate
onChange={this.handleChange}
/>
{formErrors.phonenumber.length > 0 && (
<span className="errorMessage">{formErrors.phonenumber}</span>
)}
</div>
</Form.Group>


<Form.Group controlId="AadharNo">
<div className="aadharno">

<Form.Label>Aadhar Number</Form.Label>
<Form.Control
className={formErrors.aadharno.length > 0 ? "error" : null}
placeholder="Aadhar Number"
type="number"
name="aadharno"
noValidate
onChange={this.handleChange}
/>
{formErrors.aadharno.length > 0 && (
<span className="errorMessage">{formErrors.aadharno}</span>
)}
</div>
</Form.Group>

      <Form.Group controlId="Education">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" value={this.state.education} onChange={this.onChangeUserEducation} required />
      </Form.Group>

      <Form.Group controlId="KeySkills">
        <Form.Label>Key Skills</Form.Label>
        <Form.Control type="text" value={this.state.keyskills} onChange={this.onChangeUserKeySkills} required />
      </Form.Group>

      <Form.Group controlId="Experience">
        <Form.Label>Experience(in Months)</Form.Label>
        <Form.Control type="number" value={this.state.experience} onChange={this.onChangeUserExperience} required />
      </Form.Group>


      <Button variant="danger" size="lg" block="block" type="submit" onClick = {success}>
        Submit Information
      </Button>

    </Form>
  </div>);
  }
}
