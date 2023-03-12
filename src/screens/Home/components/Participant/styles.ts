import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  participantContainer: {
    width: "100%",
    height: 60,
    paddingLeft: 16,
    marginBottom: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#1F1E25",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  participantName: {
    color: "#FFF",
    fontSize: 16,
  },
  removeButton: {
    width: 56,
    height: 60,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#E23C44",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 32,
  },
});
