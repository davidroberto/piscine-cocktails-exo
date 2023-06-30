import CocktailSingle from "./CocktailSingle";

// je récupère la valeur de la props cocktailsPublished
const RandomCocktail = ({ cocktailsPublished }) => {
  // je créé une variable qui contient un nombre aléatoire
  // entre 0 et la longueur max de mon tableau cocktailsPublished
  const randomKey = Math.floor(Math.random() * cocktailsPublished.length);
  // je récupère le cocktails positionné dans mon tableau
  // à l'index randomKey
  const randomCocktailInList = cocktailsPublished[randomKey];

  return (
    <section>
      <h1>Le cocktail du jour :</h1>
      {/* j'affiche le détail du cocktail en utilisant le composant
        CocktailSingle
       */}
      <CocktailSingle cocktail={randomCocktailInList} />
    </section>
  );
};

export default RandomCocktail;
