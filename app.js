const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('text-advice');

function loadQuote(){
    getPost();
}

const getPost = async () => {
    try {
        adviceText.innerText = 'loading...';
        const response = await fetch(`https://api.adviceslip.com/advice`)
        const data = await response.json();
        const info = data.slip;
        const advice = info.advice;
        const id = info.id;

        adviceId.innerText = id;
        adviceText.innerText = `“ ${advice} ”`;
        console.log('advice= '+advice);
    }
    catch (err) {
        console.log('failed to load qoute');
        setTimeout(() => {
        adviceText.innerText = `Something went wrong 
                                click the dice 
                                to load again..`;
            
        }, 2000);
    }    
}
getPost();
