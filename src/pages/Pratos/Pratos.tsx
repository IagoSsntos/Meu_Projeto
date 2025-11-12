



    import './Pratos.css'



export default function Pratos() {
        const[pratos, setBolos] = useState<pratos>([]);

        const fetchPratos = async () => {
            try{
                const dados = await getPratos();
                console.log("dados retornados da API:");
                setPratos(dados);

            }
        }
}










<main>


     <section className="banner">
        <img src="./assets/Food-Pizza-Basil-Tomato 1.png" alt=""/>
    </section>
    <a className="whatsapp" href="icone do whatsapp">
        <img src="../assets/icone-whatsapp.png" alt=""/>
    </a>  
    

    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src=".//assets/banner vinho.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="./assets/massa.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./assets/banner 3.png" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

    <section className="cards" >


        <div className="card 1">
            <img src="./assets/pizza-de-pepperoni-caseira-portal-minha-receita.webp" alt="pizza com brigadeiro"/>
                <h2>Pepperoni</h2>
                <p>Pepperoni artesanal, queijo premium e massa crocante. Sabor marcante em cada fatia.</p>
                <span>R$ 84,99</span>
        </div>


        <div className="card 2">
            <img src="./assets/brigadeiro.png" alt="pizza com brigadeiro"/>
                <h2>Brigadeiro</h2>
                <p>Brigadeiro cremoso, base crocante e toque especial de granulado. Doçura e charme que encantam a cada mordida.</p>
                <span>R$ 87,99</span>
        </div>


        <div className="card 3">
            <img src="./assets/Sensação.png" alt="pizza com brigadeiro"/>
                <h2>Sensação</h2>
                <p>Chocolate meio amargo rico, base crocante e M&M's selecionados. Delicadeza e sabor em cada fatia.</p>
                <span>R$ 87,99</span>
        </div>


        <div className="card 4">
            <img src="./assets/quatro-queijo 1.png" alt="pizza com brigadeiro"/>
                <h2>Quatro queijo</h2>
                <p>Queijos selecionados, cremosos e equilibrados sobre massa crocante. Sofisticação a cada fatia.</p>
                <span>R$ 84,99</span>
        </div>

        <div className="card 5">
            <img src="./assets/Frango.png" alt="pizza com brigadeiro"/>
                <h2>Frango</h2>
                <p>Queijos selecionados, cremosos e equilibrados sobre massa crocante. Sofisticação a cada fatia.</p>
                <span>R$ 84,99</span>
        </div>

        <div className="card 6">
            <img src="./assets/Chocolate com M&M's.png" alt="pizza com brigadeiro"/>
                <h2> Chocolate com M&M's</h2>
                <p>Chocolate meio amargo intenso, base crocante e M&M’s especiais. Elegância e sabor em cada pedaço.</p>
                <span>R$ 87,99</span>
        </div>


    </section>




</main>
