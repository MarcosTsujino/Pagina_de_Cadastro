<h1>EasyDeco - Teste para Estágio em Desenvolvimento</h1>
    <h2>Descrição do Teste</h2>
    <p>Criar uma página básica de cadastro de usuário com Nome completo, Email e Senha.</p>
    <p>Sobre os requisitos do front, o que é esperado:</p>
    <ul>
			<li>Validação de campos obrigatórios, via Javascript. (todos os campos são obrigatórios)</li>
      	<ol>
        	<li>Mínimo de 8 caracteres</li>
          <li>Máximo de 14 caracteres</li>
          <li>Obrigatório pelo menos um caracter maíusculo, um minúsculo, um número e um caracter especial</li>
          <li>Não é permitido repetir a mesma sequencia de caracteres</li>
      	</ol>
        <li>Mensagem de sucesso, caso todos os campos sejam preenchido e a validação da senha seja um sucesso.</li>
        </ul>
        <h2>Minha Página de Cadastro</h2>
        <h3>Tecnologias utilizadas no desenvolvimento:</h3>
        <p>
            <li>HTML5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>VS Code (Editor de texto utilizado)</li>
        </p>
        <h3>Criação da página</h3>
        <p>A ideia é criar uma página de cadastro de arquitetas que com todos os campos preenchidos corretamente ele mostre uma mensagem de cadastro realizado com sucesso.</p>
        <p>Para o preenchimento do registro será necessário o nome completo, telefone, email e senha.</p>
        <p>Para a validação da senha é necessário que tenha no minimo 8 caracteres e máximo de 14. Com a retrição de não poder ser número sequencial, indefinida, vazia ou nula definida no javaScript</p>
        <p>Criei uma outra página também para que possa ser consultadas as arquitetas cadastradas aplicando filtros para encontrar alguém em específico.</p>
        <br>
        <p>No CSS foi feito a parte do estilo da página dando uma vida para a página.</p>
        <p>Foi feito também um design resposivo através do media queries para que o layout se adapte a vários tamanhos de tela.</p>
        <br>
        <p>No javaScript criei uma classe com o nome class Cadastrada que terá os atributos nome, telefone, email e senha definidos no constructor.</p>
        <p>Antes do processo de gravação será feito um teste recuperando o objeto cadastrada e executar o método validarDados e se esse método retornar true para válido pode colocar o resultado dentro de uma condicional e mostrar um dialog de sucesso. Se os dados forem inválidos a função retornará false e mostrará um dialog de erro.</p>
        <p>A lógica da validação dos dados será feita dentro do método validarDados do objeto Cadastrada. Será verificado se o atributo é undefined ou vazio ou nulo. Se for qualquer um desses será falso.</p>
        <p>Os dados ficarão armazenados em um localStorage.</p>
