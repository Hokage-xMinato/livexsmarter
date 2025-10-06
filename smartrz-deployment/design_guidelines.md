# Design Guidelines: Live Classes Dashboard

## Design Approach
**Selected Approach:** Design System (Material Design-inspired with modern refinements)

**Justification:** This is a utility-focused, information-dense application requiring clear data hierarchy, real-time status updates, and efficient scannability. The auto-updating nature (every minute) demands visual stability and consistent patterns.

**Key Design Principles:**
- Information clarity over visual embellishment
- Instant status recognition through color and iconography
- Scannable card-based layouts for quick content parsing
- Responsive grid system adapting to device constraints

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary: 240 65% 55% (Deep Blue - for headers, primary actions)
- Surface: 0 0% 100% (Pure White - cards, containers)
- Background: 220 20% 97% (Subtle Gray - page background)
- Success/Live: 142 70% 45% (Vibrant Green - live indicators)
- Warning/Upcoming: 38 92% 50% (Amber - upcoming status)
- Neutral/Completed: 220 15% 60% (Muted Blue Gray - completed items)

**Dark Mode:**
- Primary: 240 75% 65% (Lighter Blue - better contrast)
- Surface: 220 18% 15% (Dark Charcoal - cards)
- Background: 220 20% 10% (Deep Charcoal - page background)
- Success/Live: 142 60% 55% (Softer Green - live indicators)
- Warning/Upcoming: 38 82% 60% (Warmer Amber)
- Neutral/Completed: 220 12% 50% (Desaturated Gray)

### B. Typography

**Font Stack:**
- Primary: 'Inter', -apple-system, system-ui, sans-serif
- Monospace (for timestamps/IDs): 'JetBrains Mono', monospace

**Type Scale:**
- Hero/Page Title: text-4xl font-bold (36px)
- Section Headers: text-2xl font-semibold (24px)
- Card Titles: text-lg font-medium (18px)
- Body Text: text-base (16px)
- Metadata/Labels: text-sm text-gray-600 dark:text-gray-400 (14px)
- Status Badges: text-xs font-medium uppercase tracking-wide (12px)

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16 for consistency
- Component padding: p-4, p-6, p-8
- Section margins: mb-8, mb-12, mb-16
- Grid gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Max width: max-w-7xl mx-auto
- Horizontal padding: px-4 sm:px-6 lg:px-8
- Vertical rhythm: py-8 lg:py-12

**Grid Layout:**
- Mobile: Single column (grid-cols-1)
- Tablet: Two columns (md:grid-cols-2)
- Desktop: Three columns (lg:grid-cols-3)

### D. Component Library

**Navigation Header:**
- Sticky top bar with app name "SmartRZ Live Classes"
- Real-time update indicator (pulsing dot + timestamp)
- Dark mode toggle
- Clean, minimal navigation with subtle shadow (shadow-sm)

**Class Cards:**
- Elevated surface with subtle shadow (shadow-md hover:shadow-lg transition)
- Border-left accent (4px) color-coded by status:
  - Live: Green border-left
  - Upcoming: Amber border-left
  - Completed: Gray border-left
- Card structure:
  - Status badge (top-right corner, pill shape)
  - Class title (font-medium, truncate after 2 lines)
  - Instructor name (text-sm with user icon)
  - Date/Time (text-sm with clock icon)
  - Play/View link (bottom, full-width subtle button)

**Status Indicators:**
- Live: Animated pulsing dot + "LIVE" badge (green)
- Upcoming: Clock icon + "UPCOMING" badge (amber)
- Completed: Checkmark icon + "COMPLETED" badge (gray)

**Category Sections:**
- Clear section dividers with count badges
- Collapsible headers (optional) for completed classes if list is long
- Empty state illustrations for zero items

**Loading States:**
- Skeleton screens matching card layout
- Subtle shimmer animation during updates

**Error Handling:**
- Toast notifications for API failures
- Inline error messages with retry buttons
- Fallback to last successful data

**Footer:**
- Minimal: "Auto-updates every minute • Last updated: [timestamp]"
- API status indicator
- Subtle branding

### E. Responsive Behavior

**Mobile (< 768px):**
- Single column cards
- Compact card padding (p-4)
- Stacked status information
- Bottom-fixed "refresh" action if needed

**Tablet (768px - 1024px):**
- Two-column grid
- Medium card padding (p-6)
- Side-by-side metadata

**Desktop (> 1024px):**
- Three-column grid
- Full card padding (p-8)
- Expanded metadata with icons

### F. Interaction Patterns

**Card Interactions:**
- Subtle scale on hover (hover:scale-102)
- Shadow elevation on hover
- Smooth transitions (transition-all duration-200)

**Data Updates:**
- Fade-in new cards (animate-fadeIn)
- Subtle highlight flash on updated cards
- Smooth count transitions in badges

**Animations:** Minimal and purposeful
- Pulsing dot for live indicator (animate-pulse)
- Fade transitions for content updates
- Skeleton loading shimmer
- NO unnecessary scroll animations or parallax effects

## Images

**Hero Section:** No traditional hero image needed - this is a utility dashboard

**Icons:**
- Use Heroicons via CDN for all UI icons
- Status icons: Green circle (live), Clock (upcoming), Check (completed)
- Metadata icons: User (instructor), Calendar (date), Clock (time)
- System icons: Refresh, Moon/Sun (theme toggle)

**Fallback Graphics:**
- Empty state illustrations (simple SVG placeholders)
- Error state icon (alert triangle)
- No images or media needed beyond iconography

## Technical Considerations

- Auto-refresh mechanism should be invisible to users
- Optimistic UI updates (show data immediately)
- Preserve scroll position during updates
- Local storage for theme preference
- Graceful degradation for script failures