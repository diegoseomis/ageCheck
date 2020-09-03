function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(formAno.value.length == 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'imagemMenino.png')
            }else if (idade < 24){
                //Jovem
                img.setAttribute('src', 'imagemHomem.png')
            }else if (idade <55){
                //Adulto
                img.setAttribute('src', 'imagemAdulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'imagemIdoso.png')
            }
        }else if (formSex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 12){
                //Criança
                img.setAttribute('src', 'imagemMenina.png')
            } else if (idade < 24){
                //Jovem
                img.setAttribute('src', 'imagemMulher.png')
            }else if (idade < 55){
                //Adulta
                img.setAttribute('src', 'imagemAdulta.png')
            }else{
                //Idosa
                img.setAttribute('src', 'imagemIdosa.png')
            }
        }
        else{ 
            genero = 'Outros'
            img.setAttribute('src', 'imagemRobo.png')
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa identificada como ${genero} com ${idade} anos`    
        
        res.appendChild(img)
    }

}