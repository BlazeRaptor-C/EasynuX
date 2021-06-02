import api from '/Scripts/api.js';

async function socolector() {
  let solist = []
  const data = await api.read('oslistjson');
  for (let cnt = 0; cnt <= data.length -1; cnt++) {
    solist.push(JSON.stringify(data[cnt]['sistema'])+'  -->  '+JSON.stringify(data[cnt]['status'])+'\n')
  }
  return document.getElementById("socolectorRETRN").textContent = solist;
}
//----------------------------------------------------------------------
socolector();
