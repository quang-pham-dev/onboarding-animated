import { Images } from '@/constants/assets'

export type ImageKeys = keyof typeof Images

export interface OnboardingItem {
  id: number
  name: string
  images: [ImageKeys, ImageKeys]
  colors: [string, string]
}

export interface Position {
  top: number
  left: number
  rotation: number
}
