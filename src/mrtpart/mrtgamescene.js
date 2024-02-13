import { energy } from "../components/Screen.js";
var helpedoldmen = 0;
function MrtGameScene() {
    var eg = energy;

    console.log(eg);
    var xpos = 50;
    var ypos = 10;
    var start = true;
    function workplease() {
        var player = document.getElementById("player");
        if (start) {
            player.style.left = 50 + "vw";
            player.style.top = 10 + "vw";
            start = false;
        }

        var curkey = [];
        document.addEventListener("keydown", (event) => move(event));
        document.addEventListener("keyup", (event) => antimove(event));
        function move(incode) {
            curkey[incode.keyCode] = true;
            // console.info(incode.keyCode);
            // console.info(curkey[incode.keyCode]);
            // console.info("in");
        }
        function antimove(outcode) {
            curkey[outcode.keyCode] = false;
            // console.info(outcode.keyCode);
            // console.info(curkey[outcode.keyCode]);
            // console.info("out");
        }
        function testformove() {
            if (curkey[37] /*left*/) {
                player.style.left = xpos - 0.00004 * eg + "vw";
                if (
                    offsetOverlap(player, document.getElementById("wall1")) ||
                    offsetOverlap(player, document.getElementById("wall2"))
                ) {
                    player.style.left += 0.00004 * eg + "vw";
                } else {
                    xpos -= 0.00004 * eg;
                }
            }
            if (curkey[39] /*right*/) {
                player.style.left = xpos + 0.00004 * eg + "vw";
                if (
                    offsetOverlap(player, document.getElementById("wall1")) ||
                    offsetOverlap(player, document.getElementById("wall2"))
                ) {
                    player.style.left -= 0.00004 * eg + "vw";
                } else {
                    xpos += 0.00004 * eg;
                }
            }
            if (curkey[38]) {
                player.style.top = ypos - 0.00004 * eg + "vw";
                if (
                    offsetOverlap(player, document.getElementById("wall1")) ||
                    offsetOverlap(player, document.getElementById("wall2"))
                ) {
                    player.style.top += 0.00004 * eg + "vw";
                } else {
                    ypos -= 0.00004 * eg;
                }
            }
            if (curkey[40]) {
                player.style.top = ypos + 0.00004 * eg + "vw";
                if (
                    offsetOverlap(player, document.getElementById("wall1")) ||
                    offsetOverlap(player, document.getElementById("wall2"))
                ) {
                    player.style.top -= 0.00004 * eg + "vw";
                } else {
                    ypos += 0.00004 * eg;
                }
            }
        }
        function offsetOverlap(a, b) {
            let xa = a.offsetLeft;
            let ya = a.offsetTop;
            let ha = a.offsetHeight;
            let wa = a.offsetWidth;
            let xb = b.offsetLeft;
            let yb = b.offsetTop;
            let wb = b.offsetWidth;
            let hb = b.offsetHeight;
            let xa2 = xa + wa;
            let ya2 = ya + ha;
            let xb2 = xb + wb;
            let yb2 = yb + hb;
            if (
                ((xa >= xb && xa <= xb2) ||
                    (xb >= xa && xb <= xa2) ||
                    (xa2 <= xb2 && xa2 >= xb) ||
                    (xb2 <= xa2 && xb2 >= xa)) &&
                ((ya >= yb && ya <= yb2) ||
                    (ya <= yb && yb <= ya2) ||
                    (ya2 <= yb2 && ya2 >= yb) ||
                    (yb2 <= ya2 && yb2 >= ya))
            ) {
                return true;
            } else {
                return false;
            }
        }
        if (offsetOverlap(player, document.getElementById("oldman1"))) {
            document.getElementById("oldman1").style.top = player.style.top;
            document.getElementById("oldman1").style.left = player.style.left;
        }
        if (
            offsetOverlap(
                document.getElementById("oldman1"),
                document.getElementById("goal")
            )
        ) {
            document.getElementById("oldman1").style.top = "-100vh";
            helped();
            console.log(helpedoldmen);
        }

        if (
            offsetOverlap(
                player,
                document.getElementById("oldman2"),
                document.getElementById("goal")
            )
        ) {
            document.getElementById("oldman2").style.top = player.style.top;
            document.getElementById("oldman2").style.left = player.style.left;
        }
        if (
            offsetOverlap(
                document.getElementById("oldman2"),
                document.getElementById("goal")
            )
        ) {
            document.getElementById("oldman2").style.top = "-100vh";
            helped();
            console.log(helpedoldmen);
        }

        if (offsetOverlap(player, document.getElementById("oldman3"))) {
            document.getElementById("oldman3").style.top = player.style.top;
            document.getElementById("oldman3").style.left = player.style.left;
        }
        if (
            offsetOverlap(
                document.getElementById("oldman3"),
                document.getElementById("goal")
            )
        ) {
            document.getElementById("oldman3").style.top = "-100vh";
            helped();
            console.log(helpedoldmen);
        }

        if (offsetOverlap(player, document.getElementById("oldman4"))) {
            document.getElementById("oldman4").style.top = player.style.top;
            document.getElementById("oldman4").style.left = player.style.left;
        }
        if (
            offsetOverlap(
                document.getElementById("oldman4"),
                document.getElementById("goal")
            )
        ) {
            document.getElementById("oldman4").style.top = "-100vh";
            helped();
            console.log(helpedoldmen);
        }
        function helped() {
            helpedoldmen += 1;
        }

        setInterval(function () {
            testformove();
        }, 1000/60);
    }
    setTimeout(function () {
        workplease();
    }, 0);

    return (
        <>
            <img id="bgimg" alt="oh" src={require("./best.png")}></img>
            <div id="player"></div>
            <div id="goal"></div>
            <div id="wall1"></div>
            <div id="wall2"></div>
            <img
                id="oldman1"
                className="oldman"
                alt="oh"
                src={require("./oldman1.png")}></img>
            <img
                id="oldman2"
                className="oldman"
                alt="oh"
                src={require("./oldman1.png")}></img>
            <img
                id="oldman3"
                className="oldman"
                alt="oh"
                src={require("./oldman1.png")}></img>
            <img
                id="oldman4"
                className="oldman"
                alt="oh"
                src={require("./oldman1.png")}></img>
        </>
    );
}
export default MrtGameScene;
