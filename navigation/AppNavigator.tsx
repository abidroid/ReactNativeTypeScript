import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import Splash from "../src/screens/Splash";
import { Routes } from "./Routes";
import Landing from "../src/screens/Landing";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
       <Stack.Navigator>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Landing} component={Landing} />
       </Stack.Navigator>

     
    );
};


export default AppNavigator;