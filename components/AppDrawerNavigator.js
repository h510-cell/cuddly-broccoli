import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {appTabNavigator} from './appTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBarter from '../screens/MyBarter'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:appTabNavigator
    },
    Setting:{
        screen : SettingScreen
    },
    Barters:{
        screen : MyBarter
    }
    },
    {
        contentComponent:CustomSideBarMenu
    },
    {
        intialRouteName:'home'
})