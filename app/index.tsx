import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.ipadScreen}>
      <View style={styles.phoneContainer}>
        <Text style={styles.text}>asd</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ipadScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  phoneContainer: {
    width: 350,
    height: 700,
    backgroundColor: "white",
    borderRadius: 35,
    borderWidth: 10,
    borderColor: "black",
    paddingTop: 20,
  },

  text: {
    color: "black",
    fontSize: 20,
    alignContent: "center",
    fontFamily: "monospace",
  },
});
