import {promises as fs} from 'fs';

async function main(){
    const itens = await fs.readdir('lojas',{withFileTypes: true});
    for (let item of itens){
        const tipo = item.isDiretory() ?'pasta': 'arquivo';
        console.log(item.name,':',tipo)
    }
    //console.log(itens);
}

main();