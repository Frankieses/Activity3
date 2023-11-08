import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showFlashlight, setShowFlashlight] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showImage1, setShowImage1] = useState(true);
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const toggleComponent = (component) => {
    if (component === 'flashlight') {
      setShowFlashlight(!showFlashlight);
    } else if (component === 'counter') {
      setShowCount(!showCount);
      // Reset the count to zero when showing the counter
      if (!showCount) {
        setCount(0);
      }
    }
    setButtonDisabled(true);
  };

  const toggleImageAndBackgroundColor = () => {
    setShowImage1(!showImage1);
    setBackgroundColor(showImage1 ? 'violet' : '#fff');
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleComponentVisibility = () => {
    setShowFlashlight(false);
    setShowCount(false);
    setButtonDisabled(false);
    setBackgroundColor('#fff');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            marginBottom: 80,
            justifyContent: 'space-evenly',
            width: 390,
          }}>
          <Button title="Flashlight" onPress={() => toggleComponent('flashlight')} disabled={buttonDisabled} />
          <Button title="Counter" onPress={() => toggleComponent('counter')} disabled={buttonDisabled} />
        </View>
        {showFlashlight && (
          <View style={{ width: 320 }}>
            <View style={{ marginBottom: 80 }}>
              <Image
                source={{
                  uri: showImage1
                    ? 'https://icons.veryicon.com/png/o/miscellaneous/official-icon-of-flying-pig/flashlight-off-2.png'
                    : 'https://icons.veryicon.com/png/o/miscellaneous/official-icon-of-flying-pig/flashlight-on.png',
                }}
                style={{ width: 320, height: 320, marginBottom: 50 }}
              />
              <Button
                title={showImage1 ? 'Off' : 'On'}
                color={showImage1 ? 'red' : '#42C32E'}
                onPress={() => {
                  toggleImageAndBackgroundColor();
                }}
              />
            </View>
            <Button title={showFlashlight ? 'Back' : 'Show Component'} onPress={toggleComponentVisibility} />
          </View>
        )}

        {showCount && (
          <View style={{ width: 320 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 200, fontWeight: 'bold' }}>{count}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 60 }}>
              <Button title="Increment" color={'#42C32E'} onPress={increment} />
              <Button title="Decrement" color={'#42C32E'} onPress={decrement} />
            </View>
            <View style={{ width: 320, marginTop: 125 }}>
              <Button title={showCount ? 'Back' : ''} onPress={toggleComponentVisibility} />
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
