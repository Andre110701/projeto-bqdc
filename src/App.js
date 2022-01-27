
import { Paragraph, Title } from './components/atoms/typography/typography';
import { Images } from './components/atoms/Images/images'
import folder1 from './assets/group5025.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Paragraph type="bold">Teste Tipografia</Paragraph>
        <Paragraph>Teste</Paragraph>
        <Title variant="h1">Lorem</Title>
      </header>
      <div>
       <Images src={folder1} alt="Folder" />
      </div>
    </div>
  );
}
export default App;
