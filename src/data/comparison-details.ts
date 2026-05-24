export interface TechSpec {
  label: string;
  original: string;
  homage: string;
}

export interface VisualSimilarity {
  feature: string;
  description: string;
}

export interface ComparisonDetail {
  id: string;
  originalName: string;
  homageName: string;
  heroTagline: string;
  inspirationStory: string;
  designPhilosophy: string;
  heritageContext: string;
  whyIconic: string;
  visualSimilarities: VisualSimilarity[];
  techSpecs: TechSpec[];
}

export const comparisonDetails: ComparisonDetail[] = [
  {
    id: 'submariner-style',
    originalName: 'Rolex Submariner 124060',
    homageName: 'San Martin SN007-G',
    heroTagline: 'Dos relojes.\nUna distancia visual sorprendentemente corta.',
    inspirationStory:
      'En 1953, Rolex estableció con el Submariner un vocabulario visual que hoy define una categoría entera: bisel rotatorio unidireccional, índices luminiscentes rectangulares, manecillas de perfil inconfundible. En siete décadas ese vocabulario se ha convertido en lenguaje cultural — reconocible instantáneamente sin conocer el precio ni el fabricante. El San Martin SN007 habla ese mismo idioma con notable fluidez. La pregunta que plantea esta comparación no es cuál es mejor: es qué nos revela que dos relojes tan distintos en precio puedan ser tan similares en apariencia.',
    designPhilosophy:
      '¿Cuánto del valor percibido en un reloj de buceo proviene de su ingeniería interna versus su lenguaje visual? El Submariner resuelve ambas dimensiones con excelencia suiza: calibre in-house 3235, acero 904L, cerámica cerachrom. El SN007 resuelve únicamente la dimensión visual — y lo hace con una fidelidad que sorprende bajo inspección cercana. Esa asimetría entre similitud estética y diferencia técnica es precisamente el núcleo de lo que esta comparación analiza. El ojo humano registra uno. El relojero registra el otro.',
    heritageContext:
      'El Submariner acumuló durante décadas un capital simbólico sin precedentes: jefes de estado, astronautas, el cine. Todo ese peso cultural se ha estratificado sobre una forma específica que reconocemos como "reloj de buceo clásico". El San Martin no hereda ese capital cultural — pero sí hereda la forma geométrica que lo representa. La brecha entre ambos no está donde el ojo la ve: está en la historia que rodea al objeto, en la precisión de la ingeniería que contiene, en la garantía institucional que lo acompaña. El lenguaje visual es compartido. El resto, no.',
    whyIconic:
      'La iconicidad de una forma visual no es propiedad exclusiva de quien la creó: es una realidad cultural que se independiza de su origen. El vocabulario del Submariner — bisel rotatorio, índices rectangulares, manecillas Mercedes — se ha repetido durante setenta años hasta convertirse en el lenguaje universal del reloj de buceo. Ese lenguaje puede enunciarse en distintos niveles de precio con resultados formalmente similares. La diferencia entre el Submariner y el SN007 está principalmente donde no se ve: en el calibre, los materiales, la historia, la precisión del acabado microscópico.',
    visualSimilarities: [
      {
        feature: 'Bisel rotatorio unidireccional',
        description:
          'Formalmente coincidentes desde la perspectiva del observador: perfil escalonado, triángulo luminiscente a las 12h, marcas cada 5 minutos. La diferencia entre cerachrom y aluminio anodizado es táctil y de durabilidad — no visual.',
      },
      {
        feature: 'Índices rectangulares aplicados',
        description:
          'Geometría, proporciones y distribución sobre la esfera prácticamente idénticas. La luminiscencia BGW9 del SN007 y el Chromalight del Submariner son indistinguibles para el ojo humano en condiciones normales de visibilidad.',
      },
      {
        feature: 'Manecillas Mercedes',
        description:
          'La forma de la aguja de horas — círculo perforado, trazo grueso — es uno de los elementos de mayor poder de reconocimiento en la relojería moderna. Aparece en ambos con las mismas proporciones relativas y el mismo relleno luminiscente.',
      },
      {
        feature: 'Asas protectoras de corona',
        description:
          'Las asas simétricas que flanquean la corona definen el perfil lateral del reloj tanto como la esfera define su frontal. La geometría de protección es coincidente en ambos casos. El ojo las registra como idénticas.',
      },
    ],
    techSpecs: [
      { label: 'Movimiento', original: 'Rolex Cal. 3235 (in-house)', homage: 'Miyota 8215' },
      { label: 'Reserva de marcha', original: '70 horas', homage: '42 horas' },
      { label: 'Frecuencia', original: '28.800 vph', homage: '21.600 vph' },
      { label: 'Resistencia al agua', original: '300m / 1000ft', homage: '200m / 660ft' },
      { label: 'Material bisel', original: 'Cerachrom (cerámica)', homage: 'Aluminio anodizado' },
      { label: 'Material caja', original: 'Acero 904L', homage: 'Acero 316L' },
      { label: 'Cristal', original: 'Zafiro doble AR', homage: 'Zafiro AR simple' },
      { label: 'Precio', original: 'CHF 9.600', homage: '$329 USD' },
    ],
  },

  {
    id: 'royal-oak-style',
    originalName: 'Audemars Piguet Royal Oak 15500ST',
    homageName: 'Pagani Design PD-1661',
    heroTagline: 'El mismo vocabulario visual.\nDoscientas veces el precio.',
    inspirationStory:
      'En 1971, Gerald Genta diseñó no un reloj sino un alfabeto visual completo: bisel octagonal, ocho tornillos hexagonales visibles, patrón tapisserie en la esfera, brazalete integrado. Ese alfabeto fue tan preciso y coherente que medio siglo después se sigue leyendo en relojes de todos los rangos de precio imaginables. El Pagani Design PD-1661 escribe con ese mismo alfabeto. Cuando se pregunta qué justifica una diferencia de precio de doscientas veces, la respuesta no está en lo que el ojo registra en la esfera: está en lo que contiene, en quién lo hizo, y en la historia que lo acompaña.',
    designPhilosophy:
      'Genta creó en 1971 un lenguaje visual tan completo y coherente que puede implementarse en distintos presupuestos con resultados formalmente próximos. Los ocho tornillos hexagonales, la continuidad entre caja y brazalete, el tapisserie: son elementos definibles, reproducibles, reconocibles. Lo que no es reproducible económicamente es la calidad del acero 904L, la precisión del calibre in-house 5202, la historia de 180 años de la manufactura. El PD-1661 demuestra que la forma puede separarse del contexto que la originó. Esa separación tiene un coste — pero ocurre visualmente más tarde de lo que el precio sugiere.',
    heritageContext:
      'El Royal Oak demostró en 1971 que el lujo no requería materiales preciosos: requería un lenguaje visual de alta definición, historia acumulada, y escasez gestionada. Medio siglo después, ese lenguaje visual — el octógono, los tornillos, el tapisserie — coexiste en una gama que va de los 22.800 CHF a los 129 USD. Eso no es una degradación del diseño original: es la confirmación de que cuando una forma alcanza suficiente resonancia cultural, adquiere vida más allá de su contexto económico de origen. El capital cultural sigue siendo exclusivo del 15500ST. La forma, no.',
    whyIconic:
      'El bisel octagonal con ocho tornillos visibles es uno de los motivos más reproducidos del diseño industrial del siglo XX. Su presencia en el PD-1661 es evidencia del alcance cultural que una forma puede alcanzar cuando codifica algo nuevo con suficiente precisión. La diferencia entre el 15500ST y el PD-1661 no reside en el bisel visible: reside en la ingeniería in-house, en el acabado microscópico pulido/satinado, en la garantía institucional. El lenguaje visual tiene un precio de entrada de 129 dólares. El resto del valor tiene un precio muy distinto.',
    visualSimilarities: [
      {
        feature: 'Bisel octagonal con 8 tornillos',
        description:
          'Los ocho tornillos hexagonales visibles — la firma más reconocible del Royal Oak — aparecen en el PD-1661 con proporciones y ángulo coincidentes. El ojo los registra como la misma solución formal.',
      },
      {
        feature: 'Patrón tapisserie',
        description:
          'El relieve cuadriculado de la esfera crea en ambos el mismo efecto de profundidad óptica bajo luz directa. La diferencia de escala del patrón requiere inspección cercana para detectarse.',
      },
      {
        feature: 'Brazalete integrado',
        description:
          'La continuidad visual entre caja y brazalete — la innovación más radical de Genta en 1971 — está presente en ambos como principio formal. El ojo registra la misma solución de diseño a distintos niveles de materialización.',
      },
      {
        feature: 'Índices baton sin numerales',
        description:
          'La ausencia de numerales sobre el tapisserie, con solo índices rectangulares aplicados, es una de las decisiones de diseño más características del Royal Oak. Ambos relojes la comparten.',
      },
    ],
    techSpecs: [
      { label: 'Movimiento', original: 'AP Cal. 5202 (in-house)', homage: 'Seiko NH35A' },
      { label: 'Reserva de marcha', original: '60 horas', homage: '41 horas' },
      { label: 'Frecuencia', original: '28.800 vph', homage: '21.600 vph' },
      { label: 'Material caja', original: 'Acero 904L', homage: 'Acero 316L' },
      { label: 'Brazalete', original: 'Integrado macizo', homage: 'Integrado articulado' },
      { label: 'Grosor', original: '8.1mm', homage: '11.5mm' },
      { label: 'Diámetro', original: '41mm', homage: '40mm' },
      { label: 'Precio', original: 'CHF 22.800', homage: '$129 USD' },
    ],
  },

  {
    id: 'speedmaster-style',
    originalName: 'Omega Speedmaster Professional',
    homageName: 'Seiko SNN255',
    heroTagline: 'El lenguaje visual del espacio.\nReproducido a una fracción de su coste.',
    inspirationStory:
      'El Speedmaster acumuló en sus primeras décadas un conjunto de marcadores visuales sin equivalente en la relojería civil: bisel taquimétrico negro exterior, tres subdiales sobre esfera negra, caja asimétrica con protectores de corona. La certificación NASA en 1965 y el paseo lunar de 1969 convirtieron esos marcadores en parte del imaginario cultural global. El Seiko SNN255 no tiene historia de vuelo espacial. Pero cuando se observan las dos esferas lado a lado, los marcadores que el ojo registra son sorprendentemente coincidentes. Esa coincidencia visual merece análisis independientemente de todo lo demás.',
    designPhilosophy:
      'El Speedmaster fue diseñado para ser leído con guante de traje espacial — y esa especificación extrema produjo un lenguaje estético muy específico y reconocible. El SNN255 hereda ese lenguaje visual sin heredar la especificación técnica que lo generó. Es una distinción crucial: el aspecto surgió de una función, pero puede reproducirse sin ella. La brecha entre ambos está fundamentalmente en el movimiento: calibre 1861 de cuerda manual con cronógrafo mecánico de rueda de columna versus cuarzo integrado. Esa diferencia no se ve desde fuera, pero define completamente lo que cada reloj es.',
    heritageContext:
      'La historia del Speedmaster es inseparable de la historia del programa espacial americano — y esa historia no puede reproducirse. Es un hecho histórico que pertenece exclusivamente al calibre 1861 y sus predecesores directos. Durante el Apollo 13, los astronautas usaron el Speedmaster para cronometrar manualmente una quema de motor de 14 segundos que los devolvió a la Tierra. Esa cadena de causalidad entre un diseño visual específico y un momento histórico concreto es lo que el SNN255 no puede transmitir — aunque comparta, con notable fidelidad, la apariencia exterior que la generó.',
    whyIconic:
      'El Speedmaster demuestra que la iconicidad puede construirse sobre la función extrema tanto como sobre la estética. Sus proporciones — bisel taquimétrico exterior, tres subdiales, caja asimétrica — fueron una consecuencia de especificaciones técnicas de misión. Paradójicamente, esa especificación técnica extrema produjo un lenguaje visual tan específico que puede reconocerse, reproducirse, y leerse en distintos contextos de precio. La diferencia es que el Speedmaster original porta una historia que el SNN255 no puede replicar. El lenguaje visual es reproducible. La historia, no.',
    visualSimilarities: [
      {
        feature: 'Bisel taquimétrico negro exterior',
        description:
          'La escala taquimétrica negra sobre el bisel exterior es el marcador visual más inmediatamente reconocible del Speedmaster. El SNN255 lo reproduce con la misma tipografía sans-serif y disposición radial. El material difiere; la lectura visual, no.',
      },
      {
        feature: 'Tres subdiales sobre esfera negra',
        description:
          'La disposición de los tres subdiales — el efecto de "cuadros dentro de cuadro" sobre fondo negro — es una de las composiciones de esfera más reconocibles de la relojería. El SNN255 replica el ritmo visual con notable fidelidad.',
      },
      {
        feature: 'Caja asimétrica con protectores',
        description:
          'Las asas que protegen la corona y los pulsadores del cronógrafo definen el perfil lateral asimétrico del Speedmaster. El SNN255 conserva esa asimetría funcional que el ojo identifica como parte del lenguaje formal.',
      },
      {
        feature: 'Manecilla de horas con banda luminiscente',
        description:
          'La manecilla ancha con relleno luminiscente central — diseñada para legibilidad máxima en condiciones de vuelo — aparece en ambos con la misma intención y efecto visual.',
      },
    ],
    techSpecs: [
      { label: 'Movimiento', original: 'Omega Cal. 1861 (manual)', homage: 'Seiko 7T42 (cuarzo)' },
      { label: 'Tipo cronógrafo', original: 'Mecánico rueda de columna', homage: 'Cuarzo integrado' },
      { label: 'Frecuencia', original: '21.600 vph', homage: 'Cuarzo' },
      { label: 'Cristal', original: 'Zafiro con AR', homage: 'Mineral endurecido' },
      { label: 'Diámetro', original: '42mm', homage: '42mm' },
      { label: 'Certificación', original: 'COSC + NASA Flight Qualified', homage: 'JIS B 7023' },
      { label: 'Material bisel', original: 'Aluminio anodizado negro', homage: 'Aluminio negro' },
      { label: 'Precio', original: '€5.900', homage: '$245 USD' },
    ],
  },

  {
    id: 'nautilus-style',
    originalName: 'Patek Philippe Nautilus 5711',
    homageName: 'Orient Mako XL',
    heroTagline: '¿Cuánto del lujo vemos?\n¿Cuánto simplemente suponemos?',
    inspirationStory:
      'El Nautilus de 1976 planteó una paradoja que la industria aún no ha resuelto: ¿cómo puede un reloj deportivo de acero costar más que uno de oro de vestir? La respuesta fue que Patek Philippe había convertido una forma específica — la silueta oval, las asas integradas, la esfera estriada — en sinónimo de exclusividad extrema mediante décadas de ingeniería excepcional y escasez deliberada. El Orient Mako reproduce esa forma con una eficacia visual sorprendente para su precio. Observar ambos relojes lado a lado es plantear una pregunta sobre la naturaleza de la percepción del lujo: ¿cuánto está en el objeto, y cuánto en la narrativa que lo rodea?',
    designPhilosophy:
      'Genta diseñó el Nautilus con la economía formal que distingue al gran diseño industrial: la silueta oval, las asas integradas, la esfera estriada horizontal. Cada uno de esos elementos es formalmente definible y, por tanto, formalmente reproducible. El Orient Mako los reproduce con resultados visualmente cercanos. La diferencia entre ambos no está en esos tres elementos: está en la precisión del acabado microscópico, en el calibre 26-330 S C de Patek, en la historia de Patek como manufactura de ultra alta relojería. Ninguno de esos factores se ve directamente al mirar la esfera.',
    heritageContext:
      'En 2021, Patek discontinuó el 5711 en esfera azul. En semanas, el precio en mercado secundario se cuadruplicó sobre un PVP de 35.000 CHF. Ese evento ilustra con claridad cómo el valor de un objeto de lujo depende de su narrativa institucional, su escasez gestionada, y su capital simbólico — tanto o más que de sus propiedades intrínsecas como objeto físico. El Mako comparte la forma sin compartir ninguno de esos factores. La brecha de precio entre ambos no refleja únicamente diferencias de ingeniería: refleja diferencias de historia, reputación, y control de oferta. La forma es la parte más reproducible del valor total.',
    whyIconic:
      'El Nautilus es icónico porque Patek Philippe construyó durante décadas una narrativa de exclusividad extrema alrededor de una forma específica de Genta. Esa forma — la silueta oval, las asas integradas, el esfera estriada — existe ahora en una gama que va de los 35.000 CHF a los 175 USD. Eso no significa que el 5711 y el Mako sean equivalentes: significa que la forma es la parte más reproducible de un objeto cuyo valor total es mayoritariamente no-formal. El Mako ofrece acceso visual. El Nautilus ofrece también todo lo que está detrás de lo visible.',
    visualSimilarities: [
      {
        feature: 'Silueta oval con asas integradas',
        description:
          'La silueta característica — oval horizontal con transición continua hacia el brazalete — está presente en ambos. Las proporciones del óvalo y su relación con las asas son visualmente coincidentes bajo observación normal.',
      },
      {
        feature: 'Esfera estriada horizontal',
        description:
          'El relieve horizontal de la esfera — el llamado "horizontale" — crea el mismo efecto de claroscuro en ambos relojes. Bajo luz lateral directa, el efecto visual es prácticamente indistinguible.',
      },
      {
        feature: 'Bisel integrado continuo',
        description:
          'La continuidad sin aristas entre bisel, caja y brazalete — la definición del "sporty elegance" de Genta — está presente en ambos como solución formal reconocible.',
      },
      {
        feature: 'Perfil de baja altura',
        description:
          'La vocación de discreción visual — el reloj que "desaparece" bajo el puño de la camisa — está presente en ambos. El Mako, con 10.4mm, conserva esa proporción de perfil que el ojo lee como característica del lenguaje Nautilus.',
      },
    ],
    techSpecs: [
      { label: 'Movimiento', original: 'Patek Cal. 26-330 S C', homage: 'Orient Cal. F6922 (in-house)' },
      { label: 'Reserva de marcha', original: '45 horas', homage: '40 horas' },
      { label: 'Frecuencia', original: '28.800 vph', homage: '21.600 vph' },
      { label: 'Grosor', original: '8.3mm', homage: '10.4mm' },
      { label: 'Diámetro', original: '40mm', homage: '45.5mm' },
      { label: 'Brazalete', original: 'Acero 316L integrado macizo', homage: 'Acero 316L integrado' },
      { label: 'Resistencia al agua', original: '120m', homage: '200m' },
      { label: 'Precio', original: 'CHF 35.000', homage: '$175 USD' },
    ],
  },

  {
    id: 'portugieser-style',
    originalName: 'IWC Portugieser Chronographe',
    homageName: 'Seagull 1963',
    heroTagline: 'La misma elegancia por sustracción.\nDistinto motor.',
    inspirationStory:
      'El Portugieser de 1939 definió un vocabulario estético construido sobre la ausencia deliberada: sin fecha, sin decoración superflua, sin complicaciones visibles. Solo numerales arábigos de trazo fino, el chemin de fer exterior, dos subdiales perfectamente proporcionados sobre esfera marfil. Ese vocabulario de la sustracción es paradójicamente difícil de mantener — requiere una confianza absoluta en las proporciones. El Seagull 1963 parte del mismo principio formal. Al observar las dos esferas, la primera impresión es de notable similitud — precisamente porque ambos relojes confían en los mismos elementos y rechazan los mismos ornamentos.',
    designPhilosophy:
      'La elegancia del Portugieser es la elegancia de la geometría correcta: la relación entre el diámetro de la esfera, el tamaño de los numerales, el grosor de las manecillas, el radio del chemin de fer está calibrada con una precisión que se percibe aunque no se pueda cuantificar. El Seagull 1963 parte de las mismas proporciones y llega a resultados formalmente próximos. La diferencia más significativa no es visual: es mecánica. El calibre 69355 automático de IWC con cronógrafo integrado versus el ST19 manual de columna-rueda del Seagull representan dos aproximaciones técnicas distintas a una misma pregunta estética.',
    heritageContext:
      'El Portugieser nació de un encargo de navegantes que querían precisión de cronómetro marino en formato de pulsera — una contradicción técnica en los años 40 que IWC resolvió instalando un movimiento de bolsillo. El Seagull 1963 tiene su propia historia de uso real: fue el cronógrafo oficial de la Fuerza Aérea China durante la Guerra Fría, fabricado en la misma manufactura estatal que equipó a los aviadores del PLA. Dos relojes con historias de uso profesional en contextos opuestos del siglo XX — y sin embargo formalmente muy similares. La misma forma puede generarse desde lugares muy distintos.',
    whyIconic:
      'El Portugieser es icónico por su argumento visual sobre la confianza en las proporciones: el lujo máximo como ausencia total de ornamentación. Ese argumento tiene una fuerza estética que persiste cuando se implementa en otros niveles de precio — como demuestra el Seagull 1963, que articula el mismo principio con notable eficacia. La diferencia entre ambos no está en el argumento visual que comparten: está en la profundidad mecánica del movimiento, en la historia institucional de IWC, en la precisión del acabado. El lenguaje formal es compartido. El resto del valor, no.',
    visualSimilarities: [
      {
        feature: 'Numerales arábigos de trazo fino',
        description:
          'La tipografía con serifa fina y el tamaño relativo de los numerales respecto al diámetro de la esfera son coincidentes en ambos relojes. El ojo los lee como la misma solución de legibilidad.',
      },
      {
        feature: 'Chemin de fer exterior',
        description:
          'El rail de minutos perimetral — la firma más característica del vocabulario Portugieser — está presente en ambos con la misma disposición radial y la misma función visual de separar la esfera del bisel.',
      },
      {
        feature: 'Dos subdiales simétricos',
        description:
          'La disposición clásica de pequeños segundos a las 9h y minutos cronógrafo a las 3h crea el mismo eje de simetría bilateral. Las proporciones de los subdiales respecto a la esfera son visualmente equiparables.',
      },
      {
        feature: 'Esfera marfil sin ornamentación',
        description:
          'La ausencia de cualquier elemento decorativo más allá de los funcionales — el principio de la sustracción — es el elemento de mayor reconocimiento visual del estilo Portugieser. Ambos relojes lo comparten como principio rector.',
      },
    ],
    techSpecs: [
      { label: 'Movimiento', original: 'IWC Cal. 69355 (automático)', homage: 'Seagull ST19 (manual)' },
      { label: 'Tipo cronógrafo', original: 'Rueda de columna', homage: 'Rueda de columna' },
      { label: 'Reserva de marcha', original: '68 horas', homage: '40 horas' },
      { label: 'Frecuencia', original: '28.800 vph', homage: '18.000 vph' },
      { label: 'Diámetro', original: '41mm', homage: '38mm' },
      { label: 'Material caja', original: 'Acero / Oro rosa', homage: 'Acero 316L' },
      { label: 'Resistencia al agua', original: '30m', homage: '30m' },
      { label: 'Precio', original: 'CHF 11.200', homage: '$420 USD' },
    ],
  },
];
