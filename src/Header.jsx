// je récupère la valeur de la props userFromApi
const Header = ({ userFromApi }) => {
  return (
    <header>
      <img src="https://www.thecocktaildb.com/images/logo.png" alt="logo" />
      <h1>Making the healthcare experience more human</h1>
      <nav>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Departments</a>
          </li>
          <li>
            {/* j'utilise la valeur de la props userFromApi */}
            Connecté en tant que {userFromApi.firstName} {userFromApi.lastName}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
