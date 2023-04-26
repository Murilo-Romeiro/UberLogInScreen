import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const HomeScreen = () => {
  const recentTripsData = [
    {
      id: '1',
      title: 'Casa',
      date: 'April 20, 2023',
    },
    {
      id: '2',
      title: 'Escola',
      date: 'April 19, 2023',
    },
    {
      id: '3',
      title: 'Shopping',
      date: 'April 18, 2023',
    },
  ];

  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/trip-icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Viagem</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/shipping-icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Envio</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/reserve-icon.png')} style={styles.icon} />
          <Text style={styles.iconText}>Reserve</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image source={require('./assets/search-icon.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          onChangeText={text => setSearchText(text)}
          value={searchText}
          placeholder="Inserir local de partida"
          placeholderTextColor="#bfbfbf"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.recentText}>Recente</Text>
        <View style={styles.recentTrips}>
          {recentTripsData.map((trip) => (
            <View key={trip.id} style={styles.tripContainer}>
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <Text style={styles.tripDate}>{trip.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    marginTop: 10,
    color: '#bfbfbf',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 5
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  recentText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  recentTrips: {
    marginTop: 20,
  },
  tripContainer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tripDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;
