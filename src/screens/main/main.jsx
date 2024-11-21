import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import icon from "../../constats/icons.js";
import { Image } from "react-native";

import AbaHome from "../abahome/abahome.jsx";
import AbaCalendar from "../abacalendar/abaCalendar.jsx";
import AbaProfile from "../abaprofile/abaProfile.jsx";

const Tab = createBottomTabNavigator();

function Main() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AbaHome} options={
                {
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{
                            width: 125,
                            height: 29,
                            marginTop: 12,
                        }} />
                    },
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return <Image source={icon.home} style={{
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }} />
                    }
                }
            } />

            <Tab.Screen name="Calendar" component={AbaCalendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{
                        width: 125,
                        height: 29,
                        marginTop: 12,
                    }} />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={{
                        width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3
                    }} />
                }
            }} />

            <Tab.Screen name="Profile" component={AbaProfile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={{
                        width: 125,
                        height: 29,
                        marginTop: 12,
                    }} />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile} style={{
                        width: 25,
                        height: 25,
                        opacity: focused ? 1 : 0.3
                    }} />
                }
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Main;