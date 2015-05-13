# MBMeteolacrosse
MbMeteo con lacrosse ws1640, cattura i dati e salva su MongoDB

## Descrizione

Applicazione in nodejs che via chiamata rest importa i dati inviata dalla app sul raspberry che monitora lo stato dei sensori della LaCrosse WS1640 e invia su una collection di mongoDB.
Le configurazione della app si trovano sotto a /app/conf.js 


## App di capture data dal raspberry

[https://github.com/marcoberri/mbmeteolacrossecaputre](https://github.com/marcoberri/mbmeteolacrossecaputre)

## Path rest
	path:/data/addData
	method:POST 
	params:data=1431289441:22.30:51:22.70:42:i:i:i:i:i:i:i:i:1016.2:i:5:0:5:0.0:0.0:21.3:6 

## Sviluppo

	sudo npm install forever --global
	sudo forever -w server.js
	npm test per eseguire i test della app

## TODO
Interfaccia di visualizzazione dati storici.



