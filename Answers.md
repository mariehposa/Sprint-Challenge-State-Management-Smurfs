1. What problem does the context API help solve?

Context AP1 helps us to simplify state management. It helps us manage state easier as our apps begin to scale.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: They are tasks or activities you can carry out on state to modify it.
Reducer: It takes two arguments; the current state and an action, and returns a new, updated state object based on both arguments.
Store: It is used in provider. They are used to hold application state.

Store is known as a 'single source of truth' in a redux application because is about combining data sources into one so that there is only one place to look for the most up to date data. 


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and Component state is local. Library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it. Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children through props.

The best time to use Application state is when we are to build large apps. However component stae is preferred when we are to build smaller apps.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API is my favorite state management. It helps us store data on a context object and retrieve that data in the necessary components from the context object and not props.

