Para fazer algo semelhante a isso em **React com TypeScript** (`.tsx`), você precisa:

1. Definir corretamente a função como componente React.
2. Tipar as props.
3. Usar JSX corretamente (`<label>{page}</label>` em vez de `content={page}`).

Aqui está como você faria isso da forma adequada:

```tsx
import React from 'react';

type NavbarProps = {
  page: string;
};

const Navbar: React.FC<NavbarProps> = ({ page }) => {
  return (
    <label>{page}</label>
  );
};

export default Navbar;
```

### Explicação:

* `NavbarProps` define o tipo das props (neste caso, apenas uma string chamada `page`).
* `React.FC<NavbarProps>` é a forma de declarar que `Navbar` é um componente funcional que recebe `NavbarProps`.
* `{page}` dentro da label é a forma correta de mostrar o valor no JSX.

### Como usar:

```tsx
<Navbar page="Home" />
```

Isso renderiza:

```html
<label>Home</label>
```

Se quiser fazer algo ainda mais compacto, você pode escrever como arrow function simples:

```tsx
const Navbar = ({ page }: { page: string }) => <label>{page}</label>;
```

Mas a primeira forma com `type NavbarProps` é mais legível e escalável.

---
---
---

Claro! Vamos **desmembrar e explicar detalhadamente** esse trecho do componente React com TypeScript:

---

### **1. Definição do tipo de props**

```tsx
type NavbarProps = {
  page: string;
};
```

#### O que está acontecendo aqui?

* `type NavbarProps = { page: string; };`

  * Define um **tipo TypeScript** chamado `NavbarProps`.
  * Ele descreve um **objeto com uma propriedade** chamada `page`, que é do tipo `string`.
  * Ou seja, qualquer componente que use esse tipo **espera receber uma prop chamada `page` que contenha um texto (string).**

🔹 Isso ajuda o TypeScript a entender o que o componente precisa e **fornece autocomplete e verificação de tipo** durante o desenvolvimento.

---

### **2. Definição do componente funcional React**

```tsx
const Navbar: React.FC<NavbarProps> = ({ page }) => {
  return (
    <label>{page}</label>
  );
};
```

#### Linha por linha:

##### `const Navbar: React.FC<NavbarProps>`

* Aqui estamos declarando uma constante `Navbar`, que será o nosso componente.
* `React.FC<NavbarProps>`:

  * `React.FC` significa **React Function Component** (componente funcional do React).
  * `<NavbarProps>` informa que este componente **recebe props do tipo `NavbarProps`**.
  * Isso adiciona suporte a tipagem automática para props e também já inclui `children` por padrão (mesmo que não estejamos usando neste exemplo).

##### `= ({ page }) => { ... }`

* Isso é uma **função arrow** que define o corpo do componente.
* Estamos **desestruturando** as props diretamente nos parâmetros da função: `{ page }`

  * Isso significa que, se alguém passar um objeto com várias props, queremos extrair apenas `page`.

##### `return (<label>{page}</label>);`

* O JSX retornado é apenas um `<label>` HTML.
* Dentro do `<label>`, usamos `{page}` para **exibir o valor da prop** passada.

---

### Exemplo de uso:

```tsx
<Navbar page="Contato" />
```

O que acontece:

* A prop `page` recebe o valor `"Contato"`.
* O componente renderiza:

```html
<label>Contato</label>
```

---

### Alternativas sem `React.FC`

Você **não é obrigado a usar `React.FC`**. Também poderia fazer assim:

```tsx
type NavbarProps = {
  page: string;
};

const Navbar = ({ page }: NavbarProps) => {
  return <label>{page}</label>;
};
```

🔹 Essa forma é mais comum em projetos TypeScript modernos, porque é mais **explícita** e evita incluir implicitamente `children`, que `React.FC` traz mesmo que você não use.

---

Se quiser, posso mostrar um exemplo interativo com alteração de página ou adicionar um estilo dinâmico. Deseja expandir isso?