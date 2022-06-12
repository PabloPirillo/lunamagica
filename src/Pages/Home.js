import React from "react";
import FormUser from "../Components/FormUser";
function Home() {
    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
    .then(response=>response.json())
    .then(data=>console.log(data));

    return(
     
        <div className="Container"><h1>Luna Magica</h1>
        <p>el objetivo del sitio es poder
predecir el futuro del consultante por medio de una tirada de cartas y algunos datos
solicitados.</p>

        <FormUser />
</div>
    );
}
export default Home;