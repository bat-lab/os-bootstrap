import {safeLoad} from "js-yaml";
import args from "./src/parser/argv_parser";

import {readFileSync} from "fs";
import {ConfigFileModel} from "./src/models/config-file-model";
import {parse_dotfiles_link, parse_depencencies} from "./src/parser";

const readConfigFile = (filename: string) => <ConfigFileModel>safeLoad(<any>readFileSync(filename));


if (!args.configFile) {
  process.exit(-1);
}

const configFileObj: ConfigFileModel = readConfigFile(args.configFile);

console.log("============All Config===========")
const dotfiles_link_commands: string[] = parse_dotfiles_link(configFileObj.dotfiles);

const packages_installations_commands =  parse_depencencies(configFileObj.dependencies);
console.log(packages_installations_commands);


console.log(JSON.stringify(configFileObj.dependencies))


// const ret = require("./src/parser/index")(configFileObj);
// console.log(ret);

// console.log("==========================================")

// generate exec file
// const exec_generator = require("./src/utils/exec_generator.ts");
// console.log(exec_generator.simpleGeneration(ret.dotfiles, ret.dependencies));

