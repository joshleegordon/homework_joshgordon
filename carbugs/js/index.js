document.getElementById('bugButton').onclick = bugAction;
document.getElementById('carButton').onclick = carAction;


function bugAction() {
    document.getElementById('circle-one').style.backgroundImage = "url('./images/mantis.jpg')";

    document.getElementById('circle-two').style.backgroundImage = "url('./images/ant.jpg')";

    document.getElementById('circle-three').style.backgroundImage = "url('./images/fly.jpg')";
}

function carAction() {
    document.getElementById('circle-one').style.backgroundImage = "url('./images/bus.jpg')";

    document.getElementById('circle-two').style.backgroundImage = "url('./images/boat.jpg')";

      document.getElementById('circle-three').style.backgroundImage = "url('./images/car.jpg')";

}
