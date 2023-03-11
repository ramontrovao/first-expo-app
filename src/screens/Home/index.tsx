import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Festa do Pombo</Text>

      <Text style={styles.eventDate}>Sábado, 11 de Março de 2023</Text>
    </View>
  );
}
