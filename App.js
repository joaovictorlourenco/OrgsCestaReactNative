import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import Cesta from './src/telas/Cesta';
import LoadingScreen from './src/telas/LoadingScreen';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return <LoadingScreen />;
  }
  
  return (
    <SafeAreaView >
      <StatusBar />
      <Cesta onError={() => {<LoadingScreen />}} />
    </SafeAreaView>
  );
}

