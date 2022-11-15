// // Promise

// console.log('loading...')

// const promis = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Refreshing...')
//         const obj = {
//             server: 'asf',
//             statut: 'successful'
//         }
//         resolve(obj)
//     }, 1000)
//     // setTimeout(() => {

//     //     console.log('Error')
//     //     reject(obj)
//     // }, 1500)
// })

   

//     .catch(err => console.log('Error', err))
// promis.then(data => {
//     setTimeout(() => {
//         console.log('successully done', data)
//     }, 1000)
// })

// .finally(() => {
//     setTimeout(() => {
//         console.log('finally done')
//     }, 2500);

// })


// const pause = (ms) => {
//     return new Promise(r => setTimeout(() => r(), ms))
// }
  
// pause(1000).then(() => console.log((`after 2 sec`)))

// const url = 'https://jsonplaceholder.typicode.com/todos'
// function fetchDetails (){
//         console.log('Loading ...')
//         return pause(2000).then(() => {
//                 fetch(url)
//             }).then((response) => response.json())
//         }
        
//         fetchDetails().then(data => {
//                 console.log('Data:', data)
//             }).catch(e => console.log('error', e))
            
            
 const delay = (ms) => {
  return new Promise(r => setTimeout(() => r(), ms))
 }
            
const url = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncTodos(){
    console.log('Wait...')
    try{
        await delay(1000)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    }
    catch(e){
        console.error(e)
    }
    
}
fetchAsyncTodos()
