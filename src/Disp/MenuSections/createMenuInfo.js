import { menuFunctions } from '@cookiemonsterteam/cookiemonsterframework';
import { LatestReleaseNotes, ModDescription } from '../../Data/Moddata.ts';

/**
 * Creates the <div> to be added to the Info section
 * @returns {object} menuDiv	Object of the <div> of Cookie Monster in info tab
 */
export default function createMenuInfo() {
  const menuDiv = menuFunctions.createModMenuSection(
    'cookieMonsterMod',
    'Cookie Monster',
    'infoMenu',
  );

  if (Game.mods.cookieMonsterFramework.saveData.cookieMonsterMod.headers.infoMenu) {
    menuDiv.appendChild(menuFunctions.createInfoListing(ModDescription));
    menuDiv.appendChild(menuFunctions.createInfoListing(LatestReleaseNotes));
  }

  return menuDiv;
}
