import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./components/screens/WelcomeScreen"
import LogInScreen from './components/screens/LogInScreen';
import HomeScreen from './components/screens/HomeScreen';
import RegisterScreen from './components/screens/RegisterScreen'




const Stack = createNativeStackNavigator();

function Stacks() {


    return (
        
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={LogInScreen} />
                <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

        
        );
    }
    
    export default Stacks;