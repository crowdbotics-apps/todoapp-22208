import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList166636Navigator from '../features/NotificationList166636/navigator';
import Settings166635Navigator from '../features/Settings166635/navigator';
import Settings166627Navigator from '../features/Settings166627/navigator';
import UserProfile166625Navigator from '../features/UserProfile166625/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList166636: { screen: NotificationList166636Navigator },
Settings166635: { screen: Settings166635Navigator },
Settings166627: { screen: Settings166627Navigator },
UserProfile166625: { screen: UserProfile166625Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
