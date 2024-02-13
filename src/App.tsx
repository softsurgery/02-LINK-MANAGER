import { CategoryComponent } from "./components/Category"
import { categories } from "./models/data"
function App() {

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", placeItems: "center" }}>
        <h1>Web Shortcuts</h1>
        <div style={{textAlign:"center"}}>
          <textarea cols={80} rows={10}></textarea>
          <br />
          <button>Manipulate Content</button>
        </div>
        
      </div>

      <hr />
      <CategoryComponent
        {...categories[0]}
      />
    </>
  );
}

export default App
