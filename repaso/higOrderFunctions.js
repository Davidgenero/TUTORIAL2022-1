//Funciones de orden superior. Principio: Separacion de responsabilidades
// una funcion === una tarea

const url = "https://jsonplaceholder.typicode.com/posts"
const fetchData = async (url) => {
    const rawData = await fetch(url);
    const parsedData = await rawData.json();
    console.log(parsedData)
}
fetchData(url)

////////

async function getData(url, callback) {
    const rawData =await  fetch(url)
    const parsedData = await rawData.json();
    callback(parsedData);
};

function printOnConsole(data){
    console.log(data)
}

getData(url, printOnConsole)
///////////////


function renderData (data) {
    let htmlContent = "";
    data.forEach(el =>{
        htmlContent += `<div>ID $(el.id) -Title: ${el.title}</div><br/>`;
    });
    dataContainer.innerHTML = htmlContent;
}

// getData(url, renderData)



function renderDataWithClosure(htmlElement){

    return (content) => {
        //esto no se ejecuta, sino que se se retorna la funcion lista para ejecutar
        let htmlContent = "";
        content.forEach((el) => {
            htmlContent += `<div>ID $(el.id) -Title: ${el.title}</div><br/>`;
        });
    htmlElement.innerHTML = htmlContent;
    };
}

// getData(url, renderDataWithClosure(myDiv))


function renderDataWithClosureBetter(htmlElement, a, b){
    return (content) =>{
      let htmlContent = "";
      content.forEach((el)=>{
          htmlContent += `<div>ID ${el[a]} -Title: ${el[b]}</div><br/>`;
      })
      htmlElement.innerHTML = htmlContent
    }
}
getData(url,renderDataWithClosureBetter(MyOtherDiv, "userId", "title"))
