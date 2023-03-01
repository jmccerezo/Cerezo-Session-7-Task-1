import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SuccessModal from "./SuccessModal";
import { onRegisterUser } from "../../action";

class Form extends Component {
  state = {
    name: "",
    job: "",
    error: { nameError: "", jobError: "" },
    isValid: false,
    openModal: false,
  };

  handleChange = (e) => {
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    }
    if (e.target.id == "job") {
      this.validateJob(e.target.value);
    }
  };

  validateName = (name) => {
    let nameError = this.state.error.nameError;
    let isValid = this.state.isValid;
    let alphabetsRegex = /^[A-Za-z ]+$/;

    if (name == "") {
      nameError = "Name is required*";
      isValid = false;
    } else if (!alphabetsRegex.test(name)) {
      nameError = "Please enter alphabets only*";
      isValid = false;
    } else {
      nameError = "";
      isValid = true;
    }

    this.setState({
      name,
      error: { ...this.state.error, nameError },
      isValid,
    });

    return isValid;
  };

  validateJob = (job) => {
    let jobError = this.state.error.jobError;
    let isValid = this.state.isValid;
    let alphabetsRegex = /^[A-Za-z ]+$/;

    if (job == "") {
      jobError = "Job is required*";
      isValid = false;
    } else if (!alphabetsRegex.test(job)) {
      jobError = "Please enter alphabets only*";
      isValid = false;
    } else {
      jobError = "";
      isValid = true;
    }

    this.setState({
      job,
      error: { ...this.state.error, jobError },
      isValid,
    });

    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateName(this.state.name) &&
      this.validateJob(this.state.job)
    ) {
      this.props.onRegister(this.state);
      this.setState({ name: "", job: "" });
      this.state.openModal = true;

      setTimeout(() => {
        this.setState({ openModal: false });
      }, 500);
    }
  };

  render() {
    return (
      <div>
        <SuccessModal openModal={this.state.openModal} />
        <Container
          maxWidth="sm"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Stack
            component="form"
            sx={{
              width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onBlur={this.handleChange}
              onChange={this.handleChange}
              value={this.state.name}
            />
            <p className="error-msg">{this.state.error.nameError}</p>
            <TextField
              id="job"
              label="Job"
              variant="outlined"
              onBlur={this.handleChange}
              onChange={this.handleChange}
              value={this.state.job}
            />
            <p className="error-msg">{this.state.error.jobError}</p>
            <Button variant="contained" onClick={this.handleSubmit}>
              Register
            </Button>
          </Stack>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (user) => dispatch(onRegisterUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
