import express from 'express';
import cors from 'cors'
import { aMinusculas, contarPalabras } from './services/normalizar_texto/utils';
import { recibirTextoRouter } from './services/normalizar_texto/router';
import { BASE_API_URL } from './utils';
const app = express();

app.use(express.text());   
app.use(express.json());

let HOSTS_ALLOWED:string | string[] | undefined = process.env.HOSTS_ALLOWED

if(!HOSTS_ALLOWED) {
   console.log("NO HAY HOSTS ESPECIFICADOS PARA PERMITIR SU ENTRADA");
   
}

if(HOSTS_ALLOWED) {
   console.log("NO HAY HOSTS ESPECIFICADOS PARA PERMITIR SU ENTRADA");
   
   if(HOSTS_ALLOWED?.length > 1){
      HOSTS_ALLOWED = HOSTS_ALLOWED?.split(" ")
   }
}


app.use(cors({ origin: HOSTS_ALLOWED}))

const TEXTO_URL = `${BASE_API_URL}/texto`

app.get('/', (req, res) => {
   res.send("<h1>API Taller Software 2</h1>")
})


app.post(`${TEXTO_URL}/normalizar`, (req, res) => {
   try {

      const { content } = req.body
      let minusculas = aMinusculas(content)
      res.send(minusculas)

   } catch (error) {
      console.log(error);
      res.send({ message: "Error procesando solicitud" })

   }
})

app.post(`${TEXTO_URL}/contar_palabras`, (req, res) => {
   try {
      const texto = req.body.content;
      const numero_palabras = contarPalabras(texto)
      res.send("Número de palabras: " + numero_palabras);
   } catch (error) {
      console.log(error);
      res.send({ message: "Error procesando solicitud" })
   }
})

app.use(recibirTextoRouter)

app.listen(process.env.PORT || 4000)


