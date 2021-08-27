import './style.css'

async function getContent(){
  try{
    const resp = await fetch(`http://localhost:6767/studio`)
    const response = await resp.json()
    setContent(response)
  }catch(e){
    console.log(e)
  }
}

function setContent(vector){
  const container = document.createElement("div");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  for( let i = 0; i<vector.length; i++)
  {
    const tr = document.createElement("tr")
    tr.innerText =`Título: ${vector[i].name} - Cidade: ${vector[i].city}`
    
    tbody.appendChild(tr)
  }

  table.appendChild(thead)
  table.appendChild(tbody)
  container.appendChild(table)
  document.body.appendChild(container)
}

getContent()