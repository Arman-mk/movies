

# Movies mini app - feature sliced

The application follows a feature-sliced architecture, which aims to provide a clear separation of concerns and enhance modularity. The architecture is divided into layers: app, features, pages, and shared. Each layer is further divided into slices, which consist of components for the user interface (UI), models for data manipulation, and a library (lib) for various types, constants, schemas, helpers, and more.

The app layer serves as the entry point of the application and manages the overall structure. It orchestrates the different features and provides the main user interface.

The features layer represents different functional units or features of the application. Each feature is self-contained and focuses on a specific aspect of the movie-related functionality. These features can include search, recommendations, user profiles, movie details, and more. Each feature slice within this layer comprises UI components responsible for rendering the feature's views, models for handling data operations specific to that feature, and the shared library.

The pages layer consists of specific pages or screens within each feature. These pages provide the user interface for interacting with the features and can include functionalities like movie search results, movie details, user profile settings, and more. The pages layer leverages the UI components and models from the corresponding feature slices.

The shared layer contains shared components, utilities, and resources that are reused across different features and pages. It provides a common foundation and promotes code reuse and consistency throughout the application. The shared layer can be accessed by UI components and models from the higher layers.

In this architecture, the UI components can interact with both the models and the shared library. The models handle data operations and can communicate with the shared library as well. However, the layer hierarchy restricts dependencies, ensuring that a layer can only access layers below it. For example, the app layer can access pages, features, and shared, while a feature cannot directly access the pages within it.

By adopting the feature-sliced architecture, the movie-themed application achieves a modular and scalable design. It enables developers to work on specific features independently, promotes code reusability, and simplifies maintenance and testing. The tech stack used to implement this architecture could include frameworks such as React or Angular for the frontend, Node.js for the backend, and libraries like Redux or GraphQL for state management and data handling.



We used the following technologies and tools in our movie-themed application:

1. **Tailwind CSS**: We utilized Tailwind CSS as the styling framework for our application. Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes to rapidly build user interfaces.

2. **Module SCSS**: We also used SCSS (Sass) as the preprocessor for styling. SCSS extends the capabilities of CSS by introducing variables, nesting, mixins, and other advanced features, making it easier to write and manage stylesheets.

3. **Redux Toolkit (RTK)**: We employed Redux Toolkit for state management in our application. RTK is a set of utilities and conventions that simplify Redux state management. It provides a streamlined API, simplifies reducer creation, and integrates commonly used Redux packages like Redux Thunk or Redux Saga.

4. **RTK Query**: We utilized RTK Query, an additional package from Redux Toolkit, to handle data fetching and caching. RTK Query simplifies the process of making API calls by automatically generating reusable API slices based on defined endpoints. It also includes built-in caching and intelligent invalidation mechanisms.

5. **JSON Server**: To simulate a backend server and handle REST API calls, we used JSON Server. JSON Server allows us to quickly set up a mock server by serving a JSON file as a RESTful API. It provides a simple way to define endpoints, data, and relationships between resources.

To start the application, you can run the following command:

```
yarn dev
```

Executing this command will initiate the application along with the JSON Server, enabling you to interact with the movie data served by the server.

Overall, our application's tech stack includes Tailwind CSS and SCSS for styling, Redux Toolkit (RTK) for state management, RTK Query for data fetching, and JSON Server to simulate a backend API. This combination of technologies provides a solid foundation for building a responsive and interactive movie-themed application with efficient state management and API communication.