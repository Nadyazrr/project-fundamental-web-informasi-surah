const main = () => {
    const getSurat = () => { 
     
      fetch('https://api.npoint.io/99c279bb173a6e28359c/data')
      
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
      const listSuratElement = document.querySelector('#listSurat');
      listSuratElement.innerHTML = '';
  
      const dataSurat = responseJson;
      dataSurat.forEach((surat) => {
        listSuratElement.innerHTML += `
        <div class= "card" style = "width:18rem; ">
        <div class= "card-body" >
          <div class="card-category">${surat.nama}</div>
          <p>${surat.arti}</p>
          <p>${surat.asma}</p>

          <p>${surat.keterangan}</p>
          </div>
          </div>
        `
      
      });
    })
      .catch(error => {
        console.log(error);
      });
    };
  
  getSurat()
  }
  
  export default main;