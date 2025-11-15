# Documentação do Site - Grande Loja Maçônica

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes](#componentes)
5. [Configuração e Instalação](#configuração-e-instalação)
6. [Scripts Disponíveis](#scripts-disponíveis)
7. [Estrutura de Cores](#estrutura-de-cores)
8. [Funcionalidades](#funcionalidades)
9. [Deploy](#deploy)

---

## 🎯 Visão Geral

Site institucional da Grande Loja Maçônica do Amazonas (GLOMAM), desenvolvido com React, TypeScript e Vite. O site apresenta informações sobre a instituição, sua história, administração, lojas filiadas e oferece um canal de contato para interessados.

### Características Principais

- Design elegante e moderno com tema escuro e detalhes dourados
- Totalmente responsivo (mobile-first)
- Navegação suave entre seções
- Animações e transições suaves
- SEO otimizado com meta tags apropriadas

---

## 🛠 Tecnologias Utilizadas

### Core
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.8.3** - Superset JavaScript com tipagem estática
- **Vite 5.4.19** - Build tool e dev server de alta performance

### UI e Estilização
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis baseados em Radix UI
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Biblioteca de ícones
- **Playfair Display** - Fonte Google Fonts (serif elegante) - Corpo do texto
- **Lato** - Fonte Google Fonts (sans-serif) - Header e textos específicos
- **Cinzel Decorative** - Fonte Google Fonts (serif decorativa) - Título do Hero

### Funcionalidades
- **React Router DOM 6.30.1** - Roteamento de páginas
- **TanStack React Query 5.83.0** - Gerenciamento de estado e cache
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas

### Ferramentas de Desenvolvimento
- **ESLint 9.32.0** - Linter para JavaScript/TypeScript
- **TypeScript ESLint** - Linter específico para TypeScript
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

---

## 📁 Estrutura do Projeto

```
lodge-crafted-site-main/
├── public/                 # Arquivos estáticos públicos
│   ├── bannerteste.png    # Imagem de fundo do Hero
│   ├── Favicon.png        # Favicon do site
│   ├── Hero.png           # Ícone do Hero
│   ├── Logo.png           # Logo da GLOMAM
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── masonic-symbols.jpg
│   ├── components/        # Componentes React
│   │   ├── ui/            # Componentes UI reutilizáveis (shadcn)
│   │   ├── Navigation.tsx  # Barra de navegação superior com dropdowns
│   │   ├── Hero.tsx       # Seção hero/banner principal
│   │   ├── Contact.tsx    # Seção de contato
│   │   └── Footer.tsx     # Rodapé do site
│   ├── hooks/             # Custom hooks React
│   ├── lib/               # Utilitários e helpers
│   ├── pages/             # Páginas da aplicação
│   │   ├── Index.tsx      # Página principal (Hero + Contact + Footer)
│   │   ├── NotFound.tsx   # Página 404
│   │   ├── Glomam/        # Páginas da seção GLOMAM
│   │   │   ├── NossaHistoria.tsx
│   │   │   ├── Paramaconicos.tsx
│   │   │   ├── Agenda.tsx
│   │   │   └── QueroSerUmMacom.tsx
│   │   ├── Maconaria/     # Páginas da seção MAÇONARIA
│   │   │   ├── OQueE.tsx  # Com scroll vertical e fonte Lato
│   │   │   ├── Principios.tsx
│   │   │   ├── Objetivos.tsx
│   │   │   ├── PerguntasRespostas.tsx
│   │   │   └── GrandesLojas.tsx
│   │   ├── Administracao/  # Páginas da seção ADMINISTRAÇÃO
│   │   │   ├── Governantes.tsx
│   │   │   ├── Executivo.tsx
│   │   │   ├── Legislativo.tsx
│   │   │   ├── Judiciario.tsx
│   │   │   └── GrandesComissoes.tsx
│   │   ├── Lojas/         # Páginas da seção LOJAS
│   │   │   └── index.tsx  # Busca e filtros de lojas
│   │   └── Dispensario/   # Páginas do DISPENSÁRIO
│   │       └── QuemSomos.tsx
│   ├── App.tsx            # Componente raiz com rotas
│   ├── main.tsx           # Ponto de entrada da aplicação
│   ├── index.css          # Estilos globais, variáveis CSS e scrollbar customizada
│   └── vite-env.d.ts      # Tipos do Vite
├── index.html             # HTML principal
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração do Vite (porta 8080)
├── tailwind.config.ts     # Configuração do Tailwind
├── postcss.config.js      # Configuração do PostCSS
└── eslint.config.js       # Configuração do ESLint
```

---

## 🧩 Componentes

### Navigation.tsx
Barra de navegação fixa no topo da página com:
- **Logo**: Imagem `Logo.png` (64x64px) substituindo o círculo com letra "G"
- **Texto**: "GLOMAM" ao lado da logo
- **Menu centralizado**: HOME, GLOMAM, MAÇONARIA, ADMINISTRAÇÃO, LOJAS, DISPENSÁRIO
- **Dropdowns hover**: Cada seção principal exibe subseções ao passar o mouse
  - Delay de 200ms antes de fechar para melhor usabilidade
  - Background dos dropdowns: `#161d34` (azul escuro)
- **Botão INTRANET**: Substituiu "Portal do Membro" (fonte `text-sm`)
- **Menu hambúrguer**: Para dispositivos móveis
- **Cor de fundo**: `#123b61` (azul escuro)
- **Transparência ao rolar**: Header fica 85% opaco quando scroll > 50px
- **Fonte**: Lato (aplicada apenas no header)

**Subseções disponíveis:**
- **GLOMAM**: Nossa História, Paramaçônicos, Agenda do Grão Mestre, Quero Ser um Maçom
- **MAÇONARIA**: O Que É, Princípios, Objetivos, Perguntas e Respostas, Grandes Lojas
- **ADMINISTRAÇÃO**: Governantes, Executivo, Legislativo, Judiciário, Grandes Comissões
- **LOJAS**: Buscar Lojas
- **DISPENSÁRIO**: Quem Somos

### Hero.tsx
Seção hero com:
- **Imagem de fundo**: `bannerteste.png` (substituiu hero-masonic-regalia.jpg)
- **Ícone**: `Hero.png` acima do título
- **Título principal**: "Grande Loja Maçônica do Amazonas"
  - Fonte: **Cinzel Decorative** (serif decorativa)
  - Tamanho: `text-4xl md:text-6xl`
- **Descrição**: Texto placeholder com princípios destacados
- **Botões de ação**: Conheça a GLOMAM, Entre em Contato
- **Indicador de scroll**: Animado na parte inferior

### Páginas Individuais

O site utiliza um sistema de rotas onde cada subseção tem sua própria página:

**GLOMAM** (`/glomam/`):
- `/glomam/nossa-historia` - NossaHistoria.tsx
- `/glomam/paramaconicos` - Paramaconicos.tsx
- `/glomam/agenda` - Agenda.tsx
- `/glomam/quero-ser-um-macom` - QueroSerUmMacom.tsx

**MAÇONARIA** (`/maconaria/`):
- `/maconaria/o-que-e` - OQueE.tsx (com scroll vertical e fonte Lato)
- `/maconaria/principios` - Principios.tsx
- `/maconaria/objetivos` - Objetivos.tsx
- `/maconaria/perguntas-respostas` - PerguntasRespostas.tsx
- `/maconaria/grandes-lojas` - GrandesLojas.tsx

**ADMINISTRAÇÃO** (`/administracao/`):
- `/administracao/governantes` - Governantes.tsx
- `/administracao/executivo` - Executivo.tsx
- `/administracao/legislativo` - Legislativo.tsx
- `/administracao/judiciario` - Judiciario.tsx
- `/administracao/grandes-comissoes` - GrandesComissoes.tsx

**LOJAS**:
- `/lojas` - Lojas/index.tsx (com busca e filtros por estado e loja)

**DISPENSÁRIO**:
- `/dispensario/quem-somos` - QuemSomos.tsx

### Contact.tsx
Seção de contato com:
- Formulário de contato
- Informações de contato (telefone, email, endereço)
- Horário de atendimento

### Footer.tsx
Rodapé com:
- Logo e descrição
- Links rápidos
- Informações de contato
- Copyright

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm ou yarn ou bun

### Passos para Instalação

1. **Clone o repositório** (se aplicável)
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd lodge-crafted-site-main
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o site**
   - Abra seu navegador em `http://localhost:8080`
   - A porta padrão está configurada no `vite.config.ts`

---

## 📜 Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento Vite com hot-reload.
- **Porta**: 8080 (configurada em `vite.config.ts`)
- **Host**: `::` (aceita conexões de qualquer interface)

### `npm run build`
Cria uma build de produção otimizada na pasta `dist/`.

### `npm run build:dev`
Cria uma build em modo desenvolvimento.

### `npm run preview`
Visualiza a build de produção localmente.

### `npm run lint`
Executa o ESLint para verificar erros e warnings no código.

---

## 🎨 Estrutura de Cores

O site utiliza um sistema de cores baseado em HSL definido em `src/index.css`:

### Cores Principais

- **Charcoal (Fundo escuro)**
  - `--charcoal`: `0 0% 15%` (HSL)
  - `--charcoal-light`: `0 0% 25%` (HSL)

- **Gold (Dourado - Cor de destaque)**
  - `--gold`: `43 74% 49%` (HSL)
  - `--gold-light`: `43 74% 65%` (HSL)
  - `--gold-dark`: `43 74% 35%` (HSL)

- **Header Background**
  - Cor padrão: `#123b61` (azul escuro)
  - Cor ao rolar: `rgba(18, 59, 97, 0.85)` (85% opacidade)
  - Background dos dropdowns: `#161d34` (azul escuro)

### Cores do Sistema (shadcn/ui)

- Background, Foreground, Primary, Secondary, Muted, Accent, etc.
- Todas definidas em HSL para melhor controle de temas

---

## ✨ Funcionalidades

### Navegação
- Menu fixo no topo que permanece visível durante o scroll
- **Sistema de rotas**: Cada subseção tem sua própria página/rota
- **Dropdowns hover**: Subseções aparecem ao passar o mouse sobre as seções principais
  - Delay de 200ms antes de fechar para melhor usabilidade
  - Menu centralizado no desktop
- Menu responsivo com hambúrguer para mobile
- Navegação suave entre páginas usando React Router

### Animações
- Transições suaves em hover
- Animações de entrada (fade-in, slide-up)
- Efeitos de hover em botões e links
- Indicador de scroll animado

### Responsividade
- Design mobile-first
- Breakpoints do Tailwind:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1400px

### SEO
- Meta tags otimizadas no `index.html`
- Open Graph tags para redes sociais
- Twitter Card tags
- Descrição e keywords apropriadas

### Acessibilidade
- Componentes Radix UI com suporte a acessibilidade
- Navegação por teclado
- Contraste adequado de cores

---

## 🚀 Deploy

### Build de Produção

1. **Criar build**
   ```bash
   npm run build
   ```

2. **A pasta `dist/` conterá os arquivos otimizados**

### Opções de Deploy

- **Vercel**: Conecte o repositório e faça deploy automático
- **Netlify**: Arraste a pasta `dist/` ou conecte o repositório
- **GitHub Pages**: Configure para servir a pasta `dist/`
- **Servidor próprio**: Faça upload dos arquivos da pasta `dist/`

### Variáveis de Ambiente

Atualmente não há variáveis de ambiente configuradas. Se necessário, crie um arquivo `.env` na raiz do projeto.

---

## 📝 Notas Adicionais

### Fontes
- **Playfair Display**: Fonte principal aplicada em títulos e corpo do texto
- **Lato**: Aplicada no header (Navigation) e em textos específicos (ex: página "O que é")
- **Cinzel Decorative**: Aplicada apenas no título principal do Hero

### Imagens
- **Arquivos públicos**: `public/`
  - `bannerteste.png` - Imagem de fundo do Hero
  - `Logo.png` - Logo da GLOMAM (usada no header)
  - `Hero.png` - Ícone do Hero
  - `Favicon.png` - Favicon do site
- **Assets**: `src/assets/`
  - `masonic-symbols.jpg` - Imagens de símbolos maçônicos
- Formatos suportados: JPG, PNG, SVG
- Otimização recomendada antes do deploy

### Performance
- Vite oferece otimizações automáticas
- Code splitting automático
- Lazy loading de componentes (se implementado)

### Manutenção
- Código organizado em componentes reutilizáveis
- TypeScript para type safety
- ESLint para manter qualidade do código
- Sistema de rotas centralizado em `App.tsx`
- Páginas individuais para cada subseção facilitam manutenção

### Funcionalidades Especiais
- **Scroll vertical customizado**: Página "O que é" possui scrollbar dourada personalizada
- **Header translúcido**: Efeito de transparência ao rolar a página
- **Dropdowns inteligentes**: Sistema de hover com delay para melhor UX

---

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@grandeloja.org.br
- Telefone: (92) 3622-0034

---

**Última atualização**: Dezembro 2024
**Versão**: 1.1.0

### Changelog v1.1.0
- ✅ Sistema de navegação com dropdowns hover
- ✅ Páginas individuais para cada subseção
- ✅ Logo e favicon atualizados
- ✅ Imagem de fundo do Hero substituída
- ✅ Fontes personalizadas (Lato, Cinzel Decorative)
- ✅ Header com transparência ao rolar
- ✅ Scroll vertical customizado na página "O que é"
- ✅ Menu centralizado
- ✅ Botão INTRANET no lugar de "Portal do Membro"
- ✅ Remoção de subseções desabilitadas (BRASÃO, GRÃO-MESTRES, FUNDAÇÃO GLOMAM)

