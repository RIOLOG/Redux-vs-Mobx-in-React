import Cart from './components/Cart';
import Counter  from './components/Counter'
import Todo from './components/Todo';


function App() {
  return (
    <div>
        <h1>Redux Multi-Store Example</h1>
        <Counter/>
        <Todo/>
        <Cart/>
    </div>
  );
}

export default App;
