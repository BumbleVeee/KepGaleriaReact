export interface KepTipus { /* objektum */
    kep: string;
    leiras: string;
    index: number;
}

export const KEPLISTA:KepTipus[]=[ /* Keptipusu objectum lista */
    {
        index: 0,
        kep: "kepek/maincoon1.jpg",
        leiras: "Ez egy szép macska."
    },
    {
        index: 1,
        kep: "kepek/maincoon2.jpg",
        leiras: "Ez egy nagy macska."
    },
    {
        index: 2,
        kep: "kepek/maincoon3.jpg",
        leiras: "Ez egy kis macska."
    }
]