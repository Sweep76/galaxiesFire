import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Task Details</Text>
      
      <View style={styles.card}>
        <Text style={styles.title}>Task Name:</Text>
        <Text style={styles.description}>Implement Firebase Authentication</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Description:</Text>
        <Text style={styles.description}>
          This task involves integrating Firebase authentication into a React Native app,
          allowing users to sign up, log in, and log out securely.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Deadline:</Text>
        <Text style={styles.description}>February 15, 2025</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Status:</Text>
        <Text style={styles.statusPending}>In Progress</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  statusPending: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#d9534f', // Red for "In Progress"
    marginTop: 5,
  },
});

export default Details;
