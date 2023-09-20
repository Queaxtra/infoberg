require('dotenv').config();
const fetch = require('cross-fetch');

module.exports = {
    user: {
        getInfo: async (username) => {
            let apiURL = process.env.API_URL;

            try {
                const response = await fetch(`${apiURL}/users/${username}`);
                const data = await response.json();

                return {
                    username: data.username,
                    full_name: data.full_name,
                    email: data.email,
                    avatar_url: data.avatar_url,
                    location: data.location,
                    website: data.website,
                    description: data.description,
                    followers_count: data.followers_count,
                    following_count: data.following_count
                };
            } catch (err) {
                console.log("[ERROR] An error occurred, please let us know. \n https://t.me/unoxdevs");
            }
        },
        getRepositories: async (username) => {
            let apiURL = process.env.API_URL;

            try {
                const response = await fetch(`${apiURL}/users/${username}/repos`);
                const data = await response.json()
                let repositories = data.slice(0);

                return repositories.map((repo) => {
                    return {
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        stars: repo.stars_count,
                        forks: repo.forks_count,
                        url: repo.html_url
                    };
                });
            } catch (err) {
                console.log("[ERROR] An error occurred, please let us know. \n\nTelegram: https://t.me/unoxdevs");
            }
        },
    },
    orgs: {
        getInfo: async (orgname) => {
            let apiURL = process.env.API_URL;

            try {
                const response = await fetch(`${apiURL}/orgs/${orgname}`);
                const data = await response.json();

                return {
                    name: data.username,
                    avatar_url: data.avatar_url,
                    description: data.description,
                    website: data.website,
                    location: data.location,
                };
            } catch (err) {
                console.log("[ERROR] An error occurred, please let us know. \n https://t.me/unoxdevs");
            }
        },
        getRepositories: async (orgname) => {
            let apiURL = process.env.API_URL;

            try {
                const response = await fetch(`${apiURL}/orgs/${orgname}/repos`);
                const data = await response.json()
                let repositories = data.slice(0);

                return repositories.map((repo) => {
                    return {
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        stars: repo.stars_count,
                        forks: repo.forks_count,
                        url: repo.html_url
                    };
                });
            } catch (err) {
                console.log("[ERROR] An error occurred, please let us know. \n\nTelegram: https://t.me/unoxdevs");
            }
        },
    }
};
