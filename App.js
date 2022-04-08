import React from 'react';
import {Animated, Button} from 'react-native';

const App = () => {
  return (
    <>
      <Button
        title="Interpolate"
        onPress={() => {
          for (let index = 0; index < 100; index++) {
            new Animated.Value(0).interpolate({
              inputRange: Array(144)
                .fill()
                .map((_, i) => 1 / (i + 1))
                .reverse(),
              outputRange: Array(144)
                .fill()
                .map((_, i) => 1 / (i + 1)),
            });
          }
        }}
      />
    </>
  );
};

export default App;
