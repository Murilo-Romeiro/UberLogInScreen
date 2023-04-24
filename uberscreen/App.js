import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/uber.png')} style={styles.logo} />

      <TextInput placeholder="Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.socialIconsContainer}>
        <Image
          source={require('./assets/facebook-icon.png')}
          style={styles.socialIcon}
        />
        <Image
          source={require('./assets/twitter-icon.png')}
          style={styles.socialIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 210,
    height: 70,
    marginBottom: 40,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: '#000',
    textDecorationLine: 'none',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default LoginScreen;
