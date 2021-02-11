


function main()
{
	var display = document.getElementById("display-text");
	var cero = document.getElementById("btn-0");
	var uno = document.getElementById("btn-1");
	var dos = document.getElementById("btn-2");
	var tres = document.getElementById("btn-3");
	var cuatro = document.getElementById("btn-4");
	var cinco = document.getElementById("btn-5");
	var seis = document.getElementById("btn-6");
	var siete = document.getElementById("btn-7");
	var ocho = document.getElementById("btn-8");
	var nueve = document.getElementById("btn-9");
	
	var punto = document.getElementById("btn-dot");
	var mas = document.getElementById("btn-plus");
	var menos = document.getElementById("btn-subs");
	var por = document.getElementById("btn-mul");
	var entre = document.getElementById("btn-div");
	var borrar = document.getElementById("btn-del");
	var resetbtn = document.getElementById("btn-c");
	var igual = document.getElementById("btn-enter");

	var isDot = false;
	var sentencia_string = "";
	var operations_type=["+","-","/","*"]
	var isOp = false;
	var isEnter = false;


	/*--eventos--*/

	// numeros
	cero.onclick = function(e){
		setNumber(0);
	}
	
	uno.onclick = function(e){
		setNumber(1); 
	}
	
	dos.onclick = function(e){
		setNumber(2);
	}

	tres.onclick = function(e){
		setNumber(3);
	}
	
	cuatro.onclick = function(e){
		setNumber(4);
	}
	
	cinco.onclick = function(e){
		setNumber(5);
	}

	seis.onclick = function(e){
		setNumber(6);
	}
	
	siete.onclick = function(e){
		setNumber(7);
	}
	
	ocho.onclick = function(e){
		setNumber(8);
	}

	nueve.onclick = function(e){
		setNumber(9);
	}





	//simbolos y operaciones
	punto.onclick = function(e)
	{
		clickDot();
	}

	resetbtn.onclick = function(e)
	{
		resetDisplay();
	}

	borrar.onclick = function(e)
	{
		clearLastChar();
	}

	mas.onclick = function(e)
	{
		setOperation("+");
	}
	
	menos.onclick = function(e)
	{
		setOperation("-");
	}
	
	por.onclick = function(e)
	{
		setOperation("*");
	}
	
	entre.onclick = function(e)
	{
		setOperation("/");
	}

	igual.onclick = function(e)
	{
		getResultado();
		isEnter = true;
	}

}






