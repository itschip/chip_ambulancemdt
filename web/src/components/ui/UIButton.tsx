import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const NavButton = (props) => {
  return (
    <Button {...props}>
      <NavLink to={props.to}>{props.label}</NavLink>
    </Button>
  )
}