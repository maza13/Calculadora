



var display = document.getElementById("display-text");

var isDot = false;
var sentencia_string = "";
var operations_type=["+","-","x","/"]
var isEnter = false;



//se llama cada que se pulsa un numero y lo agrega al display
function setNumber(number)
{
	if(display.textContent == "0"){
		display.textContent = "";
	}
	display.textContent += number;
}

function clickDot()
{
	if(!isDot)
	{
		if(isLastCharOperation(display.textContent))
		{
			display.textContent += "0";
		}
		display.textContent += ".";
		isDot = true;
	}
	

}

function isLastCharOperation(text)
{
	let lastChar = text.charAt(text.length-1);

	for(let i = 0; i < operations_type.length; i++)
	{
		if(lastChar == operations_type[i])
		{
			console.log("el ultimo caracter es el "+'"('+lastChar+')"');
			return true;
		}	
	}
	return false;
}

function isPenultimateCharOperation(text){
	let penChar = text.charAt(text.length-2);

	for(let i = 0; i < operations_type.length; i++)
	{
		if(penChar == operations_type[i])
		{
			console.log("el penultimo caracter es el "+'"('+penChar+')"');
			return true;
		}	
	}
	return false;
}


function setOperation(operationIn)
{

	let texto = display.textContent;
	let lastChar = texto.charAt(texto.length -1);
	let isOp = false;
	let isPenChar = false;

	console.log("el texto en pantalla es: " + texto);
	
	isOp = isLastCharOperation(texto);
	isPenChar = isPenultimateCharOperation(texto);
	console.log("pre if");

	
	if(texto!="0" && !isOp){
		//si la pantalla no esta en cero y el ultimo caracter no es operacion
		texto += operationIn;
	}else if(isPenChar){
		texto = texto.slice(0, texto.length-2);
		texto += operationIn;
	}
	else if(isOp){
		//si el ultimo carecter es una operacion
		if(operationIn == "-" && lastChar != "-" && lastChar != "+"){	
			texto += operationIn;
		}else{
			texto = texto.slice(0, texto.length-1);
			texto += operationIn;
		}
	}else if(texto == "0" && operationIn=="-"){
		//si la pantalla esta en cero pero se ingreso "-"(menos)
		texto = "-";
	}

	console.log("pos if");
	

	display.textContent = texto;
	isDot = false;
}


function setEnter()
{
	operacion = "null";
	num_1 = 0;
	num_2 = 0;

}


function getResultado()
{

	if(isDot==0){
		num_2 = parseInt(display.textContent);
	}
	else{
		num_2= parseFloat(display.textContent);
	}


	switch(operacion){
		case "+":
			display.textContent = (num_1 + num_2);
			break;
		case "-":
			display.textContent = (num_1 - num_2);
			break;
		case "x":
			display.textContent = (num_1 * num_2);
			break;
		case "/":
			display.textContent = (num_1 / num_2);
			break;
	}
	setEnter();
}

function clearLastChar()
{
	let text = display.textContent;
	console.log(text);
	display.textContent = text.slice(0, text.length-1);
	//display.textContent = "clearLastChar";
}

/*funciones*/
function resetDisplay()
{
	display.textContent = "0";
	operacion = "null";
	isDot = false;
	num   = 0;
	num_1 = 0;
	num_2 = 0; 
}
