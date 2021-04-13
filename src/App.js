import "./App.css";
import { Component } from "react";
import Container from "./components/Container";
import Searchform from "./components/Searchform";
import Header from "./components/Header";
import FavoritesContainer from "./components/FavoritesContainer";

class App extends Component {
  state = {
    recipes: [],
    favoriteRecipes: [],
  };

  APP_ID = "61c15b49";
  APP_KEY = "0bb89a89fa57510d24eabaf14ef99a78";

  getRecipes = query => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`
    )
      .then(res => res.json())
      .then(({ hits }) => this.setState({ recipes: hits }));
  };

  componentDidMount() {
    this.getRecipes("chicken");
  }

  addFavorite = () => {
    console.log("hey");
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Searchform getRecipes={this.getRecipes} />
        <FavoritesContainer
          favoriteRecipes={this.state.favoriteRecipes}
          addFavorite={this.addFavorite}
        />
        <Container recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
