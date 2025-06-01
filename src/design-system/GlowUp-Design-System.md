
# GlowUp Design System Documentation

## 🎨 Color Palette

### Primary Glow Colors
- **Glow Purple**: `hsl(270 100% 70%)` - #A855F7
- **Glow Pink**: `hsl(330 100% 70%)` - #F472B6
- **Glow Cyan**: `hsl(180 100% 70%)` - #22D3EE
- **Glow Yellow**: `hsl(60 100% 70%)` - #FACC15
- **Glow Orange**: `hsl(30 100% 70%)` - #FB923C
- **Glow Green**: `hsl(120 100% 70%)` - #4ADE80

### Neon Variants (Lighter)
- **Neon Purple**: `hsl(270 100% 80%)` - #C084FC
- **Neon Pink**: `hsl(330 100% 80%)` - #F9A8D4
- **Neon Cyan**: `hsl(180 100% 80%)` - #67E8F9
- **Neon Yellow**: `hsl(60 100% 80%)` - #FDE047

### Background Colors
- **Dark Background**: `hsl(240 10% 8%)` - #14141A
- **Dark Surface**: `hsl(240 8% 12%)` - #1C1C23
- **Dark Card**: `hsl(240 6% 16%)` - #26262F

### Text Colors
- **Primary Text**: `hsl(210 40% 98%)` - #FAFAFA (white)
- **Muted Text**: `hsl(215 20.2% 65.1%)` - #94A3B8

## 🎨 Gradients

### Primary Gradients
- **Gradient Glow**: `linear-gradient(135deg, hsl(270 100% 70%), hsl(330 100% 70%))`
- **Gradient Dark**: `linear-gradient(135deg, hsl(240 10% 8%), hsl(240 6% 16%))`
- **Purple to Pink**: `from-glow-purple to-glow-pink`
- **Cyan to Green**: `from-glow-cyan to-glow-green`
- **Pink to Orange**: `from-glow-pink to-glow-orange`
- **Yellow to Orange**: `from-glow-yellow to-glow-orange`

## 📝 Typography

### Font Family
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif

### Font Sizes & Weights
- **Heading 1**: 3.75rem (60px), font-weight: 700 (bold)
- **Heading 2**: 1.875rem (30px), font-weight: 700 (bold)
- **Heading 3**: 1.5rem (24px), font-weight: 600 (semibold)
- **Body Large**: 1.25rem (20px), font-weight: 400 (normal)
- **Body Medium**: 1rem (16px), font-weight: 400 (normal)
- **Body Small**: 0.875rem (14px), font-weight: 400 (normal)
- **Caption**: 0.75rem (12px), font-weight: 400 (normal)

## 🎭 Animations

### Keyframes
- **Glow Pulse**: 2s ease-in-out infinite
  - 0%, 100%: box-shadow: 0 0 20px rgba(168, 85, 247, 0.4)
  - 50%: box-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6)

- **Float**: 3s ease-in-out infinite
  - 0%, 100%: translateY(0px)
  - 50%: translateY(-6px)

- **Bounce Gentle**: 2s ease-in-out infinite
  - 0%, 100%: translateY(0)
  - 50%: translateY(-2px)

- **Fade In Up**: 0.6s ease-out
  - From: opacity: 0, translateY(20px)
  - To: opacity: 1, translateY(0)

- **Scale In**: 0.2s ease-out
  - From: scale(0.95), opacity: 0
  - To: scale(1), opacity: 1

## 🧩 Component Library

### Buttons

#### Primary Button (Glow Button)
- **Background**: Gradient glow (purple to pink)
- **Padding**: 1rem 2rem (16px 32px)
- **Border Radius**: 0.75rem (12px)
- **Font Weight**: 600 (semibold)
- **Animation**: Glow pulse + scale on hover (1.05)
- **Transition**: all 300ms ease

#### Secondary Button
- **Background**: Transparent with border
- **Border**: 1px solid muted/40
- **Padding**: 0.75rem 1.5rem (12px 24px)
- **Border Radius**: 0.5rem (8px)
- **Hover**: Scale 1.05, border color change

### Cards

#### Main Card
- **Background**: card/60 with backdrop-blur-sm
- **Border**: 1px solid with glow color/30
- **Border Radius**: 1rem (16px)
- **Padding**: 2rem (32px)
- **Shadow**: Large shadow
- **Hover**: Scale 1.05, border glow increase to /60

#### Feature Card
- **Background**: card/40 with backdrop-blur-sm
- **Border**: 1px solid muted/20
- **Border Radius**: 0.75rem (12px)
- **Padding**: 1rem (16px)

### Inputs

#### Text Input
- **Background**: muted/20
- **Border**: 1px solid muted/30
- **Border Radius**: 0.5rem (8px)
- **Padding**: 0.75rem 1rem (12px 16px)
- **Focus**: Border color changes to glow color
- **Transition**: all 300ms ease

### Icon Containers

#### Large Icon Container
- **Size**: 5rem x 5rem (80px x 80px)
- **Background**: Gradient with rounded corners
- **Border Radius**: 1.5rem (24px)
- **Icon Size**: 2rem (32px)

#### Medium Icon Container
- **Size**: 4rem x 4rem (64px x 64px)
- **Background**: Gradient with rounded corners
- **Border Radius**: 1rem (16px)
- **Icon Size**: 1.5rem (24px)

## 📐 Spacing System

### Padding/Margin Scale
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

### Container Spacing
- **Page Padding**: 1rem (16px) mobile, 2rem (32px) desktop
- **Section Spacing**: 3rem (48px) between major sections
- **Component Spacing**: 1.5rem (24px) between components

## 🎨 Background Elements

### Animated Blobs
- **Small Blob**: 32px x 32px, blur-lg
- **Medium Blob**: 40px x 40px, blur-xl
- **Large Blob**: 64px x 64px, blur-2xl
- **Colors**: Various glow colors with 10-20% opacity
- **Animations**: Float or bounce-gentle

### Positioning
- Randomly positioned using absolute positioning
- Various top/bottom/left/right percentages
- Z-index: lower than content (typically 0 or 1)

## 📱 Responsive Breakpoints

### Tailwind Breakpoints
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

### Layout Patterns
- **Mobile**: Single column, full width cards
- **Tablet**: 2 column grid for cards
- **Desktop**: 2-4 column grids depending on content

## 🎯 UI Patterns

### Page Structure
1. **Animated Background**: Absolute positioned blobs
2. **Header**: Navigation with back button and title
3. **Main Content**: Centered container with cards
4. **Footer/Actions**: Bottom fixed or inline buttons

### Card Layouts
- **Authentication Cards**: Center aligned, single column
- **Feature Cards**: Grid layout, equal heights
- **Content Cards**: Flexible heights, consistent spacing

### Interactive States
- **Hover**: Scale transform (1.05), color transitions
- **Focus**: Glow border colors, outline removal
- **Active**: Slightly smaller scale (0.98)
- **Disabled**: Reduced opacity (0.5-0.7)

## 🎪 Special Effects

### Glow Effects
- Box shadows with glow colors
- Multiple shadow layers for depth
- Pulse animations for emphasis

### Backdrop Blur
- Used on cards and overlays
- Typically backdrop-blur-sm or backdrop-blur-md
- Combined with semi-transparent backgrounds

### Glass Morphism
- Semi-transparent backgrounds (20-60% opacity)
- Backdrop blur effects
- Subtle borders with glow colors
- Used extensively for cards and modals

## 📋 Implementation Notes for Figma

1. **Create Color Styles**: Set up all glow colors as color styles
2. **Text Styles**: Create text styles for each typography variant
3. **Components**: Build reusable components for buttons, cards, inputs
4. **Effects**: Use drop shadows and inner shadows to recreate glow effects
5. **Auto Layout**: Use auto layout for consistent spacing
6. **Variants**: Create component variants for different states (hover, focus, etc.)
7. **Gradients**: Set up gradient styles for backgrounds and buttons

## 🎨 Brand Guidelines

### Personality
- **Energetic**: Bright colors and animations
- **Supportive**: Soft, rounded corners and gentle animations
- **Modern**: Clean typography and glass morphism effects
- **Inclusive**: High contrast ratios and clear hierarchy

### Do's
- Use glow colors for interactive elements
- Maintain consistent spacing using the scale
- Apply gentle animations for feedback
- Use glass morphism for depth

### Don'ts
- Avoid sharp corners (prefer rounded)
- Don't use pure black backgrounds
- Avoid harsh transitions
- Don't overcrowd with too many glow effects
