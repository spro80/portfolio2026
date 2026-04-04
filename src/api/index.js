import stats    from './data/stats.json';
import skills   from './data/skills.json';
import timeline from './data/timeline.json';
import services from './data/services.json';
import projects from './data/projects.json';
import contact  from './data/contact.json';

const LANG = process.env.REACT_APP_LANG || 'en';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function resolve(data) {
  if (Array.isArray(data)) return data.map(resolve);
  if (data && typeof data === 'object') {
    if ('es' in data && 'en' in data) return data[LANG] ?? data.en;
    return Object.fromEntries(Object.entries(data).map(([k, v]) => [k, resolve(v)]));
  }
  return data;
}

export const getStats    = async () => { await delay(300); return resolve(stats);    };
export const getSkills   = async () => { await delay(350); return skills;            };
export const getTimeline = async () => { await delay(400); return resolve(timeline); };
export const getServices = async () => { await delay(450); return resolve(services); };
export const getProjects = async () => { await delay(500); return resolve(projects); };
export const getContact  = async () => { await delay(300); return resolve(contact);  };
