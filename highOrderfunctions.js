//funciones de orden superior,Principio : Separacion de responsabilidades


const FetchData = async (url) => {
    const rawData = await fetch(url);
    const parsedData = await rawData.json();
    console.log(parsedData)
}

FetchData(url)

async function getData(url, callback) {
    const rawData = await fetch(url)
    const parsedData = await rawData.json();
    callback(parsedData);
}
function printOnConsole(data) {
    console.log(data)
}

getData(url,printOnConsole)
////////////////////////////

// function renderData(data) {
//     let htmlContent = "";
//     data.forEach(el =>{
//         htmlContent = <div>ID: $(el.id) - Title $ $

//     });
// } 

function renderDataWithClosure(htmlElement) {
    return (content) => {
        let html
    }
}