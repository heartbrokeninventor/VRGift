window.onload = function () {
    document.querySelector("a-scene").renderer.gammaOutput=true;


    function genHeartFireWork(pos) {
        var fws = document.createElement("a-entity");
        var scene = document.getElementById("scene");
        fws.setAttribute("position", pos.x + ' ' + pos.y + ' ' + pos.z);
        fws.setAttribute("rotation", "0 90 0");
        fws.setAttribute('kks-magic', 'preset:fireworks;options:{rColor:"#ff4dd6",usePattern:1,eCount:2000,eHeight:100,eSize:5,eSpeed:"0 1 0",pScale:0.4,pLife:500,bLife:1000,pAssetId:"myPattern"}');
        scene.appendChild(fws);
        setTimeout(function() {
            scene.remove(fws);
            delete fws;
        }, (4000));
    };


    setInterval(function () {
        var pos = genCirclePoint(80, 120, 0);
        genHeartFireWork(pos);
    }, 3100)


    function genNormalFireWork(pos) {
        var fws = document.createElement("a-entity");
        var scene = document.getElementById("scene");
        fws.setAttribute("position", pos.x + ' ' + pos.y + ' ' + pos.z);
        fws.setAttribute('kks-magic', 'preset:fireworks;options:{eColors:["#FF3333","#ffef33","#33ff99","#33b1ff","#4b33ff","#ff33f7"],eCount:8,}');
        scene.appendChild(fws);
        setTimeout(function() {
            scene.remove(fws);
            delete fws;
        }, 4000);
    };


    setInterval(function () {
        var pos = genCirclePoint(80, 120, 0);
        genNormalFireWork(pos);
    }, 3500)

};

function genCirclePoint(radius1, radius2, hei) {
    var rand = Math.random() * Math.PI;
    var xsign = Math.random() > 0.5 ? 1 : -1;
    var r = Math.random() * (radius2 - radius1) + radius1;

    var x = r * Math.sin(rand) * xsign;
    var z = r * Math.cos(rand);
    var p = new THREE.Vector3(x, hei, z);
    return p;
};