import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService1 implements InMemoryDbService {
  createDb() {
    let inventory = [
        {
            id: 1,
            name: "Imperial Landing Craft",
            photo: "app/img/db1/imperial-landing-craft.jpg",
            blueprint: "app/img/db1/imperial-landing-craft-detail.jpg",
            price: 150,
            totalPriceId : 150,
            qty: 1,
            views: 0,
            description: "A Sentinel-class landing craft, also known as a Sentinel-class shuttle or Imperial landing craft, is large-scale troop transport utilized by the Galactic Empire. Designed by Sienar Fleet Systems in the shape of its cousin, the Lambda-class T-4a shuttle, this larger, more spacious shuttle was primarily used to ferry a complement of 75 stormtroopers into battle, 55 more troops than the Lambda-class. The ship featured three wings: one stationary center foil and two articulated flanking wings. They could also be modified with special containers carrying vehicles. ",
            videoUrl: "noVideo"
        },
        {
            id: 2,
            name: "X Wing Fighter",
            photo: "app/img/db1/x-wing.jpg",
            blueprint: "app/img/db1/x-wing-detail.gif",
            price: 340,
            totalPriceId : 340,
            qty: 1,
            views: 0,
            description: "The Incom T-65 X-wing starfighter is the primary all-purpose starfighter of the Rebel Alliance and its successor governments. Known for its versatility and exceptional combat performance, it is a favorite with Rebel and New Republic pilots. Possessing deflector shields, a hyperdrive, an R2 astromech for repairs and navigation, and a complement of proton torpedoes, the X-wing allowed the Rebellion to launch raids in Imperial space with improved odds of a successful mission. The X-wing was so predominantly flown by Rebel and New Republic forces that it became a symbol of their faction, much like the TIE fighter and Star Destroyer were symbols of the Galactic Empire.",
            videoUrl: "6xncCLKC7gY"
        },
        {
            id: 3,
            name: "V Wing Airspeeder",
            photo: "app/img/db1/v-wing-airspeeder.jpg",
            blueprint: "app/img/db1/v-wing-airspeeder-detail.jpg",
            price: 220,
            totalPriceId : 220,
            qty: 1,
            views: 0,
            description: "The V-wing airspeeder's standard repulsorlift system is paired with efficient ion afterburners to provide the V-wing with fantastic speed. The single-pilot craft's top combat speed is 1,000 kilometers per hour. Additionally, when the powerful Chab-Ylwoum scramjet booster is employed, the craft's top speed is increased to 1,400 kilometers per hour. Braking and maneuvering flaps were at the rear of the craft. Heat dispersal fins were placed between the engines. Unfortunately, combat at such a speed is potentially dangerous, and overuse of the scramjet could cause dangerous overheating of the drive system, so the scramjet is reserved for hasty retreats. The V-wing's lack of shields required the pilot to use the craft's size and speed against enemy speeders and starfighters.",
            videoUrl: "noVideo"
        },
        {
            id: 4,
            name: "T-16 Skyhopper",
            photo: "app/img/db1/t-16-skyhopper.jpg",
            blueprint: "app/img/db1/t-16-skyhopper-detail.jpg",
            price: 180,
            totalPriceId : 180,
            qty: 1,
            views: 0,
            description: "The Incom Corporation T-16 Skyhopper is equipped with an ion drive and a fully pressurized cockpit, allowing it to operate at trans-orbital altitudes. Civilian versions of the skyhopper were armed with pneumatic cannons, and were equipped with targeting lasers though many law-enforcement agencies and planetary militaries throughout the galaxy utilized modified T-16s due to their overall good performance. However, because it is armed with only a single mounted repeating blaster, it is often overlooked by the military. Even so, these airspeeders were often used as training vehicles by the Rebel Alliance, due to the fact that their flight controls were similar to those of X-wings.",
            videoUrl: "jcuxUTkWm44"
        },
        {
            id: 5,
            name: "TIE Fighter",
            photo: "app/img/db1/tie-fighter.jpg",
            blueprint: "app/img/db1/tie-fighter-detail.jpg",
            price: 320,
            totalPriceId : 320,
            qty: 1,
            views: 0,
            description: "The TIE/LN starfighter is a small, short-range fighter developed, manufactured, and mass produced by Sienar Fleet Systems. Developed by SFS company head Raith Sienar, the basis for the TIE fighter can be traced back to Kuat Systems Engineering's Alpha-3 Nimbus starfighter, along with several other outmoded models from the Old Republic. Like their predecessors, TIE's employed two vertical wings similar in appearance to V-wing starfighters, however the Eta-2 Actis-class light interceptor bore even more similarities with its central cockpit pod, twin ion engines and common weapons technology.",
            videoUrl: "noVideo"
        },
        {
            id: 6,
            name: "World Devastator",
            photo: "app/img/db1/world-devastator.jpg",
            blueprint: "app/img/db1/world-devastator-detail.jpg",
            price: 4700,
            totalPriceId : 4700,
            qty: 1,
            views: 0,
            description: "World Devastators, also known as World Smashers, World Sweepers, Planet Smashers, or City Eaters, were gigantic superweapons, successors of the Imperial Leviathan, with strong tractor beams attached to them that could wreak havoc on planets. They were designed by Umak Leth and employed by the Galactic Empire under the reborn Emperor Palpatine. Although it is debatable if the World Devastators were deadlier than the Death Star, they were undoubtedly more efficient. The Death Star could merely destroy worlds, while the World Devastators could use a targeted world's material resources for the Empire's benefit.",
            videoUrl: "blpe_sGnnP4"
        },
        {
            id: 7,
            name: "Howlrunner",
            photo: "app/img/db1/howlrunner.jpg",
            blueprint: "app/img/db1/howlrunner-detail.jpg",
            price: 140,
            totalPriceId : 140,
            qty: 1,
            views: 0,
            description: "The Incom Corporation I-7 Howlrunner is a short range attack starfighter employed by the Galactic Empire during the Galactic Civil War. The Howlrunner was constructed around an aerodynamic fixed-wing structure. Two fins jutted out of the sides of the craft, meant to function as rudimentary maneuvering flaps. Though this design is rather simple it gave the Howlrunner superior performance to the TIE/LN starfighter in both space and atmosphere. The Howlrunner had a distinct advantage over the Empire's TIE Series in that it possessed on onboard deflector shield generator. This protection, coupled with the starfighter's tiny profile and low mass, made the Howlrunner a hard ship to destroy. However, the craft is not meant for long space battles or pitched one-on-one combat.",
            videoUrl: "noVideo"
        },
        {
            id: 8,
            name: "E Wing",
            photo: "app/img/db1/e-wing.jpg",
            blueprint: "app/img/db1/e-wing-detail.jpg",
            price: 410,
            totalPriceId : 410,
            qty: 1,
            views: 0,
            description: "The E-wing escort starfighter is a single-pilot starfighter developed by FreiTek Inc. It was the first fighter designed entirely under the support of the New Republic. As designed, the E-wing is intended to match, or exceed, the performance of the preceding X-wing series in nearly every respect, and was originally intended to replace the older design in New Republic service. However, the craft suffered from some significant problems when first deployed among front-line squadrons, including malfunction issues with the laser cannons and the new R7 astromech units. As a result, many pilots continued to fly upgraded versions of the venerable X-wing. Despite the initial problems, improved models of the E-wing would see wide spread use by the New Republic, particularly by the Fifth Fleet, and later by the Galactic Alliance. They would play a significant role in every engagement from the Black Fleet Crisis, through the Yuuzhan Vong War, and beyond. By the time of the Second Galactic Civil War, the E-wing had matured into an excellent starfighter design and equipped several elite squadrons of the Galactic Alliance. However, it never achieved the same popularity or wide spread use as the X-wing.",
            videoUrl: "i2-fsqNqYFk"
        },
        {
            id: 9,
            name: "Y-Wing Starfighter ",
            photo: "app/img/db1/y-wing.jpg",
            blueprint: "app/img/db1/y-wing-detail.jpg",
            price: 510,
            totalPriceId : 510,
            qty: 1,
            views: 0,
            description: " Affectionately known as a 'wishbone' to Rebel Alliance and New Republic pilots, the Y-wing starfighter is deployed as a fighter-bomber, designed to fight its way to its objective, deliver its payload of high explosives, and fight its way out again. Its weaponry included two laser cannons, two ion cannons, and two proton torpedo launchers. An astromech droid, such as an R2 unit, could be plugged into a socket behind the cockpit to act as a co-pilot and manage the ship's various systems. ",
            videoUrl: "noVideo"
        }

    ];
    return {inventory};
  }
}