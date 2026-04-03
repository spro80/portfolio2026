import stats    from './data/stats.json';
import skills   from './data/skills.json';
import timeline from './data/timeline.json';
import services from './data/services.json';
import projects from './data/projects.json';
import contact  from './data/contact.json';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getStats    = async () => { await delay(300); return stats;    };
export const getSkills   = async () => { await delay(350); return skills;   };
export const getTimeline = async () => { await delay(400); return timeline; };
export const getServices = async () => { await delay(450); return services; };
export const getProjects = async () => { await delay(500); return projects; };
export const getContact  = async () => { await delay(300); return contact;  };
