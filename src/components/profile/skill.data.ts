import skills from "./skills.json";

export type SkillMap = Record<
	"dailyUse" | "occasionalUse" | "hobbies",
	string[]
>;

export function getSkillMap(): SkillMap {
	return skills;
}
