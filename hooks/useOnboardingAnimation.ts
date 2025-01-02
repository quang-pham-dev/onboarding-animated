import { useCallback } from 'react'
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ViewToken,
} from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

import { METRICS } from '@/themes/metrics'

const { screenWidth } = METRICS

export const useOnboardingAnimation = () => {
  const translateX = useSharedValue(0)
  const currentIndex = useSharedValue(0)

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x
      translateX.value = offsetX
      currentIndex.value = Math.round(offsetX / screenWidth)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems[0]) {
        currentIndex.value = viewableItems[0].index ?? 0
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return {
    translateX,
    currentIndex,
    onScroll,
    onViewableItemsChanged,
  }
}
