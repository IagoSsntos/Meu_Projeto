import './Pratos.css'
import Banner1 from '../../assets/imgs/banner vinho.png'
import Banner2 from '../../assets/imgs/banner 2.jpg'
import Banner3 from '../../assets/imgs/banner 3.jpg'
import card1 from '../../assets/imgs/pizza-de-pepperoni-caseira-portal-minha-receita.webp'
import card2 from '../../assets/imgs/brigadeiro.png'
import card3 from '../../assets/imgs/Sensação.png'
import card4 from '../../assets/imgs/quatro-queijo 1.png'
import card5 from '../../assets/imgs/Frango.png'
import card6 from '../../assets/imgs/Chocolate com M&Ms.png'
import { useEffect, useState } from 'react'

export default function Pratos() {
       
        const [pratos, setPratos] = useState<Pratos[]>([]);

        const fetchPratos = async () => {
            try{
                const dados = await getPratos();
                console.log("Lista de pratos vindo da Api: ", dados);
                setPratos(dados);
            }catch (error) {
                console.error("erro ao execultar getPratos", error);
            }
        }

        useEffect(() => {
            fetchBolos();
        },[])
    return (
        <main>


            <section className="banner">
                <img src="./assets/Food-Pizza-Basil-Tomato 1.png" alt="" />
            </section>
            <a className="whatsapp" href="icone do whatsapp">
                <img src="../assets/icone-whatsapp.png" alt="" />
            </a>


            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={Banner1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={Banner2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="..." />
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
                    <img src={card1} alt="pizza com brigadeiro" />
                    <h2>Pepperoni</h2>
                    <p>Pepperoni artesanal, queijo premium e massa crocante. Sabor marcante em cada fatia.</p>
                    <span>R$ 84,99</span>
                </div>


                <div className="card 2">
                    <img src={card2} alt="pizza com brigadeiro" />
                    <h2>Brigadeiro</h2>
                    <p>Brigadeiro cremoso, base crocante e toque especial de granulado. Doçura e charme que encantam a cada mordida.</p>
                    <span>R$ 87,99</span>
                </div>


                <div className="card 3">
                    <img src={card3} alt="pizza com brigadeiro" />
                    <h2>Sensação</h2>
                    <p>Chocolate meio amargo rico, base crocante e M&M's selecionados. Delicadeza e sabor em cada fatia.</p>
                    <span>R$ 87,99</span>
                </div>


                <div className="card 4">
                    <img src={card4} alt="pizza com brigadeiro" />
                    <h2>Quatro queijo</h2>
                    <p>Queijos selecionados, cremosos e equilibrados sobre massa crocante. Sofisticação a cada fatia.</p>
                    <span>R$ 84,99</span>
                </div>

                <div className="card 5">
                    <img src={card5} alt="pizza com brigadeiro" />
                    <h2>Frango</h2>
                    <p>Queijos selecionados, cremosos e equilibrados sobre massa crocante. Sofisticação a cada fatia.</p>
                    <span>R$ 84,99</span>
                </div>

                <div className="card 6">
                    <img src={card6} alt="pizza com brigadeiro" />
                    <h2> Chocolate com M&M's</h2>
                    <p>Chocolate meio amargo intenso, base crocante e M&M’s especiais. Elegância e sabor em cada pedaço.</p>
                    <span>R$ 87,99</span>
                </div>


            </section>




        </main>
    )
}

function fetchBolos() {
    throw new Error('Function not implemented.')
}

