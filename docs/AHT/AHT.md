# AHT — Análise Hierárquica de Tarefas

> Projeto Front-End · IBMEC · 2026.2 · Grupo 3 — sexta-feira
> Histórico: revisão de 29/10/2026 (duas marcas). **Adendo da terceira área em 09/11/2026**.

## 1. Objetivo principal e alcance

**0. Utilizar o portal PKZ / One to One para conhecer as marcas, entrar em contato e experimentar os recursos de acesso, painel e agendamento.**

A análise descreve o que o usuário faz na versão entregue. A hierarquia decompõe o objetivo em tarefas; os planos indicam ordem, alternativas e repetição. O fluxograma é uma síntese dos planos, não um substituto da hierarquia.

Foram preservadas as tarefas principais 1–7 da organização anterior, com conteúdo atualizado. A tarefa 8 foi acrescentada para o agendamento local, que já está implementado e também pode ser utilizado sem login. Não existe tarefa de criar cadastro.

## 2. Hierarquia de tarefas e planos

### 1. Conhecer o grupo

- **1.1** Abrir a página inicial.
- **1.2** Ler a apresentação e observar o banner.
- **1.3** Identificar que PKZ e One to One pertencem ao mesmo grupo.
- **1.4** Consultar as descrições dos dois caminhos de treinamento.

**Plano 1:** executar 1.1 → 1.2 → 1.3 → 1.4. Se já conhecer o grupo, avançar para a escolha de marca ou utilizar um atalho disponível.

### 2. Escolher uma marca

- **2.1** Localizar as opções PKZ e One to One.
- **2.2** Comparar suas propostas e públicos.
- **2.3** Selecionar a marca desejada.

**Plano 2:** executar 2.1 → 2.2 → 2.3. A escolha da PKZ leva à tarefa 3; a escolha da One to One leva à tarefa 4. A comparação não estabelece limite obrigatório de idade ou elegibilidade.

### 3. Conhecer a PKZ

- **3.1** Abrir a página da PKZ.
- **3.2** Ler a apresentação e o método de avaliação, planejamento e reavaliação.
- **3.3** Consultar as descrições dos serviços e do acompanhamento.
- **3.4** Visualizar galeria e funções da equipe ilustrativa.
- **3.5** Abrir as perguntas frequentes de interesse.
- **3.6** Escolher contato, Agendar, Área do Atleta, Início ou One to One.

**Plano 3:** executar 3.1 → 3.2. Realizar 3.3, 3.4 e 3.5 conforme a dúvida do visitante, em ordem livre. Em 3.6, seguir para 5, 8, 6, 1 ou 4, respectivamente. O usuário também pode encerrar a consulta sem realizar outra ação.

### 4. Conhecer a One to One

- **4.1** Abrir a página da One to One.
- **4.2** Ler a apresentação e o método de acompanhamento.
- **4.3** Consultar serviços de treinamento individualizado.
- **4.4** Visualizar galeria e funções da equipe ilustrativa.
- **4.5** Abrir as perguntas frequentes de interesse.
- **4.6** Escolher contato, Agendar, Área do Atleta, Início ou PKZ.

**Plano 4:** executar 4.1 → 4.2. Realizar 4.3, 4.4 e 4.5 conforme o interesse. Em 4.6, seguir para 5, 8, 6, 1 ou 3, respectivamente. O usuário pode encerrar a consulta a qualquer momento.

### 5. Entrar em contato com a equipe

- **5.1** Selecionar o botão de WhatsApp da marca pretendida.
- **5.2** Conferir o destino aberto no serviço externo.
- **5.3** Iniciar a conversa para tirar dúvidas ou combinar um atendimento real.
- **5.4** Retornar ao portal ou encerrar a consulta.

**Plano 5:** executar 5.1 → 5.2. Realizar 5.3 se desejar enviar mensagem pelo WhatsApp. Em 5.4, retornar à navegação ou encerrar. O portal abre um link; não envia automaticamente mensagens nem confirma atendimento.

### 6. Acessar a Área do Atleta

- **6.1** Selecionar Área do Atleta na marca desejada.
- **6.2** Informar e-mail e senha ou usar “Preencher acesso de demonstração”.
- **6.3** Acionar Entrar.
- **6.4** Conferir o resultado apresentado.
- **6.5** Acessar o painel se o acesso local for aceito.
- **6.6** Ler a mensagem de erro se a entrada falhar.
- **6.7** Consultar “Esqueci minha senha”, se necessário, e fechar a orientação.
- **6.8** Corrigir os dados e tentar novamente ou abandonar a tentativa.

**Plano 6:** executar 6.1 → 6.2 → 6.3 → 6.4. Se aceito, executar 6.5 e seguir para 7. Se não aceito, executar 6.6; consultar 6.7 opcionalmente; em 6.8, retornar a 6.2 ou encerrar a tentativa. A orientação 6.7 também pode ser consultada antes da primeira tentativa. Não existe criação de conta nem recuperação por e-mail.

### 7. Consultar e usar o painel

- **7.1** Conferir nome, marca e avisos da demonstração.
- **7.2** Consultar próximos agendamentos locais.
- **7.3** Visualizar indicadores, frequência semanal e observações de exemplo.
- **7.4** Consultar o histórico e abrir um relatório fictício.
- **7.5** Imprimir ou salvar o relatório em PDF pelas opções do navegador, se desejar.
- **7.6** Usar Agendar aula ou Gerenciar para abrir a agenda da marca.
- **7.7** Alterar nome ou marca nas configurações e salvar.
- **7.8** Sair da sessão ou voltar ao site.

**Plano 7:** com sessão válida, executar 7.1. Realizar 7.2, 7.3, 7.4, 7.6 e 7.7 em ordem livre, conforme a necessidade. A tarefa 7.5 depende de 7.4. A tarefa 7.6 leva a 8; ao voltar, conferir novamente 7.2. Em 7.7, corrigir o nome se aparecer erro e confirmar a nova marca ao salvar. Ao finalizar, usar Sair em 7.8 para encerrar a sessão; “Voltar ao site” apenas muda a página e não encerra a sessão.

### 8. Consultar e gerenciar a agenda local

- **8.1** Abrir Agendar e conferir a marca e o aviso de demonstração.
- **8.2** Consultar a semana atual ou avançar até as três semanas seguintes.
- **8.3** Identificar e selecionar um horário futuro livre.
- **8.4** Informar ou conferir nome, e-mail e telefone no formulário.
- **8.5** Confirmar a reserva e conferir a mensagem apresentada.
- **8.6** Corrigir dados ou escolher outro horário quando houver erro.
- **8.7** Consultar as reservas locais listadas.
- **8.8** Solicitar cancelamento de uma reserva futura e confirmar ou manter.
- **8.9** Opcionalmente, visualizar os dados de teste ou limpar as reservas da marca, mediante confirmação.
- **8.10** Retornar à marca, acessar a área do aluno ou encerrar a consulta.

**Plano 8:** executar 8.1 → 8.2. Para reservar, executar 8.3 → 8.4 → 8.5. Se houver erro de dados, usar 8.6 e retornar a 8.4; se o horário não estiver mais disponível, retornar a 8.3. Ao salvar com sucesso, executar 8.7. Para apenas consultar, ir de 8.2 diretamente a 8.7. Realizar 8.8 ou 8.9 somente se desejado. Cancelar libera o horário; manter preserva a reserva. Se não for possível acessar o armazenamento, ler o aviso e não considerar a reserva confirmada. Finalizar em 8.10; o acesso ao painel depende de sessão válida e pode exigir a tarefa 6.

## 3. Plano geral — Plano 0

1. No percurso a partir do hub, executar 1 → 2 e escolher 3 ou 4.
2. Após conhecer a marca, escolher 5, 6 ou 8, voltar ao início, visitar a outra marca ou encerrar.
3. O visitante pode agendar localmente pela tarefa 8 sem realizar 6.
4. Se escolher 6 e a entrada for aceita, seguir para 7. Se falhar, repetir ou abandonar conforme o Plano 6.
5. A partir de 7, a tarefa 8 pode ser utilizada para reservar ou gerenciar horários; depois é possível voltar ao painel.
6. Repetir consultas conforme o objetivo e usar Sair ao terminar a sessão do painel.

**Entradas alternativas:** as páginas também podem ser abertas diretamente por URL. O hub oferece contatos e “Já sou aluno”. Esses atalhos permitem iniciar em 3, 4, 5, 6 ou 8 sem obrigar a passagem por 1 e 2. O acesso direto a 7 sem sessão redireciona para o login. No acesso sem parâmetro de marca, o código utiliza PKZ como padrão.

## 4. Representações visuais — escopo histórico anterior à Fisioterapia

### Fluxograma dos planos

![Fluxograma da AHT: conhecer grupo, escolher marca e seguir para contato, agenda local ou acesso ao painel, com retorno após erro de login.](aht.png)

O diagrama mostra o percurso principal em nível intermediário. As opções de consulta, cancelamento, perfil e impressão estão detalhadas nos planos, evitando transformar cada subtarefa em uma caixa. O código editável está em [aht.puml](aht.puml).

### Visão hierárquica

![Hierarquia da AHT: objetivo zero decomposto em oito tarefas principais e suas atividades resumidas.](aht-hierarquia.png)

As relações entre objetivo e tarefas não obrigam uma sequência; a sequência é definida pelos planos acima.

## 5. Condições e limites

- A autenticação é demonstrativa; não há permissões reais por usuário.
- A agenda não envia reservas, e sua listagem geral não é privada por e-mail.
- Somente o painel filtra reservas futuras por marca e e-mail da sessão.
- Gráficos e relatórios são fictícios; não há cadastro de avaliações pela equipe.
- Não existe formulário de contato separado: o formulário implementado é o de reserva local.
- Os resultados esperados de cada tarefa correspondem aos [requisitos funcionais](../Requisitos.md).

## 6. Referências

- AHT anterior do repositório e fluxograma `aht.puml`, revistos conforme o código final.
- [HSE — Understanding the task](https://www.hse.gov.uk/humanfactors/assets/docs/understanding-the-task.pdf): referência para decomposição hierárquica e planos de execução.

## Adendo — Novo ramo de tarefas Fisioterapia (09/11/2026)

### 9. Conhecer a Fisioterapia

9.1. Na página inicial, localizar o cartão de Fisioterapia abaixo dos cartões PKZ e One to One.  
9.2. Acionar **Conheça Fisioterapia** para abrir a rota `/fisioterapia`.  
9.3. Ler a proposta geral, avaliação, orientação, acompanhamento e imagens ilustrativas.  
9.4. Consultar as dúvidas frequentes e localizar o contato do grupo.  
9.5. Retornar ao hub ou selecionar PKZ/One to One pelo menu compartilhado.

**Plano 9:** executar 9.1 → 9.2 → escolher as seções que respondam ao interesse (9.3 e/ou 9.4) → 9.5 se desejar mudar de área. A Fisioterapia não possui agendamento confirmado ou Área do Atleta específica.

**Alteração do Plano 0:** o passo 2 agora admite três caminhos (PKZ, One to One, Fisioterapia). A versão ilustrada da AHT anterior mantém o recorte de duas marcas; o novo fluxograma textual está em [navegacao-react.mmd](navegacao-react.mmd).
