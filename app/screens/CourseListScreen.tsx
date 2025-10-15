import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const COURSES = [
  { id: "1", title: "Intro to React Native", description: "Learn the basics of React Native." },
  { id: "2", title: "Advanced JavaScript", description: "Deep dive into JS concepts." },
  { id: "3", title: "UI/UX for Developers", description: "Design better mobile apps." },
];

export default function CourseListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="View Details"
              onPress={() =>
                navigation.navigate("CourseDetail", {
                  courseId: item.id,
                  title: item.title,
                  description: item.description,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  courseItem: { marginBottom: 20, borderBottomWidth: 1, borderColor: "#ccc", paddingBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
});
