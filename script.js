function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
}
else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    }
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero ='Homem'
        if (idade >=0 && idade <10){
            //Crianças
            img.setAttribute('src','foto-bebe-M.jpg')
        }
        else if (idade <24){
            //jovem
            img.setAttribute('src','foto-jovem-M.jpg')
        }
        else if(idade < 50){
            //Adulto
        img.setAttribute('src','foto-adulto-M.jpg')

        }
        else  {
            //Idoso
            img.setAttribute('src','foto-idoso-M.jpg')
        }
    }
    else if(fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade <10){
            //Crianças
            img.setAttribute('src','foto-bebe-F.jpg')
        }
        else if (idade <24){
            //jovem
            img.setAttribute('src','foto-jovem-F.jpg')
        }
        else if(idade < 50){
            //Adulto
            img.setAttribute('src','foto-adulta-F.jpg')

        }          

        else  {
            //Idoso
            img.setAttribute('src','foto-idosa-F.jpg')

        }


    }

    res.style.textAlign='center' 
    res.style.color='blue'
    res.style.fontFamily='cursive'
    res.style.fontSize='30px'
res.innerHTML= `Detectamos ${genero} com ${idade} anos! `
res.appendChild(img)
}

