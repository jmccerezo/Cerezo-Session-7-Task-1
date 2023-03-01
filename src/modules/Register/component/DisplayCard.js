import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DisplayCard({ users }) {
  const usersList = users.length ? (
    users.map((user) => {
      return (
        <div className="card-container" key={user.id}>
          <Card
            sx={{
              width: 350,
              maxWidth: 450,
              borderRadius: "20px",
              backgroundColor: "whitesmoke",
            }}
          >
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
    <div>
      <h3 className="no-user-text">No registered users yet</h3>
    </div>
  );

  return <>{usersList}</>;
}
