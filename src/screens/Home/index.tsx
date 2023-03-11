import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";

import { styles } from "./styles";

export function Home() {
  const handleAddParticipant = () => {
    Alert.alert(
      "Você clicou!",
      "Tô em todo lugar, não dá pra controllah, OHOHO HAHA OHOHO HAHA"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Festa da Nayeon</Text>

      <Text style={styles.eventDate}>Sábado, 11 de Março de 2023</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do convidado"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
