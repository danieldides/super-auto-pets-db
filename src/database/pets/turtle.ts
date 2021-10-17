import { Ability, Trigger, Pet } from "..";

function turtleAbility(level: number): Ability {
  return {
    description: `Faint: Give ${level} friends behind Melon Armor`,
    trigger: Trigger.Faint,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "ApplyStatus",
      status: {
        name: "MelonArmor",
      },
      to: {
        kind: "FriendBehind",
        n: level,
      },
    },
  };
}

export const turtle = {
  name: "Turtle",
  tier: 3,
  baseAttack: 2,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...turtleAbility(1),
    description: "Faint: Give friend behind Melon Armor",
  },
  level2Ability: turtleAbility(2),
  level3Ability: turtleAbility(3),
} as Pet;