import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f5e9',
    padding: 16,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: -100,
    alignItems: 'center'
  },
  titleLog: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: 8,
  },
  subtitleLog: {
    fontSize: 16,
    color: '#1b5e20',
    marginBottom: 16,
    marginTop: 90
  },
  optionMenuContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100
  },
  optionButton: {
    marginVertical: 8,
    width: '80%',
    borderColor: '#4caf50'
  },
  optionButtonLabel: {
    color: '#4caf50',
  },
  dialogTitle: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#dee3d3',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  dialogContent: {
    backgroundColor: '#e6ebe1',
    borderRadius: 10,
  },
});

export default styles;