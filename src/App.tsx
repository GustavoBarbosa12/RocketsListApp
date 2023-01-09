import React from "react";
import { StatusBar, View } from "react-native";
import { AuthProvider } from "./contexts/auth/auth-context";
import { RocketsProvider } from "./contexts/rocket/rockets-context";
import { Router } from "./routes/router";

const App = () => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor("whitesmoke");
    StatusBar.setTranslucent(false);
  return(
    <AuthProvider>
        <RocketsProvider>
            <Router />
        </RocketsProvider>
    </AuthProvider>
  )
}

export default App;