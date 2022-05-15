/**
 * This will be the home of the general scraper framework, used to create specific integrations for other sites
 */

import writeFileSync from "fs";
import {devices, chromium, ElementHandle} from "@playwright/test";
import chalk from "chalk";

/*
export enum Scraper_States { //TODO: Add end states
    INITIALIZED,
    FIND_COURSE_CALENDAR,
    FOUND_COURSE_CALENDAR,
    FIND_COURSES,
    FOUND_COURSES,
    PARSING_COURSES,
    PARSING_COURSE,
    PARSED_COURSE,
    PARSED_COURSES,
    FINISHED,
};

export type Meeting = {
    days: string[];
    startTime: string;
    endTime: string;
    location?: string;
    id: number;
    room?: string;
};
*/
const courses = [];
const labs = [];
const lectures = [];
const seminars = [];
const tutorials = [];
const exams = [];
const sections = [];
const instructors = [];

//TODO: Migrate to winston logging, host online if possible
const logs = [];

module.exports = {
    Scraper_States,
    initialize: async () => {
        //TODO: Setup scraper/browser
    },
    goToCourseCalendar: async () => {
        //TODO: Base navigation to course calendar
    },
    getCourses: async () => {
        //TODO: Basic course location
    },
    _parseCourses: async () => {
        //TODO: call parser and store courses in DB
    }
};

