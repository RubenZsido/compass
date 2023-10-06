const codes = [
  {
    id: 0,
    html: `
<div>
    <header>
      <h1>Welcome to [title]</h1>
      <h2>[subtitle]</h2>
    </header>
    <section>
      <p>[sentence0]</p>
      <p>[sentence1]</p>
      <p>[sentence2]</p>
    </section>
    <div class="container">
        <button>Get Started</button>
    </div>
    <footer>&copy; 2023 Compass. All rights reserved.</footer>
  </div>`,
    css: `
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

`,
  },
  {
    id: 1,
    html: `
<div>
    <header>
      <h1>Welcome to [title]</h1>
      <h2>[subtitle]</h2>
    </header>
    <section>
      <p>[sentence0]</p>
      <p>[sentence1]</p>
      <p>[sentence2]</p>
    </section>
    <div class="container">
        <button>Get Started</button>
    </div>
    <footer>&copy; 2023 Compass. All rights reserved.</footer>
  </div>`,
    css: `
  body {
    background-color: black;
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
  background-color: black;
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
`,
  },
];

export const generateOwn = (id, title, subtitle, copy) => {
  const sentences = copy.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
  const code = codes.find((x) => x.id === id);
  if (!code) {
    return { html: "noHtml", css: "", templateNumber: 0 };
  }
  let htmlCode = code.html
    .replace("[title]", title)
    .replace("[subtitle]", subtitle);
  for (let i = 0; i < sentences.length; i++) {
    const stringToReplace = `[sentence${i.toString()}]`;
    htmlCode = htmlCode.replace(stringToReplace, sentences[i]);
  }
  return { html: htmlCode, css: code.css, templateNumber: codes.length };
};
