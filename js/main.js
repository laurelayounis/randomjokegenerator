document.querySelector('button').addEventListener('click',getFetch)

async function getFetch(){
    const jokeData= await fetch('https://icanhazdadjoke.com/', {
        headers:{
            'Accept': 'application/json'
        }
    });
    const jokeObj= await jokeData.json()
    console.log(jokeObj)

    document.querySelector('h2').innerHTML= jokeObj.joke

}