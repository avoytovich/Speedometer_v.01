import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { } from 'antd';
import { get } from 'lodash';

import Head from './../Header';
import Footer from './../Footer';
import connect from './../../utils/connectFunction';
import action from './../../utils/actions';

import './layout.sass';

const Layout = props => {
  console.log('Layout props', props);

  return (
    <div className="layout-wrapper">
      <Head/>
      <div className="wrapper-layout">
        {props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
