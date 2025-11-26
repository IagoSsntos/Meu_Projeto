import axios from "axios";
import type { pratos } from "../types/Pratos";

export const getPratos = async (): Promise<pratos[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/pizzas");
        return resposta.data
    
    } catch (error) {
        console.error("Erro ao buscar  os dados", error);
        throw error;
    }
}