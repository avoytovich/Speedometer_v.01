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
import imgDiagnostic from './../../assets/images/delete-filter.png';

import './delete-filter.sass';

const DeleteFilter = props => {
  console.log('DeleteFilter props', props);

  return (
    <div className="delete-filter-wrapper">
      <Head/>
      <div className="delete-filter-layout">
        <Grid container spacing={0} justify="center" alignItems="center">
          <Grid item xs={6} sm={6} className="container-header-title">
            <Typography variant='h3' className='title'>
              Видалення сажевого фільтра
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
            {content.deleteFilter.map(content => (
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFilter);
