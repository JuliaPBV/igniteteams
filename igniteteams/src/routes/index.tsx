import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator();

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Navigator>
    </View>
  );
}
