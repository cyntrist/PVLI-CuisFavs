function textoAlerta()
{
  return "¡¡¡CUI CUI CUI CUI CUI!!!";
}

function desaparece(nombre) 
{
	var button = document.getElementsByClassName(nombre);
  for (var i = 0; i < button.length; i++) {
    if (button.item(i).style.visibility == 'hidden') {
      button.item(i).style.visibility = 'visible';
    }
    else button.item(i).style.visibility = 'hidden';
  }
}

function colorea() {
  var elementos = document.getElementsByClassName('chula');
  for (var i = 0; i < elementos.length; i++) {
    elementos.item(i).style.color = 'turquoise ';
  }

  var elementos = document.getElementsByClassName('notchula');
  for (var i = 0; i < elementos.length; i++) {
    elementos.item(i).style.color = 'violet';
  }
}

function sonido(num) {
  var audioCui = new Audio('snd/cuicuicui.mp3');
  var audioShriek = new Audio('snd/shriek.mp3');
  var audioGn = new Audio('snd/gngngn.mp3');
  if (num == 1) {
    audioCui.play();
  } else if (num == 2) {
    audioShriek.play();
  } else if (num == 3) {
    audioGn.play();
  }
}

// es una chapuza, sí, pero no conseguía que funcionaran dos llamadas a la vez en el onclick()
function boton1() { 
  sonido(3);
  desaparece('chula');
}

function boton2() {
  sonido(2);
  desaparece('notchula');
}

function boton3() {
  sonido(1);
  colorea();
}