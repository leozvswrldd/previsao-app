
# WeatherApp 🌦️

Este é um aplicativo simples de previsão do tempo desenvolvido com Angular. Ele permite ao usuário pesquisar informações meteorológicas de uma cidade específica e exibe dados como temperatura atual, temperatura mínima e máxima, umidade e velocidade do vento.

---

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado na sua máquina:

- [Node.js](https://nodejs.org/) (que já inclui o npm)

---

## Como rodar o projeto

Siga os passos abaixo para executar o WeatherApp na sua máquina local:

1️⃣ **Clone ou baixe este repositório no seu computador.**

2️⃣ **Instale as dependências** rodando o seguinte comando na raiz do projeto:
```bash
npm install
```

3️⃣ **Configure sua chave da API.**  
No arquivo `weather.service.ts`, substitua o valor do campo da chave da API pela sua chave do OpenWeatherMap.  
Você pode conseguir uma chave gratuita criando uma conta no [OpenWeatherMap](https://openweathermap.org/).

4️⃣ **Inicie o servidor de desenvolvimento** com o comando:
```bash
ng serve
```
ou
```bash
npm start
```

5️⃣ **Abra o navegador e acesse:**
```
http://localhost:4200
```
para visualizar o aplicativo funcionando.

---

## Como usar

✅ Digite o nome de uma cidade no campo de pesquisa.  
✅ Clique no botão **Pesquisar**.  
✅ O app vai exibir:  
- Temperatura atual  
- Temperatura mínima  
- Temperatura máxima  
- Umidade  
- Velocidade do vento  

---

## Exemplo visual

🔎 Pesquisa de uma cidade:  
![Exemplo de pesquisa](https://github.com/MiltiadisN/Weather-Angular/assets/103901423/a219137d-f62e-4969-aea6-a661a9f2d7a6)

📊 Resultado exibido:  
![Exemplo resultado](https://github.com/MiltiadisN/Weather-Angular/assets/103901423/ca5a9843-979a-4720-b66f-6d3b9fe5cbf5)
