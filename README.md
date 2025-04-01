# Beta Theta Pi Purity Test

A customizable purity test web application themed around Beta Theta Pi fraternity. This application allows users to answer 100 questions and receive a purity score based on their responses.

## Features

- 100 customizable questions
- Score calculation
- Responsive design
- Beta Theta Pi themed with official colors
- Vercel deployment ready

## Color Scheme

- Pink: #F99FC9
- Blue: #ABCAE9
- Black: #00000A
- Pantone Black 6: #101820
- Pantone Cool Gray 8: #888B8D
- Pantone Cool Gray 7: #97999B

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Questions

To customize the questions, edit the `src/data/questions.ts` file. The questions array contains 100 string items that can be modified to suit your needs.

## Deployment

This project is configured for easy deployment to Vercel:

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Deploy

Alternatively, you can deploy directly from the command line:

```bash
npm run build
vercel --prod
```

## License

This project is for educational purposes only. Not affiliated with or endorsed by Beta Theta Pi International Fraternity.