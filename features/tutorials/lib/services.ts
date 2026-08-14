import { Tutorial } from "./tutorials.dto";
import {Tutorials} from "./data";

export async function getAllTutorials (): Promise <Tutorial[]>{
    return Tutorials;
} 

export async function getTutorialByApp (slug:string) : Promise<Tutorial | null> {
    return Tutorials.find((t) => t.slug == slug) ?? null;
}