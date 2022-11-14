import html2canvas from 'html2canvas';
import React, {useState} from 'react';

const Imgmeme = ()=>{

    const [imgmeme, setImgmeme] = useState();
    const [textmeme, setTextmeme] = useState();

    const seleccionarImg = (e) => {
        setImgmeme(e.target.value);
        console.log(e.target.value);
    }

    const textomeme = (e) => {
        setTextmeme(e.target.value);
        console.log(e.target.value);
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
        <div className='text-center'>
            <h1 className='mt-3 mb-3 text-center'>Editá tu propio meme</h1>

            <h3 className='mt-3 mb-3 text-center'>Ingrese el texto del meme</h3>
            <input onChange={textomeme} className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Pone tu frase" name="meme" arial-label="default input example" ></input>
        
            <h3 className='mt-3 mb-3 text-center'>Elegí tu img</h3>
            <select onChange={seleccionarImg} className='form-select form-select-lg mb-3 w-50 m-auto' arial-label=".form-select-lg example" >
                <option value={1}>Futurama</option>
                <option value={2}>Bob esponja</option>
                <option value={3}>Señora</option>
                <option value={4}>Calamardo</option>
            </select>
      
            <figure className="text-center" id="exportar">
                <p className="w-100 px-30 position-absolute top-50 start-30  h1 text-center ">{textmeme} </p>
                <img src={`./memes/${imgmeme}.jpg`} className="figure-img mt-3 d-block m-auto" alt="meme" />
            </figure>
     
            <button onClick={Descargar} type="button" className='btn btn-primary mt-4 mb-4'>Descargar meme</button>
        </div>
    );

}

export default Imgmeme;
