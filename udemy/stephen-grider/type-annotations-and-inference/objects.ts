const hero = {
    givenName: "Magnus",
    damage: 30,
    statistics: {
        agality: 21,
        strength: 20,
        intelligence: 18,
    },
    setDamage(damage: number): void {
        this.damage = damage;
    },
};

const { givenName }: { givenName: string } = hero;
const {
    statistics: { agality, strength, intelligence },
}: { statistics: { agality: number; strength: number; intelligence: number } } = hero;
