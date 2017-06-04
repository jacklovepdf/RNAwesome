/**
 * Created by chengyong.lin on 17/6/4.
 */

'use strict';
import {
    StackNavigator,
} from 'react-navigation';
const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});