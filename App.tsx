import React,{useEffect} from "react";
import { Home } from "./src/screens/Homes";
import * as SplashScreen from "expo-splash-screen";
import {Roboto_400Regular,Roboto_500Medium, Roboto_700Bold, useFonts} from "@expo-google-fonts/roboto" 
import { ThemeProvider } from "styled-components/native";
import Theme from "./src/Theme";

//Mantem a tela inicial visivel enquanto buscamos nossos recursos(fonts).
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoader] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium, 
    Roboto_700Bold,
  });

  useEffect(()=>{
    async function prepareApp(){
      try {
        await SplashScreen.hideAsync();
      }catch(error){
        console.log("error hiding Splash Screen", error)
      }      
    }
    if (fontLoader){
      prepareApp();
    }
  },[fontLoader]);
    if (!fontLoader){
      return null;
    }
  

  return (
    <ThemeProvider theme={Theme}>
    <Home></Home>
    </ThemeProvider>
  );
}