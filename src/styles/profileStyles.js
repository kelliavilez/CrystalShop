import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 1,
    backgroundColor: '#1E1F21',
    marginBottom: 10,

  },
  card: {
    width: '90%',
    borderRadius: 15,
    elevation: 5,
    backgroundColor: '#ffffff',
    marginTop: 30
  },
  cardContent: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    marginTop: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  details: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#00C3FF',
    marginTop: 5,
  },
  value: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  actions: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#FF7F00',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
}
);

export default styles;
