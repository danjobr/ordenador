Daniel Johnstone

## Ordenador de listas para bibliotecas

---

*JavaScript ES6*

*Testado em NodeJS v.10.15.3*

*Linha de comando:* node ordenador_config.js

*Arquivos:* ordenador_config.js *e* ordenador_node.js

---

### 1) Formato de recepção dos dados

A função **ordenador()**, ao ser chamada, necessita de dois argumentos: o primeiro é o conjunto de dados a ser ordenado em uma array de objetos JSON; o segundo é o config, ou seja, a forma de ordenar o conjunto de dados através de uma array com subarrays de dois indíces, onde o primeiro é o nome do campo a ser ordenado, e o segundo é criterio *asc* para ascendente ou *des* para descendente.

- *Exemplo do argumento 1*:

        let dados = [

        {id: 1, titulo: 'Java How To Program', autor: 'Deitel & Deitel', edicao: '2007'}, 
        {id: 2, titulo: 'Patterns of Enterprise Application Architecture', autor: 'Martin Fowler', edicao: '2002'}, 
        {id: 3, titulo: 'Head First Design Patterns', autor: 'Elisabeth Freeman', edicao: '2004'}, 
        {id: 4, titulo: 'Internet & World Wide Web: How to Program', autor: 'Deitel & Deitel', edicao: '2007'}

        ];

- *Exemplo do argumento 2*:


           let config = [

           ['edicao', 'des'],
           ['autor', 'des'], 
           ['titulo', 'asc']

           ];


### 2) Chamada da função

No arquivo ordenador_config.js deve ser inserido o módulo ordenador através do código:

        const ordenador = require('./ordenador_node.js');

- *Exemplo de chamada da função:*

        ordenador(dados, config);

### 3) Explicação da função

1. A função inicialmente copia os dados para uma nova array para que eles não sejam alterados em sua origem. A escolha por transformar em String e depois em JSON novamente ao invés de usar a sintaxe [...dados] foi feita para prevenir problemas caso os dados venham endereçados de uma subarray externa. 

        let novaArr = JSON.parse(JSON.stringify(dados));

2. No segundo passo é checado se a função contém valor vazio, null ou undefined. Se algum destes casos for verdadeiro a função retorna os dados solicitados nos requisitos de projeto. 

        if (config === null || config === undefined) return 'OrderingException';
        if (config === "" || config === []) return [];

3. Após isto, usa-se a função protoype.sort() para organizar a nova array através dos parâmetros estabelecidos pelo segundo argumento da função ordenador(). Uma estrutura de repetição itera sobre os dados a partir dos parâmetros estabelecidos no argumento de ordenação (segundo argumento da função).

        novaArr.sort((a, b) => {
            for (let i = 0; i < config.length; i++) {
                if (config[i][1] === 'asc') {
                    if (a[config[i][0]] > b[config[i][0]]) return 1;
                    if (a[config[i][0]] < b[config[i][0]]) return -1;
                }
                if (config[i][1] === 'des') {
                    if (a[config[i][0]] < b[config[i][0]]) return 1;
                    if (a[config[i][0]] > b[config[i][0]]) return -1;
                }
            }
            return 0;
        });

4. A função inicial retorna então a nova array com os valores ordenados.

        return novaArr;

- *Nota: como não foram solicitados dados com acento e nos requisitos é solicitado apresentar uma função de fácil legibilidade, estes casos não foram considerados. Caso seja necessário considerar palavras com acento para a ordenação, sugere-se localizar através de REGEX e usar a função 'localeCompare()'.*

### 4) Testes

Para testar a função com os diferentes exemplos dados nos requisitos, pode-se alterar a variável config localizada no arquivo ordenador_config.js. Cada um dos casos de teste solicitados nos requisitos estão inseridos nas variáveis caso + número (caso1, caso2, caso3, etc).

- *Exemplo:*

        let caso1 = [['titulo', 'asc']];
        let caso2 = [['autor', 'asc'], ['titulo', 'des']];
        let caso3 = [['edicao', 'des'], ['autor', 'des'], ['titulo', 'asc']];
        let caso4 = null;
        let caso5 = "";

        let config = caso2;