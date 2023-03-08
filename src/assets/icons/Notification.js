import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as NotificationIcon } from '@images/bell.svg';

const Notification = () => {
  return <SvgIcon component={NotificationIcon} inheritViewBox></SvgIcon>;
};

export default Notification;
