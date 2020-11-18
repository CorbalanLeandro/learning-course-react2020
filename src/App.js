import './App.css';
import logoML from './logoML.png'

function App() {
  return (
    <div>
      <header>
        <div className='container'>
          <figure>
            <img src={logoML} alt="Logo de Mercado Libre"/>
          </figure>
          <div>
            <input 
              type="search" 
              name="search" 
              id=""
              placeholder='Buscar productos, marcas y más...'
            />
            <button>Search</button>
          </div>
        </div>
      </header>
      <main>
        <nav>
          <div>
            <h2>Notebook</h2>
            <p>30.906 resultados</p>
          </div>
          <div>
            <h4>Categorías</h4>
            <ul>
              <li>Categoría 1</li>
              <li>Categoría 2</li>
              <li>Categoría 3</li>
              <li>Categoría 4</li>
              <li>Categoría 5</li>
            </ul>
          </div>    
        </nav>
        <section>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
          <article>
            <div>
              <figure><img src={logoML} alt=""/></figure>
              <div>
                <h4>Articulo</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime labore voluptatum dignissimos eos adipisci.</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
