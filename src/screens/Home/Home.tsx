import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {fetchOutlets} from '../../api/outletsApi';
import OutletDetails from '../../components/OutletDetails/OutletDetails';
import styles from '../../styles/styles';
import Header from '../../components/Header/Header';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const Home = () => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [filteredOutlets, setFilteredOutlets] = useState<Outlet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOutletClick = id => {
    setSelectedOutlet(selectedOutlet === id ? null : id);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      // Filter outlets based on case-sensitive comparison
      const filtered = outlets.filter(
        outlet => outlet.outletName.includes(query), // Direct comparison for case-sensitivity
      );
      setFilteredOutlets(filtered);
    } else {
      setFilteredOutlets(outlets);
    }
  };

  useEffect(() => {
    const getOutlets = async () => {
      try {
        const data = await fetchOutlets();
        setOutlets(data);
        setFilteredOutlets(data); // Initialize filtered outlets with all data
      } catch (error) {
        console.error('Error fetching outlets:', error);
      } finally {
        setLoading(false);
      }
    };

    getOutlets();
  }, []);

  const renderItem = ({item, index}) => (
    <Animated.View
      entering={FadeIn.duration(300).delay(index * 100)} // Delay each item
      exiting={FadeOut.duration(300)}
      // style={styles.itemContainer}
    >
      <TouchableOpacity
        style={styles.outletContainer}
        onPress={() => handleOutletClick(item.outletId)}>
        <Text style={styles.outletText}>{item.outletName}</Text>
        <EvilIcons name="chevron-down" size={30} color="#ABABAB" />
      </TouchableOpacity>
      {selectedOutlet === item.outletId && (
        <OutletDetails
          outlet={item}
          setSelectedOutlet={setSelectedOutlet}
          selectedOutlet={selectedOutlet}
        />
      )}
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header searchQuery={searchQuery} onSearchChange={handleSearch} />
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#1F5DA0" />
        </View>
      ) : filteredOutlets.length === 0 ? (
        <Text style={styles.textCenter}>No outlet found with this name</Text>
      ) : (
        <AnimatedFlatList
          data={filteredOutlets}
          renderItem={renderItem}
          keyExtractor={item => item.outletId.toString()}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          contentContainerStyle={{paddingBottom: 150}}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
