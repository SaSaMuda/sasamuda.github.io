const projectsData = [
    {
        id: "paneling",
        title: {
            en: "Coffee Room Paneling",
            es: "Panelado Cafetera",
            de: "Kaffeemaschinen-Täfelung"
        },
        description: {
            en: "Custom wood paneling designed and built around the coffee machine room to create a warm, inviting atmosphere.",
            es: "Panelado de madera a medida diseñado y construido alrededor de la sala de la cafetera para crear un ambiente cálido y acogedor.",
            de: "Massgefertigte Holzvertäfelung, die rund um die Kaffeemaschine entworfen und gebaut wurde, um eine warme, einladende Atmosphäre zu schaffen."
        },
        images: [
            "assets/20230123_170010.jpg",
            "assets/20230123_170019.jpg",
            "assets/20230123_170023.jpg",
            "assets/20230123_170027.jpg",
            "assets/20230123_170032.jpg",
            "assets/20230123_170037.jpg",
            "assets/20230123_170043.jpg",
            "assets/20230123_170051.jpg"
        ]
    },
    {
        id: "flooring",
        title: {
            en: "Parquet Flooring & Stair Cutout",
            es: "Suelo de Parquet y Recorte de Escalera",
            de: "Parkettboden & Treppenausschnitt"
        },
        description: {
            en: "Precision flooring installation featuring a complex round cutout for a spiral staircase.",
            es: "Instalación de precisión del suelo con un recorte redondo complejo para una escalera de caracol.",
            de: "Präzise Parkettverlegung mit einem komplexen runden Ausschnitt für eine Wendeltreppe."
        },
        images: [
            "assets/20251107_114744.jpg",
            "assets/20251108_173607.jpg",
            "assets/20251108_173614.jpg",
            "assets/20251108_173624.jpg",
            "assets/parque.png"
        ]
    },
    {
        id: "table_tennis",
        title: {
            en: "Table Tennis Pyrography",
            es: "Pirografía de Tenis de Mesa",
            de: "Tischtennis-Brandmalerei"
        },
        description: {
            en: "Detailed pyrography art applied to custom table tennis paddles.",
            es: "Arte detallado de pirografía aplicado a paletas de tenis de mesa personalizadas.",
            de: "Detaillierte Brandmalerei auf massgefertigten Tischtennisschlägern."
        },
        images: [
            "assets/image-1766225730992.jpg",
            "assets/image-1766254762408.jpg",
            "assets/IMG-20260525-WA0008.jpg?v=2"
        ]
    },
    {
        id: "jewelry",
        title: {
            en: "Small Silver Works",
            es: "Pequeños Trabajos en Plata",
            de: "Kleine Silberarbeiten"
        },
        description: {
            en: "Minor silver work, including crafting a small plaque and soldering a bracelet.",
            es: "Trabajos menores en plata, incluyendo la creación de una pequeña placa y la soldadura de una pulsera.",
            de: "Kleinere Silberarbeiten, darunter die Anfertigung einer kleinen Plakette und das Löten eines Armbands."
        },
        images: [
            "assets/image-1765617903687.jpg",
            "assets/image-1765621035586.jpg",
            "assets/image-1765624132702.jpg",
            "assets/image-1768039836230.jpg",
            "assets/image-1768040039671.jpg",
            "assets/image-1768041193729.jpg",
            "assets/20260110_114627_1.mp4",
            "assets/20260110_133046.jpg"
        ]
    },
    {
        id: "sewing",
        title: {
            en: "Sewing Projects",
            es: "Proyectos de Costura",
            de: "Nähprojekte"
        },
        description: {
            en: "Custom sewing and fabric work, including repairs and original creations.",
            es: "Trabajos de costura y telas a medida, incluyendo reparaciones y creaciones originales.",
            de: "Massgeschneiderte Näh- und Stoffarbeiten, einschliesslich Reparaturen und origineller Kreationen."
        },
        images: [
            "assets/20251129_111604.jpg",
            "assets/image-1763199247491.jpg",
            "assets/image-1764352179358.jpg",
            "assets/kissen.jpeg"
        ]
    },
    {
        id: "trellis",
        title: {
            en: "Custom Wooden Trellis",
            es: "Enrejado de Madera a Medida",
            de: "Massgeschneidertes Holzspalier"
        },
        description: {
            en: "A custom-designed wooden trellis for climbing plants, built from scratch.",
            es: "Un enrejado de madera diseñado a medida para plantas trepadoras, construido desde cero.",
            de: "Ein massgefertigtes Holzspalier für Kletterpflanzen, von Grund auf neu gebaut."
        },
        images: [
            "assets/Screenshot 2026-05-31 210652.png",
            "assets/trellis.jpeg",
            "assets/TimelapseTrellis.mp4"
        ]
    },
    {
        id: "atelier_shelf",
        title: {
            en: "Atelier Shelf",
            es: "Estante de Taller",
            de: "Atelierregal"
        },
        description: {
            en: "A robust custom-built wooden shelf for organizing tools and materials in the atelier.",
            es: "Un robusto estante de madera hecho a medida para organizar herramientas y materiales en el taller.",
            de: "Ein robustes, massgefertigtes Holzregal zur Organisation von Werkzeugen und Materialien im Atelier."
        },
        images: [
            "assets/meonshelfatelier.jpeg",
            "assets/shelfatelier.jpeg",
            "assets/drillingshelfatelier.mp4",
            "assets/TimelapseShelfAtelier.mp4"
        ]
    },
    {
        id: "chest",
        title: {
            en: "Yakisugi Training Chest",
            es: "Baúl de Entrenamiento Yakisugi",
            de: "Yakisugi-Trainingskiste"
        },
        description: {
            en: "A chest for training equipment finished with the Japanese Yakisugi technique—straining the wood with fire to make it superior.",
            es: "Un baúl para equipo de entrenamiento con acabado Yakisugi—tensando la madera con fuego para hacerla superior.",
            de: "Eine Kiste für Trainingsgeräte, veredelt mit der Yakisugi-Technik – das Holz wird durch Feuer strapaziert, um es widerstandsfähiger zu machen."
        },
        images: [
            "assets/TimelapseChest.mp4",
            "assets/20260206_143420_1.mp4"
        ]
    },
    {
        id: "wandtablar",
        title: {
            en: "Convenient Wall Shelf",
            es: "Estante de Pared Práctico",
            de: "Praktisches Wandtablar"
        },
        description: {
            en: "A wall shelf designed to utilize dead space, featuring custom holes to easily route charging cables.",
            es: "Un estante de pared diseñado para aprovechar el espacio muerto, con agujeros personalizados para pasar cables de carga.",
            de: "Ein Wandregal zur Nutzung toten Raums, mit massgefertigten Löchern zur Durchführung von Ladekabeln."
        },
        images: [
            "assets/Wandtablar1.jpeg",
            "assets/Wandtablar2.jpeg",
            "assets/Wandtablar3.jpeg"
        ]
    },
    {
        id: "bike_scaffold",
        title: {
            en: "Bike Scaffold for Bags",
            es: "Soporte de Bicicleta para Bolsas",
            de: "Fahrradgerüst für Taschen"
        },
        description: {
            en: "A custom scaffold made solely of welded metal rods, designed to attach bike bags to the luggage rack.",
            es: "Un soporte a medida hecho únicamente de varillas de metal soldadas, diseñado para fijar bolsas de bicicleta al portaequipajes.",
            de: "Ein massgefertigtes Gerüst, das ausschliesslich aus geschweissten Metallstangen besteht, um Fahrradtaschen am Gepäckträger zu befestigen."
        },
        images: [
            "assets/bikescaffoldforbags.jpeg"
        ]
    },
    {
        id: "photo_stand",
        title: {
            en: "Versatile Photo Stand",
            es: "Soporte de Fotos Versátil",
            de: "Vielseitiger Fotoständer"
        },
        description: {
            en: "A minimal and versatile wooden stand. Using two together allows you to showcase anything from trading cards up to A2 papers.",
            es: "Un soporte de madera minimalista y versátil. Usar dos juntos permite exhibir desde tarjetas coleccionables hasta papeles A2.",
            de: "Ein minimalistischer und vielseitiger Holzständer. Mit zwei Ständern lassen sich von Sammelkarten bis hin zu A2-Papieren alles präsentieren."
        },
        images: [
            "assets/IMG-20251203-WA0044.jpg",
            "assets/IMG-20251203-WA0047.jpg",
            "assets/IMG_4619.jpg",
            "assets/IMG_4621.jpg",
            "assets/IMG_4627.jpg",
            "assets/IMG_4628.jpg",
            "assets/marco.png"
        ]
    },
    {
        id: "shelf",
        title: {
            en: "Wooden Shelf Fabrication",
            es: "Fabricación de Estante de Madera",
            de: "Holzregal-Herstellung"
        },
        description: {
            en: "Fabrication and assembly of a wooden shelf based on an existing design.",
            es: "Fabricación y montaje de un estante de madera basado en un diseño existente.",
            de: "Herstellung und Montage eines Holzregals nach einem bestehenden Design."
        },
        images: [
            "assets/20260326_141228.jpg",
            "assets/20260326_150815.jpg",
            "assets/20260327_143529.jpg",
            "assets/20260327_143540.jpg",
            "assets/20260327_185812.jpg",
            "assets/20260327_185820.jpg"
        ]
    },
    {
        id: "small_things",
        title: {
            en: "Workshop Chronicles",
            es: "Crónicas de Taller",
            de: "Werkstatt-Chroniken"
        },
        description: {
            en: "A collection of small works in progress, various experiments, and miscellaneous shop tasks.",
            es: "Una colección de pequeños trabajos en curso, varios experimentos y tareas misceláneas del taller.",
            de: "Eine Sammlung kleiner Arbeiten in Arbeit, verschiedener Experimente und sonstiger Werkstattaufgaben."
        },
        images: [
            "assets/20260107_180610.jpg",
            "assets/20260115_171304.jpg",
            "assets/20260125_142719.jpg",
            "assets/20260127_183034.jpg",
            "assets/20260129_154330.jpg",
            "assets/20260131_111436.jpg",
            "assets/20260305_073717.jpg",
            "assets/IMG-20260101-WA0025.jpg",
            "assets/IMG-20260102-WA0059.jpg",
            "assets/IMG-20260126-WA0000.jpg",
            "assets/IMG-20260209-WA0000.jpg",
            "assets/IMG-20260214-WA0003.jpg",
            "assets/Screenshot_20250819_004342_YouTube.jpg",
            "assets/frenoPuerta.png",
            "assets/image-1767803143358.jpg",
            "assets/VID-20251017-WA0029_1.mp4",
            "assets/Screenshot 2026-05-31 210726.png",
            "assets/20260126_203621(0).jpg",
            "assets/20260126_203605.jpg"
        ]
    }
];
