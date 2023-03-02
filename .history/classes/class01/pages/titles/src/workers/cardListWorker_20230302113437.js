onmessage = ({ data }) => {


  // Responder quem mandou a mensagem para mim
  postMessage(
    { response: 'ok', data: counter }
  )
}
