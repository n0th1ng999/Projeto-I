const videoTitleSignLan = document.querySelector('#videoTitleSignLan');
const videoTitleEngLan = document.querySelector('#videoTitleEngLan').innerHTML;

/** @param {
 * @param {string} EngInput 
 * @param {Node} OuputDiv 
 *  }*/
let translate = (EngInput, OuputDiv) => {
    const Letters = EngInput.split('');
    Letters.forEach(letter => {
        console.log(letter);
        switch (letter.toUpperCase()) {
            case 'A':
                OuputDiv.innerHTML += `<img src="" alt="A"   width="20" height="20">`
                break;

            case 'B':
                OuputDiv.innerHTML += `<img src="" alt="B" width="20" height="20">`
                break;

            case 'C':
                OuputDiv.innerHTML += `<img src="" alt="C" width="20" height="20">`

                break;
            case 'D':
                OuputDiv.innerHTML += `<img src="" alt="D" width="20" height="20">`
                break;

            case 'E':
                OuputDiv.innerHTML += `<img src="" alt="E" width="20" height="20">`
                break;

            case 'F':
                OuputDiv.innerHTML += `<img src="" alt="F" width="20" height="20">`
                break;

            case 'G':
                OuputDiv.innerHTML += `<img src="" alt="G" width="20" height="20">`
                break;

            case 'H':
                OuputDiv.innerHTML += `<img src="" alt="H" width="20" height="20">`
                break;

            case 'I':
                OuputDiv.innerHTML += `<img src="" alt="I" width="20" height="20">`
                break;

            case 'J':
                OuputDiv.innerHTML += `<img src="" alt="J" width="20" height="20">`
                break;

            case 'K':
                OuputDiv.innerHTML += `<img src="" alt="K" width="20" height="20">`
                break;

            case 'L':
                OuputDiv.innerHTML += `<img src="" alt="L" width="20" height="20">`
                break;

            case 'M':
                OuputDiv.innerHTML += `<img src="" alt="M" width="20" height="20">`
                break;

            case 'N':
                OuputDiv.innerHTML += `<img src="" alt="N" width="20" height="20">`
                break;

            case 'O':
                OuputDiv.innerHTML += `<img src="" alt="O" width="20" height="20">`
                break;

            case 'P':
                OuputDiv.innerHTML += `<img src="" alt="P" width="20" height="20">`
                break;

            case 'Q':
                OuputDiv.innerHTML += `<img src="" alt="Q" width="20" height="20">`
                break;

            case 'R':
                OuputDiv.innerHTML += `<img src="" alt="R" width="20" height="20">`
                break;

            case 'S':
                OuputDiv.innerHTML += `<img src="" alt="S" width="20" height="20">`
                break;

            case 'T':
                OuputDiv.innerHTML += `<img src="" alt="T" width="20" height="20">`
                break;

            case 'U':
                OuputDiv.innerHTML += `<img src="" alt="U" width="20" height="20">`
                break;

            case 'V':
                OuputDiv.innerHTML += `<img src="" alt="V" width="20" height="20">`
                break;

            case 'I':
                OuputDiv.innerHTML += `<img src="" alt="I" width="20" height="20">`
                break;

            case 'Y':
                OuputDiv.innerHTML += `<img src="" alt="Y" width="20" height="20">`
                break;

            case 'X':
                OuputDiv.innerHTML += `<img src="" alt="X" width="20" height="20">`
                break;

            case 'Z':
                OuputDiv.innerHTML += `<img src="" alt="Z" width="20" height="20">`
                break;

            case ' ':
                OuputDiv.innerHTML += `<div style="width:1rem" ></div>`
                break;

            case '1':   
                OuputDiv.innerHTML += `<img src="" alt="1" width="20" height="20">`
                break;

            case '2':
                OuputDiv.innerHTML += `<img src="" alt="2" width="20" height="20">`
                break;

            case '3':
                OuputDiv.innerHTML += `<img src="" alt="3" width="20" height="20">`
                break;

            case '4':
                OuputDiv.innerHTML += `<img src="" alt="4" width="20" height="20">`
                break;

            case '5':
                OuputDiv.innerHTML += `<img src="" alt="5" width="20" height="20">`
                break;

            case '6':
                OuputDiv.innerHTML += `<img src="" alt="6" width="20" height="20">`
                break;

            case '7':
                OuputDiv.innerHTML += `<img src="" alt="7" width="20" height="20">`
                break;

            case '8':
                OuputDiv.innerHTML += `<img src="" alt="8" width="20" height="20">`
                break;

            case '9':
                OuputDiv.innerHTML += `<img src="" alt="9" width="20" height="20">`
                break;

            default:

                break;
        }
    })
}

translate(videoTitleEngLan, videoTitleSignLan)