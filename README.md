# Selma Bolos 🎂

Landing page para uma confeitaria artesanal real, desenvolvida com Next.js 15 e Tailwind CSS. O projeto inclui cardápio completo, calculadora de preços interativa e integração com WhatsApp para pedidos.

**[Ver ao vivo](https://selmabolos.com.br)**

---

## Screenshot

<p align="center">
  <img src="/public/images/printscreen/page_print.webp" alt="Hero page" />
</p>

---

## Lighthouse

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     97      |      97       |      100       | 100 |

---

## Funcionalidades

- **Hero section** responsiva com imagem em WebP e gradiente
- **Cardápio completo** com 4 categorias e mais de 25 sabores de recheio
- **Calculadora de pedidos** com seleção de categoria, sabor, peso e método de entrega - preço atualizado em tempo real
- **Integração com WhatsApp** - o pedido é montado e enviado como mensagem pré-formatada
- **Galeria de produtos** com hover animado
- **Seção de depoimentos** de clientes reais
- **Avaliação no Google** via link direto no footer
- **Mapa integrado** via Google Maps embed
- **JSON-LD (Schema.org Bakery)** para SEO local
- **Toast notifications** via Sonner para feedback de ações do usuário
- **Scroll suave** entre seções via âncoras

---

## Tech Stack

| Tecnologia                                      | Uso                                        |
| ----------------------------------------------- | ------------------------------------------ |
| [Next.js 15](https://nextjs.org/)               | Framework (App Router, SSG)                |
| [TypeScript](https://www.typescriptlang.org/)   | Tipagem estática                           |
| [Tailwind CSS](https://tailwindcss.com/)        | Estilização com design tokens customizados |
| [Sonner](https://sonner.emilkowal.ski/)         | Toast notifications                        |
| [Lucide React](https://lucide.dev/)             | Ícones                                     |
| [Vitest](https://vitest.dev/)                   | Testes unitários                           |
| [Testing Library](https://testing-library.com/) | Testes de componentes                      |
| [Vercel](https://vercel.com/)                   | Deploy e hospedagem                        |

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/felipedev90/selmabolos.git
cd selmabolos

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o .env.local com a URL do seu ambiente

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Variáveis de ambiente

```bash
NEXT_PUBLIC_SITE_URL=https://selmabolos.com.br
```

---

## Testes

O componente `OrderForm` possui cobertura de testes com Vitest e Testing Library:

```bash
npm run test
```

Os testes cobrem:

- Renderização correta de todos os campos do formulário
- Exibição condicional do campo de endereço ao selecionar "Entrega"
- Cálculo de preço em tempo real (categoria + peso + embalagem)

---

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # Metadados, fontes, Toaster e JSON-LD
│   └── page.tsx            # Composição das seções
├── components/
│   ├── Footer/
│   ├── Hero/
│   ├── InfoSection/
│   ├── Location/
│   ├── Navbar/
│   ├── NossasDelicias/
│   ├── OrderForm/
│   ├── Sabores/
│   └── Testimonials/
├── data/
│   ├── menuData.ts         # Cardápio centralizado
│   ├── deliciasData.ts     # Dados da galeria
│   └── testimonialsData.ts # Depoimentos
├── styles/
│   └── globals.css
├── test/
│   └── setup.ts
└── types/
    └── menuType.ts         # Interfaces e tipos compartilhados
```

---

## Sobre o projeto

Este é um projeto real desenvolvido para uma confeitaria artesanal localizada em Várzea Paulista, SP. O objetivo foi criar uma presença digital funcional e elegante que traduzisse a identidade artesanal da marca, com foco em conversão via WhatsApp.

---

## Autor

**Felipe Silva** - Desenvolvedor Frontend Júnior

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/felipesilva90)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/felipedev90)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=google-chrome&logoColor=white)](https://felipe-silva90-portfolio.vercel.app)
