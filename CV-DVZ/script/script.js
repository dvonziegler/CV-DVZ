/*
<p id="ParrafoProfesionCastellano">Ingeniero</p>
<P id="ParrafoProfesionIngles">Engineer</P>
<button id="BotonEspañol" class="ClaseBotom">Español</button>
<button id="BotonEnglish" class="ClaseBotom">English</button>

<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>

}
document.getElementById("BotonEspañol").onclick = function () {
    document.getElementsById("SeccionL2I").style.display='none'}
document.getElementById("ParrafoProfesion").innerHTML ="Ingeniero"
document.getElementsById("ParrafoProfesion").style.display='none'

document.getElementById("BotonEspañol").onclick = function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Ingeniero"  
}

document.getElementById("BotonEnglish").onclick = function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Engineer"
}

*/

document.getElementById("BotonEspañol").addEventListener('click', function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Ingeniero",
    document.getElementById("SeccionL2I").style.display = 'none',
    document.getElementById("SeccionR2I").style.display = 'none',
    document.getElementById("SeccionL3I").style.display = 'none',
    document.getElementById("SeccionR3I").style.display = 'none',
    document.getElementById("SeccionL4I").style.display = 'none',
    document.getElementById("SeccionR4I").style.display = 'none',
    document.getElementById("SeccionL2E").style.display = 'block',
    document.getElementById("SeccionR2E").style.display = 'block',
    document.getElementById("SeccionL3E").style.display = 'block',
    document.getElementById("SeccionR3E").style.display = 'block',
    document.getElementById("SeccionL4E").style.display = 'block',
    document.getElementById("SeccionR4E").style.display = 'block'
}
   )

document.getElementById("BotonEnglish").addEventListener('click', function () {
    document.getElementById("ParrafoProfesion").innerHTML ="Engineer",
    document.getElementById("SeccionL2E").style.display = 'none',
    document.getElementById("SeccionR2E").style.display = 'none',
    document.getElementById("SeccionL3E").style.display = 'none',
    document.getElementById("SeccionR3E").style.display = 'none',
    document.getElementById("SeccionL4E").style.display = 'none',
    document.getElementById("SeccionR4E").style.display = 'none',
    document.getElementById("SeccionL2I").style.display = 'block',
    document.getElementById("SeccionR2I").style.display = 'block',
    document.getElementById("SeccionL3I").style.display = 'block',
    document.getElementById("SeccionR3I").style.display = 'block',
    document.getElementById("SeccionL4I").style.display = 'block',
    document.getElementById("SeccionR4I").style.display = 'block'
}
   )

