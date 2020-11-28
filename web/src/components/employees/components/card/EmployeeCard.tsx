import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import useStyles from "./employee.styles";
import { useEmployeeDetail } from "../../hooks/useEmployeeDetail";
import { useModal } from "../../hooks/useModal";
import Nui from "../../../../nui-events/utils/Nui";

const EmployeeCard = (employee) => {
  const classes = useStyles();
  const { setDetail } = useEmployeeDetail();
  const { setModal } = useModal()

  const handleOpenModal = (employee) => {
    Nui.send('ambu:fetchEmployeeTreatments', {
      doctor: employee.firstname + ' ' + employee.lastname 
    })
    setModal(true)
    setDetail(employee)
  }

  return (
    <div className="employee-card" key={employee.id}>
      <Card className={classes.root} variant="elevation">
        <CardContent>
          <Typography
            className={classes.cardTypo}
            style={{ fontSize: 20, fontWeight: 600 }}
          >
            {employee.firstname} {employee.lastname}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.cardAction} variant="contained" onClick={() => handleOpenModal(employee)}>
            Les mer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EmployeeCard;