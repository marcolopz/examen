export default Cuantitativo =  (preguntas,respuesta) => {
    let correctas = 0;
    preguntas.map(p, i => {
        if(p.respuesta === respuesta[i]){
            correctas++;
        } 
    })
      
    return { rptaCorrectas: correctas, total: preguntas.length}
}
export default Cualitativo =  (preguntas,respuesta) => {
    return algunvalor
}
export default valorativo =  (preguntas,respuesta) => {
    return algunvalor
}
  
   // + cuantitativo: (0/[NRO_PREGUNTAS]).
   // + cualitativo: 0-25%:C, 25-50%: B, 50-75%: A, 75-100%:A+.
   // + valorativo:  0-50%:Es una pena, 50%-100%: Felicidades.
    