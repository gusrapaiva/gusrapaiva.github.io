let faq = document.getElementsByClassName('faq')

let questions = [
    "O que é o Mind-Pass?",
    "Que linguagens e sistemas vocês vão usar?",
    "Quando o aplicativo será lançado?",
    "Qual a base para o cálculo da saúde mental?",
    "O aplicativo será gratuito?",
    "As minhas informações e dados estarão seguros com vocês?",
    "Posso acessar minha conta pelo navegador web?",
]
let answers = [
    `Inspirado pela série de anime "PsychoPass" é um aplicativo que avalia a saúde mental dos usuários e promove o autocuidado de diversas maneiras, oferecendo orientações e auxílio para a procura por ajuda profissional, quando necessário.`,
    "Para o desenvolvimento do aplicativo, estamos utilizando uma estrutura bem popular de aplicativo móvel baseada na linguagem Javascript chamada React Native. Além disso, melhoraremos a aparência e as funcionalidades do aplicativo com alguns frameworks. Quanto ao armazenamento, consulta e tratamento de dados, usaremos o Firebase.",
    "Pretendemos lançar uma versão final para apresentação do trabalho de conclusão de curso até junho de 2024. Se o projeto for bem recebido no Brasil, gostaríamos de melhorá-lo e também localizá-lo para outras línguas para alcançar um maior público e promover o autocuidado e a procura por profissionais da saúde em vários países.",
    "Estaremos constantemente atualizando os cálculos do aplicativo com base no DSM-5, o Manual Diagnóstico e Estatístico de Transtornos Mentais, e contamos com diversos consultores especializados em psicologia para garantir que nossas análises sejam precisas e confiáveis.",
    "As versões iniciais do aplicativo serão gratuitas enquanto estamos desenvolvendo-o como parte de nosso projeto de conclusão de curso na ETEC de Guarulhos. Em breve, você poderá se inscrever para acessar as primeiras versões e testar suas funcionalidades.",
    "Sim, a segurança de seus dados é uma prioridade. Implementaremos medidas rigorosas de segurança e continuaremos a aprimorar a segurança do aplicativo durante todo o processo de desenvolvimento.",
    "Por enquanto, o acesso será apenas pelo aplicativo móvel. No entanto, se o aplicativo for bem-sucedido, consideraremos a possibilidade de criar uma versão web para os usuários terem mais um canal para o autocuidado com a saúde mental.",
]

for(i = 0; i < questions.length; i++)
{
    faq[0].innerHTML += `
        <div class="sanfona">
        <div class="accordeon">
            <button class="btn"><span>${questions[i]}</span></button>
            <div class="panel">
                <p>
                    ${answers[i]}
                </p>
            </div>
        </div>
        </div>
    `
}