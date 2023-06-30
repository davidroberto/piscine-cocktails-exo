import "./App.css";
import CocktailsList from "./CocktailsList";
import Footer from "./Footer";
import Header from "./Header";
import LastCocktails from "./LastCocktails";
import RandomCocktail from "./RandomCocktail";
import RhumCocktailsList from "./RhumCocktailsList";
import UserInfos from "./UserInfos";

function App() {
  // je définis les variables qui sont utilisées dans plusieurs composants
  // userFromApi est utilisé dans Header et UserInfos
  // cocktailsFromApi est utilisé dans RandomCocktail, LastCocktails, CocktailsList et RhumCocktailsList
  const userFromApi = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };

  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    },
  ];

  // je filtre les cocktails pour ne garder que ceux qui sont publiés
  // je passe cette variable à tous les composants qui en ont besoin
  const cocktailsPublished = cocktailsFromApi.filter((cocktail) => {
    return cocktail.isPublished;
  });

  return (
    <>
      {/* 
      j'apppelle mon composant Header en lui passant en props
      la variable userFromApi
     */}
      <Header userFromApi={userFromApi} />
      {/* 
      j'appelle mon composant RandomCocktail en lui passant en props
      la variable cocktailsPublished
       */}
      <RandomCocktail cocktailsPublished={cocktailsPublished} />
      <LastCocktails cocktailsPublished={cocktailsPublished} />
      <CocktailsList cocktailsPublished={cocktailsPublished} />
      <aside>
        <UserInfos userFromApi={userFromApi} />
      </aside>
      <RhumCocktailsList cocktailsPublished={cocktailsPublished} />
      <Footer />
    </>
  );
}

export default App;
