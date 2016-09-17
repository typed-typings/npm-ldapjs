
import Control = require('./control');
export {Control};

export function getControl(ber: any): Control;

export class EntryChangeNotificationControl extends Control { }
export class PagedResultsControl extends Control { }
export class PersistentSearchControl extends Control { }
export class ServerSideSortingRequestControl extends Control { }
export class ServerSideSortingResponseControl extends Control { }
