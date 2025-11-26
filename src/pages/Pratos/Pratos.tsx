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
import { getPratos } from '../../services/pratosServices'
import type { pratos } from '../../types/Pratos'

export default function Pratos() {

    const [pratos, setPratos] = useState<pratos[]>([]);

    const fetchPratos = async () => {
        try {
            const dados = await getPratos();
            console.log("Lista de pratos vindo da Api: ", dados);
            setPratos(dados);
        } catch (error) {
            console.error("erro ao execultar getPratos: ", error);
        }
    }

    useEffect(() => {
        fetchPratos();
    }, [])
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

                {
                    pratos.map((p: pratos) => (

                        <div className="card 1">
                            <img src={`http://localhost:3000/static/${p.imagens[0]}`} alt={"imagem do prato" + p.descricao} />
                            <h2>{p.nome}</h2>
                            <p>{p.descricao}</p>
                            <span>{p.preco}</span>
                        </div>
                    ))
                }


            </section>




        </main>
    )
}

function fetchBolos() {
    throw new Error('Function not implemented.')
}

