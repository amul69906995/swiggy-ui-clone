# React + Vite
# Swiggy UI Clone

This repository contains a clone of the Swiggy UI, including various features such as cart persistence, API integration, and geolocation. The project aims to mimic the functionality and user experience of the Swiggy app.

## Features

- **Home Page**: The main landing page of the app.
- **Search Page**: Allows users to search for restaurants and dishes.
- **Cart**: Persistent cart functionality using Redux.
- **Menu Page**: Displays the menu with an accordion for categories.
- **Loading Skeleton**: Added to enhance user experience during data fetches.
- **Auto Geolocation**: Automatically detects user location using the Navigator API.
- **API Integration**: Uses the Swiggy API with CORS bypass enabled through a browser extension.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/amul69906995/swiggy-ui-clone.git
    cd swiggy-ui-clone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

## Usage

1. **Home Page**: The entry point of the application, displaying popular restaurants and dishes.
2. **Search Page**: Use the search functionality to find specific restaurants or dishes.
3. **Cart**: Add items to the cart. The cart data persists across sessions using Redux.
4. **Menu Page**: Browse through the restaurant's menu with categorized items displayed in an accordion format.
5. **Loading Skeleton**: Experience smooth transitions with loading skeletons during data fetching.
6. **Auto Geolocation**: The application automatically detects and uses your location to show nearby restaurants.
7. **API Integration**: The app fetches data from the Swiggy API. Ensure the CORS bypass extension is enabled in your browser.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management, particularly for cart persistence.
- **React Router**: For routing between different pages.
- **Axios**: For making API requests.
- **CSS Modules**: For styling components.
- **Navigator API**: For geolocation.
- **CORS Extension**: To bypass CORS issues when making API requests.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes or enhancements.



## Acknowledgements

- Swiggy for the inspiration and API.
- Redux and React communities for their invaluable tools and resources.

---

Feel free to reach out if you have any questions or need further assistance. Enjoy using the Swiggy UI Clone!

