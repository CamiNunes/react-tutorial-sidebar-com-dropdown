import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Report 1',
        path: '/reports/report1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Report 2',
        path: '/reports/report2',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Report 3',
        path: '/reports/report3',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus/>,
  },
  {
    title: 'Team',
    path: '/team',
    icon: <FaIcons.FaEnvelopeOpenText/>
  },
  {
    title: 'Message',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Message 1',
        path: '/message/message1',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Message 2',
        path: '/message/message2',
        icon: <IoIcons.IoIosPaper/>,
      },
      {
        title: 'Message 3',
        path: '/message/message3',
        icon: <IoIcons.IoIosPaper/>,
      },
    ]
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle/>
  }
];