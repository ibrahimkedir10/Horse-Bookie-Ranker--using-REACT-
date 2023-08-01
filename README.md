# Introduction
Welcome to React Bookie Display! This interactive web application uses React and Babel to fetch data from a JSON file containing information about different horses. The page allows users to select a horse from a drop-down select, and the details of the chosen horse, including its rank, rating, sire, trainer, and jockey, will be displayed. Additionally, the horse's "silks" will be shown using an image element. Furthermore, an iframe will display the horse's race.

# Usage
### 1. Select a Horse:
- Use the drop-down select element to choose a horse from the list of names.
### 2. View Horse Details:
- After selecting a horse, the following details will be displayed:
- Rank: The horse's rank.
- Rating: The horse's rating.
- Sire: The horse's sire (father).
- Trainer: The horse's trainer.
- Jockey: The horse's jockey.
- Silks: The image of the horse's "silks" displayed using an img element.
### 3. Watch the Horse's Race:
- An iframe will be embedded in the page, displaying the horse's race.

# Technologies
This project utilizes the following technologies:
- HTML: Provides the structure and layout of the application.
- CSS: Handles the styling for the user interface, creating a visually appealing grid layout for horse details.
- React: Enables dynamic interactions with the drop-down select and the display of horse information and images.
- Babel: Transpiles the React code for compatibility with modern browsers.

# JSON Data
The page fetches the horse information from a JSON file containing the following data for each horse:

- Name: The horse's name.
- Rank: The horse's rank.
- Rating: The horse's rating.
- Sire: The horse's sire (father).
- Trainer: The horse's trainer.
- Jockey: The horse's jockey.
- Silks: The filename of the horse's "silks" image.

# Grid Layout
The React components create div elements arranged in a CSS grid layout to organize the horse details. Some of these div elements span multiple rows and/or columns to create an organized and visually appealing display.

# Customization Tips
- You can update the JSON data file with additional horses or modify the existing horse details.
- Customize the CSS styles in the lab15.css file to personalize the appearance of the grid and the overall user interface.
