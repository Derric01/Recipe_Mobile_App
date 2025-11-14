import { View, ActivityIndicator, Text, StyleSheet, Animated } from "react-native";
import { COLORS } from "../constants/colors";
import { useEffect, useRef } from "react";

export default function LoadingSpinner({ message = "Loading...", size = "large" }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  // pulse and dot animations
  const pulseAnims = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]).current;
  const dotAnims = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)]).current;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // entrance
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: false }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 8, useNativeDriver: false }),
    ]).start();

    // pulse loops
    const pulseLoops = pulseAnims.map((anim) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, { toValue: 1, duration: 900, useNativeDriver: false }),
          Animated.timing(anim, { toValue: 0, duration: 900, useNativeDriver: false }),
        ]),
      ),
    );
    Animated.stagger(200, pulseLoops).start();

    // dot bounce loops
    const dotLoops = dotAnims.map((anim) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, { toValue: -6, duration: 300, useNativeDriver: false }),
          Animated.timing(anim, { toValue: 0, duration: 300, useNativeDriver: false }),
          Animated.delay(300),
        ]),
      ),
    );
    Animated.stagger(100, dotLoops).start();

    return () => {
      pulseLoops.forEach((l) => l.stop());
      dotLoops.forEach((l) => l.stop());
    };
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
          <View style={styles.pulseContainer} pointerEvents="none">
            {pulseAnims.map((anim, i) => (
              <Animated.View
                key={`pulse-${i}`}
                style={[
                  styles.pulse,
                  {
                    transform: [
                      {
                        scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.6, 1.6] }),
                      },
                    ],
                    opacity: anim.interpolate({ inputRange: [0, 1], outputRange: [0.35, 0] }),
                  },
                ]}
              />
            ))}
          </View>
        </View>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.dots}>
          {dotAnims.map((anim, i) => (
            <Animated.View
              key={`dot-${i}`}
              style={[
                styles.dot,
                { transform: [{ translateY: anim }], opacity: 0.95 - i * 0.15 },
              ]}
            />
          ))}
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
  /* pulse CSS rules removed -- animations handled with Animated API */
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
  /* dot CSS rules removed -- animations handled with Animated API */
});
