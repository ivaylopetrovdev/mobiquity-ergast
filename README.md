# mobiquity-ergast
Mobiquity's code challenge for F1 Standings (Senior Front-end Developer)

## Exercise / Code-challenge's task
Use http://ergast.com/mrd/ to create a single page application that presents 
a list that shows the F1 world champions starting from 2005 until 2015. Clicking 
on an item shows the list of the winners for every race for the selected year. 
Highlight the row when the winner has been the world champion in the same season.

---

### Used tech stack
Technologies used for this solution are:
- React v16 
- React Router v5 
- Apollo Client v3 
- GraphQL v15
- Typescript v4 
- Material-UI
- react-testing-library

---

### Architecture
#### Application structure
Application's structure is base on best practices in the Front-end - modules and components. Striving for the Single 
Responsibility of **React Components**. Following this pattern I'm using component-centric file layout for the components.
React as a front-end library provides great flexibility and freedom to manage the application based on the project's 
needs and requirements. Coupled with **Typescript**, for more type strict oriented solution.  

#### State management
Application is quite small, but using Apollo Client for state management and GraphQL, gives a great benefit 
in case if it needs to scale. 
- **Apollo Client** provides an option for caching the data received via the GraphQL. Caching helps in:
  - reducing the volume of the network calls, which can be tracked in the browser's Network tab once the application is running. 
  - faster rendering of already visited pages (no delay for fetching the data)
Also, an easy way to fetch a new fresh one if needed (based on the selected policy).
- **GraphQL** is awesome single solution for accessing different types of data sources (REST API, GraphQL server, DBs, etc.).
Current solution uses ONLY REST API, but this can be easily extended.

#### Visual
A great UX is delivered not just by great code and structure, but by a great UI and look too. **Material-UI** is one 
of the well-known and wide community supported solutions.  

All **CSS files** are written and validated as **CSS level 3** by official W3 CSS validator (https://jigsaw.w3.org/css-validator/validator)

#### Unit tests
One of the more important things after clean and reusable code is having solid tests and coverage of the code. 
This **application has 100% test coverage** for most of the important areas.  

---

###How to run
If you are running it for the FIRST time, you must do the following steps:
- ### `yarn`
- ### `yarn start`

Application will be accessible at: http://localhost:3000/

---

### Bonus implementations
- Site is responsive (used build in options from Material UI). Try to open it in a mobile emulator to see the difference.
- Dark theme option/trigger is available
- Every screen is independent. This means that you can directly open/refresh a known page and the data will be loaded (if there is a response).

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches the test runner with coverage option. Once it is done, a 'coverage' folder is created in the project.
By opening the index.html file, application files that were covered can be reviewed and investigated.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

