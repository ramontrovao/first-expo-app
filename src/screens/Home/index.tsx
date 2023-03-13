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
  const [nameText, setNameText] = useState("");

  const handleAddParticipant = () => {
    setParticipants((prev) => [...prev, { name: nameText }]);

    setNameText("");
  };

  const handleRemoveParticipant = (name: string) => {
    function remove() {
      const updatedParticipantList = participants.filter(
        (participant) => participant.name !== name
      );

      setParticipants(updatedParticipantList);
    }

    Alert.alert(
      `Remover ${name}`,
      `Tem certeza que deseja remover o participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel",
        },
        { text: "Sim", onPress: () => remove() },
      ]
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
          onChangeText={setNameText}
          value={nameText}
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
