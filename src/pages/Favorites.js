import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You don't have any favorites yet!</p>;
  } else {
    content = <MeetupList data={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <ul>{content}</ul>
    </section>
  );
}

export default FavoritesPage;
