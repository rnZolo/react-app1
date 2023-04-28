import './styles/App.css';
import Header from './components/Header';
import AvatarCard from './components/AvatarCard';


function App() {
  return (
    <>
      <Header />
      <section className='avatar-section'>
        <div className='avatar-section-wrapper'>
          <AvatarCard />
        </div>
      </section>
    </>
  );
}

export default App;
