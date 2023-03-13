import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,

    flex: 1,

    backgroundColor: "#131016",
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 64,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  formContainer: {
    width: "100%",
    marginTop: 36,

    flexDirection: "row",
    gap: 8,
  },
  input: {
    flex: 1,

    height: 56,
    padding: 16,

    backgroundColor: "#1F1E25",
    color: "#FFF",
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#31CF67",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  participantsContainer: {
    height: 500,
    paddingBottom: 32,

    flexDirection: "column",
    gap: 16,
  },
  participantsList: {
    flexDirection: "column",
  },
});
