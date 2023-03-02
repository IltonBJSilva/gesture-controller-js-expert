onmessage = ({ data }) => {
  console.log('')


  // Responder quem mandou a mensagem para mim
  postMessage(
    { response: 'ok'}
  )
}
