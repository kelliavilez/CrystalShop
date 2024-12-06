import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#f7fef4',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
    position: 'relative',
    height: 1000
  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#FF7F00',
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconPlus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF7F00',
  },
  productImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FF7F00',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    color: '#FF7F00',
    fontWeight: 'bold',
  }, 
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  wrapperImageCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconPlus: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  productImage: {
    width: 75,
    height: 75,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: 250, 
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 12,
  },
  wrapperCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey'
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


export default styles;