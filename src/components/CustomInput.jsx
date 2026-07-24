import { Text, TextInput, View } from "react-native";

const CustomInput = ({ value, onChangeText }) => {
    return (
      <>
        <View>
          <Text>Buscador</Text>
          <TextInput
            placeholder="Nombre del empleado"
            value="text"
            onChangeText={onChangeText}
          />
        </View>
      </>
    );
  };

export default CustomInput;