import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { connect } from "react-redux";

class Users extends Component {
  render() {
    console.log("USERS", this.props.users);
    const usersList = this.props.users.length ? (
      this.props.users.map((user) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Card sx={{ width: 350, maxWidth: 450 }} key={user.id}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Name: {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Job: {user.job}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h1>No Registered Users</h1>
      </div>
    );

    return <>{usersList}</>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(Users);
