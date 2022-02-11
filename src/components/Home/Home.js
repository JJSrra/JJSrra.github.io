import Card from '../Card/Card';

function Home() {

  return (
    <div className="cards-container">
        <Card link="/palette-display" imageSource="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" cardText="First card"></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  );
}

export default Home;
