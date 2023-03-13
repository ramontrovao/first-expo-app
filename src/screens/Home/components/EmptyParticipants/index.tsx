import { UserCirclePlus } from "phosphor-react-native";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function EmptyParticipants() {
  return (
    <View style={styles.emptyContainer}>
      <UserCirclePlus size={80} color="#808080" />

      <Text style={styles.emptyText}>
        Ninguém chegou no evento ainda? {"\n"} Adicione participantes à sua
        lista de presença.
      </Text>
    </View>
  );
}
