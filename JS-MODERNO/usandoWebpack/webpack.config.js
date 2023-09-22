const path = require("path"); // import pacote do NODE

module.exports = {
  entry: {
    // Entradas
    uil: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "development", // Modelo de arquivo
  output: {
    // Saida
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.min.js", // Nome dos arquivos **([name]. == para quando tiver mais de uma entrada)
  },
};
