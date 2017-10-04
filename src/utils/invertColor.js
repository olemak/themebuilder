const invertColor = hexnum => {
    if(hexnum[0] === "#") {
    hexnum = hexnum.substr(1);
    }
    if(hexnum.length !== 6) {
    console.error("Hex color must be six hex numbers in length.");
    return false;
    }

    hexnum = hexnum.toUpperCase();
    let splitnum = hexnum.split("");
    let resultnum = "#";
    let simplenum = "FEDCBA9876".split("");
    let complexnum = [];
    complexnum.A = "5";
    complexnum.B = "4";
    complexnum.C = "3";
    complexnum.D = "2";
    complexnum.E = "1";
    complexnum.F = "0";

    for(let i=0; i<6; i++){
    if(!isNaN(splitnum[i])) {
        resultnum += simplenum[splitnum[i]]; 
    } else if(complexnum[splitnum[i]]){
        resultnum += complexnum[splitnum[i]]; 
    } else {
        console.error("Hex colors must only include hex numbers 0-9, and A-F");
        return false;
    }
    }      
    return resultnum;
}

export default invertColor;