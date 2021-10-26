import { Pet, Ability, Trigger } from "..";
import { getPetIdentifiers } from "../database";

export const ramSummoned: Pet = {
  ...getPetIdentifiers("Ram"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F40F}",
  },
  packs: ["StandardPack", "ExpansionPack1"],
  tier: "Summoned",
  baseAttack: "?",
  baseHealth: "?",
};

function sheepAbility(level: number): Ability {
  return {
    description: `Faint: Summon two ${level * 2}/${level * 2} Rams`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "SummonPet",
      pet: {
        ...ramSummoned,
        baseAttack: level * 2,
        baseHealth: level * 2,
      },
      team: "Friendly",
    },
  };
}

export const sheep: Pet = {
  ...getPetIdentifiers("Sheep"),
  image: {
    source: "noto-emoji",
    unicodeCodePoint: "\u{1F411}",
  },
  tier: 3,
  baseAttack: 2,
  baseHealth: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: sheepAbility(1),
  level2Ability: sheepAbility(2),
  level3Ability: sheepAbility(3),
};