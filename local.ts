export interface Local {
  API_ENDPOINT: string;
}

let Local: Local;

if (process.env.NODE_ENV === 'development') {
  Local = {
    API_ENDPOINT: 'http://localhost:3000',
  };
} else {
  Local = {
    API_ENDPOINT: 'https://babb.ga',
  };
}

export default Local;
