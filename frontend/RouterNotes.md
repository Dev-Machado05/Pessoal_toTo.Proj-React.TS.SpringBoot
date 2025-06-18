Configurar o **React Router** em um projeto React com **TypeScript** é muito parecido com a configuração em JavaScript, mas com a adição de **tipagens para rotas, parâmetros e componentes**.

Aqui está um passo a passo completo para configurar o **React Router v6+ com TypeScript**:

---

## ✅ **1. Instale o React Router**

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

> `@types/react-router-dom` fornece as definições de tipo para TypeScript.

---

## ✅ **2. Estrutura básica de arquivos**

Exemplo:

```
src/
├── App.tsx
├── main.tsx (ou index.tsx)
├── pages/
│   ├── Home.tsx
│   └── About.tsx
└── router/
    └── routes.tsx
```

---

## ✅ **3. Criando os componentes de página**

**src/pages/Home.tsx**

```tsx
const Home = () => {
  return <h1>Home Page</h1>;
};

export default Home;
```

**src/pages/About.tsx**

```tsx
const About = () => {
  return <h1>About Page</h1>;
};

export default About;
```

---

## ✅ **4. Definindo as rotas**

**src/router/routes.tsx**

```tsx
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
```

---

## ✅ **5. Usando as rotas no App**

**src/App.tsx**

```tsx
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";

const App = () => {
  const routing = useRoutes(routes);
  return routing;
};

export default App;
```

---

## ✅ **6. Montando o Router na raiz**

**src/main.tsx** (ou `index.tsx`)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

## ✅ **7. Tipando parâmetros de rota**

Exemplo: página de detalhes com `:id`.

**src/pages/Detail.tsx**

```tsx
import { useParams } from "react-router-dom";

type DetailParams = {
  id: string;
};

const Detail = () => {
  const { id } = useParams<DetailParams>();
  return <h1>Detalhe do item com ID: {id}</h1>;
};

export default Detail;
```

Adicione a rota:

```tsx
{
  path: "/detail/:id",
  element: <Detail />
}
```

---

## ✅ **8. Navegação tipada com `useNavigate` e `Link`**

```tsx
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Ir para About</button>
      <Link to="/detail/123">Ver detalhe 123</Link>
    </>
  );
};
```

---

## ✔️ Pronto!

Com isso, seu projeto React com TypeScript está usando o **React Router** de forma tipada e segura.

---

Se quiser, posso te gerar um repositório base com essa estrutura ou te ajudar a adaptar seu projeto atual para incluir esse roteamento. Deseja isso?
