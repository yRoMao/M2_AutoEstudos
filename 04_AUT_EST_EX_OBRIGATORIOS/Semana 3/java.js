var vel = 0;
var subida = 0;
var altura = 0;

const grav = 10;

function CalVel()
{
    vel=document.getElementById('vel').value;
    subida = (vel**2) / (2*grav);
    altura = vel / grav;
    document.getElementById("alt").innerHTML = subida + ' // ' + altura;
}