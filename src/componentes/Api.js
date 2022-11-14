import React, {useState, useEffect} from 'react';
import html2canvas from 'html2canvas';

import './Api.css';
const Api = () => {

    const [memes, setMemes] = useState([]);
    const [memesElegido, setMemesElegidos] = useState(null);
    const [textmeme, setTextmeme] = useState();
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(json => {
                
                setMemes(json.data.memes);
            
            setMemesElegidos(json.data.memes[0].url);
            
            });   
    }, []);
   
    const seleccionarMeme = (e) => {
        setMemesElegidos(e.target.value);
      
    }
    const textomeme = (e) => {
        setTextmeme(e.target.value);
      
    }

    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memepropio.jpg";
            link.href = img;
            link.click();
        });

    }
 


    return(
        <div className='m-auto contenedor'>
         
   
         <h1 className=' mt-3 py-3 titulo mb-3 text-center titulo '>Editá tu meme</h1>
        <div className='justify-content-center '> 
          
            
           <h3 className='mt-3 mb-3 text-center subti'>Elegí tu imagen</h3>
            <select onChange={seleccionarMeme}  className='form-select form-select-lg mb-3 w-50 m-auto' arial-label=".form-select-lg example" >
                
                { memes.map(meme =>(<option value={meme.url}> {meme.name}  </option> ))}
         

            </select>
            <h3 className='mt-3 mb-3 text-center subti'>Ingrese el texto del meme</h3>
            <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Pone tu frase" name="meme" arial-label="default input example" ></input>
            <br/>
        
            
                 <figure className="text-center" id="exportar">
            
                       <img src={memesElegido} className="img" alt="meme" />
                       <div className="texto">{textmeme} </div>
                </figure>
                <div className='boton'>
                <button onClick={Descargar} type="button" className='btn  btn-primary mt-4 mb-4 '>Descargar meme</button>
                </div>

        </div>      

        </div>
    );
}

export default Api;