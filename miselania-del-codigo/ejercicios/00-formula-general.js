function formulaGeneral(a,b,c){
    let disc = (b * b) - (4 * a * c);  
    console.log(disc);
    if(disc > 0){
        let x1 =( -b - Math.sqrt(disc))/(2*a);
        let x2 =( -b + Math.sqrt(disc))/(2*a);
        return [x1, x2];
    }
    else if (disc === 0){
        let x = -b / (2 * a);
        return [x];
    }else{
        return [];
    }
}
formulaGeneral(1,2,3);
