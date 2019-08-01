
function confereString(){
var string1 = window.prompt('Digite sua String:')
            var string2 = string1.split('').reverse().join('')
            window.alert(string2)
            var n = string1.localeCompare(string2)
            if(n == 0){
                console.log("true")
                return true
            }
            else{
                console.log("false")
                return false
            }
}
confereString();