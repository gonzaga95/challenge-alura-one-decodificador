const inputText = document.querySelector(".texto_entrada");
const outputText = document.querySelector(".texto_saida");

function checarTexto(event) {
    let verifyText =
        /^[a-z\n\s]+$/.test(event.target.value) || event.target.value == "";
    if (!verifyText) {
        btnBlock(event);
    } else {
        btnUnblock(event);
    }
}

function btnBlock(event) {
    document.querySelector(".encriptar").setAttribute("disabled", true);
    document
        .querySelector(".encriptar")
        .style.setProperty("background-color", "var(--medium-gray)");
    document
        .querySelector(".encriptar")
        .style.setProperty("color", "var(--dark-blue)");
    document.querySelector(".decriptar").setAttribute("disabled", true);
    document
        .querySelector(".decriptar")
        .style.setProperty("background-color", "var(--medium-gray)");
}

function btnUnblock(event) {
    document.querySelector(".encriptar").removeAttribute("disabled");
    document
        .querySelector(".encriptar")
        .style.setProperty("background-color", "var(--dark-blue)");
    document.querySelector(".encriptar").style.setProperty("color", "white");
    document.querySelector(".decriptar").removeAttribute("disabled");
    document
        .querySelector(".decriptar")
        .style.setProperty("background-color", "#D8DFE8");
}

function encriptarBtn() {
    const textEncrypt = encriptar(inputText.value);
    outputText.value = textEncrypt;
    inputText.value = "";
}

function decriptarBtn() {
    const textDecrypt = decriptar(inputText.value);
    outputText.value = textDecrypt;
    inputText.value = "";
}

function encriptar(stringEncrypted) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    stringEncrypted = stringEncrypted.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncrypted.includes(matrizCodigo[i][0])) {
            stringEncrypted = stringEncrypted.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringEncrypted;
}

function decriptar(stringDecrypted) {
    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"],
    ];
    stringDecrypted = stringDecrypted.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecrypted.includes(matrizCodigo[i][0])) {
            stringDecrypted = stringDecrypted.replaceAll(
                matrizCodigo[i][0],
                matrizCodigo[i][1]
            );
        }
    }
    return stringDecrypted;
}

function removeRightSideBar() {
    const removeRightSideBar = document
        .querySelector(".lateral_texto")
        .remove();
    const showRightSideBarOutput = (document.querySelector(
        ".lateral_texto_resultado"
    ).style.display = "flex");
}

function copy() {
    let copyText = document.querySelector(".texto_saida");
    copyText.select();
    copyText.setSelectionRange(0, 9999);
    document.execCommand("copy");
}
