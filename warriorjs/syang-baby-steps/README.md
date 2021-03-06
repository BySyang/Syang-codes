# syang - Baby Steps

### _For players new to WarriorJS_

## Level 3

_The air feels thicker than before. There must be a horde of sludge._

> **TIP:** Be careful not to die! Use `warrior.health()` to keep an eye on your health, and `warrior.rest()` to earn 10% of your max health back.

> **CLUE:** When there's no enemy ahead of you, call `warrior.rest()` until your health is full before walking forward.

### Floor Map

```
╔═════════╗
║@ s ss s>║
╚═════════╝

@ = syang (20 HP)
s = Sludge (12 HP)
> = stairs
```

## Abilities

### Actions (only one per turn)

- `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
- `warrior.rest()`: Gain 10% of max health back, but do nothing more.
- `warrior.walk()`: Move one space in the given direction (forward by default).

### Senses

- `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
- `warrior.health()`: Return an integer representing your health.
- `warrior.think()`: Think out loud (`console.log` replacement).

## Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
