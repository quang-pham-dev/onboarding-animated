import React, { useCallback, useRef } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import AnimatedItem from '@/components/animated-item'
import { ONBOARDING_DATA } from '@/constants/item'
import { useOnboardingAnimation } from '@/hooks/useOnboardingAnimation'
import { GLOBAL_STYLES, METRICS } from '@/themes'
import { OnboardingItem } from '@/interfaces'

const { screenWidth } = METRICS
const { container } = GLOBAL_STYLES

export default function OnboardingScreen() {
  const flatListRef = useRef<FlatList>(null)
  const { translateX, onScroll, onViewableItemsChanged } =
    useOnboardingAnimation()

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    minimumViewTime: 0,
  }

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ])

  const renderItem: ListRenderItem<OnboardingItem> = useCallback(
    ({ item, index }) => (
      <AnimatedItem item={item} index={index} translateX={translateX} />
    ),
    [translateX],
  )

  const getItemLayout = useCallback(
    (_: unknown, index: number) => ({
      length: screenWidth,
      offset: screenWidth * index,
      index,
    }),
    [],
  )

  const keyExtractor = useCallback(
    (item: OnboardingItem) => item.id.toString(),
    [],
  )

  return (
    <FlatList
      ref={flatListRef}
      data={ONBOARDING_DATA}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToInterval={screenWidth}
      getItemLayout={getItemLayout}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      initialNumToRender={1}
      maxToRenderPerBatch={2}
      windowSize={3}
      style={container}
    />
  )
}
