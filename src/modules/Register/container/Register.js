import React, { Component } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Form from "../component/Form";
import DisplayCard from "../component/DisplayCard";
import { connect } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class Register extends Component {
  state = {
    value: 0,
  };

  handleChange = (e, value) => {
    this.setState({
      value,
    });
  };

  render() {
    console.log("PROPS", this.props);
    return (
      <div>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ height: "100vh" }}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Form" {...a11yProps(0)} />
                  <Tab label="Users" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={this.state.value} index={0}>
                <Form />
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                <DisplayCard users={this.props.users} />
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, null)(Register);
