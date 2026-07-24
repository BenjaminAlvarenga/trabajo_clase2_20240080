import Styles from "./src/styles/globalStyles.js"
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

//importamos el componente PokemonScreen que se encargará de mostrar la pantalla de los Pokémon
import WorkersScreen from './src/screens/WorkersScreen';

export default function App() {
  return (
    <View style={Styles.containerMain}>
      <Text style={Styles.title}>Mi aplicación consumiendo datos desde una API</Text>
      <WorkersScreen />
    </View> 
  );
}