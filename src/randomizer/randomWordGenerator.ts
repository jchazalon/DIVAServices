"use strict";
/**
 * Created by lunactic on 07.11.16.
 */


import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";

export class RandomWordGenerator {

    static rootDir = path.resolve(__dirname, "../../", "words");
    static adjectives = fs.readFileSync(RandomWordGenerator.rootDir + "/adjectives", "utf8").toString().split("\n");
    static animals = fs.readFileSync(RandomWordGenerator.rootDir + "/animals", "utf8").toString().split("\n");

    static generateRandomWord(): string {
        return _.sample(RandomWordGenerator.adjectives) + _.sample(RandomWordGenerator.adjectives) + _.sample(RandomWordGenerator.animals);
    }

}