import en from './en';
import es from './es';

const lang = process.env.REACT_APP_LANG || 'en';
const t = lang === 'es' ? es : en;

export default t;
