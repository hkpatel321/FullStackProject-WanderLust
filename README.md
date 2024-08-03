# Wanderlust

Wanderlust is a full stack web application that allows users to explore, review, and manage listings of places or villas. The app is built with Node.js, Express.js, MongoDB Atlas, and EJS for templating. It features user authentication and authorization, CRUD operations for listings, and a map integration to display locations.

## Features

- **User Authentication and Authorization**: Sign up, log in, and log out. Only listing owners can perform CRUD operations on their listings.
- **CRUD Operations**: Create, read, update, and delete listings.
- **Review System**: Users can leave reviews and ratings for listings.
- **Map Integration**: Display listings on a map based on user-entered locations.
- **Error Handling**: Comprehensive error handling on both server and client sides.

## Models

### Listing
- `name`: String
- `description`: String
- `photo`: String (URL to image)
- `location`: String
- `country`: String

### Review
- `listingId`: ObjectId (reference to Listing)
- `userId`: ObjectId (reference to User)
- `rating`: Number (out of 5 stars)
- `comment`: String

### User
- `username`: String
- `password`: String
- `email`: String

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/wanderlust.git
    cd wanderlust
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables in a `.env` file:
    ```
    CLOUD_NAME=your_cloud_name
    CLOUD_API_KEY=your_cloud_api_key
    CLOUD_API_SECRET=your_cloud_api_secret
    MAP_TOKEN=your_map_token
    ATLASDB_URL=your_mongodb_atlas_url
    SECRET=your_secret_key
    ```

4. Start the application:
    ```bash
    npm start
    ```

### Usage
1. Visit `http://localhost:8080` in your browser.
2. Sign up and log in to create, view, update, and delete listings.
3. Leave reviews and ratings for listings.
4. View the location of listings on the map.

## Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
