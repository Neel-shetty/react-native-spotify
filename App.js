import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)



export default function App() {
  return (
    <>
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
