import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/home/Home';
import SignIn from '../components/signIn/SignIn';
import SignUp from '../components/signUp/SignUp';
import Welcome from '../components/welcome/Welcome';

const AppNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
    },
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    },
    Home: {
        screen: Home,
    },
});

export default createAppContainer(AppNavigator);