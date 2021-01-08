import 'react-native-gesture-handler';
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import OverviewScreen from '../screens/OverviewScreen';

import Colors from '../constants/Colors';

const SpareNav = createStackNavigator(
    {
        Overview: {
            screen: OverviewScreen,
        },
    }
);

export default createAppContainer(SpareNav);
