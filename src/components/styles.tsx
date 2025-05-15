import { StyleSheet } from "react-native";
import appColors from "../theme/appColors";
import { windowHeight } from "../theme/appConstant";

const styles = StyleSheet.create({
  lottie:{
     height:"30%",
     width:"30%"
  },
  header: {
    backgroundColor:appColors.lightPink,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
    borderBottomLeftRadius:windowHeight(15),
    borderBottomRightRadius:windowHeight(15)
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight:'500',
    marginLeft: 10,
    color: appColors.white,
  },
  headerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:10,
    marginVertical:8
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:appColors.blue,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  statText: {
    marginLeft: 5,
    color: appColors.lightBlue,
    fontWeight: '600',
  },
  controls: {
    backgroundColor: appColors.white,
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: appColors.border,
    borderTopLeftRadius:windowHeight(25),
     borderTopRightRadius:windowHeight(25)
  },
  coordinates: {
    marginBottom: 16,
  },
  coordinateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coordinateText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  startButton: {
    backgroundColor: appColors.lightBlue,
  },
  stopButton: {
    backgroundColor: appColors.lightPink,
  },
  actionButtonText: {
    color: appColors.white,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  historyButton: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:appColors.blue,
    borderRadius: 8,
  },
  historyPanel: {
    backgroundColor: appColors.white,
    borderTopWidth: 1,
    borderTopColor: appColors.border,
   
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: appColors.border,
  },
  historyTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  historyScroll: {
    paddingHorizontal: 16,
  },
  historyItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  historyIndex: {
    width: 30,
    justifyContent: 'center',
    fontWeight:"bold"
  },
  historyCoords: {
    flex: 1,
  },
  historyCoordText: {
    fontSize: 14,
    color: '#333',
   
  },
  historyTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:appColors.blue,
  },
  message: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    fontSize: 16,
    color: '#ff4d4f',
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 10,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  }
})

export default styles