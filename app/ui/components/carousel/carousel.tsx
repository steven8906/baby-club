import {NativeScrollEvent, NativeSyntheticEvent, ScrollView, View} from "react-native";
import carouselStyles from "./styles/carouselStyles";
import React, {useState} from "react";
import events from "../../../cross-cutting/hepers/events";

interface Props {
    elements: React.ReactNode[];
}

export default function Carousel({elements}: Props) {
    const [pageState, setPageState] = useState<number>(1);
    const setPage                   = (page: number) => setPageState(page);

    return <>
        <View style={carouselStyles.content}>
            <ScrollView horizontal
                        pagingEnabled
                        onScroll={(ev: NativeSyntheticEvent<NativeScrollEvent>) => events.scrollViewCurrentPageDetect(ev, setPage)}
                        scrollEventThrottle={200}
                        style={carouselStyles.scrollView}
                        showsHorizontalScrollIndicator={false}>
                {elements}
            </ScrollView>
            <View style={carouselStyles.indicatorContent}>
                {new Array(elements.length).fill('').map((_, index) =>
                    <View style={pageState === index + 1 ?
                        carouselStyles.primaryPoint :
                        carouselStyles.secondaryPoint}
                          key={`carousel-indicator-${index}`}/>)}
            </View>
        </View>
    </>
}