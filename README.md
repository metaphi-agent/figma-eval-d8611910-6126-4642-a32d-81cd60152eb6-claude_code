# Venus Dashboard - Figma to Code

Production-ready React dashboard built from the Venus Dashboard Builder 2021 Figma design.

## 🎨 Design Source

**Figma File:** [Venus - Dashboard Builder 2021 (Free Version)](https://www.figma.com/design/ehKJnCyvUqsIf7AQAh8JUb/Venus---Dashboard-Builder-2021--Free-Version---Community-)

## 🚀 Live Preview

**Preview URL:** https://ta-01kg9dy0kpahy1r79h1a08c1ek-5173.wo-o7bo2obbq23pqvc9yy2t9wzum.w.modal.host

## 📋 Features

- ✅ **3 Complete Dashboard Layouts** - Fully responsive dashboard variations
- ✅ **14 Reusable Components** - Modular component library
- ✅ **Custom Design Tokens** - Extracted colors, typography, and shadows from Figma
- ✅ **Tailwind v4** - Modern CSS with @theme configuration
- ✅ **React Router** - Multi-page navigation
- ✅ **Production Ready** - Optimized build with Vite

## 🏗️ Component Architecture

### UI Components (Atoms)
- `Button` - Primary, secondary, and ghost variants with multiple sizes
- `SearchInput` - Search field with icon
- `StatCard` - Metric display cards with gradient and default variants
- `MiniBarChart` - Inline bar chart visualization
- `MiniLineChart` - Inline line chart with optional gradient fill

### Block Components (Organisms)
- `Sidebar` - Navigation sidebar with active state
- `BarChartCard` - Large bar chart with monthly data
- `LineChartCard` - Line chart with balance tracking
- `CreditBalanceCard` - Credit balance display with recent transactions
- `ProfileCard` - User profile with stats
- `TransferList` - Transaction list with avatars
- `TransactionList` - Transaction history with icons
- `TaskList` - Daily task schedule
- `PromoCard` - Promotional content card

### Pages
- `Dashboard` - Main dashboard (/)
- `GridDashboard1` - Alternative layout (/dashboard-2)
- `GridDashboard2` - Financial goals layout (/dashboard-3)

## 🎨 Design System

### Colors
- **Primary:** #5D5FEF (Purple Blue)
- **Background:** #F4F7FE (Light Blue Grey)
- **Surface:** #FFFFFF (White)
- **Grey Scale:** 200-900 range
- **Semantic:** Success (#01B574), Error (#EE5D50)

### Typography
- **Font Family:** DM Sans
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)

### Shadows
- **Soft Shadow:** 0px 18px 40px rgba(112, 144, 176, 0.12)

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 6** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router v7** - Routing
- **Lucide React** - Icon library

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

## 🏭 Build

```bash
npm run build
```

Build output is generated in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Atomic components (Button, Input, Charts)
│   └── blocks/       # Composite components (Sidebar, Cards, Lists)
├── pages/            # Route components
├── App.tsx           # Main app with routing
├── main.tsx          # Entry point
└── index.css         # Global styles with design tokens
```

## 🎯 Routes

- `/` - Dashboard 1 (Main dashboard)
- `/dashboard-2` - Grid System Layout 1
- `/dashboard-3` - Grid System Layout 2
- `/activity` - Activity page (placeholder)
- `/library` - Library page (placeholder)
- `/security` - Security page (placeholder)
- `/schedules` - Schedules page (placeholder)
- `/payouts` - Payouts page (placeholder)
- `/settings` - Settings page (placeholder)

## 📊 Ground Truth

Ground truth screenshots are available in `/ground_truth/` for visual comparison and testing.

---

**Built with ❤️ using Claude Code**
