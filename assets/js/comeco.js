$(document).ready(function(){
    var audio = document.createElement('audio');
    audio.setAttribute('src', 'assets/audios/01 - Timber Hearth.mp3')
    

    $("div.resto").hide();
    //Texto que vai aparecer
    const perguntas = ["Mais uma semana. Mais um dia.", 
                        "O clima tá agradável hoje, né?", 
                        "Tudo tem sido tão corrido ultimamente. Tudo tem passado tão rápido que as vezes é díficil manter a ordem cronológica das coisas, de perceber o mundo ao nosso redor.",
                        "Coisas pequenas especiais - ou estranhas - podem acabar passando desapercebida por esse turbilhão.",
                        "Um dia estranho é quando nada de estranho acontece nele.",
                        "Algumas vezes, só o que a gente precisa é de um tempo pra respirar mesmo.",
                        "Respira...",
                        "..."];


    //------- Temperatura
    //Faz a conversão de kelvin pra celsius
    function convertion(val){
            return (val - 273).toFixed(2)
    }



    //Não fui eu que fiz! - Fiz minhas modificações mas o código base é de: https://dev.to/shantanu_jana/how-to-make-a-weather-app-using-javascript-4lke
    //This is the api link from where all the information will be collected - Função que faz as coisas de api
    function tempo(){
        //Testando coisa do tempo
        apik = "3045dd712ffe6e702e3245525ac7fa38"
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+"Bragança Paulista, São Paulo"+'&appid='+apik)
        
        .then(res => res.json())
    
        //.then(data => console.log(data))
    
        .then(data => {
    
            //Coleta todos os dados
    
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            
            //Modifiquei pra usar para meus interesses - Função
            console.log(convertion(tempature))
            if(convertion(tempature) > 18 && convertion(tempature) < 26){
                console.log("Clima agradável")
                perguntas[1] += " A temperatura é de "+convertion(tempature)+" °C."
            } else if(convertion(tempature) <= 18){
                console.log("Friozinho")
                perguntas[1] = "Hoje tá um pouco mais frio que o normal. A temperatura é de "+convertion(tempature)+ " °C, melhor pegar uma blusa, né?"
            } else{
                console.log("Esse calor viu")
                perguntas[1] = "Hoje o dia tá quente. A temperatura é de "+convertion(tempature)+" °C. Não esqueça de beber água!"
            }
    
            if(descrip.indexOf(chuva) != -1){
                console.log("Tá chovendo")
                perguntas[1] += " E tá chovendo um pouco também."
            }
            console.log(descrip)

    
        })
    }

    tempo();


    //----------- Texto

    //Pegar o elemento de texto
    const textEl = $("div.text p.text");

    //Index de passagem
    var index = 0;

    var chuva = "rain";
    
    //Pegar o botão que vai clicar pra passar o texto
    const next = $("button.prompt");

    next.on("click", function(){
        if(index == 0){
            audio.play();
            audio.volume = 0.5;
        }     
        textEl.fadeOut("slow", function(){
            passarTexto()
        });
        

    });

    function passarTexto(){
        
        textEl.text(perguntas[index]).fadeIn("slow", function(){
        });


        if (index < perguntas.length - 1) { 
            index++
        } 
        else if(index == perguntas.length - 1 ){
            $("div.text").fadeOut(1500, function(){
                $(this).remove()
                
            })
            $("div.resto").fadeIn(1500);
        };
    }

    //
    function superNova(){


        $("div").fadeOut("slow", function(){
            remove()
        });


        //Criando o que vai precisar
        var aviso = document.createElement("div")
        const avisoText = document.createTextNode('A supernova atingiu seu planeta =(');

        //Adicionando o texto na div
        aviso.appendChild(avisoText)

        //Adicionando a classe na div
        aviso.classList.add("supernova")

        //Adicionando tudo isso no body
        document.body.appendChild(aviso)
        
    }
    
    setTimeout(function(){
        superNova()
    }, 1320000 )

})

