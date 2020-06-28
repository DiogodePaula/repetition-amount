function repetitionAmount(srt){
    const string = "O rato roeu a roupa roida do rato sem roupa, O rato roeu a roupa roida do rato sem roupa, O rato roeu a roupa roida do rato sem roupa";
    
    const count = (string.match(/o/gi) || []).length;
    const count2 = (string.match(/rato/gi) || []).length;
    const count3 = (string.match(/roeu/g) || []).length;
    const count4 = (string.match(/a/gi) || []).length;
    const count5 = (string.match(/roupa/gi) || []).length;
    const count6 = (string.match(/roida/gi) || []).length;
    const count7 = (string.match(/do/gi) || []).length;
    const count8 = (string.match(/sem/gi) || []).length;

    console.log("o ="+" "+count);
    console.log("rato ="+" "+count2);
    console.log("roeu ="+" "+count3);
    console.log("a ="+" "+count4);
    console.log("roupa ="+" "+count5);
    console.log("roida ="+" "+count6);
    console.log("do ="+" "+count7);
    console.log("sem ="+" "+count8);
}

console.log(repetitionAmount());