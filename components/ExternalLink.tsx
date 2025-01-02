import { Link, type Href } from 'expo-router'
import { openBrowserAsync } from 'expo-web-browser'
import type { ComponentProps } from 'react'
import { Platform } from 'react-native'

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: Href }

export function ExternalLink({ href, ...rest }: Props) {
  const hrefString = typeof href === 'string' ? href : href.pathname
  return (
    <Link
      target="_blank"
      {...rest}
      href={hrefString}
      onPress={async event => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault()
          // Open the link in an in-app browser.
          await openBrowserAsync(hrefString)
        }
      }}
    />
  )
}
