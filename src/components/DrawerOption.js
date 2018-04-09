import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import MainPage from './MainPage';
import History from './history';
import Profile from './Profile';
import SideMenu from './sideMenu';
import Start from './Start';
import Store from './Store';
import Collect from './Collect';
import MainPageStates from '../containers/MainPageStates';
import Index from './Index';
import Root from './Root';
const DrawerOption = DrawerNavigator(
    {
        Start : {
        path : '/',
        screen : Start
      },
        Home : {
          path : '/mainpage',
          screen : MainPageStates
        },
        History : {
          path : '/history',
          screen : History
        },
        Profile : {
            path : '/profile',
            screen : Profile
        },
        Store : {
            path : '/store',
            screen : Store
        },
        Collect : {
            screen : Collect,
            path : '/collect'
        },
        Root : {
            path : '/root',
            screen : Root
        }
    },
    {
        initialRouteName : 'Start',
        drawerPosition : 'left',
        contentComponent : props => <SideMenu {...props}/>,
        contentOptions: {
            style: {
              marginVertical: 0,
              marginTop : 0
            }
        }
    }
);
export default DrawerOption;