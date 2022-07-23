import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super();
    this.state = {
      students: [
        {
          name: "Eric",
          email: "nana@ymail.com",
          contact: "0244419",
          addressline: "lrgon",
        },
        {
          name: "val",
          email: "baba@gmail.com",
          contact: "05679995",
          addressline: "Haatso",
        },
        // { name: "kwabena", email: "Eric@gmail.com", gen: 89 },
        // { name: "zidane", email: "zz@gmail.com", gen: 89 },
        // { name: "", email: "", gen: "" },
      ],
      name: "",
      email: "",
      contact: "",
      addressline: "",
    };
  }
  handleRegister = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });

    // console.log(this.state);
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log(this.state.gen);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      students: [
        ...this.state.students,
        {
          name: this.state.name,
          email: this.state.email,
          contact: this.state.contact,
          addressline: this.state.addressline,
        },
      ],

      name: "",
      email: "",
      contact: "",
      addressline: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <h1>Register Here</h1>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleRegister}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleRegister}
          />
          <br />
          <label>Contact:</label>
          <input
            type="text"
            name="contact"
            value={this.state.contact}
            onChange={this.handleRegister}
          />
          <br />
          <label>Addressline:</label>
          <input
            type="text"
            name="addressline"
            value={this.state.addressline}
            onChange={this.handleRegister}
          />
          <br />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>

        {this.state.students.map((student, index) => {
          return (
            <div key={index}>
              <h1>name:{student.name}</h1>
              <h2>email : {student.email}</h2>
              <h3>contact : {student.contact}</h3>
              <h3>addressline : {student.addressline}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default ClassForm;
