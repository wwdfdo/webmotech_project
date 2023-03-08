import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

import { ReactComponent as MessageIcon } from '@images/messages.svg';

const Message = () => {
  return <SvgIcon component={MessageIcon} inheritViewBox></SvgIcon>;
};

export default Message;
