// Fetch is async by default

const gitHubRequest = async (login) => {
    let response = await 
    fetch(`https://api.github.com/users/RomanLearnsHowToCode`)
}

// async fetch json data! amazing
const gitHubRequestLogin = async (login) => {

    let response = await 
    fetch(`https://api.github.com/users/${login}`);
    // with fetch we need to parse these fetched data
    let json = await response.json();
    let summary = `${json.name}, ${json.company}, ${json.bio}`
    console.log(summary);

}

gitHubRequestLogin(`RomanLearnsHowToCode`)