import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import React, { useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";

const ImageCarousel = ({ images }) => {
  const width = useWindowDimensions().width;
  const [activeImage, setActiveImage] = useState(0);
  const imagesRef = useRef();

  const viewConfigRef = useRef({
    itemVisiblePercentThreshold: 50,
    // minimumViewTime: 300, //time
  });
  const viewItems = useRef(({ viewableItems }) => {
    // console.log(viewableItems); //visible items on screen
    // console.log(viewableItems?.[0]?.index);
    if (viewableItems?.[0]?.index === undefined) return;
    //for showing the dots for active image
    setActiveImage(viewableItems?.[0]?.index);
  });

  return (
    <View>
      <FlatList
        ref={imagesRef}
        horizontal
        data={images}
        keyExtractor={(item) => item}
        snapToAlignment="center"
        decelerationRate="fast" //to move to next speed
        snapToInterval={width} //for autosnap
        showsHorizontalScrollIndicator={false}
        // for showing the dots
        onViewableItemsChanged={viewItems.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{
              width: width, // to use full dimension of screen
              height: 400,
              resizeMode: "contain",
            }}
          />
        )}
      />
      <View style={tw`flex-row items-center justify-center`}>
        {images.map((image, idx) =>
          // if active dot for the current active image
          idx === activeImage ? (
            <View
              key={idx}
              style={tw`bg-gray-400 w-2 rounded-full mx-2 h-2 `}></View>
          ) : (
            <View
              key={idx}
              style={tw`bg-red-400 w-2 rounded-full mx-2 h-2 `}></View>
          )
        )}
      </View>
    </View>
  );
};

export default ImageCarousel;
