import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: -100,
    alignItems: 'center'
  },
  titleLog: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FF7F00',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitleLog: {
    fontSize: 13,
    fontWeight: '150',
    color: '#1E1F21',
    marginBottom: 10,
    textAlign: 'left',
    marginLeft: 10,
    textAlign: 'center',
  },
  optionMenuContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100
  },
  optionButton: {
    marginVertical: 8,
    width: '80%',
    borderColor: '#FF7F00'
  },
  optionButtonLabel: {
    color: '#FF7F00',
  },
  dialogTitle: {
    color: '#FF7F00',
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: 'ffffff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  dialogContent: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
});

export default styles;