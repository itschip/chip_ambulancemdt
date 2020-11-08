import React from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

const PatientCard = (patient) => {
  return (
    <Card>
      <CardContent>
        <Typography>
          {patient.name}
        </Typography>
        <Typography>
          {patient.age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          Les mer
        </Button>
      </CardActions>
    </Card>
  )
}

export default PatientCard;

