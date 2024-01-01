import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function (props) {
    return (
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            {...props}
            style={[css.inputField, props.style]}
        />
    );
}

const css = StyleSheet.create({
    inputField: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 10,
        color: "black"
    }
});