import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";
import { extraLife } from "../statusEffects/extraLife";

export const mushroom: Food = {
  ...getFoodIdentifiers("Mushroom"),
  image: {
    source: "twemoji",
    unicodeCodePoint: "\u{1F344}",
  },
  tier: 6,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal Extra Life.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ApplyStatus",
      to: {
        kind: "PurchaseTarget",
      },
      status: extraLife.id,
    },
  },
};
