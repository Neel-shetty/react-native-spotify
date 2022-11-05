import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
//import { withAuthenticator } from '@aws-amplify/ui-react-native'
import TrackPlayer from "react-native-track-player";

Amplify.configure(awsconfig);
// AppRegistry.registerComponent(...);
// TrackPlayer.registerPlaybackService(() => require('./service'));

module.exports = async function() {
  // This service needs to be registered for the module to work
  // but it will be used later in the "Receiving Events" section
}


async function setup() {
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
      Capability.SeekTo,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });
}

export default function App() {
  useEffect(() => {
    setup();
    return () => TrackPlayer.destroy();
  }, []);

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
