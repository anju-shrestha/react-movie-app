import Header from "./Components/Header";
import Movie from './Components/Movie'
import movies from './movie.json'
function App() {
  return (
    <div className="min-h-full">
      <Header/>
      <div className='md:flex-row flex flex-wrap justify-between items-center p-4'>
        {
          movies.map((element) => {
            return(
            <Movie
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          )
          })
        }
        
        
        
      </div>
    </div>
  );
}

export default App;
