import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import 'dotenv/config';

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignore
const db = drizzle(sql, { schema });


const languages = [
  {
    id:1,
    title:'Indian',
    imageSrc:'/in.png',
  },{
    id:2,
    title:'Japanese',
    imageSrc:'/jp.svg',
  },
  {
    id:3,
    title:'Spanish',
    imageSrc:'/es.svg',
  },
  {
    id:4,
    title:'Russian',
    imageSrc:'/fr.svg',
  }
];


const main = async () => {
  try {
    console.log("Seeding Database...");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);

    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);


    await db.insert(schema.courses).values(languages);

    // added units 
    await db.insert(schema.units).values([
      {
        id:1,
        courseId:1,
        title:'Units 1',
        description:'Learn the basics of Indain',
        order:1,
      }
    ]);

    await db.insert(schema.lessons).values([
      {
        id:1,
        unitId:1,
        title:'Nouns',
        order:1,
      },
      {
        id:2,
        unitId:1,
        title:'Verbs',
        order:2,
      }
    ]);

    //challenges 

    await db.insert(schema.challenges).values([
      {
        id:1,
        lessonId:1,
        type:'SELECT',
        order:1,
        question:'Which on of the "the man"?',
      },
      {
        id:2,
        lessonId:2,
        type:'ASSIST',
        order:2,
        question:'Who',
      },
    ]);

    //challeges Option 
    await db.insert(schema.challengeOptions).values([
      {
        id:1,
        challengeId:1,
        imageSrc:'/man.svg',
        correct:true,
        audioSrc:'/es_man.mp3',
        text:'el homre',
      },
      {
        id:2,
        challengeId:1,
        imageSrc:'/women.svg',
        correct:false,
        audioSrc:'/es_women.mp3',
        text:'la mujer',
      },
      {
        id:3,
        challengeId:1,
        imageSrc:'/robot.svg',
        correct:false,
        audioSrc:'/es_robot.mp3',
        text:'el robot',
      },
    ]);


    console.log("Seeding Finished!");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Seed database");
  }
};

main();