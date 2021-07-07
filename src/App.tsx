import './app.scss';
import { Card } from './components/Card';

function App() {
  return (
    <div id='app'>
      <div className="cards">
        <Card
          icon='sedans'
          title='SEDANS'
          color='orange'
        >
          Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
        </Card>
        <Card
          icon='suvs'
          title='SUVS'
          color='darkCyan'
        >
          Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
        </Card>
        <Card
          icon='luxury'
          title='LUXURY'
          color='veryDarkCyan'
        >
          Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
        </Card>
      </div>
    </div>
  );
}

export default App;
