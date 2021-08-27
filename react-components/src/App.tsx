import './styles/main.css';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import cards from './information/information';

export const App = () => {
  return (
    <div className="content">
      <SearchBar />
      {cards.map((card: any, index: number) => {
        return (
          <Card
            key={index.toString()}
            name={card.name}
            nameEnglish={card.nameEnglish}
            country={card.country}
            weight={card.weight}
            growth={card.growth}
            age={card.age}
            image={card.image}
          />
        );
      })}
    </div>
  );
};

export default App;
