import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Account from '../screens/Account/Account';
import BestDeal from '../screens/BestDeal/BestDeal';
import Cart from '../screens/Cart/Cart';
import Category from '../screens/Category/Category';
import Home from '../screens/Home/Home';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/logo/home-logo.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F5DA0' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1F5DA0 ' : '#ABABAB',
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/logo/category-logo.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F5DA0' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1F5DA0 ' : '#ABABAB',
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                CATEGORY
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="BestDeal"
        component={BestDeal}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/logo/main-logo.png')}
              resizeMode="contain"
              style={{
                width: 55,
                height: 55,
                tintColor: focused ? '#1F5DA0' : '#748c94',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/logo/cart-logo.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F5DA0' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1F5DA0 ' : '#ABABAB',
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                CART
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/logo/account-logo.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#1F5DA0' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#1F5DA0 ' : '#ABABAB',
                  marginTop: 5,
                  fontSize: 11,
                  fontWeight: '600',
                }}>
                ACCOUNT
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
