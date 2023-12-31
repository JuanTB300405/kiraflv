import Card from "../components/Card";
import animeData from "../data/animeData.json"
import main from "../styles/main.css"

const Main = () => {
    const {animes} = animeData
    console.log(animes);

  return (
    <>
      <section className="CP">
        {animes.map((elemento) => (
            
          <Card key={elemento.titulo} paquete={elemento} />
        ))}
      </section>
    </>
  );
};
export default Main;
