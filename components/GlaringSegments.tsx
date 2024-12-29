import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = PropsWithChildren<{
    style?: StyleProp<ViewStyle>,
    contentStyle?: StyleProp<ViewStyle>
}>

export const GlaringSegment: React.FC<Props> = ({ children, style, contentStyle }) => {
    return (
        <View style={[styles.segment, style]}>
            <View style={[styles.segmentContainer, contentStyle]}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    segmentContainer: {},
    segment: {},
})