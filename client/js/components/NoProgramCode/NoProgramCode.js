import React from "react";
import {View, Text, ScrollView, Image} from "react-native";
import styles from "./styles";

const NoProgramCode = () => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.itemSeparator} />
          <Text style={styles.description}>Heroes</Text>
          <View style={styles.itemBottomSeparator} />

          <View style={styles.contentBox} />
          <Text style={styles.message}>
            This account is not yet registered with our Heroes Program.
          </Text>
        </View>

        <View style={styles.bottom}>
          <Image
            source={require("../../assets/images/valley.png")}
            style={styles.valley}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NoProgramCode;
