import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { } from 'antd';
import { get } from 'lodash';

import Head from './../Header';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './home.sass';

const Home = props => {
  console.log('Home props', props);

  return (
    <div className="home-wrapper">
      <Head/>
      <div className="wrapper-layout">
        Hallo, Home
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
