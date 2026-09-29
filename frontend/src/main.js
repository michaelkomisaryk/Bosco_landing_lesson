import {getSettings, getPage} from './api.js';
// import {hero} from './blocks/hero.js';
import {renderBlocks } from './renderBlocks.js';
import './styles/base.css';
async function start(){
  // const settings = getSettings()
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname)
    ]);

    document.title = `${page.title} - ${settings.siteName}`;
    const herroBlock = page.blocks.find((block) => block.type === "hero");
    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`;

  } catch (error){
    app.textContent=`somethign wnt wrong ${error.message}`
  }
  
}

start()