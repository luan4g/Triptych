import React from 'react';
import { activateKeepAwake } from 'expo-keep-awake';
import { AppLoading } from 'expo';
import { Galada_400Regular, useFonts } from '@expo-google-fonts/galada';
import { ChelaOne_400Regular } from '@expo-google-fonts/chela-one';
import { Roboto_900Black, Roboto_700Bold_Italic, Roboto_700Bold } from '@expo-google-fonts/roboto';

activateKeepAwake();

import Routes from './src/routes';

export default function App() {
  const [loadedFonts] = useFonts({
    Galada: Galada_400Regular,
    ChelaOne: ChelaOne_400Regular,
    Roboto_Black: Roboto_900Black,
    Roboto_Bold: Roboto_700Bold,
    Roboto_BoldI: Roboto_700Bold_Italic,
  })

  if(!loadedFonts) {
    return <AppLoading />
  }

  return (
    <>
      <Routes />
    </>
  );
}
