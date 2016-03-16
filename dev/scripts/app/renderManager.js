/** Class render game elements. */
function RenderManager() {}

RenderManager.prototype.renderSectin = function(arr, sectionName) {
        var templProm;
        templProm = getTemplate("card")
        templProm.then(function(tpl) {
        tpl = document.getElementById("card");
        var render = Handlebars.compile(tpl.innerHTML);
        var cards = "";
        for (var i = 0; i < arr.length; i++) {
            cards += render(arr[i]);
        }

        document.getElementById(sectionName).innerHTML = cards;

    }, function(error) {
        alert("Template Rejected: " + error);
    });
}
var RenderManager = new RenderManager();
