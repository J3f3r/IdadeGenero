function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//ano atual com 4 digitos
    var formularioano = window.document.getElementById('txtano')// se fosse com selector como abixo teria que colocar id no <p id""> ficaria (div#textano)
    var res = document.querySelector('div#res')// poderia com acima mas essa maneira é mais atual 
    if(formularioano.value == 0 || Number(formularioano.value) > ano){
        window.alert('[EERO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')// variável local formulário de sexo recebe o pegar elementos pelo nome, dessa vez não dá pra ser por id
        var idade = ano - Number(formularioano.value)// ano atual menos o ano de nascimento digitado no formulário
        var gênero = ''
        var img = document.createElement('img')//criar imagem dinâmicamente pelo JS
        img.setAttribute('id', 'foto')// img com id = "foto" em css
        if(fsex[0].checked){// primeiro formulario marcado masculino será atribuido a variavel gênero que será interpolada
            gênero = 'Homen'
            if(idade >= 0 && idade< 10){
                //criança
                img.setAttribute('src', 'bebêhomem.png')//para inserir a foto no site conforme a logica do if
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomen.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homenadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'velhohomen.png')
            }
        }else if(fsex[1].checked){// segundo formulário
            gênero = 'Mulher'
            if(idade >= 0 && idade< 10){
                //criança
                img.setAttribute('src', 'bebêmulher.png')// src é o sorce e para acessar a imagem pelo seu nome na pasta
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'velhamulher.png')
            }
        }
        res.style.textAlign = 'center'// maneira dinêmica pelo JS de centralizar o texto sem precisar ir em css
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)//método para aparecer a imagem (parâmetro)no site
    }
}