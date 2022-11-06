import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
//import { withAuthenticator } from '@aws-amplify/ui-react-native'

Amplify.configure(awsconfig);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigator />
      </Provider>
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
