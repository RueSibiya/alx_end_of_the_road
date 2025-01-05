# eBooks Library

## Overview
The eBooks Store is an interactive website where users can explore, read, and order a variety of books. The site includes features like best sellers, free books, and a special section for authors showcasing children’s books retrieved from an external API.

## Features
- **Home Page**: Highlights the main sections of the website.
- **Best Seller Section**: Displays a curated list of popular books.
- **Quick Links Dropdown**:
  - Access free PDFs for reading or coloring.
  - Explore books written by various authors, including children’s books fetched dynamically.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.
- **Sign-Up Button**: Allows users to register for exclusive access.

## Technologies Used
- **Frontend**:
  - React.js for building the user interface.
  - AOS (Animate on Scroll).
  - AOS for smooth scroll animations.
  - Tailwind CSS for styling components.
  - React Icons library for enhanced visuals.
  - API Integration
    - best-childrens-books.p.rapidapi.com` to fetch a list of children’s books.
    
- **Utilities**: 
  Vite for faster development and bundling.


    


## Installation
### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/RueSibiya/alx_end_of_the_road.git
   ```
2. Navigate to the project directory:
   ```bash
   cd final-project_library
   ```
3. Install dependencies:
   ```bash
   npm install

   ```
4. AOS Installation:
   npm install aos

   Usage:
   Import AOS in your App.js or main component and initialize it:

   import AOS from 'aos';
   import 'aos/dist/aos.css';

   useEffect(() => {
   AOS.init({ duration: 1000 });
   }, []);
   Add data-aos attributes to HTML elements for specific animations. Example:
   <div data-aos="fade-up">Your Content</div> 
	
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and visit: `http://localhost:5173#`

## Usage
1. Navigate through the menu to explore sections like Home and Best Sellers.
2. Click on "Quick Links" to access PDFs or view the "Authors" section.
3. For "Authors," click the button to load and display children’s books from the API.
4. Toggle dark mode using the button on the navbar.
5. Sign up by clicking the "Sign-Up" button to access exclusive features.

## API Integration
The "Authors" section fetches data dynamically using the following API:
- **Endpoint**: `https://best-childrens-books.p.rapidapi.com/books/timegoodreads`
- **Headers**:
  - `x-rapidapi-key`: Your API key
  - `x-rapidapi-host`: `best-childrens-books.p.rapidapi.com`

Make sure to replace the placeholder API key with your valid key.

## Challenges
- Integrating an external API and handling dynamic data rendering.
- Debugging API response formats and adapting the code.
- Creating a responsive and accessible design.

## Future Enhancements
- Add a backend for user authentication and order management.
- Include more categories and book genres.
- Implement a full-fledged search and filter functionality.

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

Currently, two official plugins are available:

    @vitejs/plugin-react uses Babel for Fast Refresh
    @vitejs/plugin-react-swc uses SWC for Fast Refresh


## License
This project is licensed under the MIT License. See the LICENSE file for details.

---
AUTHOR: Ruvimbo Karumbidza.

