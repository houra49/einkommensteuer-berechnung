let einkommen = document.getElementById("einkommen");
let zusammen = document.getElementById("zusammenVeranlagung");
let einzel = document.getElementById("einzelVeranlagung");
let einkommenSteuer = document.getElementById("einkommenSteuer");
let jahr = document.getElementById("selectJahr");
function rechnen() {
    let status;
    let steuer;
    if (zusammen.checked) {
        status = (einkommen.value) / 2;
    } else {
        status = (einkommen.value);
    };

    if (jahr.value === "2021") {

        if (status <= 9744) {
            steuer = 0
        } else if (9745 <= status && status <= 14753) {
            let y = (status - 9744) / 10000
            steuer = (995.21 * y + 1400) * y
        } else if (14754 <= status && status <= 57918) {
            let y = (status - 14753) / 10000
            steuer = (208.85 * y + 2397) * y + 950.96
        } else if (57919 <= status && status <= 274612) {
            steuer = 0.42 * status - 9136.63
        } else {
            steuer = 0.42 * status - 17374.99
        }

    } else if (jahr.value === "2020") {

        if (status <= 9408) {
            steuer = 0
        } else if (9409 <= status && status <= 14.532) {
            let y = (status - 9408) / 10000
            steuer = (972.87 * y + 1400) * y
        } else if (14533 <= status && status <= 57051) {
            let y = (status - 14532) / 10000
            steuer = (21202 * y + 2397) * y + 972.79
        } else if (57052 <= status && status <= 270500) {
            steuer = 0.42 * status - 8963.74
        } else {
            steuer = 0.42 * status - 17078.74
        }

    } else if (jahr.value === "2019") {
        if (status <= 9168) {
            steuer = 0
        } else if (9169 < status && status < 14254) {
            let y = (status - 9168) / 10000
            steuer = (940.14 * y + 1400) * y
        } else if (14255 <= status && status <= 55960) {
            let y = (status - 14254) / 10000
            steuer = (21616 * y + 2397) * y + 965.58
        } else if (55961 <= status && status <= 265326) {
            steuer = 0.42 * status - 8780.90
        } else {
            steuer = 0.42 * status - 16740.68
        }
    }

    einkommenSteuer.innerHTML = steuer.toFixed(2) + "€";


}
