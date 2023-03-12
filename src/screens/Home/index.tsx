import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { Participant } from "./components/Participant";

import { styles } from "./styles";

interface Participant {
  name: string;
}

export function Home() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const handleAddParticipant = () => {
    setParticipants((prev) => [...prev, { name: "teste" }]);
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Sucesso!", `Você removeu o participante ${name}`);
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

      <View style={styles.participantsContainer}>
        <Text style={styles.eventName}>Participantes</Text>

        <ScrollView
          style={styles.participantsList}
          showsVerticalScrollIndicator={false}
        >
          {participants.map((participant, index) => (
            <Participant
              participantName={participant.name}
              onRemoveParticipant={() =>
                handleRemoveParticipant(participant.name)
              }
              key={index}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
