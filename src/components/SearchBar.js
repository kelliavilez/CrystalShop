import * as React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ placeholder = "Buscar", onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query); 
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#c3dec5', borderRadius: 25, elevation: 3, marginHorizontal: 10, marginTop: 15, marginBottom: 10 }}>
      <Icon name="search" size={20} style={{ marginHorizontal: 10 }} />
      <TextInput
        placeholder={placeholder}
        value={searchQuery}
        onChangeText={handleSearchChange}
        style={{ flex: 1, fontSize: 16, padding: 10 }}
      />
    </View>
  );
};

export default SearchBar;
