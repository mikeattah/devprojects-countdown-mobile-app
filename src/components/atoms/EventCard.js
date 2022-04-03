import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

function EventCard(props) {
  const {
    source,
    name,
    date,
    time,
    location,
    description,
    opacity,
    navigation,
  } = props;

  return (
    <SafeAreaView>
      <TouchableHighlight
        onPress={() => {
          console.log("Navigate to View Event");
          navigation.navigate("ViewEvent");
        }}
      >
        <View style={styles.card}>
          <View style={styles.image}>
            <Image source={{ uri: source }}></Image>
          </View>
          <View style={styles.details}>
            <Text style={styles.textOne}>{name}</Text>
            <Text style={styles.textTwo}>{date}</Text>
            <Text style={styles.textTwo}>{time}</Text>
            <Text style={styles.textTwo}>{location}</Text>
          </View>
          <View style={styles.countdown}>
            <Text style={styles.textThree}>No. of Days</Text>
            <Text style={styles.textFour}>No. of Hours</Text>
            <Text style={styles.textFour}>No. of Mins</Text>
            <Text style={styles.textFour}>No. of Secs</Text>
          </View>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "100%",
    borderRadius: 15,
    padding: 10,
    margin: 10,
    opacity: 1,
  },
  image: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {},
  textOne: {},
  textTwo: {},
  countdown: {},
  textThree: {},
  textFour: {},
});

export default EventCard;
