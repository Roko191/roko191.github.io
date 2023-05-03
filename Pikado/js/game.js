let playerIndex = 0;
let round = 1;
let pobjednik;

// Objekt zadužan za ono glavno, a to je pikado
function Game(igraci, points, brojIgraca)
{
    this.gameOver = false,
    this.playerNumber = brojIgraca,
    this.points = points,
    this.changePlayerPoints = function(pointsScored)
    {
        igraci[playerIndex].points -= pointsScored; 
    },
    this.newRound = function()
    {
        // Postavi player index na nulu kako bi započela nova runda
        playerIndex = 0;
        
        round++;
        console.log("This is round "+ round + "now");
    },
    this.nextPlayer = function()
    {
        // Provjeri jesmo li prešli broj igrača to znači da je vrijeme za novu rundu
        if(playerIndex >= this.playerNumber - 1)
        {
            this.newRound();
        }
        else
        {
            playerIndex++;
        }
    },
    this.checkInput = function(pointsScored)
    {
        /* Provjeri je li broj upisan poeana u rangu od 3 do 160
            odnosno minimum i maksimum mogućih ostvarenih bodova u pikadu */
        if(pointsScored < 3 || pointsScored > 160)
        {
            console.error("Nemoguće je ostvariti toliko bodova u pikadu");
            return -1;
        }
        else
        {
            return 0;
        }
    },
    this.setWinner = function()
    {
            igraci[playerIndex].winner = true;
            pobjednik = igraci[playerIndex];
            return 0;
    }
    this.play = function(pointsScored)
    {
        // Provjeri input
        let input = this.checkInput(pointsScored);
        if(input !== 0)
        {
            console.log("Unesi broj ponovno");
            return 0;
        }

        // Provjeri ima li igra pobjednika
        for(i = 0; i < igraci.length; i++)
        {
            if(igraci[i].winner == true)
            {
                console.log("Igra je završila!");
                return 0;
            }
        }

        // Odigraj
        this.changePlayerPoints(pointsScored);

        // Provjeri imamo li pobjednika ili nekoga tko je prešao traženi broj bodova
        if(igraci[playerIndex].points < 0)
        {
            console.log("Prešao si potreban broj podova. Vraćam te na staro");
            igraci[playerIndex].points += pointsScored;
        }
        if(igraci[playerIndex].points == 0)
        {
            this.setWinner();
            this.gameOver = true;
            console.log("Igra is over!");
        }

        this.nextPlayer();
    }
}