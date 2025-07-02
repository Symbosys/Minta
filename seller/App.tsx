import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  Button,
  MD2Colors,
  Searchbar,
  SegmentedButtons,
  Switch,
  TextInput,
  Surface,
  Text,
  withTheme
} from 'react-native-paper';

class App extends Component {
  render() {
    const { colors } = this.props.theme; // Get theme from props

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.onBackground }}>textInComponent ssdsd</Text>

        <ActivityIndicator animating={true} color={MD2Colors.red800} />

        <Surface style={styles.surface} elevation={4}>
          <Text>Surface</Text>
        </Surface>

        <Switch value={true} onValueChange={() => { }} />

        {/* <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        /> */}

        <Searchbar placeholder="Search" />

        <SegmentedButtons
          buttons={[
            { value: 'walk', label: 'Walking' },
            { value: 'train', label: 'Transit' },
            { value: 'drive', label: 'Driving' },
          ]}
        />

        <Button icon="star" mode="contained" buttonColor="yellow">
          Press me
        </Button>
      </View>
    );
  }
}

// Apply theme to class component
export default withTheme(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  surface: {
    padding: 10,
    marginVertical: 10,
  },
});
