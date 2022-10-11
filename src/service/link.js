const url = new URL(window.location.href)

if (url.hostname === 'localhost') {
    url.port = '7070'
}

if (url.hostname === 'annaalexandrova1.github.io') {
    url.hostname = 'less9backend.herokuapp.com';
    url.protocol = 'https'
}

const root = url;
root.pathname = ''

const links = root.origin;

export default links