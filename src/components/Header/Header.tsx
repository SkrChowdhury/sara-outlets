import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (text: string) => void;
}

const Header = ({searchQuery, onSearchChange}: HeaderProps) => {
  return (
    <View style={styles.header}>
      <MaterialIcons name="keyboard-arrow-left" size={30} color="#1F5DA0" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for shop address ..."
        value={searchQuery}
        onChangeText={onSearchChange}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => onSearchChange}>
        <FontAwesome name="search" size={20} color="#fff" />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <FontAwesome
          name="heart"
          size={20}
          color="#1F5DA0"
          style={styles.icon}
        />
        <FontAwesome
          name="bell"
          size={20}
          color="#1F5DA0"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

export default Header;
