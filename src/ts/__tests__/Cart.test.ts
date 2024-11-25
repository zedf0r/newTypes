import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  cart.add(new Movie(1009, "Avengers", 2001 , "USA", "Avenbers Assemble", "fantasy", 137, 1000))
  expect(cart.items.length).toBe(1);
});
