import React, { useState } from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import 'antd/dist/antd.css';
import { } from 'antd';
import { get } from 'lodash';

import Head from './../Header';
import Footer from './../Footer';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';
import SVG from './../../helper/customizeIcon';
import {content} from './../../helper/constants';
import imgDiagnostic from './../../assets/images/delete-system.png';

import './deleteSystem.sass';

const DeleteSystem = props => {
  console.log('DeleteSystem props', props);

  return (
    <div className="delete-system-wrapper">
      <Head/>
      <div className="delete-system-layout">
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={6} sm={6} className="container-header-title">
            <Typography variant='h3' className='title'>
              Видалення систем AdBlue, SCR, BlueTec
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} className="container-header-photo">
            <SVG 
              className='photo' 
              height='200px'
              source={imgDiagnostic}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={10} sm={10} className="container-content">
            {content.deleteSystem.map(content => (
              <Typography className='content'>{content}</Typography>
            ))}
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
};

const mapStateToProps = state => {
  return {store: state}
};

const mapDispatchToProps = dispatch => {
  const actionData = (name, payload) => dispatch(action(name, payload))
  return {
    dispatchRemoveTitle: actionData,
    dispatchChangedSelectedMenuItem: actionData
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteSystem);
