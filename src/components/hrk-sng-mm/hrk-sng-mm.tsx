import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import "./hrksng-card.css";
import hrksngMM from '../../static/images/hrksng-mm.png'

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function HrkSngMM() {
  const classes = useStyles();

  return (
    <div>
      <Avatar alt="Remy Sharp" src={hrksngMM} className={classes.bigAvatar} />
    </div>
  )
}
