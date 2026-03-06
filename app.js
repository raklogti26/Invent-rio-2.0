
fetch('assets/data/inventory.csv')
  .then(r => r.text())
  .then(t => { document.getElementById('app').innerText = t; });
