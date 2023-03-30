function randomPjesma()
{
    let pjesme = ["https://www.youtube.com/watch?v=t-JD2bnNQvY", "https://www.youtube.com/watch?v=phBThlPTBEg", "https://www.youtube.com/watch?v=hbnunexhlXM", "https://www.youtube.com/watch?v=7VWHBHeNrg4", "https://www.youtube.com/watch?v=bODhJenofsg", "https://www.youtube.com/watch?v=XoBo8dlPcQo", "https://www.youtube.com/watch?v=0g05J5oc9kg", "https://youtu.be/9h2RtSMKHAg?t=115", "https://youtu.be/EvV0nSkfho0?t=49", "https://youtu.be/jVDofBFtvwA", "https://youtu.be/U5A5tFyXQio", "https://youtu.be/vjri6MyXKRI", "https://youtu.be/cao6WyF-61s"];

    const pjesma = pjesme[Math.floor(Math.random() * pjesme.length)];

    window.open(pjesma);
}