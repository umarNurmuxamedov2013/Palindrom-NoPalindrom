const strings = ['non', 'olma', 'aziza', 'Gul', "mashina"]
const polindrom = []
const noPolindrom = []

for (const element of strings ) {
    if (element.split("").reverse().join("") === element) {
        polindrom.push(element)

    }else{
        noPolindrom.push(element)
    }
}
console.log(polindrom);
console.log(noPolindrom);