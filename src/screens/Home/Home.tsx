import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fetchOutlets} from '../../api/outletsApi';

const Home = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const handleOutletClick = id => {
    setSelectedOutlet(selectedOutlet === id ? null : id);
    console.log(id);
  };

  useEffect(() => {
    const getOutlets = async () => {
      const data = await fetchOutlets();
      setOutlets(data);
    };

    getOutlets();
  }, []);

  const handleGetDirection = address => {
    // Format the address for Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open Google Maps:', err),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#1F5DA0" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for shop address ..."
        />
        <FontAwesome
          name="search"
          size={20}
          color="#1F5DA0"
          style={styles.searchIcon}
        />
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
      <ScrollView>
        {outlets.map(outlet => (
          <>
            <TouchableOpacity
              key={outlet.outletId.toString()}
              style={styles.outletContainer}
              onPress={() => handleOutletClick(outlet.outletId)}>
              <Text style={styles.outletText}>{outlet.outletName}</Text>
              <EvilIcons name="chevron-down" size={30} color="#ABABAB" />
            </TouchableOpacity>
            {selectedOutlet === outlet.outletId && (
              <>
                <TouchableOpacity
                  style={styles.outletContainerDetails}
                  onPress={() => handleOutletClick(outlet)}>
                  <Text style={styles.outletTextDetails}>
                    {outlet.outletName}
                  </Text>
                  <EvilIcons name="chevron-up" size={30} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.outletDetailsContainer}>
                  <Image
                    source={{
                      uri: 'https://prod.saraemart.com' + outlet.outletImage,
                    }}
                    style={styles.outletDetailsImage}
                  />
                  <View style={styles.outletDetailsInfoContainer}>
                    <Text style={styles.outletDetailsTitle}>
                      {outlet.outletName}
                    </Text>
                    <View>
                      <Text style={styles.outletDetailsTextBold}>Address:</Text>
                      <Text style={styles.outletDetailsText}>
                        {outlet.address}
                      </Text>
                    </View>

                    <Text style={styles.outletDetailsTextBold}>
                      Business Hours:
                    </Text>
                    <Text style={styles.outletDetailsText}>
                      {outlet.businessHours} {`( ${outlet.businessHoursNote} )`}
                    </Text>
                    <Text style={styles.outletDetailsTextBold}>
                      Contact Number:
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      {outlet.contacts.map(contact => (
                        <Text style={styles.outletDetailsText}>
                          {outlet.contacts.length > 0
                            ? `${contact.contact + ', '}`
                            : `${contact.contact + ' '}`}
                        </Text>
                      ))}
                    </View>

                    <TouchableOpacity
                      style={styles.outletDetailsButton}
                      onPress={handleGetDirection.bind(this, outlet.address)}>
                      <Text style={styles.outletDetailsButtonText}>
                        Get Direction
                      </Text>
                      <Feather name="arrow-right" size={20} color="#1F5DA0" />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    right: 90,
    backgroundColor: '#1F5DA0',
    borderRadius: 3,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  outletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
  },
  outletContainerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
    backgroundColor: '#1F5DA0',
  },
  outletText: {
    fontSize: 16,
    fontWeight: '600',
  },
  outletTextDetails: {
    fontSize: 16,
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: '#555',
  },
  detailContainer: {
    padding: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  outletDetailsContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  outletDetailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  outletDetailsInfoContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  outletDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  outletDetailsText: {
    fontSize: 16,
    marginBottom: 4,
  },
  outletDetailsTextBold: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  outletDetailsButton: {
    marginTop: 16,
    padding: 12,
    width: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1F5DA0',
    flexDirection: 'row',
  },
  outletDetailsButtonText: {
    color: '#1F5DA0',
    fontSize: 14,
    marginRight: 5,
  },
});

export default Home;
