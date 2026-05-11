Sistema em JavaScript para cadastrar vinhos e controlar seu estoque , desenvolvido para a Vinharia Agnello.
Este é um projeto interativo que permite cadastrar vinhos , classidficar automaticamente pela safra , verificar o nível de estoque e gerar um resumo final com estatísticas importantes.
Utilizamos HTML e CSS para estilizar a interface do usuário

-**Funcionalidades**-

- **Cadastro de vinhos** com nome, tipo, safra e quantidade em estoque

- **Classificação automática** por safra:
  - **Vinho Jovem** => safra ≥ 2020
  - **Vinho Amadurecido** → safra entre 2015 e 2019
  - **Vinho Antigo** => safra < 2015

- **Verificação de estoque**:
  - **Estoque baixo** => menos de 5 unidades
  - **Estoque OK** => 5 ou mais unidades

- **Estatísticas em tempo real**:
  - Total de vinhos cadastrados
  - Quantidade de vinhos com estoque baixo
  - Vinho mais antigo cadastrado

- Interface amigável utilizando `prompt` e `alert`
- Interface visual premium com tema vinícola (bordô e dourado)
- Vitrine de vinhos em grid responsivo

- **Paleta de cores premium**:
  - Bordô escuro: `--primary-dark: #2c0404`
  - Dourado metálico: `--accent-gold: #d4af37`

- **Recursos utilizados**:
  - Variáveis CSS (`:root`) para fácil manutenção
  - Layout **CSS Grid** responsivo com `auto-fit`
  - Efeitos de hover elegantes com `transform` e `box-shadow`
  - Transições suaves (`transition: all 0.3s ease`)
  - Design mobile-first (totalmente responsivo)
  - Tipografia clean e bem espaçada
  - Cards com glassmorphism sutil (`rgba` + bordas douradas)
O CSS está organizado em seções claras:
  - Configurações Gerais
  - Cabeçalho
  - Botão de interação
  - Grid de vinhos (vitrine)
  - Rodapé
  - Responsividade