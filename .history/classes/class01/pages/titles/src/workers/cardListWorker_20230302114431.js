onmessage = ({ data }) => {
  console.log('data',data)

  

  // Responder quem mandou a mensagem para mim
  postMessage(
    { response: 'ok'}
  )
}
