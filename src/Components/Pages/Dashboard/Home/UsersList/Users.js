import { Box, CardContent, Container, Paper, Typography } from '@mui/material';
import React from 'react';

const Users = ({user}) => {
    return (
        <Container>
           <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
     user Name :- {user.displayName}
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     User Email :- {user.email}
      </Typography>
      <Typography variant="body2">
       
     User ID :- {user._id}
      </Typography>
    </CardContent>
    
  </React.Fragment>
        </Container>
    );
};

export default Users;