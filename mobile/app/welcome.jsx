import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { COLORS } from '../constants/colors';

const { height } = Dimensions.get('window');

const WelcomeScreen = () => {
  const router = useRouter();

  const features = [
    {
      icon: 'search-outline',
      title: 'Discover Recipes',
      description: 'Find thousands of delicious recipes from around the world',
    },
    {
      icon: 'play-circle-outline',
      title: 'Video Tutorials',
      description: 'Watch step-by-step cooking videos to master every dish',
    },
    {
      icon: 'bookmark-outline',
      title: 'Save Favorites',
      description: 'Keep your favorite recipes organized and easily accessible',
    },
    {
      icon: 'restaurant-outline',
      title: 'Multiple Cuisines',
      description: 'Explore recipes from different cultures and cuisines',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#FFE5E5', '#FFF0F0', '#FFFFFF']}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={{
            alignItems: 'center',
            paddingTop: height * 0.08,
            paddingHorizontal: 20,
          }}>
            <View style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: 'rgba(255,107,107,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
              shadowColor: '#FF6B6B',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.3,
              shadowRadius: 12,
              elevation: 8,
            }}>
              <Image
                source={require('../assets/images/cook.jpg')}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
                contentFit="cover"
              />
            </View>

            <Text style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: '#FF6B6B',
              textAlign: 'center',
              marginBottom: 10,
              textShadowColor: 'rgba(255,107,107,0.3)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            }}>
              Recipe Finder
            </Text>

            <Text style={{
              fontSize: 18,
              color: '#2C3E50',
              textAlign: 'center',
              marginBottom: 30,
              lineHeight: 26,
              opacity: 0.8,
            }}>
              Your personal cooking companion for discovering and mastering delicious recipes
            </Text>
          </View>

          {/* Features Section */}
          <View style={{
            paddingHorizontal: 20,
            marginBottom: 40,
          }}>
            {features.map((feature, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255,107,107,0.1)',
                  borderRadius: 15,
                  padding: 20,
                  marginBottom: 15,
                  borderWidth: 1,
                  borderColor: 'rgba(255,107,107,0.2)',
                  shadowColor: '#FF6B6B',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                <View style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#FF6B6B',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 15,
                  shadowColor: '#FF6B6B',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  elevation: 4,
                }}>
                  <Ionicons name={feature.icon} size={24} color={COLORS.white} />
                </View>
                
                <View style={{ flex: 1 }}>
                  <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#2C3E50',
                    marginBottom: 5,
                  }}>
                    {feature.title}
                  </Text>
                  <Text style={{
                    fontSize: 14,
                    color: '#7F8C8D',
                    lineHeight: 20,
                  }}>
                    {feature.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Action Buttons */}
          <View style={{
            paddingHorizontal: 20,
            paddingBottom: 40,
            marginTop: 'auto',
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF6B6B',
                paddingVertical: 15,
                borderRadius: 25,
                alignItems: 'center',
                marginBottom: 15,
                shadowColor: '#FF6B6B',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 10,
              }}
              onPress={() => router.push('/(tabs)')}
              activeOpacity={0.9}
            >
              <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: COLORS.white,
              }}>
                Start Cooking
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: '#FF6B6B',
                paddingVertical: 15,
                borderRadius: 25,
                alignItems: 'center',
                backgroundColor: 'rgba(255,107,107,0.1)',
              }}
              onPress={() => router.push('/(auth)/sign-in')}
              activeOpacity={0.8}
            >
              <Text style={{
                fontSize: 16,
                fontWeight: '600',
                color: '#FF6B6B',
              }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;