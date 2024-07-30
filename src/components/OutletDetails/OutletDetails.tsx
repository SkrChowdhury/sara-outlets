import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../../styles/styles';
const OutletDetails = ({outlet, setSelectedOutlet, selectedOutlet}) => {
  const handleOutletClick = (id: any) => {
    setSelectedOutlet(selectedOutlet === id ? null : id);
  };
  const handleGetDirection = (address: string | number | boolean) => {
    // Format the address for Google Maps
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url).catch(err =>
      console.error('Failed to open Google Maps:', err),
    );
  };
  return (
    <>
      <TouchableOpacity
        style={styles.outletContainerDetails}
        onPress={() => handleOutletClick(outlet)}>
        <Text style={styles.outletTextDetails}>{outlet.outletName}</Text>
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
          <Text style={styles.outletDetailsTitle}>{outlet.outletName}</Text>
          <View>
            <Text style={styles.outletDetailsTextBold}>Address:</Text>
            <Text style={styles.outletDetailsText}>{outlet.address}</Text>
          </View>

          <Text style={styles.outletDetailsTextBold}>Business Hours:</Text>
          <Text style={styles.outletDetailsText}>
            {outlet.businessHours} {`( ${outlet.businessHoursNote} )`}
          </Text>
          <Text style={styles.outletDetailsTextBold}>Contact Number:</Text>
          <View style={styles.flexRow}>
            {outlet.contacts.map(
              (
                contact: {contact: string},
                index: React.Key | null | undefined,
              ) => (
                <Text key={index} style={styles.outletDetailsText}>
                  {outlet.contacts.length > 0
                    ? `${contact.contact + ', '}`
                    : `${contact.contact + ' '}`}
                </Text>
              ),
            )}
          </View>

          <TouchableOpacity
            style={styles.outletDetailsButton}
            onPress={handleGetDirection.bind(this, outlet.address)}>
            <Text style={styles.outletDetailsButtonText}>Get Direction</Text>
            <Feather name="arrow-right" size={20} color="#1F5DA0" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OutletDetails;
