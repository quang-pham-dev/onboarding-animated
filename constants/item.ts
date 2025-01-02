import { OnboardingItem, Position } from '@/interfaces'

export const ONBOARDING_DATA: OnboardingItem[] = [
  {
    id: 1,
    name: 'Step 1',
    images: ['bananaDonut', 'banana'],
    colors: ['#f8e68e', '#eaba41'],
  },
  {
    id: 2,
    name: 'Step 2',
    images: ['greenAppleDonut', 'greenApple'],
    colors: ['#c5f095', '#71b609'],
  },
  {
    id: 3,
    name: 'Step 3',
    images: ['strawberryDonut', 'strawberry'],
    colors: ['#e293ab', '#eb3e77'],
  },
  {
    id: 4,
    name: 'Step 4',
    images: ['caramelDonut', 'caramel'],
    colors: ['#edc68c', '#ec9a17'],
  },
] as const

export const FRUIT_POSITIONS: Position[] = [
  { top: 10, left: 120, rotation: -115 },
  { top: 130, left: 240, rotation: 30 },
  { top: 45, left: 15, rotation: 45 },
  { top: 340, left: 10, rotation: 10 },
  { top: 576, left: 20, rotation: 75 },
  { top: 490, left: 55, rotation: 90 },
  { top: 510, left: 285, rotation: 105 },
  { top: 150, left: 116, rotation: 15 },
  { top: 530, left: 178, rotation: -75 },
  { top: 690, left: 200, rotation: -50 },
]
