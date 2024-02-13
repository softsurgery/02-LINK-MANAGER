import { CategoryComponent } from "./components/Category"
import { categories } from "./models/data"
function App() {

  return (
    <>
    <h1>Link Manager</h1>
    <hr />
      <CategoryComponent
        {...categories[0]}
      />
    </>
  )
};

export default App
