import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { COLORS } from "../constants/colors";
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 cards per row with margins

export default function RecipeCard({ recipe }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/recipe/${recipe.id}`)}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: recipe.image }}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
          style={styles.gradient}
        />
        
        {/* Quick info overlay */}
        <View style={styles.overlay}>
          {recipe.cookTime && (
            <View style={styles.timeChip}>
              <Ionicons name="time" size={12} color="#FFFFFF" />
              <Text style={styles.timeText}>{recipe.cookTime}</Text>
            </View>
          )}
          
          {recipe.difficulty && (
            <View style={[styles.difficultyChip, 
              recipe.difficulty === 'Easy' && styles.easyChip,
              recipe.difficulty === 'Medium' && styles.mediumChip,
              recipe.difficulty === 'Hard' && styles.hardChip
            ]}>
              <Text style={styles.difficultyText}>{recipe.difficulty}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {recipe.title}
        </Text>
        
        {recipe.description && (
          <Text style={styles.description} numberOfLines={2}>
            {recipe.description}
          </Text>
        )}

        <View style={styles.footer}>
          {recipe.servings && (
            <View style={styles.servingsContainer}>
              <Ionicons name="people" size={14} color={COLORS.primary} />
              <Text style={styles.servingsText}>{recipe.servings} servings</Text>
            </View>
          )}
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{recipe.rating || '4.5'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 140,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  timeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },
  difficultyChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  easyChip: {
    backgroundColor: COLORS.success,
  },
  mediumChip: {
    backgroundColor: COLORS.warning,
  },
  hardChip: {
    backgroundColor: COLORS.error,
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 8,
    lineHeight: 20,
  },
  description: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 12,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  servingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  servingsText: {
    fontSize: 12,
    color: COLORS.textLight,
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    fontSize: 12,
    color: COLORS.text,
    fontWeight: '600',
  },
});
