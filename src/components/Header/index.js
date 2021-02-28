import React from 'react';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import {
  Grid,
  Typography
} from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import { withRouter, Link } from 'react-router-dom';
import { get } from 'lodash';

import checkAuth from './../../helper/redirections';
import SVG from './../../helper/customizeIcon';
import {URL} from './../../helper/constants';

import imageLogo from './../../assets/images/logo.png';
import imageTitle from '/docs/26103fde58754e3367262f181f7402bd.jpg';
import imageAvatar from './../../assets/images/avatar.svg';

import './header.sass';

const Head = props => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const revealServices = (event) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeServices = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  //console.log('props Header', props);
  return (
    <div className="wrapper-header">
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} sm={12} className="container-header-photo">
          <SVG 
            className='photo'
            width='100vw' 
            height='250px'
            source={imageTitle}
          >
            <SVG 
              className='logo' 
              width='48px' 
              height='48px'
              source={imageLogo}
            />
          </SVG>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center">
        <Grid item xs={4} sm={4} className="container-header-title">
          <Typography className='title'>
            SPEEDOMETER
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} className="container-header-address">
          <a target='_blank' href={URL.location}>
            <Typography className='address'>
              м.Львів, вул.Замкова,29
            </Typography>
          </a>
        </Grid>
        <Grid item xs={4} sm={4} className="container-header-phone">
          <Typography className='phone'>
            (073)737-37-47
          </Typography>
          <a href="tel:+380-737-373-747">
            <SVG 
              className='call' 
              width='48px' 
              height='48px'
            >
              <CallIcon/>
            </SVG>
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={0} justify="center" className="container-header-links-wrapper">
        <Grid item xs={4} sm={4} className="container-header-links">
          <Link to='/speedometer'>
            <Typography className='link'>
              Про нас
            </Typography>
          </Link>
          <Typography
            className='link services'
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            // aria-controls="simple-menu"
            onClick={revealServices}
          >
            Послуги
          </Typography>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={closeServices}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/diagnostic'>
                          <Typography className='link'>
                            Діагностика
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/chip-tuning'>
                          <Typography className='link'>
                            Чіп-тюнінг
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/delete-filter'>
                          <Typography className='link'>
                            Видалення сажевого фільтра
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/shutting-valve'>
                          <Typography className='link'>
                            Відключення клапана ЕГР
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/delete-system'>
                          <Typography className='link'>
                            Видалення систем AdBlue
                          </Typography>
                        </Link>
                      </MenuItem>
                      <MenuItem className='menu-item' onClick={closeServices}>
                        <Link to='/correction-speedometer'>
                          <Typography className='link'>
                            Корекція спідометрів
                          </Typography>
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Link to='/contact'>
            <Typography className='link'>
              Контакти
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Head);