function status(req, res) {
  res.status(200).json({ chave: "São acima da média." });
}

export default status;
