const Main=()=>{
    const peliculas =[
        {titulo:"spiderman",duracion:"2hrs"},
        {titulo:"spiderman2",duracion:"3hrs"},
        {titulo:"spiderman3",duracion:"2hrs 30 minutos"}
    ]

  return(
    <>
     <h1>holaaaaaaaa</h1>
    <section>
        {peliculas.map((pelicula)=>(
            <article key={pelicula.titulo} >
                <h1>{pelicula.titulo}</h1>
                <p>{pelicula.duracion}</p>
            </article>
        )
        )}
    </section>
    </>
  )
}
export default Main;