// callback function

function sayMyName(name) {
    name()
    console.log('depois de executar a callback')
}
sayMyName(
    ()=>{
        console.log('estou em uma callback')
    }
)