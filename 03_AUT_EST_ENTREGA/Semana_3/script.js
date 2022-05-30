function AddLine()
{
    var click = false
    if (!click) {
        const node = document.createElement("h1");
        const textnode = document.createTextNode("Segredinho, shiuuu!!");
        node.appendChild(textnode);
        document.getElementById("info").prepend(node);
        var click = true
    } else {
        document.getElementById('info').removeChild(document.getElementById('info').getElementsByTagName('h1')[0]);
    }
}