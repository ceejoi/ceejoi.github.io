const terminal = document.getElementById("terminalText");
const section = document.getElementById("messageSection");
const sendBtn = document.getElementById("sendBtn");

function sleep(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}

async function type(text){

    for(let i=0;i<text.length;i++){

        terminal.innerHTML += text[i];

        await sleep(25);

    }

    terminal.innerHTML += "\n";

    terminal.scrollTop = terminal.scrollHeight;

}

async function boot(){

    await type("HEARTLINK TERMINAL v1.0");
    await sleep(500);

    await type("-----------------------------");

    await sleep(500);

    await type("Booting...");

    await sleep(800);

    await type("Checking internet connection...");

    await sleep(1000);

    await type("Connection Stable.");

    await sleep(800);

    await type("Searching for recipient...");

    await sleep(1500);

    await type("Recipient Found.");

    await sleep(700);

    await type("");

    await type("Status : ONLINE");

    await sleep(700);

    await type("");

    await type("You may now leave a message.");

    section.classList.remove("hidden");

}

boot();

sendBtn.onclick = async ()=>{

    const message = document
        .getElementById("messageInput")
        .value
        .trim();

    if(message==="") return;

    sendBtn.disabled=true;

    await type("");

    await type("> Encrypting Message...");

    await sleep(1200);

    await type("> Establishing Secure Link...");

    await sleep(1200);

    await type("> Sending...");

    await fetch("https://arkansas-imported-showing-surgery.trycloudflare.com", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: message
    })
});

    await sleep(1500);

    await type("> Delivered Successfully.");
    petParty();

    await type("> Thank you for making someone's day :)");

    document.getElementById("messageInput").value="";

    sendBtn.disabled=false;

}

function petParty(){

    const container = document.getElementById("petContainer");

    const pets = ["🐱","🐶"];

    for(let i=0;i<8;i++){

        const pet = document.createElement("div");

        pet.className="pet";

        pet.innerHTML=pets[Math.floor(Math.random()*pets.length)];

        let x=Math.random()*window.innerWidth;
        let y=Math.random()*window.innerHeight;

        let dx=(Math.random()*4)+2;
        let dy=(Math.random()*4)+2;

        if(Math.random()>0.5) dx*=-1;
        if(Math.random()>0.5) dy*=-1;

        pet.style.left=x+"px";
        pet.style.top=y+"px";

        container.appendChild(pet);

        const interval=setInterval(()=>{

            x+=dx;
            y+=dy;

            if(x<0 || x>window.innerWidth-40) dx*=-1;
            if(y<0 || y>window.innerHeight-40) dy*=-1;

            pet.style.left=x+"px";
            pet.style.top=y+"px";

        },16);

        setTimeout(()=>{

            clearInterval(interval);
            pet.remove();

        },5000);

    }

}
