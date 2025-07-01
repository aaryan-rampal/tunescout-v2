import getMultipleVariables from "../configs/env";

export const getSpotifyEnvVariables = (): Record<string, string> => {
    const envVariables = getMultipleVariables(['VITE_SPOTIFY_CLIENT_ID', 'VITE_SPOTIFY_REDIRECT_URI']);
    const scope = 'user-read-private user-read-email';
    return {
        clientId: envVariables['VITE_SPOTIFY_CLIENT_ID'],
        redirectUri: envVariables['VITE_SPOTIFY_REDIRECT_URI'],
        scope
    };
}

export const constructSpotifyAuthUrl = (): URL => {
    const env_variables: Record<string, string> = getMultipleVariables(['VITE_SPOTIFY_CLIENT_ID', 'VITE_SPOTIFY_REDIRECT_URI'])
    const clientId = env_variables['VITE_SPOTIFY_CLIENT_ID']
    const redirectUri = env_variables['VITE_SPOTIFY_REDIRECT_URI']
    const scope = 'user-read-private user-read-email'
    const authUrl = new URL('https://accounts.spotify.com/authorize');

    authUrl.searchParams.set('client_id', clientId);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('scope', scope);

    return authUrl;
}
