import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    height: 60,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, // for Android shadow
  },
  appBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5, // adds shadow effect
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default styles