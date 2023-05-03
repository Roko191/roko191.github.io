// Varijabla za warn box u kojoj ćemu ispisivati sve input greške korisnika
let warnBox = document.getElementById("warn-box");

// Dohvati broj igrača i dodaj polja za upis njihovih imena
let igraci = document.getElementById("dodaj-igrace");
let brojIgraca = document.getElementById("broj-igraca");

let pokreniGumb = document.getElementById("game-start");
let bodoviSubmit = document.getElementById("bodovi-submit");

//Prisili igrača da mora stisnuti koliko poena želi
document.getElementById("igraci").style= "display: none;"
document.getElementById("gameScreen").style= "display: none;"

function setPoints(point)
{
  points = point;
  console.log(points)

  // Kada je points varijabla definira vratimo display, a igrač idalje može minjeati broj poena
  document.getElementById("igraci").style= "display: block;"

  return point;
}

igraci.addEventListener("click", function()
{
    let imeIgraca = document.getElementById("imena");

    console.log(brojIgraca.value);

    if(brojIgraca.value < 1 || brojIgraca.value > 4)
    {
        console.error("Pogrešan broj igrača!");
        warnBox.innerHTML = '<div class="p-3 mb-2 bg-danger text-white"><b>Minimalni broj igrača je 1 a maksimalni broj je 4 baš kao i u tvom lokalnom kafiću</b></div>';
    }
    if(!(brojIgraca.value < 1 || brojIgraca.value > 4))
    {
        // Onemoguću dodatno ispisivanje igrača
        brojIgraca.disabled = true;
        igraci.disabled = true;

        console.log("Generiraj polja za upis imena igrača!");
        for(i = 0; i < brojIgraca.value; i++)
        {
            imeIgraca.innerHTML += `
          <br><label for="ime-igraca-${i+1}">Ime igrača ${i+1}</label>
          <input id="ime-igraca-${i+1}" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Ivan Horvat"><br>
        </div>
      </div><br>`
        }
    }
});

pokreniGumb.addEventListener("click", function()
{

  // Array u koji ćemo postaviti sve igrači i tako ih predati Game objektu
  igraci = [];

  // Varijable za broj bodova igrača za vrijme igre
  let gspPlayer1 = document.getElementById("gspPlayer1");
  let gspPlayer2 = document.getElementById("gspPlayer2");
  let gspPlayer3 = document.getElementById("gspPlayer3");
  let gspPlayer4 = document.getElementById("gspPlayer4");

  // Igra je započela prebacujemo se na ekran za brojanje bodova
  document.getElementById("configIgre").style= "display: none;"

  console.log("Kreiranje igrača!");
  // Kreiranje igrača
  if(brojIgraca.value == 1)
  {
    let ime1 = document.getElementById("ime-igraca-1").value;
    igrac1 = new Player(ime1, points);

    igraci.push(igrac1);

    gspPlayer1.innerHTML = `<h5> ${igrac1.ime} </h5><p class="gspInner" id="gspP1">${igrac1.points}</p>`;
  }
  if(brojIgraca.value == 2)
  {
    let ime1 = document.getElementById("ime-igraca-1").value;
    let ime2 = document.getElementById("ime-igraca-2").value;

    igrac1 = new Player(ime1, points);
    igrac2 = new Player(ime2, points);

    igraci.push(igrac1);
    igraci.push(igrac2);

    gspPlayer1.innerHTML = `<h5> ${igrac1.ime} </h5><p class="gspInner" id="gspP1">${igrac1.points}</p>`;
    gspPlayer2.innerHTML = `<h5> ${igrac2.ime} </h5><p class="gspInner" id="gspP2">${igrac2.points}</p>`;
  }
  if(brojIgraca.value == 3)
  {
    let ime1 = document.getElementById("ime-igraca-1").value;
    let ime2 = document.getElementById("ime-igraca-2").value;
    let ime3 = document.getElementById("ime-igraca-3").value;

    igrac1 = new Player(ime1, points);
    igrac2 = new Player(ime2, points);
    igrac3 = new Player(ime3, points);

    igraci.push(igrac1);
    igraci.push(igrac2);
    igraci.push(igrac3);

    gspPlayer1.innerHTML = `<h5> ${igrac1.ime} </h5><p class="gspInner" id="gspP1">${igrac1.points}</p>`;
    gspPlayer2.innerHTML = `<h5> ${igrac2.ime} </h5><p class="gspInner" id="gspP2">${igrac2.points}</p>`;
    gspPlayer3.innerHTML = `<h5> ${igrac3.ime} </h5><p class="gspInner" id="gspP3">${igrac3.points}</p>`;
  }
  if(brojIgraca.value == 4)
  {
    let ime1 = document.getElementById("ime-igraca-1").value;
    let ime2 = document.getElementById("ime-igraca-2").value;
    let ime3 = document.getElementById("ime-igraca-3").value;
    let ime4 = document.getElementById("ime-igraca-4").value;

    igrac1 = new Player(ime1, points);
    igrac2 = new Player(ime2, points);
    igrac3 = new Player(ime3, points);
    igrac4 = new Player(ime4, points);

    igraci.push(igrac1);
    igraci.push(igrac2);
    igraci.push(igrac3);
    igraci.push(igrac4);

    gspPlayer1.innerHTML = `<h5> ${igrac1.ime} </h5><p class="gspInner" id="gspP1">${igrac1.points}</p>`;
    gspPlayer2.innerHTML = `<h5> ${igrac2.ime} </h5><p class="gspInner" id="gspP2">${igrac2.points}</p>`;
    gspPlayer3.innerHTML = `<h5> ${igrac3.ime} </h5><p class="gspInner" id="gspP3">${igrac3.points}</p>`;
    gspPlayer4.innerHTML = `<h5> ${igrac4.ime} </h5><p class="gspInner" id="gspP4">${igrac4.points}</p>`;

  }

  document.getElementById("gameScreen").style= "display: block;"
  igra = new Game(igraci, points, brojIgraca.value);

});

bodoviSubmit.addEventListener('click', function()
{
  // Skini bodove
  igra.play(document.getElementById("bodovi-input").value);
  // Ažuriraj sučelje
  if(igra.checkInput(document.getElementById("bodovi-input").value) !== 0)
  {
    warnBox.innerHTML = '<div class="p-3 mb-2 bg-danger text-white"><b>U pikadu se s jednom rundom može minimalno 3 boda osvojiti a maksimalno 160.</b></div>'
  }
  else
  {
    warnBox.innerHTML = ''
  }
  document.getElementById("gspRoundP").innerHTML = `Round: ${round}`;
  if(brojIgraca.value == 1)
  {
    document.getElementById("gspP1").innerHTML = igraci[0].points;
  }
  if(brojIgraca.value == 2)
  {
    document.getElementById("gspP1").innerHTML = igraci[0].points;
    document.getElementById("gspP2").innerHTML = igraci[1].points;
  }
  if(brojIgraca.value == 3)
  {
    document.getElementById("gspP1").innerHTML = igraci[0].points;
    document.getElementById("gspP2").innerHTML = igraci[1].points;
    document.getElementById("gspP3").innerHTML = igraci[2].points;
  }
  if(brojIgraca.value == 4)
  {
    document.getElementById("gspP1").innerHTML = igraci[0].points;
    document.getElementById("gspP2").innerHTML = igraci[1].points;
    document.getElementById("gspP3").innerHTML = igraci[2].points;
    document.getElementById("gspP4").innerHTML = igraci[3].points;
  }

  // Provjeri je li igra gotova i ispiši finalnu poruku
  if(igra.gameOver)
  {
    document.getElementById("gameScreen").innerHTML=`<div class="p-3 mb-2 bg-success text-white"><b>Igra je završila <br> Pobjedio je ${pobjednik.ime}!</b></div><button type="button" class="btn btn-primary" onclick="location.reload()">Započni novu igru</button>`
  }
});
