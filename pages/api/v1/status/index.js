function status(request, response) {
  response.status(200).json({
    chave: "server on+",
  });
}

export default status;
