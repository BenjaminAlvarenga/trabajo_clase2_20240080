//Custom card para mostrar la información

//los imports que traen los componentes nativos de react native
import { StyleSheet, Text, View } from "react-native";
import Style from "../styles/globalStyles.js"

/**https://retoolapi.dev/GH2Ivb/dataMovil
 * 
 * 
 * "id": 1,
    "name": "Katerine Schirak",
    "work": "Building Materials",
    "work_since": "Apr 6, 2026 6:19 PM"
 */

//recibimos worker como props, el cual será el objeto que contiene la información del empleado que queremos mostrar en la tarjeta

const CustomCard = ({ worker }) => {
  return (
    <View style={Style.card}>
      <Text style={Style.nameCard}>{worker.name}</Text>
      <Text style={Style.work}>{worker.work}</Text>
      <Text style={Style.work_since}>{worker.work_since}</Text>
    </View>
  );
};

export default CustomCard;