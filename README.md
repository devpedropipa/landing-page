# Landing Page

É uma página que divulga o lançamento de uma nova linha de modelo de celular da empresa fictícia NovaQ chamado NovaQ Q10. O evento será mostrado ao vivo no Youtube.

A página contém uma descrição sobre o dispositivo, uma contagem regressiva até a data de lançamento e uma caixa de e-mail para o usuário receber novas novidades do evento.

O objetivo do projeto foi para pôr em prática os meus estudos e conhecimentos sobre o básico de UI/UX design.

### Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## O que aprendi nesse projeto?

Nesse projeto, eu aprendi:
- Princípios básicos de UI/UX e organização visual;
- Criação de layouts utilizando CSS Grid e Flexbox;
- Manipulação de datas e horários utilizando o objeto `Date` do JavaScript;
- Desenvolvimento de uma contagem regressiva utilizando JavaScript.

## 🖥️ Como rodar o projeto na sua máquina

### Pré-requisitos

- Tenha uma IDE instalada.
  - Recomendo **VS Code** por ser leve e simples.

#### Passo a passo

1. No repositório do projeto, clique em **Code**.
2. Clique em **Download ZIP**. Faça o download no seu desktop.
3. Após o download, extraia o arquivo ZIP.
4. Clique com botão direito na pasta extraída.
5. Clique em **Abrir com o Code**.
6. Clique em **Extensões**.
7. Procure por essa extensão:

![](readme/live-server.png)

Em seguida, clique em **Instalar**.

> Explicação: Essa extensão executará o projeto no seu navegador localmente.

8. Após a instalação, feche a página da **Extensão**.
9. Clique em **Explorador** para voltar.
10. No canto inferior direito, clique em **Go Live**. O projeto abrirá automaticamente no seu navegador.

Para interromper o servidor, clique em `Port: ...` (no mesmo lugar onde você clicou para rodar o projeto).

### Em outros dispositivos

Para acessar em outros dispositivos, é preciso que eles estejam conectados à **mesma rede local** que está sendo usado pela máquina.

1. Com o projeto rodando, observe o número da porta na URL. Por exemplo:

```
http://127.0.0.1:5500/
```

Nesse exemplo, a porta é `5500`.

`127.0.0.1` é o **endereço do localhost** e só pode ser acessado pela própria máquina.

2. Abra o terminal no seu computador e digite:

```
ipconfig
```

Procure por algo como:

```
Endereço IPv4 . . . . . . . . . . : IP_do_endereço
```

O `IP_do_endereço` é o endereço local do seu computador na rede, você irá usá-lo para acessar o projeto em outro dispositivo.

3. No outro dispositivo, abra o navegador, digite o IP local junto com a porta na barra de endereço e acesse o projeto.

```
SEU_IP_LOCAL:n°_porta
```
