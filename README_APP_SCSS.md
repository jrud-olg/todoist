# README: src/App.scss

## Overview

`src/App.scss` is the main stylesheet for the Todoist application. It is a comprehensive SCSS file (721 lines) that defines all global styling, layout components, and interactive elements for the web application. This file uses SCSS features like variables, mixins, and nested selectors to maintain organized and DRY (Don't Repeat Yourself) CSS.

## File Size

- **Size**: 13,524 bytes (third largest file in the repository)
- **Language**: SCSS (Syntactically Awesome StyleSheets)
- **Lines of Code**: 721 lines

## Key Features and Sections

### 1. **General Settings** (Lines 6-31)
Sets up global CSS box-sizing model and base styling for HTML, body, and list elements.
- Box-sizing inheritance for all elements
- Base font: Roboto sans-serif
- Default text color: #202020
- Default background: #fafafa

### 2. **Variables** (Lines 33-36)
Global SCSS variables used throughout the stylesheet:
- `$generic-box-shadow`: Consistent shadow effect for overlays
- `$generic-border`: Standard border styling (1px solid #f1f1f1)
- `$generic-bg`: Primary brand color (#db4c3f - red/orange)

### 3. **Mixins** (Lines 38-133)
Reusable style blocks that provide consistent styling patterns:

- **`box-overlay()`**: Styles for overlay boxes with shadows, positioning, and z-index
- **`va($va-align)`**: Vertical alignment mixin using flexbox (default center alignment)
- **`no-select()`**: Prevents text selection across browsers
- **`btn($width)`**: Button styling with primary color, padding, and borders
- **`cancel()`**: Styling for cancel/close actions
- **`transparent-button()`**: Transparent button background
- **`task-item()`**: Standard styling for task list items
- **`mq($from)`**: Media query mixin for responsive design (max-width breakpoint)

### 4. **Darkmode** (Lines 135-144)
Styles for dark mode theme support:
- Dark header background (#282828)
- Transparent borders in dark mode

### 5. **Header** (Lines 146-248)
Fixed navigation header (44px height, z-index 400):
- Logo section (grid-based layout)
- Settings section with icons for add and dark mode toggle
- White text on primary red background
- Responsive design at 900px breakpoint

**Key Elements**:
- Navigation grid layout
- Logo display area (24px image)
- Settings buttons area with hover effects
- Icon styling for add button and dark mode toggle

### 6. **Sidebar** (Lines 250-417)
Fixed-position sidebar (266px width, hidden at 900px):
- Project list with color-coded dots (6 different colors)
- Active/hover states
- Delete functionality (appears on hover)
- Generic list items
- Responsive collapse on smaller screens

**Key Features**:
- No text selection (using `@include no-select()`)
- Project color indicators: green, yellow, pink, orange, purple
- Divider between project groups
- Active/hover background color transitions

### 7. **Project Delete Modal** (Lines 419-449)
Modal for confirming project deletion:
- Uses `box-overlay()` mixin for positioning
- Positioned absolutely with high z-index (99)
- Contains confirmation text and action buttons

### 8. **Main Content** (Lines 451-461)
Grid-based content layout:
- 2-column grid layout (1fr auto)
- Maximum width of 922px
- Centered alignment

### 9. **Tasks Section** (Lines 463-529)
Main task display area (656px width on desktop):
- White background with borders
- Left margin aligned with sidebar (266px)
- Full viewport height minimum
- Task list styling with checkboxes
- Responsive design (full width at 900px breakpoint)

**Key Features**:
- Checkbox styling (16x16px, gray border)
- Task item layout with flex display
- Border separators between items
- Padding and spacing for readability

### 10. **Add Task Modal** (Lines 531-617)
Modal overlay for adding new tasks:
- Semi-transparent dark overlay background
- Centered modal box with transform positioning
- Input field for task content (35px height)
- Cancel and Submit buttons
- Responsive width adjustment at 900px

**Key Components**:
- `add-task__overlay`: Semi-transparent background
- `add-task__main`: Modal container
- `add-task__content`: Input field area
- `add-task__cancel` & `add-task__submit`: Action buttons

### 11. **Add Task/Project Shallow** (Lines 619-635)
Quick add buttons for tasks and projects:
- Plus icon in primary red (#dd4b39)
- Text label styling
- No text selection
- Cursor pointer for interactivity

### 12. **Task Date Picker** (Lines 637-668)
Dropdown overlay for date selection:
- Uses `box-overlay()` mixin for positioning
- List of date options with icons
- Hover states for items
- Positioned at top 85px

### 13. **Project Overlay** (Lines 670-690)
Dropdown for project selection:
- Similar structure to task date picker
- White background
- List of available projects
- Responsive positioning at 900px

### 14. **Add Project Modal** (Lines 692-721)
Form for adding new projects:
- Text input field (35px height)
- Submit button (100px width)
- Cancel option
- Styling consistent with task modal

## Design Patterns

### Color Palette
- **Primary Red**: #db4c3f
- **Text**: #202020, #333, #545454
- **Background**: #fafafa, white
- **Borders**: #f1f1f1, #ddd
- **Accents**: Various colors for project indicators
- **Dark Mode**: #282828

### Typography
- **Font Family**: Roboto, sans-serif
- **Font Weights**: 400 (normal), 700 (bold), 900 (heavy)
- **Font Smoothing**: Antialiased for better rendering

### Layout Approach
- **Grid Layout**: Used for header navigation and main content
- **Flexbox**: Primary layout method for components
- **Fixed Positioning**: Header (z-index 400) and sidebar
- **Absolute Positioning**: Modals and overlays

### Responsive Design
- **Breakpoint**: 900px maximum width
- **Mobile Changes**: 
  - Sidebar hidden
  - Tasks full width
  - Reduced padding on header
  - Adjusted modal widths

## Browser Compatibility

The file includes vendor prefixes for:
- Box-sizing: `-webkit-` prefix
- Flexbox: `-webkit-`, `-ms-` prefixes
- Transforms: `-webkit-` prefix
- Font smoothing: `-webkit-`, `-moz-` prefixes
- Touch callout: `-webkit-` prefix

## Usage Notes

1. **Import Google Fonts**: Roboto font is imported from Google Fonts API (line 4)
2. **Modular Mixins**: Extensive use of mixins reduces code duplication
3. **Consistent Spacing**: Uses standard padding/margin values for visual consistency
4. **Interactive States**: All interactive elements have hover and active states
5. **Accessibility**: Proper cursor styling and clear visual feedback for interactions

## Dependencies

- Requires SCSS compiler to generate CSS
- Depends on Google Fonts API for Roboto typeface
- No external CSS frameworks or libraries

## Maintenance Considerations

- Global variables at top make color changes easy
- Mixins centralize repeated patterns
- Comments section dividers improve readability
- Nested selectors follow BEM-like naming conventions
- Media query mixin provides consistent responsive breakpoints
