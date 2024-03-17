/* eslint-disable no-new */
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { PokemonRepository } from './repo';

const repository = new PokemonRepository();
console.log('Connesso desde index.ts');


new Header('.app');
new Main('main', repository);
new Footer('.nav', repository);
