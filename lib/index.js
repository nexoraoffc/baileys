import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#6f00f")(`
╔═╗─╔╦═══╦═╗╔═╦═══╦═══╦═══╗
║║╚╗║║╔══╩╗╚╝╔╣╔═╗║╔═╗║╔═╗║
║╔╗╚╝║╚══╗╚╗╔╝║║─║║╚═╝║║─║║
║║╚╗║║╔══╝╔╝╚╗║║─║║╔╗╔╣╚═╝║
║║─║║║╚══╦╝╔╗╚╣╚═╝║║║╚╣╔═╗║
╚╝─╚═╩═══╩═╝╚═╩═══╩╝╚═╩╝─╚╝
`));
console.log(chalk.hex("#6f00f")("Baileys modified by: NexoraOffc"));
console.log(chalk.hex("#6f00f")("Exclusive Baileys by Nexora"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
