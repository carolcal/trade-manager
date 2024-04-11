import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/auth/WelcomeScreen"
import LogInScreen from './screens/auth/LogInScreen';
import RegisterScreen from './screens/auth/RegisterScreen'
import HomeScreen from './screens/main/HomeScreen';
import { useTheme } from '@rneui/themed';
import AdminScreen from './screens/admin/AdminScreen'


const Stack = createNativeStackNavigator();

function Stacks() {

    const { theme } = useTheme();

    return (

        <NavigationContainer
            theme={{
                colors: theme.colors,
                light: theme.mode === 'light',
                dark: theme.mode === 'dark',
            }}
        >
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LogInScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>


    );
}

export default Stacks;