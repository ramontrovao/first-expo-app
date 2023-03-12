import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  participantName: string;
  onRemoveParticipant: () => void;
}

export function Participant({
  participantName,
  onRemoveParticipant,
}: ParticipantProps) {
  return (
    <View style={styles.participantContainer}>
      <Text style={styles.participantName}>{participantName}</Text>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemoveParticipant}
      >
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
