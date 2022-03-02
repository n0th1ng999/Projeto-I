# Projeto I
 Desenvolvimento de um tutorial moderno para a Web sobre um tema proposto pelos alunos.

A aplicação Web terá dois tipos de utilizadores:

     Professor: utilizador que terá permissões absolutas na app e que tratará,
    exclusivamente, da gestão do tutorial e dos seus utilizadores, bem como
    da configuração da gamificação;

     Aluno: utilizador regular que irá aceder à aplicação essencialmente para
    frequentar o tutorial. 

    Requisito                                   Aluno               Professor
    Gerir utilizadores                                                  X
    Gerir tutorial (vídeos, exercícios, etc.)                           X
    Configurar elementos de gamificação                                 X
    Autenticar/Registar                           X
    Editar perfil                                 X
    Interagir com vídeos                          X
    Resolver momentos de avaliação                X


                                            PROFESSOR

    - O professor tem como missão gerir o tutorial, os seus utilizadores e configurar
    os elementos de gamificação da aplicação. Seguem as principais funcionalidades:

        1) Gerir tutorial
        - O professor terá permissões para criar e alterar o tutorial. Só pode existir
        um tutorial na aplicação. Um tutorial é composto por um conjunto de
        - recursos expositivos (vídeos)
        - recursos de avaliação (exercícios)
        Um vídeo é composto por um nome e um URL com a sua localização. Os vídeos podem
        ter outras características tais como:
        - Nível associado (caso os vídeos estejam organizados em níveis)
        - Etiquetas (frame do vídeo) contendo a posição temporal e um descritivo.
        As etiquetas serão usadas pelo professor para fornecer detalhes extra e
        pelos alunos para navegarem mais rapidamente pelos conteúdos do vídeo.
        - Tags para caracterizar o vídeo no sistema de pesquisa
        Um exercício deve permitir avaliar o conhecimento de um aluno relativamente a
        um ou mais vídeos (ou nível). Podem ser de vários tipos (resposta direta,
        escolha múltipla, fill-the-blanks, correspondência, etc.). Independentemente do
        seu tipo, é sempre composto por perguntas e respostas. O desempenho do aluno
        em cada exercício deve ser contabilizado em pontos de experiência.

        2) Gerir utilizadores (alunos)
        - O professor poderá gerir os alunos, nomeadamente, bloquear ou remover.

        3) Configurar elementos de gamificação
        O professor terá permissões para configurar os elementos de gamificação a incluir na aplicação. Neste contexto é obrigatório a inclusão de 3 elementos de
        gamificação que podem sair da seguinte lista de elementos:
        - Tabelas de classificação;
        - Badges/medalhas;
        - Pontos de experiência;
        - (Des)Bloqueios de níveis
        - Avatars baseados na experiência do utilizador (XP);
        - Desafios;
        - Reforços positivos (comentários, gostos, etc.).


                                                        ALUNO


        1) Autenticar/Registar-se
        - O aluno é o principal utilizador da aplicação devendo, em primeiro lugar,
        registar-se na aplicação. O registo deve conter, pelo menos, os seguintes dados:
        nome, data de nascimento, sexo, localidade, e-mail.
        - Após registo, o utilizador fica automaticamente inserido no sistema, não
        sendo necessário qualquer confirmação por parte do professor. Contudo o professor poderá remover (ou bloquear) a qualquer momento um aluno que infrinja
        as regras de conduta da aplicação. O aluno pode fazer as seguintes ações:
        
        2) Editar perfil
        - O aluno poderá alterar os seus dados pessoais, como por exemplo, a password.

        3) Frequentar o tutorial (interagir com vídeos)
        - O aluno poderá interagir com os vídeos, nomeadamente:
        - navegar no vídeo com os controlos habituais (retomar/pausar, puxar para
        frente/trás, ir para o início/fim, etc.)
        - saltar para partes especificas do vídeo (suportadas por etiquetas)
        - comentar o vídeo ou as frames definidas pelas etiquetas
        - partilhar o vídeo
        - gostar do vídeo

        4) Resolver momentos de avaliação
        - O aluno poderá resolver os exercícios definidos pelo professor
        - A resolução de exercícios deve ser materializada em pontos de experiência
        - Os pontos de experiência deverão ter um propósito para além de servirem de
        base para a tabela de classificação, como por exemplo:
        - ser usados para mudar o avatar/nickname do utilizador dando assim permissões ao aluno para executar outras ações na app
        - desbloquear níveis
        - ser usado como moeda de troca para outras benesses na aplicação
        - Todas as ações devem ser persistidas localmente