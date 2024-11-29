<!-- 1. Where Do We Write the Logic in MobX vs Redux? -->

In Redux, the logic for adding, deleting, or modifying data is written in slices using reducers and actions.
In MobX, the logic is written as methods in the store class. MobX does not rely on predefined structures like reducers; instead, you directly define methods inside the store and call them when needed.

<!-- 2. How Does State Update in Redux vs MobX? -->

In Redux, you dispatch an action to update the state. The reducer processes the action and updates the state immutably, ensuring a clear flow of state changes.
In MobX, the store state is reactive. When a method (e.g., increment) is called, MobX automatically updates all components observing that state. This eliminates the need for dispatching actions.

<!-- 3. Accessing Stores in Redux vs MobX -->

In Redux, the store is wrapped around the App component using a provider (like Provider from react-redux). This makes the store accessible to all components via hooks like useSelector and useDispatch.
In MobX, you import the store directly into the components where it's needed. This works because MobX handles state reactivity and does not require a global wrapper.
Importing stores in MobX does not cause redundancy or inconsistency because:
Stores are singletons — there’s only one instance of a store in the application.
Components automatically react to changes in the store due to MobX’s observer pattern.

<!-- MOBX: -->

Key Points:

1. No Context Wrapping Needed:
   => Unlike Redux, MobX stores do not require context wrapping. Stores can be directly imported into components.
   Observer Decorator:

=>Components are wrapped with observer to automatically react to changes in the store.

2. Multiple Stores:

=> Each store manages its own state and methods, keeping concerns separated.
Simple Integration:

=> You can directly interact with the store in your components.

=> MobX is a reactive state management library.
=> It uses an observer pattern to automatically update components when the observed state changes.

Core Concepts:
(i). State: Data stored in observable properties, managed within classes or plain objects.

(ii). Actions: Functions that modify the state.
(iii). Reactions: Functions that automatically run in response to state changes (e.g., UI updates).

Key Features:
(i). Reactive: Automatically propagates changes without requiring manual dispatch or immutability.
(ii). Flexible: You can create multiple stores and import them wherever needed.

<!-- Redux -->

=> Redux is a predictable state container for JavaScript applications.
=>It relies on a unidirectional data flow and immutability principles.

Core Concepts:
(i). Store: A single global state object.
(ii). Actions: Plain JavaScript objects describing what happened.
(iii). Reducers: Pure functions that specify how the state should change based on an action.

Key Features:
(i). Predictable: The state is immutable and updated only via pure reducers.
(ii). Debuggable: Middleware like Redux DevTools allows tracking of state changes and actions.

<!-- How They Differ in a Practical Example -->

1. MobX Flow:

=> Define a store class (e.g., CounterStore).
=> Add state as observable properties and define methods to mutate it.
=> Import the store in a component and observe it (observer HOC or useObserver).
=> Components automatically react to state changes.

2. Redux Flow:

=> Define a slice with initial state, actions, and reducers (e.g., counterSlice).

=> Combine slices into a global store.
Wrap the app with a Provider to pass the store to the components.

=> Use hooks (useSelector and useDispatch) to access and modify the state explicitly.
