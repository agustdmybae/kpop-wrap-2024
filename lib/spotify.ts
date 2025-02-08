async function getSpotifyToken(clientId: string, clientSecret: string): Promise<string> {
    const url = 'https://accounts.spotify.com/api/token';
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });
  
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body.toString(),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.access_token;
  }
  
  export default getSpotifyToken;