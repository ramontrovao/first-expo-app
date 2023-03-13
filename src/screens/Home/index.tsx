import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";

import { Participant } from "./components/Participant";

import { styles } from "./styles";

interface Participant {
  name: string;
}

const daysOfWeekPTBR = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
const todayDate = new Date();

export function Home() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [nameText, setNameText] = useState("");

  const handleAddParticipant = () => {
    const participantExists = participants.some(
      (participant) => participant.name === nameText
    );

    if (!participantExists) {
      setParticipants((prev) => [...prev, { name: nameText }]);

      setNameText("");
    } else {
      Alert.alert(
        "ERRO",
        `O(A) participante "${nameText}" já está adicionado(a) a lista de participantes!`
      );
    }
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

      <Text style={styles.eventDate}>
        {daysOfWeekPTBR[todayDate.getDay()]},{" "}
        {todayDate.toLocaleString("pt-BR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Text>

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

        <FlatList
          data={participants}
          keyExtractor={(participant) => participant.name}
          renderItem={({ item }) => (
            <Participant
              key={item.name}
              participantName={item.name}
              onRemoveParticipant={() => handleRemoveParticipant(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
