import { CategoryComponent } from "./components/Category"
import { categories } from "./models/data"
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center
`;



function App() {

  return (
    <>
      <div >
        <h1>Web Shortcuts</h1>
      </div>

      <hr />
      <Main>
        <div><CategoryComponent
          category={categories[0]}
        />
        <CategoryComponent
          category={categories[0]}
        />
        <CategoryComponent
          category={categories[0]}
        /></div>
        
      </Main>

    </>
  );
}

export default App
