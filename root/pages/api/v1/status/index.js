function status(request, response) {
  response.status(200).json({
    chave: "server is on!",
  });
}

export default status;
