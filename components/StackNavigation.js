import { createStackNavigator } from 'react-navigation-stack';
import Buy from '../Screens/Buy';
import Details from '../Screens/UserDetails';
import Barters from '../Screens/MyBarters';
import ADetails from '../Screens/AfterDetails';

export const Stack = createStackNavigator({
    Buy: {
        screen: Buy,
    },
    userDetails: {
        screen: Details,
    },
    Barter: {
        screen: Barters,
    },
    afterDetails: {
        screen: ADetails,
    },
});