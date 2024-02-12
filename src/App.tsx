import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="wrapper">
        <div id="header">
          {/* <div className="top_banner">
            <h1>Notion Links</h1>
            <p></p>
          </div> */}

          {/* <!-- <div className="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">New Page 1</a></li>
              <li><a href="#">New Page 2</a></li>
              <li><a href="#">New Page 3</a></li>
              <li><a href="#">New Page 4</a></li>
            </ul>
          </div> --> */}
        </div>

        <div id="page_content">
          {/* <!--Template designed by--> */}
          <a href="http://www.htmltemplates.net/"
          ><img
              src="images/copyright.gif"
              className="copyright"
              alt="www.htmltemplates.net"
            /></a>

          {/* <!-- <div className="left_side_bar">

            <div className="col_1">
              <h1>Main Menu</h1>
              <div className="box">
                <ul>
                  <li><a href="#">Menu Item 1</a></li>
                  <li><a href="#">Menu Item 2</a></li>
                  <li><a href="#">Menu Item 3</a></li>
                  <li><a href="#">Menu Item 4</a></li>
                  <li><a href="#">Menu Item 5</a></li>
                  <li><a href="#">Menu Item 6</a></li>
                  <li><a href="#">Menu Item 7</a></li>
                  <li><a href="#">Menu Item 8</a></li>
                  <li><a href="#">Menu Item 9</a></li>
                </ul>
              </div>
            </div>

            <div className="col_1">
              <h1>Block</h1>
              <div className="box">
                <p>Enter Block content here...</p>
                <br>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo</p>
              </div>
            </div>

          </div> --> */}

          <div className="right_section">
            <div className="common_content">
              <h1>Important Links</h1>
              <hr />
            </div>
            <div className="top_content">
              <div className="column_one">
                <h2>Personal Links</h2>
                <a href="https://www.notion.so/Python-62045c997b194c1ba7bdc12da68ca126" target="_blank">Python</a>
                <br />
                <a href="https://www.notion.so/MERN-Web-Development-91f25bc4bd6548a59238e0ad6436d4ba" target="_blank">MERN</a>
                <br />
                <a href="https://www.notion.so/Flask-937c67f77ddc4d0d946484056bfdb40c" target="_blank">Flask</a>
                <br />
                <a href="https://www.notion.so/C-Language-40333ae0568346ea9029c8b49e5ee73f" target="_blank">C Language</a>
                <br />
                <a href="https://www.notion.so/Java-0204a29ecf3440e39e00f36df60f0c84" target="_blank">Java</a>
                <br />
                <a href="https://www.notion.so/PHP-467ca1fa9bac452da00ea949cf71b209" target="_blank">PHP</a>
                <br />
              </div>
              <div className="column_two border_left">
                <h2>Tutoring Links</h2>
                <a href="https://www.notion.so/Bac-Informatique-2022-2023-72e5d89528324b88b4bc52142d077f44" target="_blank">Bac Informatique 2022-2023</a>
                <br />
                <a href="https://www.notion.so/Bac-Informatique-2023-2024-80ae5c69ab7d445e950ba06b4bcdeb20" target="_blank">Bac Informatique 2023-2024</a>
              </div>
            </div>
          </div>

          <div className="clear"></div>

          {/* <!-- <div id="footer">Copyright &copy; 2014. Design by <a href="http://www.htmltemplates.net/" target="_blank">HTML Templates</a><br>

          </div> --> */}
        </div>
      </div>
    </>
  )
}

export default App
