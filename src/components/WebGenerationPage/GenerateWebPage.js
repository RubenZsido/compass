export const generateOwn = (title, slogan, copy) => {
  const sentences = copy.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  const htmlCode = `
  <div>
      <header>
        <h1>Welcome to ${title}</h1>
        <h2>${slogan}</h2>
      </header>
      <section>
        <p>${sentences[0]}</p>
        <p>${sentences[1]}</p>
        <p>${sentences[2]}</p>
      </section>
      <div class="container">
          <button>Get Started</button>
      </div>
      <footer>&copy; 2023 Compass. All rights reserved.</footer>
    </div>`;
  const cssCode = `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
}

section {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}

p {
  margin-bottom: 20px;
}

footer {
  background-color: #f2f2f2;
  text-align: center;
  padding: 20px;
}

button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .container {
    text-align: center;
  }

`;
  return [htmlCode, cssCode];
};
