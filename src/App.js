import './App.css';
import Pizzacard from "./components/PizzaCard/Pizzacard";
import s1 from './images/Pepperoni.jpg'; 
import s2 from './images/barb.jpg'; 
import s3 from './images/bavar.jpg'; 
import s4 from './images/grech.jpg'; 
import s5 from './images/sirn.jpg'; 
import s6 from './images/grusha.jpg'; 

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Добро пожаловать в Nastya-Pizza!</h1>
              <p>Только лучшие ингриденты!</p>
          </header>
          <main className="App-content">
              <Pizzacard
                  image={s1}
                  title="Пепперони"
                  description="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла."
                  prices={{
                      30: 550,
                      40: 700,
                      50: 850
                  }}
              />
              <Pizzacard
                  image={s2}
                  title="Барбекю"
                  description="Копченая куриная грудка, карбонад, сыр моцарелла, сливочный крем-сыр, соус барбекю"
                  prices={{
                      30: 660,
                      40: 800,
                      50: 1000
                  }}
              />
              <Pizzacard
                  image={s3}
                  title="Баварская"
                  description="Ветчина, маринованные огурцы, колбаски полукопченые, сыр моцарелла, базилик, свежая петрушка, соус «Уральский»"
                  prices={{
                      30: 300,
                      40: 520,
                      50: 760
                  }}
              />
              <Pizzacard
                  image={s4}
                  title="Греческая"
                  description="Карбонад, сыр моцарелла, сыр фиетта, майонез"
                  prices={{
                      30: 550,
                      40: 700,
                      50: 850
                  }}
              />
              <Pizzacard
                  image={s5}
                  title="Сырная"
                  description="Сыр моцарелла, сыр чеддер, сыр с голубой благородной плесенью, майонез"
                  prices={{
                      30: 660,
                      40: 800,
                      50: 1000
                  }}
              />
              <Pizzacard
                  image={s6}
                  title="Груша и горгонзола"
                  description="Сыр с плесенью, груша, пармезан, кудровые орешки, руккола, мед и горгонзола"
                  prices={{
                      30: 300,
                      40: 520,
                      50: 760
                  }}
              />
          </main>
          <footer className="App-footer">
              <p>Ждём ваших заказов! 📞</p>
              <p>🍕 Nastya-Pizza © 2024</p>
          </footer>
      </div>
  );
}

export default App;
