# Member Management Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses the [Ant Design](https://ant.design/) component library and [Redux](https://redux.js.org/) for state management.

## 🏗️ Building and Testing

To try out this application, clone this repository and run `npm install` to install all dependencies. Then you can run the app in development mode with `npm start`.

## 📷 Screenshots

List Screen

<img width="500" alt="image" src="https://user-images.githubusercontent.com/22990100/155874151-7d521553-2549-456f-a163-a12e5290560b.png"> 

Add Screen

<img width="500" alt="image" src="https://user-images.githubusercontent.com/22990100/155874154-c383dec0-e9c0-4e6a-88ee-47872f1abb1d.png">

Edit Screen

<img width="500" alt="image" src="https://user-images.githubusercontent.com/22990100/155874158-1dd760a5-34fa-4c5b-9331-a7884e379c6f.png">


## 🔧 Room for Improvement

The first thing I'd do is work out the `Jest encountered an unexpected token` error I was getting so that I could build more integration tests. Right now, I'm fairly confident in the functionality of the app after writing a few tests for the thunks and interacting with the app in development mode, but having more integration tests would help me find any odd bugs.

I'd also improve how the app manages redirection, possibly by using URL path routing with [React Router](https://v5.reactrouter.com/web/guides/quick-start) instead of just having a `currentScreen` state in App. Though I think `currentState` was sufficient for this project, it would be more intuitive for users to use URL path routing in an actual web application. As part of these improvements, I would work out how to redirect back from the Edit screen to the List screen after editing a user without simultaneously trying to render both at the same time (updating the user triggers a re-render for the Edit screen).

I'd also make the styling more responsive based on the screen size (probably using CSS media queries).

Finally, I'd add some form validation to make sure that only valid emails and phone numbers are submitted.
