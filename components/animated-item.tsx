import React, { useMemo } from 'react'
import { RadialGradient } from 'react-native-gradients'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  interpolate,
  SharedValue,
  Extrapolation,
} from 'react-native-reanimated'

import { Images } from '@/constants/assets'
import { OnboardingItem } from '@/interfaces/onboarding'
import { METRICS } from '@/themes/metrics'
import { FRUIT_POSITIONS } from '@/constants/item'

const { screenWidth, screenHeight } = METRICS

interface AnimatedItemProps {
  item: OnboardingItem
  index: number
  translateX: SharedValue<number>
}

export function AnimatedItem({ item, index, translateX }: AnimatedItemProps) {
  const colorList = useMemo(
    () => [
      { offset: '10%', color: item.colors[0], opacity: '1' },
      { offset: '100%', color: item.colors[1], opacity: '0.8' },
    ],
    [item.colors],
  )

  const inputRange = useMemo(
    () => [
      (index - 1) * screenWidth,
      index * screenWidth,
      (index + 1) * screenWidth,
    ],
    [index],
  )

  const animatedImgStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-1, 1, -1],
      Extrapolation.CLAMP,
    )
    const rotate = interpolate(
      translateX.value,
      inputRange,
      [-180, 0, 180],
      Extrapolation.CLAMP,
    )

    const translateXImg = interpolate(
      translateX.value,
      inputRange,
      [screenWidth * 0 - 40, 0, screenWidth * 1.7 + 100],
      Extrapolation.CLAMP,
    )

    const translateYImg = interpolate(
      translateX.value,
      inputRange,
      [screenHeight * 1.2, 0, -screenHeight * 1.2],
      Extrapolation.CLAMP,
    )

    return {
      opacity,
      transform: [
        { translateX: translateXImg },
        { translateY: translateYImg },
        { rotate: `${rotate}deg` },
      ],
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-0.5, 1, -0.5],
      Extrapolation.CLAMP,
    )
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [-170, 0, 110],
      Extrapolation.CLAMP,
    )

    return {
      opacity,
      transform: [{ translateY }, { scaleY: 1.5 }],
    }
  })

  const animatedFruits = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth - 150,
        index * screenWidth,
        index * screenWidth + 150,
        (index + 1) * screenWidth,
      ],
      [0, 0, 1, 0, 0],
      Extrapolation.CLAMP,
    )

    return { opacity }
  })

  const animatedGradientStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      translateX.value,
      inputRange,
      [0.3, 1, 0.3],
      Extrapolation.CLAMP,
    ),
    zIndex: -1,
  }))

  const renderFruitImages = () => (
    <View style={styles.fruitsContainer}>
      {FRUIT_POSITIONS.map((position, i) => (
        <Animated.Image
          key={i}
          source={Images[item.images[1]]}
          style={[
            styles.fruits,
            {
              position: 'absolute',
              top: position.top,
              left: position.left,
              transform: [{ rotate: `${position.rotation}deg` }],
            },
            animatedFruits,
          ]}
        />
      ))}
    </View>
  )

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.gradientBg, animatedGradientStyle]}
        pointerEvents="none">
        <RadialGradient
          x="50%"
          y="50%"
          rx="50%"
          ry="25%"
          colorList={colorList}
        />
      </Animated.View>

      {renderFruitImages()}

      <View style={styles.textContainer}>
        <Animated.Text style={[styles.title, animatedTextStyle]}>
          {item.name}
        </Animated.Text>
      </View>

      <Animated.Image
        source={Images[item.images[0]]}
        style={[styles.img, animatedImgStyle]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  img: {
    height: 250,
    width: 250,
    position: 'absolute',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight * 0.5,
    position: 'absolute',
    textAlign: 'center',
    maxWidth: screenWidth * 0.9,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    position: 'absolute',
    top: 15,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 1,
  },
  fruitsContainer: {
    height: screenHeight,
    width: screenWidth,
  },
  fruits: {
    height: 60,
    width: 60,
  },
  gradientBg: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
  },
})

export default AnimatedItem
