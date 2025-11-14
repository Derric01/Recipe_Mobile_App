import { View, ActivityIndicator, Text, StyleSheet, Animated } from "react-native";
import { COLORS } from "../constants/Colors";
import { useEffect, useRef } from "react";

export default function LoadingSpinner({ message = "Loading...", size = "large" }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.content, 
          { 
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }]
          }
        ]}
      >
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size={size} color={COLORS.primary} />
          <View style={styles.pulseContainer}>
            <View style={[styles.pulse, styles.pulse1]} />
            <View style={[styles.pulse, styles.pulse2]} />
            <View style={[styles.pulse, styles.pulse3]} />
          </View>
        </View>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    backgroundColor: COLORS.background,
  },
  content: {
    alignItems: "center",
    gap: 20,
  },
  spinnerContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  pulseContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  pulse: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    opacity: 0.3,
  },
  pulse1: {
    animation: 'pulse 1.5s ease-in-out infinite',
  },
  pulse2: {
    animation: 'pulse 1.5s ease-in-out infinite 0.5s',
  },
  pulse3: {
    animation: 'pulse 1.5s ease-in-out infinite 1s',
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    opacity: 0.6,
  },
  dot1: {
    animation: 'bounce 1s ease-in-out infinite',
  },
  dot2: {
    animation: 'bounce 1s ease-in-out infinite 0.2s',
  },
  dot3: {
    animation: 'bounce 1s ease-in-out infinite 0.4s',
  },
});
