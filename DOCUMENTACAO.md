# Documentação do Site - GLOMAM

> 💡 **Início Rápido**: Para uma visão geral rápida do projeto, consulte o [README.md](./README.md)

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes Principais](#componentes-principais)
5. [Sistema de Rotas](#sistema-de-rotas)
6. [Configuração e Instalação](#configuração-e-instalação)
7. [Scripts Disponíveis](#scripts-disponíveis)
8. [Sistema de Design](#sistema-de-design)
9. [Funcionalidades](#funcionalidades)
10. [Deploy](#deploy)
11. [Manutenção e Desenvolvimento](#manutenção-e-desenvolvimento)

---

## 🎯 Visão Geral

Site institucional da **Grande Loja Maçônica do Amazonas (GLOMAM)**, desenvolvido com React, TypeScript e Vite. O site apresenta informações sobre a instituição, sua história, administração, lojas filiadas e oferece um canal de contato para interessados.

### Características Principais

- ✅ Design elegante e moderno com tema escuro e detalhes dourados
- ✅ Totalmente responsivo (mobile-first)
- ✅ Navegação suave entre seções com sistema de rotas
- ✅ Animações e transições suaves
- ✅ SEO otimizado com meta tags apropriadas
- ✅ Sistema de dropdowns hover inteligente
- ✅ Menu mobile com hambúrguer
- ✅ Header translúcido ao rolar a página

### Informações de Contato

- **Telefone**: (92) 3622-0034
- **E-mail**: glomam@glomam.org.br
- **Endereço**: Av. Prof. Nilton Lins, 1655 - Flores, Manaus - AM, 69058-030
- **Horário**: Segunda a Sexta, 14h às 20h

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
- **Lucide React 0.462.0** - Biblioteca de ícones moderna
- **tailwindcss-animate 1.0.7** - Animações para Tailwind

### Fontes Google Fonts
- **Playfair Display** - Fonte serif elegante (corpo do texto e títulos)
- **Lato** - Fonte sans-serif (header e textos específicos)
- **Cinzel Decorative** - Fonte serif decorativa (título principal do Hero)

### Funcionalidades
- **React Router DOM 6.30.1** - Roteamento de páginas SPA
- **TanStack React Query 5.83.0** - Gerenciamento de estado e cache
- **React Hook Form 7.61.1** - Gerenciamento de formulários
- **Zod 3.25.76** - Validação de schemas TypeScript-first

### Ferramentas de Desenvolvimento
- **ESLint 9.32.0** - Linter para JavaScript/TypeScript
- **TypeScript ESLint 8.38.0** - Linter específico para TypeScript
- **PostCSS 8.5.6** - Processador CSS
- **Autoprefixer 10.4.21** - Adiciona prefixos CSS automaticamente
- **@vitejs/plugin-react-swc 3.11.0** - Plugin React com SWC para compilação rápida

---

## 📁 Estrutura do Projeto

```
GLOMAM/
├── public/                      # Arquivos estáticos públicos
│   ├── images/                  # Imagens organizadas por categoria
│   │   ├── logo/                # Logos e marcas
│   │   │   ├── Logo.png         # Logo da GLOMAM (usado no header)
│   │   │   └── footer.png       # Imagem do footer
│   │   ├── banners/             # Banners e imagens de fundo
│   │   │   └── bannerteste.png  # Imagem de fundo do Hero
│   │   ├── icons/               # Ícones e favicons
│   │   │   ├── Hero.png         # Ícone do Hero
│   │   │   └── Favicon.png      # Favicon do site
│   │   └── governantes/         # Fotos dos governantes
│   │       ├── (1).png
│   │       ├── (2).png
│   │       └── (3).png
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/                 # Imagens e recursos
│   │   ├── hero-masonic-regalia.jpg
│   │   └── masonic-symbols.jpg
│   ├── components/             # Componentes React
│   │   ├── ui/                 # Componentes UI reutilizáveis (shadcn)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ... (outros componentes shadcn)
│   │   ├── Navigation.tsx      # Barra de navegação superior
│   │   ├── Hero.tsx            # Seção hero/banner principal
│   │   ├── Maconaria.tsx       # Componente da seção Maçonaria
│   │   ├── Glomam.tsx          # Componente da seção GLOMAM
│   │   ├── Administracao.tsx   # Componente da seção Administração
│   │   ├── Lojas.tsx           # Componente da seção Lojas
│   │   ├── Dispensario.tsx     # Componente do Dispensário
│   │   ├── Contact.tsx         # Seção de contato
│   │   ├── Footer.tsx          # Rodapé do site
│   │   ├── Login.tsx           # Página de login (Portal do Membro)
│   │   ├── NavLink.tsx         # Componente de link de navegação
│   │   └── PageBackground.tsx  # Componente de fundo de página
│   ├── hooks/                  # Custom hooks React
│   │   ├── use-mobile.tsx      # Hook para detectar mobile
│   │   └── use-toast.ts        # Hook para toasts
│   ├── lib/                    # Utilitários e helpers
│   │   └── utils.ts            # Funções utilitárias (cn, etc)
│   ├── pages/                  # Páginas da aplicação
│   │   ├── Index.tsx           # Página principal
│   │   ├── NotFound.tsx        # Página 404
│   │   ├── Glomam/             # Páginas da seção GLOMAM
│   │   │   ├── NossaHistoria.tsx
│   │   │   ├── Paramaconicos.tsx
│   │   │   ├── Agenda.tsx
│   │   │   └── QueroSerUmMacom.tsx
│   │   ├── Maconaria/          # Páginas da seção MAÇONARIA
│   │   │   ├── OQueE.tsx
│   │   │   ├── Principios.tsx
│   │   │   ├── Objetivos.tsx
│   │   │   ├── PerguntasRespostas.tsx
│   │   │   └── GrandesLojas.tsx
│   │   ├── Administracao/       # Páginas da seção ADMINISTRAÇÃO
│   │   │   ├── Governantes.tsx
│   │   │   ├── Executivo.tsx
│   │   │   ├── Legislativo.tsx
│   │   │   ├── Judiciario.tsx
│   │   │   └── GrandesComissoes.tsx
│   │   ├── Lojas/               # Páginas da seção LOJAS
│   │   │   └── index.tsx        # Busca e filtros de lojas
│   │   └── Dispensario/         # Páginas do DISPENSÁRIO
│   │       └── QuemSomos.tsx
│   │   └── Login.tsx            # Página de login/autenticação
│   ├── App.tsx                  # Componente raiz com rotas
│   ├── App.css                  # Estilos específicos do App
│   ├── main.tsx                 # Ponto de entrada da aplicação
│   ├── index.css                # Estilos globais, variáveis CSS
│   └── vite-env.d.ts            # Tipos do Vite
├── index.html                   # HTML principal
├── package.json                 # Dependências e scripts
├── package-lock.json            # Lock file do npm
├── bun.lockb                    # Lock file do Bun (alternativo)
├── tsconfig.json                # Configuração TypeScript
├── tsconfig.app.json            # Config TypeScript para app
├── tsconfig.node.json           # Config TypeScript para node
├── vite.config.ts               # Configuração do Vite
├── tailwind.config.ts           # Configuração do Tailwind
├── postcss.config.js            # Configuração do PostCSS
├── eslint.config.js             # Configuração do ESLint
├── components.json              # Configuração do shadcn/ui
├── README.md                    # Documentação principal
└── DOCUMENTACAO.md              # Esta documentação
```

---

## 🧩 Componentes Principais

### Navigation.tsx
Barra de navegação fixa no topo da página com as seguintes características:

**Estrutura:**
- **Logo**: Imagem `/images/logo/Logo.png` (64x64px) com fallback para círculo com letra "G"
- **Texto**: "GLOMAM" ao lado da logo (fonte Cinzel Decorative)
- **Menu centralizado**: HOME, GLOMAM, MAÇONARIA, ADMINISTRAÇÃO, LOJAS, DISPENSÁRIO
- **Botão INTRANET**: Botão destacado no canto direito (desktop)
- **Menu hambúrguer**: Para dispositivos móveis

**Funcionalidades:**
- **Dropdowns hover**: Cada seção principal exibe subseções ao passar o mouse
  - Delay de 200ms antes de fechar para melhor usabilidade
  - Animações de fade-in/fade-out suaves (400ms/500ms)
  - Background dos dropdowns: `#161d34` (azul escuro)
- **Transparência ao rolar**: Header fica 85% opaco quando scroll > 50px
- **Fonte**: Lato (aplicada apenas no header)
- **Prevenção de scroll**: Body não rola quando menu mobile está aberto

**Subseções disponíveis:**
- **GLOMAM**: Nossa História, Paramaçônicos, Agenda do Grão Mestre, Quero Ser um Maçom
- **MAÇONARIA**: O Que É, Princípios, Objetivos, Perguntas e Respostas, Grandes Lojas
- **ADMINISTRAÇÃO**: Governantes, Executivo, Legislativo, Judiciário, Grandes Comissões
- **LOJAS**: Buscar Lojas
- **DISPENSÁRIO**: Quem Somos

### Hero.tsx
Seção hero com:
- **Imagem de fundo**: `/images/banners/bannerteste.png` com overlay gradiente
- **Ícone**: `/images/icons/Hero.png` acima do título
- **Título principal**: "Grande Loja Maçônica do Amazonas"
  - Fonte: **Cinzel Decorative** (serif decorativa)
  - Tamanho: `text-4xl md:text-6xl`
- **Descrição**: Texto com princípios destacados em dourado
- **Botões de ação**: 
  - "Conheça a GLOMAM" (link para `/glomam/nossa-historia`)
    - Texto "Conheça" em fonte pequena acima de "a GLOMAM"
  - "INTRANET" (link para `/login`)
    - Fonte Lato Bold
    - Bordas arredondadas
    - Estilo consistente com o tema do site
- **Indicador de scroll**: Animado na parte inferior
- **Elementos decorativos**: Quadrados rotacionados nos cantos (desktop)

### Maconaria.tsx
Componente principal da seção Maçonaria com sistema de tabs:
- **Tabs**: O Que É, Princípios, Objetivos, Perguntas e Respostas, Grandes Lojas
- **Princípios**: Cards com ícones (Fraternidade, Liberdade, Igualdade)
- **Valores Fundamentais**: Tolerância, Beneficência, Justiça, Progresso
- **FAQs**: Accordion com perguntas frequentes
- **Grandes Lojas**: Lista de Grandes Lojas do Brasil

### Contact.tsx
Seção de contato com:
- **Informações de contato**: Telefone, e-mail, endereço
- **Horário de atendimento**: Segunda a Sexta, 14h às 20h
- **Formulário de contato**: Nome, e-mail, mensagem
- **Google Maps**: Iframe integrado com localização da GLOMAM
- **Fonte**: Merriweather para informações de contato

### Footer.tsx
Rodapé com:
- Logo e descrição
- Links rápidos organizados por seção
- Informações de contato
- Copyright e informações legais

### Login.tsx
Página de login/autenticação (Portal do Membro) com:
- **Design consistente**: Usa Navigation, Footer e PageBackground como outras páginas
- **Formulário de login**: 
  - Campo de email/usuário
  - Campo de senha com botão para mostrar/ocultar
  - Checkbox "Lembrar-me"
  - Link "Esqueci minha senha"
- **Estilo**: 
  - Card centralizado com fundo translúcido
  - Bordas douradas
  - Elementos decorativos nos cantos
  - Fonte Lato para textos
  - Fonte Cinzel Decorative para título
- **Funcionalidades**:
  - Validação de campos obrigatórios
  - Toggle de visibilidade de senha
  - Links para cadastro e voltar ao site
- **Rota**: `/login`
- **Acesso**: Através do botão INTRANET no Hero

---

## 🗺️ Sistema de Rotas

O site utiliza **React Router DOM** para navegação SPA. Todas as rotas estão definidas em `src/App.tsx`:

### Rotas Principais

**Home:**
- `/` - Página inicial (Index.tsx)

**GLOMAM** (`/glomam/`):
- `/glomam/nossa-historia` - NossaHistoria.tsx
- `/glomam/paramaconicos` - Paramaconicos.tsx
- `/glomam/agenda` - Agenda.tsx
- `/glomam/quero-ser-um-macom` - QueroSerUmMacom.tsx

**MAÇONARIA** (`/maconaria/`):
- `/maconaria/o-que-e` - OQueE.tsx
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

**LOJAS:**
- `/lojas` - Lojas/index.tsx (com busca e filtros)

**DISPENSÁRIO:**
- `/dispensario/quem-somos` - QuemSomos.tsx

**AUTH (Autenticação):**
- `/login` - Login.tsx (Portal do Membro - Página de login)

**404:**
- `*` - NotFound.tsx (qualquer rota não encontrada)

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada)
- **npm**, **yarn** ou **bun** (gerenciador de pacotes)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd GLOMAM
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   bun install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o site**
   - Abra seu navegador em `http://localhost:8080`
   - A porta padrão está configurada no `vite.config.ts`

### Configuração do Ambiente

Atualmente não há variáveis de ambiente configuradas. Se necessário, crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.exemplo.com
VITE_APP_NAME=GLOMAM
```

---

## 📜 Scripts Disponíveis

### `npm run dev`
Inicia o servidor de desenvolvimento Vite com hot-reload.
- **Porta**: 8080 (configurada em `vite.config.ts`)
- **Host**: `::` (aceita conexões de qualquer interface)
- **Hot Module Replacement (HMR)**: Ativado

### `npm run build`
Cria uma build de produção otimizada na pasta `dist/`.
- Minificação automática
- Tree-shaking
- Code splitting
- Otimização de assets

### `npm run build:dev`
Cria uma build em modo desenvolvimento (sem minificação).

### `npm run preview`
Visualiza a build de produção localmente.
- Útil para testar a build antes do deploy

### `npm run lint`
Executa o ESLint para verificar erros e warnings no código.
- Configurado com regras do TypeScript ESLint
- Verifica padrões de código e possíveis bugs

---

## 🎨 Sistema de Design

### Cores Principais

O site utiliza um sistema de cores baseado em HSL definido em `src/index.css`:

#### Cores Customizadas

- **Charcoal (Fundo escuro)**
  - `--charcoal`: `0 0% 15%` (HSL) - `#262626`
  - `--charcoal-light`: `0 0% 25%` (HSL) - `#404040`

- **Gold (Dourado - Cor de destaque)**
  - `--gold`: `43 74% 49%` (HSL) - `#D4AF37`
  - `--gold-light`: `43 74% 65%` (HSL) - `#E5C866`
  - `--gold-dark`: `43 74% 35%` (HSL) - `#A68B2A`

#### Cores do Sistema (shadcn/ui)

- **Background**: `0 0% 10%` - Fundo principal
- **Foreground**: `40 20% 92%` - Texto principal
- **Primary**: `43 74% 49%` - Cor primária (dourado)
- **Secondary**: `40 15% 25%` - Cor secundária
- **Muted**: `0 0% 20%` - Elementos muted
- **Accent**: `43 74% 49%` - Cor de destaque
- **Border**: `40 15% 25%` - Bordas

#### Cores Específicas de Componentes

- **Header Background**: `#123b61` (azul escuro)
- **Header Background (scrolled)**: `rgba(18, 59, 97, 0.85)` (85% opacidade)
- **Dropdown Background**: `#161d34` (azul escuro)
- **Contact Section Background**: `#161d34` (azul escuro)

### Tipografia

#### Fontes

- **Playfair Display**: Fonte principal aplicada em títulos e corpo do texto
- **Lato**: Aplicada no header (Navigation) e em textos específicos
- **Cinzel Decorative**: Aplicada apenas no título principal do Hero
- **Merriweather**: Aplicada na seção de contato

#### Tamanhos

- Títulos Hero: `text-4xl md:text-6xl`
- Títulos de seção: `text-4xl md:text-5xl`
- Subtítulos: `text-2xl md:text-3xl`
- Corpo: `text-base` (16px)
- Pequeno: `text-sm` (14px)

### Espaçamento

O projeto utiliza o sistema de espaçamento do Tailwind:
- Padding padrão: `px-4` (mobile), `container mx-auto` (desktop)
- Seções: `py-24` (vertical padding)
- Gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`

### Sombras e Efeitos

- `shadow-gold`: Sombra dourada para elementos destacados
- `shadow-elegant`: Sombra elegante para cards
- `hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]`: Efeito glow dourado no hover

### Animações

- **Transições**: `transition-all duration-300`
- **Hover scale**: `hover:scale-105`
- **Fade in/out**: Animações customizadas para dropdowns
- **Bounce**: Indicador de scroll

---

## ✨ Funcionalidades

### Navegação

- **Menu fixo**: Permanece visível durante o scroll
- **Sistema de rotas**: Cada subseção tem sua própria página/rota
- **Dropdowns hover**: Subseções aparecem ao passar o mouse
  - Delay de 200ms antes de fechar
  - Animações suaves de fade-in/fade-out
  - Menu centralizado no desktop
- **Menu responsivo**: Hambúrguer para mobile
- **Navegação suave**: Scroll suave entre seções
- **Active states**: Links ativos destacados em dourado
- **Botão INTRANET**: No Hero, redireciona para página de login (`/login`)

### Animações

- **Transições suaves**: Em hover, focus e active states
- **Animações de entrada**: Fade-in e slide-up em elementos
- **Efeitos de hover**: Scale, glow, shadow em botões e links
- **Indicador de scroll**: Animação bounce
- **Loading states**: Para formulários e ações

### Responsividade

- **Design mobile-first**: Otimizado para mobile primeiro
- **Breakpoints do Tailwind**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1400px
- **Menu mobile**: Hambúrguer com overlay
- **Grid responsivo**: Adapta-se a diferentes tamanhos de tela

### SEO

- **Meta tags**: Otimizadas no `index.html`
- **Open Graph**: Tags para compartilhamento em redes sociais
- **Twitter Card**: Tags para Twitter
- **Descrição e keywords**: Apropriadas para o contexto maçônico
- **Títulos semânticos**: H1, H2, H3 hierarquicamente corretos

### Acessibilidade

- **Componentes Radix UI**: Com suporte nativo a acessibilidade
- **Navegação por teclado**: Tab, Enter, Esc funcionam corretamente
- **Contraste adequado**: Cores com contraste WCAG AA
- **ARIA labels**: Onde necessário
- **Focus states**: Visíveis e destacados

### Performance

- **Vite**: Build tool rápido com HMR
- **Code splitting**: Automático com React Router
- **Lazy loading**: Componentes carregados sob demanda
- **Otimização de imagens**: Recomendado antes do deploy
- **Tree shaking**: Remove código não utilizado

---

## 🚀 Deploy

### Build de Produção

1. **Criar build**
   ```bash
   npm run build
   ```

2. **A pasta `dist/` conterá os arquivos otimizados**
   - HTML, CSS, JS minificados
   - Assets otimizados
   - Source maps (opcional)

### Opções de Deploy

#### Vercel (Recomendado)
1. Conecte o repositório GitHub
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

#### Netlify
1. Arraste a pasta `dist/` ou conecte o repositório
2. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático configurável

#### GitHub Pages
1. Configure o workflow do GitHub Actions
2. Build e deploy automático na branch `main`
3. Acesse via `https://<seu-usuario>.github.io/GLOMAM`

#### Servidor Próprio
1. Faça upload dos arquivos da pasta `dist/`
2. Configure o servidor web (Nginx, Apache, etc.)
3. Configure SPA routing (redirect todas as rotas para `index.html`)

### Configuração de SPA Routing

Para servidores que não suportam SPA routing nativamente, configure redirects:

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Manutenção e Desenvolvimento

### Estrutura de Código

- **Componentes**: Organizados por funcionalidade
- **Páginas**: Uma página por rota
- **UI Components**: Reutilizáveis em `components/ui/`
- **Hooks**: Custom hooks em `hooks/`
- **Utils**: Funções utilitárias em `lib/`

### Convenções

- **Nomenclatura**: PascalCase para componentes, camelCase para funções
- **Imports**: Organizados por tipo (React, libs, componentes, utils)
- **TypeScript**: Tipagem forte, evite `any`
- **CSS**: Tailwind classes preferidas, CSS customizado apenas quando necessário

### Adicionar Nova Página

1. Criar componente em `src/pages/`
2. Adicionar rota em `src/App.tsx`
3. Adicionar link na navegação (`Navigation.tsx`)
4. Atualizar documentação se necessário

### Adicionar Novo Componente UI

1. Usar shadcn CLI: `npx shadcn-ui@latest add [component]`
2. Ou criar manualmente em `src/components/ui/`
3. Seguir padrão dos componentes existentes

### Debugging

- **React DevTools**: Extensão do navegador
- **Vite DevTools**: Console do Vite no terminal
- **TypeScript**: Verificar erros com `npm run lint`
- **Console**: Logs no console do navegador

### Performance

- **Lighthouse**: Teste de performance regularmente
- **Bundle size**: Monitorar tamanho do bundle
- **Images**: Otimizar imagens antes de adicionar
- **Lazy loading**: Implementado em todas as imagens (exceto críticas como logo e hero)
- **Code splitting**: Páginas carregadas sob demanda com React.lazy
- **RequestAnimationFrame**: Event listeners de scroll otimizados
- **useMemo**: Arrays estáticos memoizados para evitar recriações
- **Manual chunks**: Vendors separados em chunks para melhor cache

---

## 📝 Notas Adicionais

### Imagens

- **Arquivos públicos**: `public/images/` (organizados por categoria)
  - **Logo** (`images/logo/`):
    - `Logo.png` - Logo da GLOMAM (usada no header)
    - `footer.png` - Imagem do footer
  - **Banners** (`images/banners/`):
    - `bannerteste.png` - Imagem de fundo do Hero
  - **Ícones** (`images/icons/`):
    - `Hero.png` - Ícone do Hero
    - `Favicon.png` - Favicon do site
  - **Governantes** (`images/governantes/`):
    - `(1).png`, `(2).png`, `(3).png` - Imagens dos governantes
- **Assets**: `src/assets/`
  - `masonic-symbols.jpg` - Imagens de símbolos maçônicos
  - `hero-masonic-regalia.jpg` - Imagem alternativa do hero
- **Formatos suportados**: JPG, PNG, SVG
- **Otimização**: Recomendado usar ferramentas como ImageOptim ou Squoosh antes do deploy
- **Lazy loading**: Todas as imagens (exceto críticas) usam `loading="lazy"` e `decoding="async"`
- **Prioridade de carregamento**: Imagens críticas (logo, hero) usam `fetchPriority="high"` e `loading="eager"`

### Scrollbar Customizada

A página "O que é" possui scrollbar dourada personalizada:
```css
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #d4af37;
}
```

### Funcionalidades Especiais

- **Header translúcido**: Efeito de transparência ao rolar a página
- **Dropdowns inteligentes**: Sistema de hover com delay para melhor UX
- **Prevenção de scroll**: Body não rola quando menu mobile está aberto
- **Google Maps**: Integrado na seção de contato

### Dependências Principais

- **React Router**: Navegação SPA
- **TanStack Query**: Gerenciamento de estado (preparado para futuras APIs)
- **React Hook Form**: Formulários (preparado para validação)
- **Zod**: Validação de schemas (preparado para formulários)


## 📅 Changelog

### Versão 1.3.0 (Janeiro 2025)

**Adições:**
- ✅ Página de login completa (`/login`)
  - Formulário de autenticação com validação
  - Toggle de visibilidade de senha
  - Checkbox "Lembrar-me"
  - Links para cadastro e recuperação de senha
  - Design consistente com Navigation, Footer e PageBackground
- ✅ Botão INTRANET no Hero atualizado
  - Redireciona para página de login
  - Fonte Lato Bold
  - Bordas arredondadas
- ✅ Rota de autenticação adicionada ao sistema de rotas

**Melhorias:**
- 🎨 Design da página de login alinhado ao tema do site
- 📱 Página de login totalmente responsiva
- ♿ Acessibilidade implementada (labels, aria-labels)

### Versão 1.2.0 (Janeiro 2025)

**Otimizações de Performance:**
- ✅ Code splitting implementado com React.lazy para todas as páginas
- ✅ Event listeners de scroll otimizados com requestAnimationFrame
- ✅ Lazy loading implementado em todas as imagens não-críticas
- ✅ useMemo aplicado em arrays estáticos (executivos, governantes, faqs, etc.)
- ✅ Manual chunks configurados para melhor cache de vendors
- ✅ Preload de recursos críticos (banner, logo, hero) no index.html
- ✅ Otimização de imagens críticas com fetchPriority="high"

**Melhorias:**
- ✅ Scroll mais suave e responsivo em todas as páginas
- ✅ Tempo de carregamento inicial reduzido
- ✅ Melhor uso de memória e performance geral

### Versão 1.1.0 (Dezembro 2024)

**Adições:**
- ✅ Sistema de navegação com dropdowns hover
- ✅ Páginas individuais para cada subseção
- ✅ Logo e favicon atualizados
- ✅ Imagem de fundo do Hero substituída
- ✅ Fontes personalizadas (Lato, Cinzel Decorative, Merriweather)
- ✅ Header com transparência ao rolar
- ✅ Scroll vertical customizado na página "O que é"
- ✅ Menu centralizado
- ✅ Botão INTRANET no lugar de "Portal do Membro"
- ✅ Google Maps integrado na seção de contato
- ✅ Sistema de rotas completo com React Router
- ✅ Componente Maconaria com sistema de tabs
- ✅ Seção de contato completa com formulário

**Melhorias:**
- ⚡ Performance otimizada
- 🎨 Design refinado
- 📱 Responsividade aprimorada
- ♿ Acessibilidade melhorada

**Correções:**
- 🐛 Menu mobile com prevenção de scroll
- 🐛 Dropdowns com animações suaves
- 🐛 Links ativos destacados corretamente

---

**Última atualização**: Janeiro 2025  
**Versão**: 1.3.0  
**Mantenedor**: Grande Loja Maçônica do Amazonas (GLOMAM)
