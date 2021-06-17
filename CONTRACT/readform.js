$(document).ready(function () {

	//console.log('jquery ready...');
	//console.log('reading ....');
	var strFromRule = window.location.href;
	var parameters = strFromRule.split('?')[1];
	var paramSeparator = '~';
	//alert(strFromRule);
	var nota1 = '';
	var nota2 = '';
	var nota3 = '';

	//var ecadpro=1;
	var destinazioneNote = '';
	var DAUTarget = '';
	//console.log(parameters);

	if (parameters !== undefined) {

		//window.alert(parameters.toString());
		parametersValue1 = parameters.replace(/@126/g, ",");
		parametersValue2 = parametersValue1.replace(/@48/g, ";");
		parametersValue3 = parametersValue2.replace(/%20/g, " ");
		parametersValue4 = parametersValue3.replace(/@35/g, "\n");
		parametersValue5 = parametersValue4.replace(/@98/g, "'");
		parametersValue6 = parametersValue5.replace(/%E2%80%93/g, "–");
		parametersValue7 = parametersValue6.replace(/%E2%80%99/g, "’");
		parametersValue8 = parametersValue7.replace(/%C3%A0/g, "à");
		parametersValue9 = parametersValue8.replace(/%E2%80%A2/g, "•");
		parametersValue10 = parametersValue9.replace(/%E2%80%9C/g, "“");
		parametersValue11 = parametersValue10.replace(/%E2%80%9D/g, "”");
		parametersValue12 = parametersValue11.replace(/%C3%A8/g, "è");

		nota1 = parametersValue12.split(paramSeparator)[0] || '';
		nota2 = parametersValue12.split(paramSeparator)[1] || '';
		nota3 = parametersValue12.split(paramSeparator)[2] || '';

	}

	$('#nota1').val(nota1);
	$('#nota2').val(nota2);
	$('#nota3').val(nota3);


	$('#zero').click(function (event) {

		//console.log('reset');
		$('#nota1').val('');
		$('#nota2').val('');
		$('#nota3').val('');

	});


	$('#invia').click(function (event) {

		//console.log('invia');
		nota1 = $('#nota1').val();
		nota2 = $('#nota2').val();
		nota3 = $('#nota3').val();

		DAUTarget = 'DAUCONFERMA:' + nota1 + paramSeparator + nota2 + paramSeparator
			+ nota3;


		//alert(DAUTarget);
		//window.location.href(DAUTarget);
		try {
			if (window.external && window.external.Comunica) {
				window.external.Comunica(DAUTarget); //use chromium
			} else {
				window.location.href = DAUTarget;  //use Explorer
			}
		} catch (err) {
			window.location.href = DAUTarget;
		}
	});
});

var charMutation = function () {
	for (let i = 0; i < 3; i++) {
		var iDFilter = document.getElementsByClassName("nota")[i].id;
		var notaValue = document.getElementById(iDFilter).value;
		var newNotaValue1 = notaValue.replace(/,/g, "@126");
		var newNotaValue2 = newNotaValue1.replace(/;/g, "@48");
		var newNotaValue3 = newNotaValue2.replace(/\n/g, "@35");
		var newNotaValue4 = newNotaValue3.replace(/'/g, "@98");
		document.getElementById(iDFilter).value = newNotaValue4;
	}
}
