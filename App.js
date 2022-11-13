import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { store } from "./src/redux/store/store";
import { Provider } from "react-redux";
//import { withAuthenticator } from '@aws-amplify/ui-react-native'

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

Amplify.configure(awsconfig);

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </QueryClientProvider>
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
