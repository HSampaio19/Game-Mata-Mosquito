		var cont_pontos = -1
		var cont
		var vida = 3
		//var nome
		//inicio do cronometro
		function cronometro(){
			var i = 60
			var cronometro = document.getElementById('cronometro')
			var cont_cronometro = setInterval(function(){
				cronometro.innerHTML = i
				if (i == 0){
					clearInterval(cont_cronometro)
					window.location.href='vitoria.html'
				}
				cont = i
				i--},1000)
		}
		// final do cronometro


		// inicio funcao click + timmer da mosca 
		var timer
		function acao(){
			var nivel = window.location.search
			nivel = (nivel.replace('?' , ''))
			console.log(nivel)
			// funcao de parada nas funcoes startadas anteriormente
			reposicionar(0)
			redimensionar(0)	
			inverterImagem(0)
			clearInterval(timer)

			//primiera rodad de reposicionamento
			reposicionar()
			redimensionar()	
			inverterImagem()

			//inclusao da pontuacao no placar
			var pontos = document.getElementById('pontos')
			cont_pontos = cont_pontos + 1
			pontos.innerHTML = cont_pontos


			//funcao de click ou timer
			timer = setInterval(function(){
				if(cont == 0){
					clearInterval(timer)
					return
				}
				if(vida == 0){
					clearInterval(timer)
					window.location.href='gameover.html'
					return
				}
				reposicionar()
				redimensionar()	
				inverterImagem()
				vida--

				//alteracao do estilo dos coracoes em caso de erro
				switch(vida){
					case 3:
						break
					case 2:
						var coracao = document.getElementById('coracao3')
						coracao.style.visibility = 'hidden'
						break
					case 1:
						var coracao = document.getElementById('coracao2')
						coracao.style.visibility = 'hidden'
						break
					case 0:
						var coracao = document.getElementById('coracao1')
						coracao.style.visibility = 'hidden'
						break
				}
			},nivel)			

		}
		// inicio funcao click + timmer da mosca 


		//inicio das funcoes de posicao randomica da mosca

		function ocultarBotao(){
			var botao = document.getElementById('iniciar_jogo')
			botao.style.visibility = 'hidden'
		}
		/*function reposicionar(status){
			if (status == 0){
				return
			}
			var x = Math.random()*1000
			for (var y = Math.random()*1000; y > 680;){
				var y = Math.random()*1000
			}
			var mosca = (document.getElementById('mosca'))
			mosca.style.top = y + 'px'
			mosca.style.left = x + 'px'
		}*/
		function reposicionar(status){
			if (status == 0){
				return
			}
			var largura = (window.innerWidth) - 600
			var altura = (window.innerHeight) - 200
			document.getElementById('tela_jogo').style.width = largura
			document.getElementById('tela_jogo').style.height = altura
			console.log(largura , altura)
			altura = Math.random()*altura
			largura = Math.random()*largura



			var mosca = (document.getElementById('mosca'))
			mosca.style.top = altura + 'px'
			mosca.style.left = largura + 'px'
		}
		function redimensionar(status){
			if (status == 0){
				return
			}
			for (var x = Math.random()*10 ; x >= 11 || x <= 5;){
				var x = Math.random()*10
			}
			var largura = 620 / (x)
			var altura = 640 / (x)
			var mosca = (document.getElementById('mosca'))
			mosca.style.width = largura + 'px'
			mosca.style.height = altura  + 'px'

		}		
		function inverterImagem(status){
			if (status == 0){
				return
			}
			var lado = Math.floor(Math.random() * 2)
			switch(lado){
				case 0:
					var mosca = (document.getElementById('mosca'))
					mosca.style.transform = 'scaleX(-1)'
					break
				case 1:
					var mosca = (document.getElementById('mosca'))
					mosca.style.transform = 'scaleX(1)'
					break
			}
		}

		//fim das funcoes de posicao randomica da mosca

		function changeColor(id,color){
			var identificador = id
			var element = (document.getElementById(identificador))
			element.style.background = color
		}

		/*function corrigirTela(){
			var menuE = document.getElementById('menu_esquerdo')
			var menuD = document.getElementById('menu_direito')
			var telaJogo = document.getElementById('tela_jogo')
			menuD.style.height = window.innerHeight
			menuE.style.height = window.innerHeight
			telaJogo.style.height = window.innerHeight
			telaJogo.style.width = window.innerWidth

		}*/

