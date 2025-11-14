import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.name;
          return (
            <TouchableOpacity
              key={category.id}
              style={[styles.categoryButton, isSelected && styles.selectedCategory]}
              onPress={() => onSelectCategory(category.name)}
              activeOpacity={0.7}
            >
              <View style={[styles.imageContainer, isSelected && styles.selectedImageContainer]}>
                <Image
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                  contentFit="cover"
                  transition={200}
                />
                {isSelected && (
                  <View style={styles.selectedOverlay}>
                    <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                  </View>
                )}
              </View>
              <Text
                style={[styles.categoryText, isSelected && styles.selectedCategoryText]}
                numberOfLines={1}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  categoryButton: {
    alignItems: 'center',
    width: 80,
  },
  selectedCategory: {
    // Additional styling for selected state
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImageContainer: {
    borderColor: COLORS.primary,
    transform: [{ scale: 1.1 }],
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  selectedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 107, 107, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textLight,
    textAlign: 'center',
  },
  selectedCategoryText: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
