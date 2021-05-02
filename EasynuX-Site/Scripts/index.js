import api from '/Scripts/api.js';

async function socolector() {
  let solist = []
  const data = await api.read('hosts');
  for (let cnt = 0; cnt <= data.length -1; cnt++) {
    solist.push(JSON.stringify(data[cnt]['sistema'])+'\n')
  }
  return document.getElementById("socolectorRETRN").textContent = solist;
}
//----------------------------------------------------------------------
socolector();
