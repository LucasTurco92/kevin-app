import { useState} from "react"

export const Task=({name})=>{
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000');
          const jsonData = await response.json();
          alert(`${jsonData}, bienvenido!`)
          
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    

    return(
        <section>
          <h3><center>{name}</center></h3>
    <p>'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nisi, architecto sequi esse ea iusto nobis similique suscipit magnam at atque explicabo consectetur facere repellat iste quasi delectus nihil necessitatibus?'</p>
    <button onClick={fetchData}>Realizar</button>
        </section>
    )
}
