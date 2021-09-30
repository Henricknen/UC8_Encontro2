let readlineSync = require('readline-sync');

var quantidade = 0;

quantidade = readlineSync.question("Digite a quantidade de alunos presentes: ");

for(var index = 0; index <= quantidade; index++){
    if(index == 0){
        console.log("O valor "+index+" é ZERO  ");
    }else if(index % 2 == 0){
        console.log("O valor "+index+" é PAR");
    }else{
        console.log("O valor "+index+" é IMPAR");
    }
}