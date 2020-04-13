import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function success(){
  alert("User Information Registered");
}

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhoneNumber = this.onChangeUserPhoneNumber.bind(this);
    this.onChangeUserAaadhar = this.onChangeUserAaadhar.bind(this);
    this.onChangeUserPan = this.onChangeUserPan.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      address: '',
      email: '',
      phonenumber: '',
      aaadhar: '',
      pancard: '',

    }



  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPhoneNumber(e) {
    this.setState({ phonenumber: e.target.value })
  }

  onChangeUserAaadhar(e) {
    this.setState({ aaadhar: e.target.value })
  }

  onChangeUserPan(e) {
    this.setState({ pancard: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      aaadhar: this.state.aaadhar,
      pancard: this.state.pancard
    };

    axios.post('http://localhost:4000/users/create-user', userObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      address: '',
      email: '',
      phonenumber: '',
      aaadhar: '',
      pancard: ''

    });



  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeUserName} required/>
        </Form.Group>

        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeUserAddress} required/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeUserEmail} required/>
        </Form.Group>

        <Form.Group controlId="Phonenumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" value={this.state.phonenumber} onChange={this.onChangeUserPhoneNumber} required />
        </Form.Group>

        <Form.Group controlId="Aaadhar">
            <Form.Label>Upload yor Aaadhar Card</Form.Label>
            <Form.Control type="file" value={this.state.aaadhar} onChange={this.onChangeUserAaadhar} required/>
        </Form.Group>

        <Form.Group controlId="PanCard">
             <Form.Label>Upload yor Pan Card</Form.Label>
             <Form.Control type="file" value={this.state.pancard} onChange={this.onChangeUserPan} required/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" onClick = {success}>
          Submit Information
        </Button>

      </Form>
    </div>);
  }
}
