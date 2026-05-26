# Stats Component Usage Guide

## Overview
The `StatsCounter` component now supports two variants:
1. **Default Variant** - Clean, minimal stats display in a card
2. **Community Variant** - Odoo-inspired design with user avatars and decorative elements

---

## Variant 1: Default Stats (Original)

### Usage
```tsx
import { StatsCounter } from "../components/StatsCounter";
import { stats } from "../data/homeData";

<StatsCounter stats={stats} />
```

### Features
- Clean card design with rounded corners
- 4-column grid layout (2 columns on mobile)
- Animated counting effect
- Alternating colors (teal/dark)
- Optional dark mode support

### Example
```tsx
<StatsCounter stats={stats} dark={false} />
```

### Current Usage
- **Services Page** - Line 621
- **Work Page** - Line 132

---

## Variant 2: Community Stats (New - Odoo-Inspired)

### Usage
```tsx
import { StatsCounter } from "../components/StatsCounter";
import { communityStats } from "../data/homeData";

<StatsCounter stats={communityStats} variant="community" />
```

### Features
- Large hero-style heading with animated number
- Background grid with user avatars and decorative shapes
- Handwritten "happy" annotation with arrow
- Subtitle text
- Optional secondary stats row below
- Fully responsive design

### Visual Elements
- **User Avatars**: Real user photos scattered in background
- **Decorative Shapes**: Circles, squares, and organic blobs
- **Colors**: Purple (#714B67), Gray tones, matching brand palette
- **Typography**: Large script font for main number

### Current Usage
- **Home Page** - Line 621 (Updated to use community variant)

---

## Data Structure

### Default Stats
```typescript
export const stats: StatItem[] = [
  { value: "80", label: "Projects Delivered", suffix: "+" },
  { value: "45", label: "Happy Clients", suffix: "+" },
  { value: "12", label: "Countries Served", suffix: "+" },
  { value: "99", label: "Client Satisfaction", suffix: "%" },
];
```

### Community Stats
```typescript
export const communityStats: StatItem[] = [
  { value: "15", label: "Million Users", suffix: "" }, // Main hero stat
  { value: "80", label: "Projects Delivered", suffix: "+" },
  { value: "45", label: "Happy Clients", suffix: "+" },
  { value: "12", label: "Countries Served", suffix: "+" },
];
```

---

## Customization Options

### Change Main Number (Community Variant)
Edit the first item in `communityStats` array:
```typescript
{ value: "15", label: "Million Users", suffix: "" }
```

### Change Subtitle Text
Edit line 158 in `StatsCounter.tsx`:
```tsx
<p className="text-gray-600 text-base sm:text-lg font-normal max-w-xl mx-auto">
  who grow their business with Zenik
</p>
```

### Adjust Avatar Density
Modify the random threshold in line 88:
```typescript
if (random > 0.65) { // Lower = more avatars, Higher = fewer avatars
```

### Change Decorative Colors
Edit the color array in line 95:
```typescript
color: ['#714B67', '#E8E8E8', '#D1D1D1', '#714B67'][Math.floor(Math.random() * 4)]
```

---

## Props Reference

### StatsCounterProps
```typescript
interface StatsCounterProps {
  stats: StatItem[];           // Array of stat items
  dark?: boolean;              // Enable dark mode (default variant only)
  variant?: "default" | "community"; // Choose variant style
}
```

### StatItem
```typescript
interface StatItem {
  value: string;    // The number to display
  label: string;    // Description label
  suffix?: string;  // Optional suffix (e.g., "+", "%")
}
```

---

## Page-by-Page Implementation

### Home Page
```tsx
import { communityStats } from "../data/homeData";

<StatsCounter stats={communityStats} variant="community" />
```
**Why**: Hero section benefits from the engaging community design

### Services Page
```tsx
import { stats } from "../data/homeData";

<StatsCounter stats={stats} />
```
**Why**: Clean, professional stats fit the service-focused content

### Work Page
```tsx
import { stats } from "../data/homeData";

<StatsCounter stats={stats} />
```
**Why**: Minimal design keeps focus on portfolio projects

### About Page
**Not currently using stats** - Could add either variant to showcase company metrics

---

## Best Practices

1. **Use Community Variant for**:
   - Hero sections
   - Landing pages
   - User-focused messaging
   - High-impact statements

2. **Use Default Variant for**:
   - Mid-page stats
   - Professional contexts
   - Multiple stats sections on same page
   - When you need dark mode

3. **Avoid**:
   - Using community variant multiple times on same page
   - Mixing both variants on the same page
   - Overloading with too many stats (4 max recommended)

---

## Animation Details

Both variants include:
- **Intersection Observer**: Triggers when 30% visible
- **Count-up Animation**: 2-second duration
- **Smooth Easing**: 20ms step time
- **One-time Animation**: Won't re-trigger on scroll

---

## Responsive Behavior

### Community Variant
- **Mobile**: Single column, smaller text, fewer avatars visible
- **Tablet**: Adjusted grid, medium text
- **Desktop**: Full grid with all decorative elements

### Default Variant
- **Mobile**: 2-column grid
- **Desktop**: 4-column grid

---

## Future Enhancements

Potential improvements you could add:
1. Custom avatar upload support
2. Different decorative shape patterns
3. Animated shapes (floating, rotating)
4. Color theme variants
5. Video backgrounds
6. Particle effects
7. More handwritten annotations

---

## Troubleshooting

### Avatars not showing
- Check image URLs are accessible
- Verify `referrerPolicy="no-referrer"` is set
- Check network tab for CORS errors

### Animation not triggering
- Ensure component is in viewport
- Check Intersection Observer browser support
- Verify threshold value (0.3 = 30% visible)

### Layout issues
- Check parent container width
- Verify Tailwind CSS is properly configured
- Test responsive breakpoints

---

## Files Modified

1. `src/components/StatsCounter.tsx` - Added community variant
2. `src/data/homeData.ts` - Added communityStats export
3. `src/pages/Home.tsx` - Updated to use community variant
4. `src/pages/Work.tsx` - Added communityStats import (optional)

---

## Questions?

For more customization or issues, check:
- Component file: `src/components/StatsCounter.tsx`
- Data file: `src/data/homeData.ts`
- Type definitions: `src/types.ts`
