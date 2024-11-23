import Card from '../Card/Card';
import styles from './CardDeck.module.scss';

export default function CardDeck({cards} : {cards: any[]}) {
  return (
    <div className={styles.carddeck}>
      {cards.map((card: any, index: number) =>
        <Card key={index} card={card}/>
      )}
    </div>
  );
};