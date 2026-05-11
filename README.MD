# Vinheria Agnello - Checkpoint 02

Sistema em JavaScript para cadastrar vinhos e controlar seu estoque, desenvolvido para a Vinharia Agnello.

Este é um projeto interativo que permite cadastrar vinhos, classificar automaticamente pela safra, verificar o nível de estoque e gerar um resumo final com estatísticas importantes.

Utilizamos HTML, CSS e JavaScript para estilizar a interface e criar a lógica do sistema.

---

## GitHub Pages

Acesse o projeto publicado:

https://nicolasprestelo.github.io/vinheria-agnello-checkpoint02/

---

## Integrantes do Grupo

- Nicolas Prestelo
- Nome Integrante 2
- Nome Integrante 3
- Nome Integrante 4
- Nome Integrante 5

---

## Funcionalidades

- Cadastro de vinhos com nome, tipo, safra e quantidade em estoque

- Classificação automática por safra:
  - Vinho Jovem → safra ≥ 2020
  - Vinho Amadurecido → safra entre 2015 e 2019
  - Vinho Antigo → safra < 2015

- Verificação de estoque:
  - Estoque baixo → menos de 5 unidades
  - Estoque OK → 5 ou mais unidades

- Estatísticas em tempo real:
  - Total de vinhos cadastrados
  - Quantidade de vinhos com estoque baixo
  - Vinho mais antigo cadastrado

- Interface amigável utilizando `prompt()` e `alert()`
- Interface visual premium com tema vinícola
- Vitrine de vinhos em grid responsivo

---

## Design e Estilização

### Paleta de cores

- Bordô escuro:
```css
--primary-dark: #2c0404;
