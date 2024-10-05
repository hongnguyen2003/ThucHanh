import Header from './component/Header.js';
import Person from './component/Person.js';
function App() {
  return (
    <main style={{display:'flex',flexDirection:'column'}}>
      <Header />
      <Person />
    </main>
  );
}

export default App;
