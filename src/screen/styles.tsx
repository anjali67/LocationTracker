import { StyleSheet } from "react-native";
import appColors from "../theme/appColors";

const styles = StyleSheet.create({
     container: {
    flex: 1,
    backgroundColor: appColors.ghostWhite,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    backgroundColor: appColors.lightBlue,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  }
})

export default styles