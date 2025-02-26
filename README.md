# Yamil Velez Portfolio

A modern, responsive portfolio website for Yamil Ricardo Velez, Assistant Professor of Political Science at Columbia University. This website showcases his research, teaching experience, and publications.

## Features

- Modern, responsive UI built with React and Next.js
- Interactive research assistant chat interface
- Filterable research publications
- Teaching experience timeline
- Animated components and transitions
- Mobile-friendly design

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/yamil-velez-portfolio.git
cd yamil-velez-portfolio
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Run the development server:
```
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```
npm run build
# or
yarn build
```

Then, you can start the production server:

```
npm run start
# or
yarn start
```

## Project Structure

- `app/` - Next.js app directory
  - `components/` - React components
  - `globals.css` - Global styles
  - `layout.js` - Root layout component
  - `page.js` - Main page component

## Customization

To customize the portfolio content, modify the data objects within the `YamilVelezPortfolio.jsx` component:

- `profile` - Basic information
- `researchCategories` - Research publications
- `teachingExperience` - Teaching history
- `researchAreas` - Research focus areas

## License

MIT 