import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import ArchivedEventCard from "../components/atoms/ArchivedEventCard";
import data from "../assets/data.json";

function ArchivedEvents({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <ArchivedEventCard
                name={item.name}
                description={item.description}
                date={item.date}
                location={item.location}
                url={item.url}
                image={item.image}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ArchivedEvents;
