
export async function getSpotifyToken(){

    const res = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          body: JSON.stringify({
            grant_type: 'client_credentials',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
          }),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
      
    if (!res.ok) {
        throw new Error(`Failed to fetch token: ${res.statusText}`);
        }
        
    const data = await res.json();
    return data.access_token;
}