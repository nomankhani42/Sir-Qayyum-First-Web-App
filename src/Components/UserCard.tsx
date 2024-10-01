import React from 'react';
import { Card, CardContent, Grid, Typography} from '@mui/material';



const UserCard = ({item}) => {
  return (
    <Grid item xs={6} md={4} lg={3}>
    <Card>
    <CardContent>
      <Typography variant="h6" component="div">
        {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.body}
      </Typography>
    </CardContent>
  </Card>
  </Grid>
  )
}

export default UserCard
