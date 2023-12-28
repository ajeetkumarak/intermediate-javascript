console.log("Regular Expressions - Metacharacters in javascript")

// * lets look into some metacharacter symbols in javascript

let regex = /harry/;
regex = /^harrydc/    //  ^ means expression will match if string starts with
regex = /ry$/         //  $ at end means "string ends with "
regex = /go.d/        //  . means exactly one character match
// regex = /h*rry/      //  * matches any 0 or more character
regex= /ha?rryf?q/       //  optional character - ? after character means optional
regex = /h\*rry/

let str = "harry is good with code with harry let,s go harry"
// str = "hafhgiushgsrughsghsgrry is good with code with harry let,s go harry"
str = "hrryhq"
str = "h*rry means code with ajeet and harry"


let result = regex.exec(str)

console.log("The result from exec() is" ,result)

if (regex.test(str)){
    console.log(`The string "${str}" matches the expression '${regex.source}'.`)

}
else{
    console.log(`The string "${str}" do not match the expression '${regex.source}'.`)
}

