import logo from './logo.svg';
import './App.css';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';


function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    <>

      <div style={{ display: 'flex', height: '100%', position: 'absolute', zIndex: '9' }}>
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => collapseSidebar()}>Collapse</button>
        </main>
      </div>
      <div className="App" style={{ marginLeft: '80px', position: 'relative'}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
