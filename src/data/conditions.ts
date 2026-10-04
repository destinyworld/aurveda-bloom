export type Category = "Digestive" | "Respiratory" | "Lifestyle" | "Skin" | "Pain" | "Women" | "Men" | "Mental" | "General";
export type Herb = { name: string; use: string; preparation: string; safety: string };
export type Condition = {
  slug: string; name: string; category: Category; icon: string; summary: string; perspective: string;
  herbs: Herb[]; herbalRemedyTips: string[]; tryToday: string[]; foods: string[]; limit: string[]; practices: string[];
  therapies: string[]; evidence: "Commonly used" | "Limited or mixed" | "Professional guidance";
  safety: string; warnings: string[]; serious?: boolean;
};

export const conditionHerbalData: Record<string, { herbs: Herb[]; herbalRemedyTips: string[] }> = {
  "acidity-heartburn": {
    "herbs": [
      {
        "name": "Yashtimadhu (Licorice)",
        "use": "Soothes irritated mucous membranes of the esophagus and helps buffer excess gastric acid.",
        "preparation": "Steep 1/2 tsp of licorice root powder in warm water 20 minutes before meals.",
        "safety": "Avoid excessive or prolonged use if you have hypertension or kidney conditions."
      },
      {
        "name": "Coriander (Dhanyaka)",
        "use": "Traditional cooling digestive herb that pacifies aggravated Pitta and burning sensations.",
        "preparation": "Soak 1 tsp crushed seeds overnight in 1 cup room-temperature water; strain and drink in the morning.",
        "safety": "Generally very safe in culinary and infusion amounts."
      },
      {
        "name": "Fennel (Saunf)",
        "use": "Relaxes gastric sphincter spasms and neutralizes post-meal burning discomfort.",
        "preparation": "Chew 1/2 tsp roasted fennel seeds after meals, or brew as a gentle tea.",
        "safety": "Avoid concentrated essential oil extracts during early pregnancy."
      }
    ],
    "herbalRemedyTips": [
      "Coriander-Cumin cold infusion (Himam): Steep 1 tsp each of crushed coriander and cumin seeds in room-temperature water overnight; strain and drink in the morning to calm burning acid reflux.",
      "Licorice (Yashtimadhu) pre-meal tea: Sip 1/2 cup of warm licorice root tea 20 minutes before meals to form a soothing protective layer over the esophageal lining.",
      "Amla & Rock Sugar cooling sip: Mix 1/2 tsp pure organic Amla (Amalaki) powder with a pinch of crushed rock candy sugar (mishri) in lukewarm water to pacify Pitta acid surges."
    ]
  },
  "indigestion": {
    "herbs": [
      {
        "name": "Fresh Ginger (Adrak)",
        "use": "Ayurveda's universal digestive catalyst (Vishwabhesaja) that stimulates digestive fire (Agni).",
        "preparation": "Chew a thin sliver of fresh ginger with a pinch of rock salt and lemon juice 10 minutes prior to meals.",
        "safety": "Use cautiously if you have active gastric ulcers or bleeding disorders."
      },
      {
        "name": "Ajwain (Carom Seeds)",
        "use": "Rapidly dispels heaviness, sluggish digestion, and post-meal fullness.",
        "preparation": "Boil 1/2 tsp ajwain seeds in 2 cups of water for 5 minutes; strain and drink warm.",
        "safety": "Heating nature; avoid excessive doses in high Pitta or severe reflux."
      },
      {
        "name": "Trikatu (Ginger, Black Pepper, Pippali)",
        "use": "Traditional warming polyherbal blend that accelerates sluggish metabolic breakdown.",
        "preparation": "Add a tiny pinch to warm soups or hot water before meals.",
        "safety": "Avoid on an empty stomach if prone to heartburn or gastritis."
      }
    ],
    "herbalRemedyTips": [
      "Ginger & Rock Salt appetizer: Chew a thin sliver of fresh ginger sprinkled with pink rock salt and 2 drops of fresh lemon juice 10 minutes before meals to activate digestive enzymes.",
      "Warm Ajwain & Hing infusion: Boil 1/2 tsp carom seeds with a tiny pinch of roasted asafoetida (hing) in warm water; sip after heavy meals to dissipate fullness.",
      "Takra (Spiced Buttermilk): Whisk 2 tablespoons of fresh homemade yogurt into 1 cup of water with a pinch of roasted cumin and cilantro; drink with lunch to support digestive fire."
    ]
  },
  "constipation": {
    "herbs": [
      {
        "name": "Triphala",
        "use": "Renowned three-fruit blend (Haritaki, Bibhitaki, Amalaki) that tones bowel muscles and supports natural peristalsis.",
        "preparation": "Mix 1/2 to 1 tsp of Triphala powder in warm water 45 minutes before sleep.",
        "safety": "Do not use during acute diarrhea; consult your physician during pregnancy."
      },
      {
        "name": "Haritaki",
        "use": "Classical bowel-regulating rasayana with downward motility action (Vatanulomana).",
        "preparation": "Take 1/2 tsp with warm water or ghee at bedtime.",
        "safety": "Avoid in severe dehydration, exhaustion, or during acute fasting."
      },
      {
        "name": "Psyllium Husk (Isabgol)",
        "use": "Gentle bulk-forming soluble fiber that softens and expands stool volume.",
        "preparation": "Stir 1-2 tsp rapidly into a full glass of warm water or milk; drink immediately followed by another glass of water.",
        "safety": "Always consume with sufficient fluids to prevent intestinal blockage."
      }
    ],
    "herbalRemedyTips": [
      "Triphala bedtime draught: Mix 1/2 to 1 teaspoon of organic Triphala churna into a cup of warm water, let sit for 5 minutes, and drink before sleeping to encourage gentle morning regularity.",
      "Warm Munakka (Black Raisin) decoction: Simmer 8-10 soaked black seeded raisins in a cup of water or milk; eat the softened fruit and drink the warm liquid before bed for natural bowel lubrication.",
      "Castor Oil with warm tea: For stubborn sluggishness, add 1/2 to 1 teaspoon of pure cold-pressed castor oil into warm ginger tea before bed (use occasionally, not for prolonged periods)."
    ]
  },
  "gas-bloating": {
    "herbs": [
      {
        "name": "Hing (Asafoetida)",
        "use": "Potent carminative spice that breaks down trapped intestinal gas and settles abdominal spasms.",
        "preparation": "Dissolve a tiny pinch in warm water or saute in ghee before adding to legumes.",
        "safety": "Avoid large doses; discontinue if skin flushing occurs."
      },
      {
        "name": "Cumin (Jeera)",
        "use": "Calms fermentation in the gut and prevents spasmodic gas accumulation.",
        "preparation": "Simmer 1 tsp cumin seeds in warm water or chew roasted seeds post-meal.",
        "safety": "Consult a doctor if taking blood sugar-lowering medications."
      },
      {
        "name": "Cardamom (Elaichi)",
        "use": "Aromatic carminative that harmonizes digestion and relieves lower abdominal pressure.",
        "preparation": "Crush 1-2 green pods into hot water or herbal teas.",
        "safety": "Safe for general food use; monitor if you have gallstones."
      }
    ],
    "herbalRemedyTips": [
      "Classical CCF (Cumin-Coriander-Fennel) Tea: Simmer 1/2 tsp each of cumin, coriander, and fennel seeds in 3 cups of water for 5 minutes; strain and sip warm throughout the day.",
      "Warm Hing-Ghee navel application: Warm a pinch of asafoetida (hing) in 1/2 tsp warm ghee or sesame oil and massage gently in a clockwise circle around the navel to release trapped gas.",
      "Roasted Ajwain & Fennel chew: Keep equal parts dry-roasted ajwain and fennel seeds in a container; chew 1/2 tsp after meals to prevent post-meal bloating."
    ]
  },
  "diarrhea": {
    "herbs": [
      {
        "name": "Kutaja (Holarrhena)",
        "use": "Ayurveda's premier astringent herb to restore intestinal tone and reduce excessive fluid loss.",
        "preparation": "Take 1/4 to 1/2 tsp Kutaja bark powder in warm water or buttermilk twice daily.",
        "safety": "Use only short-term; seek immediate medical care if stools contain blood or high fever is present."
      },
      {
        "name": "Bilva (Bael Fruit)",
        "use": "Rich in tannins and mucilage that bind loose stools and soothe irritated mucosal linings.",
        "preparation": "Consume 1/2 tsp dried unripe bael powder with room-temperature water or diluted yogurt.",
        "safety": "Do not use during chronic constipation."
      },
      {
        "name": "Nutmeg (Jaiphal)",
        "use": "Aromatic spice with natural intestinal-stabilizing and antispasmodic qualities.",
        "preparation": "Grate a tiny pinch (under 1/8 tsp) into warm water or fresh buttermilk.",
        "safety": "Never exceed tiny culinary pinches; high amounts can cause dizziness."
      }
    ],
    "herbalRemedyTips": [
      "Bilva (Bael) & Buttermilk mix: Stir 1/2 tsp unripe bael fruit powder into a small cup of fresh buttermilk; sip twice daily to bind bowel movements and replenish gut electrolytes.",
      "Roasted Cumin & Pomegranate elixir: Drink 1/2 cup fresh pomegranate juice sprinkled with freshly roasted cumin powder to cool intestinal heat and reduce fluid transit.",
      "Nutmeg & Ginger rehydration water: Add a tiny grating of nutmeg and 1/4 tsp dry ginger powder into warm water with a pinch of rock salt and raw sugar for gentle natural hydration."
    ]
  },
  "irritable-bowel-syndrome": {
    "herbs": [
      {
        "name": "Bilva (Bael)",
        "use": "Amphoteric bowel regulator that helps normalize both intermittent loose stools and spasmodic cramping.",
        "preparation": "Drink a mild decoction of dried bael fruit between meals.",
        "safety": "Consult a gastroenterologist for definitive diagnosis and ongoing care."
      },
      {
        "name": "Peppermint",
        "use": "Relaxes visceral smooth muscles and decreases colon hypersensitivity.",
        "preparation": "Steep peppermint leaves in hot water; enjoy lukewarm after meals.",
        "safety": "May aggravate acid reflux in some individuals."
      },
      {
        "name": "Chamomile",
        "use": "Calms the gut-brain axis, soothing enteric nervous system tension and digestive colic.",
        "preparation": "Steep 1 tea bag in hot water for 7 minutes; sip in a quiet environment.",
        "safety": "Avoid if allergic to ragweed or Asteraceae family plants."
      }
    ],
    "herbalRemedyTips": [
      "Fresh Takra (Medicinal Buttermilk) therapy: Whisk homemade yogurt with 4 parts water, roasted cumin, and curry leaves; drink with lunch to soothe enteric hyper-reactivity.",
      "Warm Fennel & Peppermint infusion: Sip a mild warm tea made with crushed fennel seeds and peppermint leaves 30 minutes after meals to release intestinal cramping.",
      "Castor oil pack on lower abdomen: Apply a warm cloth soaked in castor oil over the abdomen for 15 minutes before bed to ease chronic Vata-induced abdominal spasms."
    ]
  },
  "nausea": {
    "herbs": [
      {
        "name": "Fresh Ginger",
        "use": "Potent anti-emetic herb that accelerates gastric emptying and dispels queasiness.",
        "preparation": "Steep thin fresh slices in hot water; sip at room temperature.",
        "safety": "Use moderation during pregnancy; consult your healthcare provider."
      },
      {
        "name": "Cardamom (Elaichi)",
        "use": "Pleasant aromatic spice that soothes reversed stomach peristalsis (Chhardi).",
        "preparation": "Crush 1-2 green cardamom pods and chew the seeds slowly or inhale the crushed aroma.",
        "safety": "Generally safe for culinary and mild tea use."
      },
      {
        "name": "Lemon & Mint (Pudina)",
        "use": "Refreshing herbs that stimulate salivary and gastric balance while clearing throat irritation.",
        "preparation": "Steep fresh mint leaves in warm water with a slice of lemon.",
        "safety": "Avoid if citrus triggers oral sensitivity or reflux."
      }
    ],
    "herbalRemedyTips": [
      "Fresh Ginger & Honey lick: Mix 1/2 tsp fresh ginger juice with 1/2 tsp raw honey; lick slowly in tiny drops from a spoon to rapidly quell queasiness.",
      "Crushed Cardamom & Mint tea: Crush 2 cardamom pods and a sprig of fresh mint into boiling water; strain and sip slowly when cool to calm stomach unrest.",
      "Roasted Cumin & Lemon water: Squeeze a wedge of fresh lemon into a cup of warm water with a pinch of roasted cumin; sip slowly to restore gastric directional flow."
    ]
  },
  "common-cold": {
    "herbs": [
      {
        "name": "Tulsi (Holy Basil)",
        "use": "Antimicrobial and immunomodulating herb that dispels Kapha congestion and seasonal chills.",
        "preparation": "Steep 5-7 fresh or dried leaves in hot water for 5 minutes.",
        "safety": "May lower blood sugar; consult clinician during pregnancy."
      },
      {
        "name": "Black Pepper (Maricha)",
        "use": "Pungent heating spice that breaks up sticky respiratory mucus and enhances bioavailability.",
        "preparation": "Combine a pinch of freshly ground black pepper with honey or warm milk.",
        "safety": "Avoid large doses if you have stomach ulcers."
      },
      {
        "name": "Ginger (Adrak)",
        "use": "Warms the respiratory tract, promotes healthy sweating, and relieves chest tightness.",
        "preparation": "Boil sliced fresh ginger root in water for 7 minutes.",
        "safety": "Use caution with blood thinners."
      }
    ],
    "herbalRemedyTips": [
      "Ayush Tulsi-Ginger Kadha: Boil 6 Tulsi leaves, 1/2 inch crushed ginger, 2 crushed black peppercorns, and 1 cinnamon stick in 2 cups water until halved; drink warm with raw honey.",
      "Turmeric-Eucalyptus herbal steam: Inhale steam from a pot of hot water infused with 1/2 tsp turmeric powder and 2 drops of eucalyptus oil for 5 minutes to clear nasal pathways.",
      "Ginger-Tulsi honey paste: Blend equal parts fresh ginger juice and tulsi juice with raw honey; take 1/2 teaspoon 3 times daily to soothe throat tickle and clear phlegm."
    ]
  },
  "cough": {
    "herbs": [
      {
        "name": "Vasaka (Adhatoda vasica)",
        "use": "Ayurveda's premier respiratory herb; contains vasicine which liquefies thick sputum and relaxes bronchia.",
        "preparation": "Steep 1/2 tsp dried Vasaka leaf powder in hot water or take with honey.",
        "safety": "Seek medical attention if cough persists beyond 2 weeks or involves blood."
      },
      {
        "name": "Sitopaladi Churna",
        "use": "Traditional polyherbal formulation (bambusa, pippali, cardamom, cinnamon) that soothes both dry hacking and productive coughs.",
        "preparation": "Mix 1/2 tsp powder into 1 tsp pure honey and take twice daily.",
        "safety": "Contains sugar; diabetic individuals should monitor carbohydrate intake."
      },
      {
        "name": "Yashtimadhu (Licorice)",
        "use": "Demulcent herb that coats the pharynx and quiets coughing reflexes.",
        "preparation": "Chew a small root sliver or brew a mild tea.",
        "safety": "Avoid excessive intake with high blood pressure."
      }
    ],
    "herbalRemedyTips": [
      "Sitopaladi & Honey electuary: Mix 1/2 tsp Sitopaladi churna with raw honey into a smooth paste; lick slowly twice daily to calm throat reflex spasms and liquefy stubborn Kapha.",
      "Warm Ghee & Roasted Turmeric: Gently warm 1/4 tsp pure turmeric powder in 1/2 tsp cow ghee; swallow slowly before sleep to lubricate vocal cords and halt nighttime dry cough.",
      "Vasaka & Licorice decoction: Simmer 1/2 tsp Vasaka leaves and 1/4 tsp licorice root in water for 5 minutes; strain and drink warm to ease tight chest coughs."
    ]
  },
  "sore-throat": {
    "herbs": [
      {
        "name": "Yashtimadhu (Licorice)",
        "use": "Contains glycyrrhizin which provides anti-inflammatory demulcent relief to inflamed mucous membranes.",
        "preparation": "Gargle with warm licorice decoction or slowly suck on a small root piece.",
        "safety": "Monitor if taking diuretic medications."
      },
      {
        "name": "Turmeric (Haridra)",
        "use": "Potent natural antimicrobial and anti-inflammatory agent for oral and pharyngeal tissues.",
        "preparation": "Mix 1/2 tsp in warm water with salt for gargling.",
        "safety": "Culinary amounts are safe; supplements require caution with gallstones."
      },
      {
        "name": "Clove (Lavanga)",
        "use": "Contains eugenol, offering mild local numbing and antibacterial benefits.",
        "preparation": "Hold 1 whole clove in the cheek, allowing its oils to bathe the throat.",
        "safety": "Do not bite or ingest high quantities of clove oil."
      }
    ],
    "herbalRemedyTips": [
      "Warm Turmeric & Rock Salt gargle: Dissolve 1/2 tsp pure turmeric and 1/2 tsp pink Himalayan rock salt in 1 cup of comfortably warm water; gargle for 30 seconds, 3 times a day.",
      "Licorice (Yashtimadhu) throat coat tea: Brew 1/2 tsp licorice root powder in 1 cup water for 5 minutes; sip slowly while warm to coat raw vocal cords.",
      "Clove holding in mouth: Keep one whole organic clove resting between cheek and gum, allowing saliva to slowly release soothing eugenol across the throat."
    ]
  },
  "seasonal-allergies": {
    "herbs": [
      {
        "name": "Guduchi (Giloy)",
        "use": "Premier immunomodulator (Rasayana) that stabilizes hypersensitive immune reactions to airborne pollen.",
        "preparation": "Drink 1/2 tsp Giloy powder steeped in warm water every morning.",
        "safety": "May lower blood sugar; consult clinician if on immunosuppressants."
      },
      {
        "name": "Haridra (Turmeric)",
        "use": "Curcumin suppresses histamine release and mast cell degranulation.",
        "preparation": "Consume 1/2 tsp with warm milk/plant milk and black pepper.",
        "safety": "Avoid high-dose supplements if taking blood thinners."
      },
      {
        "name": "Neem",
        "use": "Cooling and detoxifying herb that clears toxic heat and skin/mucosal hypersensitivity.",
        "preparation": "Take mild neem leaf tea or quality-controlled capsules under advice.",
        "safety": "Do not use during pregnancy or while trying to conceive."
      }
    ],
    "herbalRemedyTips": [
      "Golden Turmeric-Black Pepper tonic: Whisk 1/2 tsp turmeric powder and a pinch of black pepper into warm milk or plant milk; drink daily to strengthen mucosal barrier defenses.",
      "Pratimarsha Nasya (Herbal nasal oiling): Apply 2 drops of lukewarm Anu taila or cold-pressed sesame oil inside each nostril before going outdoors to trap pollen particles.",
      "Morning Guduchi (Giloy) brew: Boil 1/2 tsp Guduchi stem powder in 1 cup water until reduced by half; drink warm on an empty stomach to regulate seasonal allergic reactivity."
    ]
  },
  "sinus-congestion": {
    "herbs": [
      {
        "name": "Ajwain (Carom Seeds)",
        "use": "Thymol-rich pungent seeds that clear blocked nasal passages and sinus pressure.",
        "preparation": "Crush in hot water for steam inhalation or warm gently in a cloth bundle.",
        "safety": "Avoid direct contact of hot seeds with sensitive skin."
      },
      {
        "name": "Eucalyptus",
        "use": "Natural cineole decongestant that breaks up thick nasal secretions.",
        "preparation": "Add 2-3 drops of essential oil to a steam bowl.",
        "safety": "Never ingest essential oils; keep away from small children."
      },
      {
        "name": "Ginger",
        "use": "Promotes drainage of frontal and maxillary sinuses through warming circulation.",
        "preparation": "Drink fresh ginger tea or apply a warm external ginger compress.",
        "safety": "Stop if skin application causes burning or irritation."
      }
    ],
    "herbalRemedyTips": [
      "Ajwain herbal steam inhalation: Add 1 tablespoon of crushed carom seeds (ajwain) to a bowl of steaming water; cover head with a towel and inhale deeply for 5-7 minutes.",
      "Warm Ginger forehead compress: Dip a washcloth in warm ginger-steeped water, wring out, and place over forehead and bridge of the nose for 10 minutes to drain sinus pressure.",
      "Tulsi-Black Pepper hot brew: Drink a steaming cup of Tulsi tea infused with crushed black pepper and a dash of lemon juice to stimulate mucus drainage."
    ]
  },
  "asthma": {
    "herbs": [
      {
        "name": "Pushkarmool (Inula racemosa)",
        "use": "Renowned Ayurvedic bronchodilator herb that expands airways and relieves dyspnea.",
        "preparation": "Use only quality-standardized powder under professional Ayurvedic supervision.",
        "safety": "Never replace prescribed emergency inhalers; purely complementary."
      },
      {
        "name": "Vasaka",
        "use": "Clears bronchial pathways by liquefying thick mucus plugs.",
        "preparation": "Consume as directed in traditional preparations.",
        "safety": "Strictly complementary; monitor with your pulmonologist."
      },
      {
        "name": "Pippali (Long Pepper)",
        "use": "Rejuvenates lung tissue (Pranavaha Srotas) and improves respiratory capacity.",
        "preparation": "Take 1 small pinch with honey or warm milk.",
        "safety": "Avoid during acute acid flares or fever."
      }
    ],
    "herbalRemedyTips": [
      "Warm Mustard oil & Camphor chest rub: Gently warm 1 tablespoon of mustard oil with a tiny pinch of natural camphor and rock salt; massage gently across upper chest and back to ease airway constriction.",
      "Pippali & Raw Honey lung tonic: Take 1/8 tsp Pippali (long pepper) powder blended into 1 tsp pure honey twice daily to build bronchial resilience (always alongside prescribed medications).",
      "Tulsi & Ginger warm infusion: Sip warm freshly brewed holy basil and ginger tea to maintain clear, warm breathing channels during cool or damp weather."
    ]
  },
  "type-2-diabetes": {
    "herbs": [
      {
        "name": "Gudmar (Gymnema sylvestre)",
        "use": "Known as the 'sugar destroyer' for reducing sweet taste perception and supporting glycemic balance.",
        "preparation": "Take 1/2 tsp powder in warm water 30 minutes before meals.",
        "safety": "May interact with insulin and diabetes medications; requires clinician coordination."
      },
      {
        "name": "Fenugreek (Methi)",
        "use": "High in 4-hydroxyisoleucine and soluble fiber that slows carbohydrate digestion.",
        "preparation": "Soak 1 tsp seeds overnight; chew seeds and drink water in morning.",
        "safety": "Can affect blood clotting; use caution before surgery."
      },
      {
        "name": "Jamun Seed (Syzygium cumini)",
        "use": "Contains jamboline which helps slow starch-to-sugar conversion.",
        "preparation": "Take 1/2 tsp dried seed powder with water once daily.",
        "safety": "Monitor blood sugar closely to prevent hypoglycemia."
      }
    ],
    "herbalRemedyTips": [
      "Overnight Fenugreek (Methi) seed water: Soak 1 teaspoon of whole fenugreek seeds in a cup of water overnight; in the morning, chew the soft seeds and drink the infused water.",
      "Gudmar (Gymnema) pre-meal tea: Sip 1/2 tsp of Gymnema sylvestre powder in warm water half an hour before lunch to curb sugar cravings and stabilize post-prandial spikes.",
      "Cinnamon & Amla daily tonic: Stir 1/4 tsp pure Ceylon cinnamon and 1/2 tsp Amla powder into warm water; consume with breakfast for antioxidant and insulin-supportive benefits."
    ]
  },
  "high-blood-pressure": {
    "herbs": [
      {
        "name": "Arjuna Bark (Terminalia arjuna)",
        "use": "Celebrated Ayurvedic cardiac tonic that strengthens heart muscles and supports vascular tone.",
        "preparation": "Simmer 1/2 tsp powder in 1/2 cup water and 1/2 cup milk (Ksheerapaka) until water evaporates; drink once daily.",
        "safety": "Coordinate with cardiologist; do not stop antihypertensive drugs."
      },
      {
        "name": "Hibiscus (Japa)",
        "use": "Antioxidant-rich calyces that act as a gentle natural ACE-inhibitor and mild diuretic.",
        "preparation": "Steep 1-2 tsp dried petals in boiling water for 10 minutes; drink cooled.",
        "safety": "Avoid during pregnancy; may lower blood pressure additively with drugs."
      },
      {
        "name": "Brahmi (Bacopa)",
        "use": "Calms sympathetic nervous system hyperactivity and stress-induced blood pressure spikes.",
        "preparation": "Drink as a mild herbal tea in the evening.",
        "safety": "May cause mild nausea on an empty stomach."
      }
    ],
    "herbalRemedyTips": [
      "Arjuna Ksheerapaka cardiac brew: Boil 1/2 tsp Arjuna bark powder in 1/2 cup water and 1/2 cup skim milk until reduced by half; strain and drink once daily to tonify arterial elasticity.",
      "Hibiscus (Japa) flower iced infusion: Steep 1 tablespoon of dried hibiscus flowers in hot water, chill with a twist of lemon, and sip in the afternoon as a refreshing cardiovascular support.",
      "Brahmi evening relaxation tea: Drink 1/2 tsp Brahmi powder in warm water before bedtime to calm the nervous system and decrease nocturnal arterial tension."
    ]
  },
  "high-cholesterol": {
    "herbs": [
      {
        "name": "Guggulu (Commiphora mukul)",
        "use": "Purified resin traditionally used to clear lipid accumulation (Medo Dhatu) and support liver bile clearance.",
        "preparation": "Take standardized formulations under clinical guidance.",
        "safety": "May interact with liver-metabolized medications; avoid in pregnancy."
      },
      {
        "name": "Garlic (Lasuna)",
        "use": "Contains allicin and sulfuric compounds that inhibit hepatic cholesterol synthesis.",
        "preparation": "Crush 1 small clove, let stand 5 minutes, and take with warm water before meals.",
        "safety": "May increase bleeding risk; avoid high doses with anticoagulants."
      },
      {
        "name": "Coriander Seeds (Dhanyaka)",
        "use": "Traditional cooling diuretic and lipid-metabolic stimulant.",
        "preparation": "Boil 2 tbsp seeds in 1 glass of water; strain and drink daily.",
        "safety": "Safe for culinary use; avoid if allergic to coriander."
      }
    ],
    "herbalRemedyTips": [
      "Crushed Raw Garlic & Warm Water: Crush 1 small clove of garlic, let it sit for 5 minutes to release allicin, and swallow with warm water before breakfast to support arterial clarity.",
      "Coriander Seed (Dhanya) lipid flush: Boil 2 tablespoons of crushed coriander seeds in 2 cups of water until reduced to 1 cup; strain and drink warm daily.",
      "Triphala evening detox: Take 1 tsp Triphala powder with warm water before sleep to enhance hepatic fat processing and cleanse gastrointestinal channels."
    ]
  },
  "weight-management": {
    "herbs": [
      {
        "name": "Triphala",
        "use": "Supports healthy elimination, reduces metabolic sluggishness (Meda), and optimizes gut microbiome balance.",
        "preparation": "Take 1 tsp with warm water before bed.",
        "safety": "Discontinue if loose stools occur."
      },
      {
        "name": "Cinnamon (Twak)",
        "use": "Assists glucose metabolism and reduces mid-day sugar cravings.",
        "preparation": "Add 1/4 tsp to oatmeal, herbal tea, or warm water.",
        "safety": "Prefer Ceylon cinnamon over Cassia to avoid excess coumarin."
      },
      {
        "name": "Green Tea & Ginger",
        "use": "Polyphenols and gingerols gently boost thermogenesis and lipid oxidation.",
        "preparation": "Brew whole green tea leaves with a slice of fresh ginger.",
        "safety": "Limit evening consumption due to natural caffeine."
      }
    ],
    "herbalRemedyTips": [
      "Warm Lemon, Honey & Ginger morning ritual: Mix juice of 1/2 lemon, 1 tsp raw honey, and 1/2 tsp freshly grated ginger in lukewarm (never boiling) water; drink upon waking to kindle Agni.",
      "Cinnamon quill simmer water: Boil 1 Ceylon cinnamon stick in 1 liter of water for 10 minutes; carry in a flask and sip warm between meals to curb cravings.",
      "Triphala & Guggulu evening routine: Take 1/2 tsp Triphala powder in warm water at bedtime to clear digestive stagnation and promote efficient overnight metabolic clearance."
    ]
  },
  "fatty-liver": {
    "herbs": [
      {
        "name": "Bhumyamalaki (Phyllanthus niruri)",
        "use": "Renowned Ayurvedic hepatoprotective herb that promotes liver cell regeneration and bile flow.",
        "preparation": "Steep 1/2 tsp powder in warm water; take on an empty stomach.",
        "safety": "Consult physician for ongoing liver enzyme monitoring."
      },
      {
        "name": "Kalmegh (Andrographis paniculata)",
        "use": "The 'King of Bitters' that reduces hepatic inflammation and supports detox pathways.",
        "preparation": "Take under professional guidance in standardized doses.",
        "safety": "Intensely bitter; avoid during pregnancy."
      },
      {
        "name": "Turmeric & Amla",
        "use": "Potent antioxidant combination that reduces hepatic steatosis and oxidative stress.",
        "preparation": "Mix equal parts (1/4 tsp each) in warm water daily.",
        "safety": "Use culinary amounts with active gallstones."
      }
    ],
    "herbalRemedyTips": [
      "Bhumyamalaki morning decoction: Steep 1/2 tsp Bhumyamalaki (Phyllanthus) powder in 1 cup boiling water for 5 minutes; strain and drink warm on an empty stomach to protect hepatocytes.",
      "Fresh Amla & Turmeric elixir: Mix 20 ml pure fresh Amla juice with 1/4 tsp pure turmeric powder and a glass of warm water every morning to reduce liver oxidative stress.",
      "Dandelion & Kalmegh bitter tea: Drink a mild cup of bitter herbal tea (such as roasted dandelion root or Kalmegh) 20 minutes before meals to stimulate bile excretion."
    ]
  },
  "metabolic-wellness": {
    "herbs": [
      {
        "name": "Turmeric (Haridra)",
        "use": "Enhances mitochondrial function and controls chronic low-grade systemic inflammation.",
        "preparation": "Incorporate into daily cooking or take with black pepper and healthy fats.",
        "safety": "Avoid high-dose supplements with blood thinners."
      },
      {
        "name": "Amla (Indian Gooseberry)",
        "use": "Richest natural source of stable vitamin C; revitalizes cellular metabolism (Rasayana).",
        "preparation": "Eat 1 fresh amla daily or take 1/2 tsp powder in water.",
        "safety": "Safe for long-term food use."
      },
      {
        "name": "Fenugreek",
        "use": "Optimizes nutrient partitioning and carbohydrate breakdown.",
        "preparation": "Include in whole-food recipes or herbal teas.",
        "safety": "Consult doctor if on thyroid or clotting medications."
      }
    ],
    "herbalRemedyTips": [
      "Classical Nisha-Amalaki combination: Blend equal parts pure Turmeric (Haridra) and Amla powder (1/2 tsp total); take with warm water twice daily to maintain vibrant metabolic homeostasis.",
      "Barley (Yava) metabolic water: Simmer 2 tablespoons of whole barley grains in 4 cups of water for 20 minutes; strain and drink throughout the day to support lymphatic and urinary flow.",
      "Warm Cumin & Coriander digestive tea: Sip a warm infusion of cumin and coriander seeds between meals to prevent sluggish cellular accumulation (Ama)."
    ]
  },
  "acne": {
    "herbs": [
      {
        "name": "Neem (Azadirachta indica)",
        "use": "Powerfully antibacterial and cooling; clears blood heat (Rakta sodhana) that triggers breakout eruptions.",
        "preparation": "Drink mild neem tea or apply diluted neem oil/paste topically.",
        "safety": "Bitter and cooling; avoid prolonged high doses or pregnancy."
      },
      {
        "name": "Manjistha (Rubia cordifolia)",
        "use": "Premier Ayurvedic blood cleanser and lymph mover; calms inflamed cystic acne.",
        "preparation": "Take 1/2 tsp in warm water once daily.",
        "safety": "May temporarily darken urine; harmless."
      },
      {
        "name": "Sandalwood (Chandan)",
        "use": "Topical cooling astringent that reduces sebum, redness, and blemish swelling.",
        "preparation": "Make a paste with pure sandalwood powder and rosewater; apply to spots.",
        "safety": "Always patch-test before full facial use."
      }
    ],
    "herbalRemedyTips": [
      "Sandalwood & Rosewater spot paste: Mix pure sandalwood powder with organic rose water to form a smooth paste; dab onto active blemishes and leave for 15-20 minutes before rinsing with cool water.",
      "Manjistha & Neem internal purifying tea: Sip 1/2 tsp Manjistha root powder steeped in hot water once daily to purify the bloodstream and cool skin Pitta from within.",
      "Fresh Aloe Vera soothing application: Extract fresh gel from an aloe vera leaf and apply a thin layer over clean skin morning and night to calm redness and prevent post-acne marks."
    ]
  },
  "eczema": {
    "herbs": [
      {
        "name": "Khadir (Acacia catechu)",
        "use": "Celebrated classical herb for dermatological conditions (Kushtha) that restores barrier integrity.",
        "preparation": "Consume under Ayurvedic guidance as a decoction or topical wash.",
        "safety": "Ensure clinical diagnosis by a dermatologist."
      },
      {
        "name": "Neem",
        "use": "Soothes intense itching (Kandu) and prevents secondary bacterial skin infection.",
        "preparation": "Apply cold-pressed virgin coconut oil infused with neem leaves.",
        "safety": "Do not apply pure neem essential oil undiluted."
      },
      {
        "name": "Colloidal Oatmeal",
        "use": "Beta-glucans coat the epidermis, retaining hydration and quenching eczema itch.",
        "preparation": "Add finely ground oat flour to a lukewarm bath.",
        "safety": "Avoid if you have known oat allergies."
      }
    ],
    "herbalRemedyTips": [
      "Neem & Virgin Coconut oil application: Gently apply cold-pressed coconut oil infused with neem leaves onto dry, itchy eczema patches twice daily after bathing to rebuild the lipid barrier.",
      "Colloidal Oatmeal lukewarm soak: Dissolve 1 cup of finely powdered colloidal oatmeal into a lukewarm bath; soak for 10-15 minutes without harsh soap, then gently pat dry.",
      "Licorice & Ghee barrier ointment: Mix 1/4 tsp pure licorice root powder with 1 tsp warm grass-fed ghee; dab lightly onto unbroken itchy plaques to cool inflammation."
    ]
  },
  "dry-skin": {
    "herbs": [
      {
        "name": "Sesame Oil (Tila Taila)",
        "use": "Deeply penetrating and warming oil that pacifies dry Vata qualities in skin layers.",
        "preparation": "Warm slightly and perform full-body self-massage (Abhyanga) before showering.",
        "safety": "Avoid if you have acute inflammatory skin eruptions."
      },
      {
        "name": "Shatavari",
        "use": "Nourishes the deeper fluid tissues (Rasa and Mamsa Dhatus), moisturizing skin from the inside out.",
        "preparation": "Take 1/2 tsp in warm almond or dairy milk with ghee.",
        "safety": "Avoid in estrogen-sensitive conditions without advice."
      },
      {
        "name": "Almond Oil (Badam Taila)",
        "use": "Rich in vitamin E and squalene to soften flaking skin.",
        "preparation": "Apply a few drops of pure sweet almond oil to damp skin.",
        "safety": "Avoid if allergic to tree nuts."
      }
    ],
    "herbalRemedyTips": [
      "Warm Sesame Oil Abhyanga: Warm 2-3 tablespoons of unrefined sesame oil and massage with firm strokes over dry limbs 15 minutes prior to a warm shower to deeply hydrate skin tissue.",
      "Shatavari & Warm Milk internal nourishment: Whisk 1/2 tsp Shatavari root powder into a cup of warm milk with 1/2 tsp cow ghee before bed to lubricate dry bodily tissues from within.",
      "Raw Milk & Honey gentle wash: Mix 1 tablespoon of raw milk with 1/2 tsp honey; smooth over dry face and neck, leave for 10 minutes, and rinse with tepid water for instant dewy softness."
    ]
  },
  "psoriasis": {
    "herbs": [
      {
        "name": "Wrightia tinctoria (Swetha Kutaja)",
        "use": "Classical herb used in traditional Siddha and Ayurveda oils (such as 777 oil) for thick plaque reduction.",
        "preparation": "Use clinically standardized medicated coconut oil formulations topically.",
        "safety": "Always coordinate with your dermatologist."
      },
      {
        "name": "Bakuchi (Psoralea corylifolia)",
        "use": "Traditional rasayana for keratinocyte balance and chronic dry scaling.",
        "preparation": "Use only micro-amounts under strict medical supervision due to photosensitivity.",
        "safety": "Can cause severe blistering if exposed to direct sun without guidance."
      },
      {
        "name": "Manjistha",
        "use": "Cools overheated liver-blood axis and calms rapid skin proliferation.",
        "preparation": "Drink as a mild tea or take in traditional polyherbal tablets.",
        "safety": "Drink plenty of water while taking."
      }
    ],
    "herbalRemedyTips": [
      "Wrightia tinctoria medicated oil massage: Apply authentic Wrightia tinctoria-infused coconut oil onto thickened plaques twice daily to soften scales and slow epidermal turnover.",
      "Neem leaf soothing rinse: Simmer a fistful of fresh neem leaves in 2 liters of water for 15 minutes, cool to room temperature, and use as a soothing wash over scaled skin areas.",
      "Manjistha & Turmeric systemic tea: Drink 1/2 tsp Manjistha and 1/4 tsp turmeric in warm water daily to cool systemic inflammatory heat and reduce flare frequency."
    ]
  },
  "dandruff": {
    "herbs": [
      {
        "name": "Fenugreek (Methi)",
        "use": "Rich in mucilage, proteins, and nicotinic acid; clears flaky scalp and moisturizes roots.",
        "preparation": "Soak seeds overnight and grind into a smooth scalp mask.",
        "safety": "Rinse thoroughly to remove seed remnants."
      },
      {
        "name": "Neem",
        "use": "Naturally antifungal against Malassezia yeast responsible for flaky scalp.",
        "preparation": "Boil neem leaves in water for a post-wash hair rinse or use neem scalp oil.",
        "safety": "Safe for topical scalp use; avoid eyes."
      },
      {
        "name": "Tea Tree",
        "use": "Terpinen-4-ol acts as a targeted natural scalp purifier.",
        "preparation": "Add 2-3 drops to your regular shampoo or jojoba carrier oil.",
        "safety": "Never apply pure undiluted tea tree oil to scalp."
      }
    ],
    "herbalRemedyTips": [
      "Soaked Fenugreek (Methi) scalp mask: Grind 2 tablespoons of overnight-soaked fenugreek seeds into a creamy paste with 2 tablespoons of yogurt; apply to scalp for 25 minutes before rinsing.",
      "Neem water clarifying rinse: Boil 20 fresh neem leaves in 4 cups of water for 10 minutes, strain, and let cool; pour over scalp after washing as a leave-in antifungal tonic.",
      "Warm Coconut & Lemon scalp massage: Warm 2 tablespoons of coconut oil with 1 teaspoon of fresh lemon juice; massage into scalp roots 30 minutes before shampooing to loosen stubborn flakes."
    ]
  },
  "hair-fall": {
    "herbs": [
      {
        "name": "Bhringraj (Eclipta alba)",
        "use": "Known as the 'Ruler of Hair' (Keshraj); activates dormant follicles and prevents premature thinning.",
        "preparation": "Warm authentic Bhringraj herbal oil and massage into roots 2-3 times weekly.",
        "safety": "Keep on scalp for at least 1 hour or overnight."
      },
      {
        "name": "Amla",
        "use": "Abundant in natural vitamin C and iron; strengthens follicular anchoring and prevents split ends.",
        "preparation": "Consume daily as a fruit/juice or make a powder paste for hair roots.",
        "safety": "Mild cooling effect; very safe."
      },
      {
        "name": "Brahmi",
        "use": "Reduces stress-related telogen effluvium hair shedding and improves scalp microcirculation.",
        "preparation": "Apply Brahmi oil or take Brahmi tea.",
        "safety": "Ensure quality sourcing."
      }
    ],
    "herbalRemedyTips": [
      "Warm Bhringraj oil overnight treatment: Warm 1-2 tablespoons of Bhringraj oil and massage into scalp roots with gentle fingertips for 10 minutes; leave overnight and wash with a mild herbal shampoo.",
      "Amla & Hibiscus petal hair pack: Mix 2 tablespoons of Amla powder and 1 tablespoon of hibiscus petal powder with warm water into a paste; apply to roots for 30 minutes once weekly.",
      "Daily Amla & Honey intake: Consume 1 teaspoon of pure fresh Amla juice or 1/2 tsp organic Amla churna mixed with raw honey every morning to deliver bioavailable nutrients to hair follicles."
    ]
  },
  "back-pain": {
    "herbs": [
      {
        "name": "Ashwagandha",
        "use": "Strengthens paraspinal muscles, relieves neuromuscular tension, and reduces chronic lumbar ache.",
        "preparation": "Take 1/2 tsp in warm milk with a pinch of nutmeg before sleep.",
        "safety": "Consult doctor if managing thyroid disorders."
      },
      {
        "name": "Shallaki (Boswellia serrata)",
        "use": "Boswellic acids inhibit 5-LOX inflammatory enzyme, easing spinal disc and facet joint discomfort.",
        "preparation": "Take standardized extract capsules with meals as recommended.",
        "safety": "Safe for long-term use; may occasionally cause mild stomach upset."
      },
      {
        "name": "Castor Oil (Eranda)",
        "use": "Traditional premier remedy for pacifying localized lumbar Vata and relaxing rigid muscle knots.",
        "preparation": "Apply warm castor oil compress over lower back.",
        "safety": "External application is safe; do not ingest without advice."
      }
    ],
    "herbalRemedyTips": [
      "Mahanarayan Taila lumbar massage: Warm 2 tablespoons of traditional Mahanarayan oil and gently massage over the lower back in circular motions, followed by a warm hot water bottle for 20 minutes.",
      "Castor oil heat pack (Kati Sweda): Saturate a cotton flannel with warm castor oil, place over lower back, cover with plastic wrap and a hot water bottle for 25 minutes to dissolve deep spinal spasms.",
      "Shallaki & Golden Milk evening tonic: Take Boswellia resin extract alongside warm turmeric-black pepper milk before bed to ease nocturnal lumbar inflammation and morning stiffness."
    ]
  },
  "neck-pain": {
    "herbs": [
      {
        "name": "Bala (Sida cordifolia)",
        "use": "Ayurvedic nerve and muscle-strengthening herb that repairs fatigued cervical muscles.",
        "preparation": "Apply Bala-infused massage oil or take formulated decoctions.",
        "safety": "Avoid raw ephedra-containing species; use standardized Ayurvedic preparations."
      },
      {
        "name": "Camphor & Sesame",
        "use": "Provides deep penetrating warmth that dispels acute cervical stiffness from desk strain.",
        "preparation": "Dissolve a pinch of edible camphor in warm sesame oil for topical rub.",
        "safety": "Do not apply near eyes or to broken skin."
      },
      {
        "name": "Ashwagandha",
        "use": "Relaxes chronic tension in upper trapezius and levator scapulae muscles.",
        "preparation": "Take 1/2 tsp powder in warm milk.",
        "safety": "Check for interactions with sedatives."
      }
    ],
    "herbalRemedyTips": [
      "Warm Sesame & Camphor neck rub: Warm 1 tablespoon of pure sesame oil with a pinch of natural camphor; massage gently from the base of the skull down to shoulders twice daily.",
      "Ashwagandha trapezius relaxant draught: Drink 1/2 tsp Ashwagandha root powder in a cup of warm milk with a pinch of nutmeg before sleeping to release cervical muscle holding patterns.",
      "Dry Heat Ginger salt poultice: Heat 1 cup of coarse salt with 1 tsp dry ginger powder in a dry pan, wrap in a thick cotton cloth, and press gently against stiff neck joints for soothing relief."
    ]
  },
  "joint-pain": {
    "herbs": [
      {
        "name": "Nirgundi (Vitex negundo)",
        "use": "Celebrated analgesic and anti-inflammatory leaf that disperses joint edema and acute pain.",
        "preparation": "Warm crushed leaves as a poultice or apply Nirgundi oil.",
        "safety": "External application is exceptionally well-tolerated."
      },
      {
        "name": "Shallaki (Boswellia)",
        "use": "Protects joint cartilage matrix and improves range of motion.",
        "preparation": "Take with warm water or milk as directed.",
        "safety": "Coordinate with rheumatologist if on prescription anti-inflammatories."
      },
      {
        "name": "Ginger (Shunti)",
        "use": "Inhibits prostaglandins and leukotrienes to decrease synovial stiffness.",
        "preparation": "Use fresh ginger in cooking or drink dried ginger tea.",
        "safety": "Watch for mild heartburn if taken in large quantities."
      }
    ],
    "herbalRemedyTips": [
      "Nirgundi leaf warm poultice (Patra Pinda): Warm crushed Nirgundi leaves in a pan with 1 tsp castor oil, wrap in a cotton cloth, and press gently onto aching joints for 15 minutes.",
      "Ginger & Turmeric joint brew: Boil 1/2 tsp dry ginger powder and 1/2 tsp turmeric in 2 cups water until reduced to 1 cup; drink warm twice daily to reduce synovial joint inflammation.",
      "Kottamchukkadi Taila warm application: Warm traditional herbal oil and gently stroke over aching knee or finger joints before a warm bath to restore effortless mobility."
    ]
  },
  "arthritis": {
    "herbs": [
      {
        "name": "Yogaraj Guggulu",
        "use": "Premier classical Ayurvedic polyherbal resin formula targeting chronic degenerative and inflammatory arthritis.",
        "preparation": "Take under guidance of an Ayurvedic physician with warm water.",
        "safety": "Avoid during pregnancy or acute gastritis."
      },
      {
        "name": "Rasna (Alpinia galanga)",
        "use": "Alleviates pain and swelling in chronic rheumatoid and osteoarthritic conditions.",
        "preparation": "Consume as Rasnasaptak Kwath (decoction) as prescribed.",
        "safety": "Coordinate with primary physician."
      },
      {
        "name": "Ashwagandha & Shallaki",
        "use": "Synergistic adaptogenic and anti-inflammatory combination protecting joint cartilage.",
        "preparation": "Take standardized herbal extracts with meals.",
        "safety": "Monitor if taking immunosuppressants."
      }
    ],
    "herbalRemedyTips": [
      "Rasnasaptak Kwath morning brew: Simmer 1/2 tsp Rasna powder and 1/4 tsp dry ginger in 1.5 cups water until halved; drink warm on an empty stomach to clear inflammatory Ama from joints.",
      "Fenugreek seed morning chew: Swallow 1/2 tsp dry-roasted fenugreek seed powder with warm water every morning to counteract stiff, creaking joints.",
      "Warm Vishagarbha or Dhanwantharam oil rub: Lightly apply warm medicated herbal oil over arthritic joints without heavy pressure, followed by a warm steam towel wrap."
    ]
  },
  "muscle-soreness": {
    "herbs": [
      {
        "name": "Bala (Sida cordifolia)",
        "use": "Builds muscle tissue (Mamsa Dhatu) and speeds repair of post-exercise micro-tears.",
        "preparation": "Take Bala powder in warm milk or use Ksheerabala oil.",
        "safety": "Use reputable standardized brands."
      },
      {
        "name": "Turmeric",
        "use": "Curcumin drastically reduces delayed onset muscle soreness (DOMS) and muscle damage markers.",
        "preparation": "Consume in warm milk or with meals.",
        "safety": "Safe for daily consumption."
      },
      {
        "name": "Eucalyptus",
        "use": "Natural counterirritant that stimulates local capillary blood flow to flush lactic acid.",
        "preparation": "Add a few drops to a bath or carrier oil.",
        "safety": "Never swallow essential oils."
      }
    ],
    "herbalRemedyTips": [
      "Epsom Salt & Eucalyptus muscle soak: Add 1 cup of Epsom salts and 5 drops of eucalyptus oil to a warm bathtub; soak for 20 minutes to draw out lactic acid and relax tight muscle fibers.",
      "Bala & Ashwagandha post-workout milk: Whisk 1/2 tsp each of Bala and Ashwagandha powder into warm almond or cow's milk with a pinch of cardamom to accelerate cellular muscle recovery.",
      "Turmeric & Ghee topical salve: For acute muscle strains, mix 1/2 tsp turmeric powder with warm ghee into a thick paste and apply over the sore muscle, covering with a soft cloth."
    ]
  },
  "stiffness": {
    "herbs": [
      {
        "name": "Dry Ginger (Shunti)",
        "use": "Penetrates deep into cold, contracted channels to dissolve stiffness upon waking.",
        "preparation": "Drink 1/2 tsp dry ginger powder boiled in hot water first thing in the morning.",
        "safety": "Caution if prone to acid reflux."
      },
      {
        "name": "Castor Oil",
        "use": "The king of herbs for removing stubborn rigidity and stagnant Vata from joints and tendons.",
        "preparation": "Take 1/2 tsp in warm herbal tea once weekly, or apply warm oil externally.",
        "safety": "Do not overuse as an internal laxative."
      },
      {
        "name": "Nirgundi",
        "use": "Releases tight fascia and increases joint flexibility.",
        "preparation": "Apply warm Nirgundi oil before mobility exercises.",
        "safety": "Topical use is safe and non-irritating."
      }
    ],
    "herbalRemedyTips": [
      "Morning Sunthi (Dry Ginger) mobility tea: Boil 1/2 tsp dry ginger powder in 1 cup water for 3 minutes; drink warm first thing in the morning to melt morning stiffness.",
      "Ksheerabala Taila warm joint rub: Smooth warm Ksheerabala oil over stiff shoulders, hips, and knees 20 minutes before a hot shower to limber connective fascia.",
      "Ajwain potli fomentation: Tie 3 tablespoons of ajwain seeds in a cotton pouch, warm on a dry pan, and gently compress stiff joints to penetrate deep therapeutic warmth."
    ]
  },
  "menstrual-cramps": {
    "herbs": [
      {
        "name": "Ajwain (Carom seeds)",
        "use": "Potent antispasmodic that rapidly relieves acute uterine contractions and abdominal colic.",
        "preparation": "Boil 1/2 tsp ajwain with jaggery in water; drink warm.",
        "safety": "Heating nature; avoid if experiencing unusually heavy bleeding."
      },
      {
        "name": "Fennel (Saunf)",
        "use": "Relaxes uterine smooth muscle and reduces prostaglandin-induced cramping.",
        "preparation": "Brew 1 tsp crushed seeds into a hot tea; sip throughout the day.",
        "safety": "Safe and gentle for regular menstrual use."
      },
      {
        "name": "Ginger",
        "use": "Clinically proven to decrease menstrual pain intensity comparable to common pain relievers.",
        "preparation": "Drink warm fresh ginger tea with lemon and honey during the first 3 days of menses.",
        "safety": "Avoid large doses if you have heavy menstrual flow."
      }
    ],
    "herbalRemedyTips": [
      "Ajwain & Organic Jaggery warm tea: Boil 1/2 tsp ajwain seeds and 1 teaspoon of organic jaggery (gud) in 1.5 cups water until reduced to 1 cup; sip warm to instantly relieve sharp uterine cramps.",
      "Ginger & Cinnamon soothing brew: Simmer 3 thin slices of fresh ginger and half a cinnamon stick in water for 5 minutes; drink 2-3 times daily during the first 48 hours of your cycle.",
      "Castor oil lower belly compress: Apply warm castor oil to the lower abdomen, place a hot water bottle on top, and rest for 15-20 minutes before bleeding starts to promote smooth pelvic circulation."
    ]
  },
  "pms": {
    "herbs": [
      {
        "name": "Shatavari (Asparagus racemosus)",
        "use": "Premier female adaptogen that balances cyclical estrogen-progesterone shifts and calms irritability.",
        "preparation": "Take 1/2 tsp in warm milk once or twice daily during the luteal phase.",
        "safety": "Avoid if you have hormone-sensitive tumors without oncologist advice."
      },
      {
        "name": "Chamomile",
        "use": "Relieves premenstrual mood swings, anxiety, and fluid retention.",
        "preparation": "Steep as tea in the late afternoon or evening.",
        "safety": "Safe and calming."
      },
      {
        "name": "Saffron (Kesar)",
        "use": "Elevates neurotransmitter serotonin levels to curb PMS blues and food cravings.",
        "preparation": "Steep 2-3 strands in warm milk.",
        "safety": "Use only culinary pinches."
      }
    ],
    "herbalRemedyTips": [
      "Shatavari & Warm Spiced Milk: Take 1/2 tsp Shatavari root powder in 1 cup of warm milk with a pinch of cardamom every evening during the 10 days before your period to soothe mood swings.",
      "Saffron & Rose petal calming infusion: Steep 3 strands of pure saffron and 1 teaspoon of organic dried rose petals in hot water for 7 minutes; sip slowly to elevate mood and curb irritability.",
      "Fennel & Coriander debloating water: Boil 1/2 tsp each of fennel and coriander seeds in 2 cups of water; strain and drink throughout the day to relieve premenstrual water retention."
    ]
  },
  "menopause-support": {
    "herbs": [
      {
        "name": "Shatavari",
        "use": "Phytoestrogenic rasayana that moistens mucosal tissues, eases hot flashes, and supports vaginal elasticity.",
        "preparation": "Take 1/2 to 1 tsp daily with warm milk or ghee.",
        "safety": "Discuss with doctor if on hormone therapies."
      },
      {
        "name": "Yashtimadhu (Licorice)",
        "use": "Supports adrenal hormone production to buffer declining ovarian estrogen output.",
        "preparation": "Brew as a mild tea or take with Shatavari.",
        "safety": "Avoid if blood pressure is elevated."
      },
      {
        "name": "Vetiver (Khus) & Coriander",
        "use": "Profoundly cooling herbs that quench sudden internal heat and night sweats.",
        "preparation": "Infuse in drinking water or sip as a room-temperature tea.",
        "safety": "Safe and refreshing."
      }
    ],
    "herbalRemedyTips": [
      "Shatavari & Yashtimadhu nourishing tonic: Combine 1/2 tsp Shatavari and 1/4 tsp licorice root powder in warm almond milk once daily to nourish depleted Ojas and reduce hot flashes.",
      "Vetiver (Khus) & Coriander cooling water: Soak a pinch of vetiver root and 1 tsp crushed coriander seeds in a glass pitcher of water overnight; sip cool during sudden hot flush episodes.",
      "Brahmi bedtime tea: Drink a cup of warm Brahmi tea 30 minutes before sleep to calm nocturnal temperature spikes and promote deep, uninterrupted rest."
    ]
  },
  "womens-wellness": {
    "herbs": [
      {
        "name": "Shatavari",
        "use": "The universal feminine tonic that nurtures reproductive health, vitality, and hormonal equilibrium across all life stages.",
        "preparation": "Consume 1/2 tsp daily with warm milk, honey, or ghee.",
        "safety": "Well-tolerated traditional food herb."
      },
      {
        "name": "Lodhra (Symplocos racemosa)",
        "use": "Tones the uterus and maintains healthy vaginal flora and balanced menstrual flow.",
        "preparation": "Use standardized preparations under Ayurvedic guidance.",
        "safety": "Avoid during pregnancy without clinical direction."
      },
      {
        "name": "Amla",
        "use": "Supplies bioavailable iron, vitamin C, and potent antioxidants for radiant energy.",
        "preparation": "Take fresh juice or 1/2 tsp powder in water.",
        "safety": "Safe for daily wellness."
      }
    ],
    "herbalRemedyTips": [
      "Daily Shatavari Rasayana: Take 1/2 tsp organic Shatavari churna with 1 tsp warm cow ghee and warm milk every morning as a comprehensive hormonal and reproductive rejuvenation ritual.",
      "Moringa & Amla vitality boost: Add 1/2 tsp moringa leaf powder and 1/2 tsp amla powder to your morning smoothie or warm water for bioavailable plant iron and vibrant energy.",
      "Coriander & Cumin cycle balancing tea: Sip a mild warm infusion of coriander and cumin seeds between meals to keep digestion light and pelvic circulation clear."
    ]
  },
  "mens-wellness": {
    "herbs": [
      {
        "name": "Ashwagandha",
        "use": "Increases vitality, muscle strength, natural testosterone synthesis, and stamina.",
        "preparation": "Take 1/2 tsp powder in warm milk with ghee at bedtime.",
        "safety": "Consult doctor if managing prostate cancer or thyroid conditions."
      },
      {
        "name": "Gokshura (Tribulus terrestris)",
        "use": "Tonifies the genitourinary tract, supports healthy prostate function, and boosts libido.",
        "preparation": "Drink 1/2 tsp Gokshura powder boiled in water.",
        "safety": "Safe in moderation; check with clinician if on blood pressure drugs."
      },
      {
        "name": "Pumpkin Seeds",
        "use": "Loaded with zinc, magnesium, and phytosterols essential for prostate cellular health.",
        "preparation": "Eat a handful of raw unsalted seeds daily.",
        "safety": "Nutritious whole food."
      }
    ],
    "herbalRemedyTips": [
      "Ashwagandha & Gokshura vitality brew: Whisk 1/2 tsp each of Ashwagandha and Gokshura powder into warm milk with a dash of honey before bed to boost stamina, endurance, and hormonal vitality.",
      "Raw Pumpkin seeds & Honey morning snack: Chew 1 tablespoon of raw unsalted pumpkin seeds with 1/2 tsp raw honey daily to supply essential zinc for healthy prostate tissue.",
      "Triphala evening metabolic cleanser: Take 1/2 tsp Triphala with warm water before sleep to ensure clear metabolic pathways and prevent sluggish circulation."
    ]
  },
  "mens-stress": {
    "herbs": [
      {
        "name": "Ashwagandha",
        "use": "Clinically proven to lower serum cortisol, diminish work burnout, and promote resilience.",
        "preparation": "Take with warm milk or as standardized extract.",
        "safety": "Avoid taking with high doses of sedatives."
      },
      {
        "name": "Brahmi",
        "use": "Sharpens mental focus during high-pressure work while cooling mental irritability.",
        "preparation": "Brew as tea or take with ghee.",
        "safety": "Safe for daytime or evening use."
      },
      {
        "name": "Tulsi",
        "use": "Adaptogenic herb that normalizes physiological stress markers and clears brain fog.",
        "preparation": "Drink 2 cups of hot Tulsi tea throughout the workday.",
        "safety": "Safe and uplifting."
      }
    ],
    "herbalRemedyTips": [
      "Ashwagandha Moon Milk: Simmer 1/2 tsp Ashwagandha powder in warm milk with 1/2 tsp ghee, a pinch of nutmeg, and cinnamon before bed to decompress adrenal burnout and promote restorative sleep.",
      "Tulsi & Brahmi workday clarity tea: Steep 5-6 fresh Tulsi leaves and 1/2 tsp Brahmi powder in hot water; sip during afternoon breaks to melt mental tension without drowsiness.",
      "Pratimarsha Nasya with Sesame oil: Instill 2 drops of lukewarm pure sesame oil into each nostril upon waking to stabilize the nervous system against daily stress."
    ]
  },
  "reproductive-wellness": {
    "herbs": [
      {
        "name": "Gokshura (Tribulus)",
        "use": "Strengthens Shukra Dhatu (reproductive tissue), enhances sperm motility, and cleanses the urinary tract.",
        "preparation": "Boil 1/2 tsp in water or milk.",
        "safety": "Check with clinician if you have prostate enlargement."
      },
      {
        "name": "Shilajit (Purified)",
        "use": "Mineral-rich adaptogen with fulvic acid that enhances cellular ATP, stamina, and spermatogenesis.",
        "preparation": "Dissolve a rice-grain to pea-sized amount of pure resin in warm milk.",
        "safety": "Use only authenticated purified resin; avoid with high uric acid or gout."
      },
      {
        "name": "Safed Musli (Chlorophytum borivilianum)",
        "use": "Traditional spermatogenic and aphrodisiac herb supporting reproductive nourishment.",
        "preparation": "Take with warm milk under Ayurvedic supervision.",
        "safety": "Consult a doctor for fertility workups."
      }
    ],
    "herbalRemedyTips": [
      "Gokshura & Milk decoction (Ksheerapaka): Simmer 1/2 tsp Gokshura powder in 1/2 cup water and 1/2 cup milk until reduced by half; drink once daily to tonify reproductive channels.",
      "Purified Shilajit in warm milk: Dissolve a small rice-grain sized portion of purified Shilajit resin in lukewarm milk; drink in the morning under guidance for sustained cellular energy and stamina.",
      "Almond, Date & Saffron Ojas elixir: Blend 5 soaked peeled almonds, 2 soft dates, and 2 strands of saffron into a cup of warm milk; drink as a nourishing evening tonic to build vital essence (Ojas)."
    ]
  },
  "stress": {
    "herbs": [
      {
        "name": "Ashwagandha",
        "use": "Premier adaptogen that regulates the HPA axis, lowers cortisol, and builds nervous resilience.",
        "preparation": "Take 1/2 to 1 tsp in warm milk before sleep.",
        "safety": "Consult clinician if pregnant or with autoimmune conditions."
      },
      {
        "name": "Shankhpushpi (Convolvulus pluricaulis)",
        "use": "Top Ayurvedic brain tonic (Medhya Rasayana) that calms psychic agitation and mental chatter.",
        "preparation": "Take 1/2 tsp powder in warm water or milk twice daily.",
        "safety": "Very gentle and non-sedating."
      },
      {
        "name": "Brahmi (Bacopa monnieri)",
        "use": "Protects hippocampal neurons, modulates neurotransmitters, and dissipates nervous fatigue.",
        "preparation": "Drink as a mild tea or take with ghee.",
        "safety": "Take with food to prevent mild digestive sensitivity."
      }
    ],
    "herbalRemedyTips": [
      "Brahmi & Shankhpushpi calming tea: Steep 1/2 tsp each of Brahmi and Shankhpushpi powder in 1 cup hot water for 5 minutes; strain and sip in the late afternoon to quiet a racing mind.",
      "Ashwagandha warm evening latte: Simmer 1/2 tsp Ashwagandha in 1 cup warm oat or cow's milk with a pinch of nutmeg and cinnamon 30 minutes before bed to lower nighttime cortisol.",
      "Shiroabhyanga (Head & Scalp massage): Warm 1 tablespoon of Brahmi or sesame oil and massage with gentle circular motions into the crown of the head and temples to dissipate chronic mental strain."
    ]
  },
  "sleep-problems": {
    "herbs": [
      {
        "name": "Tagara (Valeriana wallichii)",
        "use": "Potent natural sedative herb that increases GABA and shortens sleep onset latency.",
        "preparation": "Take 1/4 to 1/2 tsp root powder in warm water 45 minutes before bedtime.",
        "safety": "Do not combine with prescription sedatives or alcohol."
      },
      {
        "name": "Nutmeg (Jaiphal)",
        "use": "Gentle hypnotic spice (Nidrajanana) that induces deep, continuous, restful sleep.",
        "preparation": "Grate a tiny pinch (under 1/8 tsp) into warm milk before bed.",
        "safety": "Keep doses very small; never exceed a culinary pinch."
      },
      {
        "name": "Chamomile",
        "use": "Apigenin binds to benzodiazepine receptors in the brain, promoting tranquility.",
        "preparation": "Steep 1-2 tea bags in covered hot water for 10 minutes.",
        "safety": "Safe for evening routines."
      }
    ],
    "herbalRemedyTips": [
      "Warm Nutmeg (Jaiphal) spiced milk: Stir a tiny pinch (less than 1/8 tsp) of freshly grated nutmeg and 1/4 tsp cardamom into warm milk; drink 30 minutes before sleep to induce uninterrupted slumber.",
      "Tagara root bedtime infusion: Steep 1/4 tsp Tagara (Indian Valerian) root powder in warm water under clinician advice to quiet persistent insomnia and midnight awakenings.",
      "Pada Abhyanga (Foot massage with warm ghee): Rub warm cow ghee or sesame oil firmly into the soles of your feet for 5 minutes before slipping into bed to ground erratic Prana and invite sleep."
    ]
  },
  "mild-anxiety": {
    "herbs": [
      {
        "name": "Shankhpushpi",
        "use": "Cools the mind, lowers nervous pulse rate, and alleviates anticipatory apprehension.",
        "preparation": "Consume 1/2 tsp with warm water or a spoonful of honey.",
        "safety": "Safe for daily calming support."
      },
      {
        "name": "Jatamansi (Nardostachys jatamansi)",
        "use": "Revered grounding root that calms intense emotional turbulence and nervous tremors.",
        "preparation": "Take under professional guidance in micro-doses.",
        "safety": "Avoid high doses; consult clinician if taking psychiatric medications."
      },
      {
        "name": "Chamomile",
        "use": "Relaxes peripheral tension and calms somatic anxiety sensations.",
        "preparation": "Drink as an afternoon or evening tea.",
        "safety": "Avoid if allergic to daisy family plants."
      }
    ],
    "herbalRemedyTips": [
      "Shankhpushpi & Honey morning draught: Mix 1/2 tsp Shankhpushpi powder with 1/2 tsp raw honey in warm water upon waking to stabilize the mind against daytime worry and apprehension.",
      "Warm Cow Ghee Nasya: Place 2 drops of lukewarm melted grass-fed cow ghee into each nostril in the morning to nourish the olfactory nerves and pacify agitated Prana Vata.",
      "Lavender & Cardamom aromatic tea: Steep dried lavender flowers with 1 crushed cardamom pod in hot water; inhale the fragrant aroma deeply before sipping to relax tense shoulders and chest tightness."
    ]
  },
  "relaxation": {
    "herbs": [
      {
        "name": "Damascus Rose",
        "use": "Soothes the energetic heart (Sadhaka Pitta), relieves emotional tension, and invites inner peace.",
        "preparation": "Steep organic dried petals in hot water.",
        "safety": "Gentle and completely safe."
      },
      {
        "name": "Cardamom",
        "use": "Aromatic cooling spice that clarifies the senses and melts muscular tension.",
        "preparation": "Crush pods into herbal teas or chew after meals.",
        "safety": "Safe for daily culinary use."
      },
      {
        "name": "Tulsi",
        "use": "Restores mental serenity and balances bodily systems strained by modern sensory overload.",
        "preparation": "Brew freshly with hot water.",
        "safety": "Safe and non-drowsy."
      }
    ],
    "herbalRemedyTips": [
      "Rose Petal & Cardamom tranquility brew: Steep 1 tablespoon of organic dried rose petals and 2 crushed green cardamom pods in boiling water for 5 minutes; strain and sip slowly in a quiet room.",
      "Tulsi & Lemon Balm wind-down tea: Brew holy basil leaves with lemon balm to create an uplifting, soothing herbal infusion that melts tension at the end of the day.",
      "Warm Epsom salt & Lavender foot soak: Soak feet in a basin of warm water with 1/2 cup Epsom salt and 3 drops of lavender oil for 15 minutes to release somatic stress from the body."
    ]
  },
  "mental-fatigue": {
    "herbs": [
      {
        "name": "Brahmi (Bacopa)",
        "use": "Enhances synaptic transmission, improves recall, and re-energizes an exhausted brain.",
        "preparation": "Take 1/2 tsp with ghee or brew as tea.",
        "safety": "Ensure consistent use for best cognitive benefits."
      },
      {
        "name": "Shankhpushpi",
        "use": "Recharges mental stamina during prolonged study, writing, or complex problem-solving.",
        "preparation": "Mix 1/2 tsp in warm milk with honey.",
        "safety": "Non-stimulating, restorative."
      },
      {
        "name": "Rosemary & Peppermint",
        "use": "Aromatic cineole stimulates cerebral circulation and banishes afternoon mental fog.",
        "preparation": "Inhale essential oil vapors or drink as a tea.",
        "safety": "Avoid applying undiluted oils directly to skin."
      }
    ],
    "herbalRemedyTips": [
      "Brahmi Ghrita / Herbal Tea with Ghee: Whisk 1/2 tsp Brahmi powder and 1/2 tsp warm melted ghee into warm water or milk; drink mid-morning to nourish brain lipid tissue and dispel mental exhaustion.",
      "Rosemary & Peppermint focus steam: Add 2 drops of rosemary and 1 drop of peppermint oil to hot water; inhale the refreshing vapors during workday slumps for instant cognitive revival.",
      "Fresh Amla & Raw Honey brain tonic: Consume 1 teaspoon of fresh Amla pulp mixed with raw honey to deliver direct antioxidant fuel and oxygenation to fatigued neural microvessels."
    ]
  },
  "seasonal-wellness": {
    "herbs": [
      {
        "name": "Guduchi (Giloy)",
        "use": "Immuno-enhancer that purifies blood, stimulates white blood cell activity, and adapts the body to weather shifts.",
        "preparation": "Drink 1/2 tsp powder in warm water daily.",
        "safety": "Coordinate with doctor if on immunosuppressive therapy."
      },
      {
        "name": "Tulsi",
        "use": "Guards against environmental pathogens and clears seasonal bronchial heaviness.",
        "preparation": "Brew as daily tea with black pepper.",
        "safety": "Safe and effective for seasonal transitions."
      },
      {
        "name": "Turmeric",
        "use": "Broad-spectrum immune modulator with antimicrobial and anti-inflammatory power.",
        "preparation": "Cook with turmeric and black pepper or drink Golden Milk.",
        "safety": "Avoid high doses with gallstones."
      }
    ],
    "herbalRemedyTips": [
      "Guduchi & Tulsi seasonal brew: Simmer 1/2 tsp Giloy powder and 6 fresh Tulsi leaves in 2 cups water until reduced to 1 cup; drink warm every morning when the seasons change.",
      "Daily Chyawanprash ritual: Take 1 rounded teaspoon of authentic Amla-based Chyawanprash on an empty stomach with warm milk or water to fortify systemic defense (Ojas).",
      "Golden Turmeric-Black Pepper milk: Whisk 1/2 tsp turmeric powder, a pinch of black pepper, and 1/2 tsp ghee into warm milk; sip before bed to protect mucous membranes."
    ]
  },
  "energy-fatigue": {
    "herbs": [
      {
        "name": "Ashwagandha",
        "use": "Restores depleted cellular reserves (Bala) and overcomes chronic systemic exhaustion.",
        "preparation": "Take 1/2 tsp in warm milk with honey or dates.",
        "safety": "Consult clinician if managing chronic fatigue syndrome."
      },
      {
        "name": "Shilajit",
        "use": "Rich in 84+ ionic trace minerals and fulvic acid to accelerate mitochondrial ATP production.",
        "preparation": "Dissolve a tiny pea-sized portion in warm water or milk.",
        "safety": "Ensure authenticated pure grade; avoid in active gout."
      },
      {
        "name": "Shatavari",
        "use": "Rebuilds deep tissue fluids and prevents adrenal burnout from chronic overexertion.",
        "preparation": "Take with warm almond milk.",
        "safety": "Safe for sustained restorative use."
      }
    ],
    "herbalRemedyTips": [
      "Ashwagandha & Medjool Date restorative blend: Blend 1/2 tsp Ashwagandha powder, 2 soaked soft dates, 4 soaked peeled almonds, and 1 cup warm milk for a clean, sustained morning energy boost.",
      "Licorice & Amla midday tea: Simmer 1/4 tsp licorice root and 1/2 tsp amla powder in hot water; sip at 2 PM to support adrenal endurance without relying on caffeine.",
      "Warm Cumin-Ginger water: Replace excess coffee with warm water steeped with fresh ginger and cumin seeds to kindle digestive Agni and clear heavy lethargy."
    ]
  },
  "headache": {
    "herbs": [
      {
        "name": "Dry Ginger",
        "use": "Topical application provides counter-irritant relief, while tea relieves vascular and tension headache throbbing.",
        "preparation": "Make a forehead paste with water or drink ginger tea.",
        "safety": "Discontinue paste if skin burns or reddens excessively."
      },
      {
        "name": "Coriander Seeds",
        "use": "Cooling Pitta-pacifying herb that relieves throbbing temples and heat-induced headaches.",
        "preparation": "Soak crushed seeds overnight and sip the water.",
        "safety": "Safe and cooling."
      },
      {
        "name": "Peppermint",
        "use": "Menthol eases muscular contractions and improves cranial blood flow.",
        "preparation": "Dilute 1 drop of oil in carrier oil for temple massage.",
        "safety": "Do not apply near eyes."
      }
    ],
    "herbalRemedyTips": [
      "Topical Dry Ginger or Sandalwood paste: Mix 1/2 tsp dry ginger powder (for cold/tension headaches) or pure sandalwood powder (for hot/throbbing headaches) with water into a paste; apply to forehead for 15 minutes.",
      "Coriander & Fennel cooling headache draught: Soak 1 tablespoon of crushed coriander and fennel seeds in 1 glass of water overnight; strain and sip throughout the morning to pacify Pitta headache heat.",
      "Peppermint temple & neck rub: Dilute 1 drop of pure peppermint essential oil into 1 teaspoon of almond oil; gently massage into temples and the base of your skull to relieve tension bands."
    ]
  },
  "oral-health": {
    "herbs": [
      {
        "name": "Clove (Lavanga)",
        "use": "Contains eugenol with potent analgesic and antibacterial actions against oral pathogens.",
        "preparation": "Apply a drop of diluted clove oil to gums or chew 1 whole clove.",
        "safety": "Never apply undiluted essential oil to inflamed tissue."
      },
      {
        "name": "Neem",
        "use": "Nature's toothbrush; prevents dental plaque, gingivitis, and bad breath.",
        "preparation": "Use neem bark powder for gum massage or chew fresh twigs.",
        "safety": "Safe for oral hygiene; do not swallow large amounts."
      },
      {
        "name": "Triphala",
        "use": "Astringent tannins tone spongy gums, stop bleeding, and inhibit mouth ulcers.",
        "preparation": "Use warm Triphala decoction as a mouth gargle.",
        "safety": "Very safe for daily dental rinsing."
      }
    ],
    "herbalRemedyTips": [
      "Gandusha (Oil Pulling with Sesame or Coconut oil): Swish 1 tablespoon of cold-pressed sesame or coconut oil in the mouth for 10-15 minutes every morning before brushing; spit out to bind bacteria and strengthen gum attachment.",
      "Triphala oral rinse: Boil 1/2 tsp Triphala powder in 1 cup water for 3 minutes, cool to lukewarm, and use as an astringent daily mouthwash to tighten gums and heal oral tissues.",
      "Clove & Rock Salt gum massage: Mix a tiny drop of pure clove oil with 1/2 tsp mustard oil and a pinch of fine rock salt; massage gently along gums 2-3 times a week to prevent gingivitis."
    ]
  },
  "healthy-aging": {
    "herbs": [
      {
        "name": "Amla (Amalaki)",
        "use": "Supreme Ayurvedic longevity rasayana; neutralizes free radicals and maintains youthful tissue tone.",
        "preparation": "Consume 1 tsp fresh fruit or powder daily.",
        "safety": "Safe for long-term daily use."
      },
      {
        "name": "Ashwagandha",
        "use": "Maintains muscle mass, bone density, cognitive recall, and immune vitality with advancing years.",
        "preparation": "Take 1/2 tsp daily in warm milk.",
        "safety": "Check for medication interactions."
      },
      {
        "name": "Brahmi",
        "use": "Preserves neuroplasticity, memory retention, and mental sharpness.",
        "preparation": "Take with ghee or warm water.",
        "safety": "Safe and rejuvenating."
      }
    ],
    "herbalRemedyTips": [
      "Brahmi-Amla daily longevity elixir: Stir 1/2 tsp each of Brahmi and organic Amla powder into warm water or milk every morning to nourish brain tissue, protect eyesight, and enhance cellular vitality.",
      "Daily Warm Sesame Oil Abhyanga: Warm unrefined sesame oil and massage joints and limbs before a warm morning bath to prevent age-related skin dryness, bone brittleness, and joint stiffness.",
      "Golden Turmeric & Grass-fed Ghee with meals: Cook daily with pure cow ghee and turmeric to lubricate internal bodily tissues (Dhatus) and protect cardiovascular elasticity."
    ]
  },
  "lifestyle-reset": {
    "herbs": [
      {
        "name": "Triphala",
        "use": "Gently cleanses the entire gastrointestinal tract without stripping essential fluids or microflora.",
        "preparation": "Take 1 tsp with warm water before bed for 7 consecutive days.",
        "safety": "Do not use during active diarrhea."
      },
      {
        "name": "CCF (Cumin, Coriander, Fennel)",
        "use": "Balances all three doshas and sweeps accumulated metabolic toxins (Ama) from bodily channels.",
        "preparation": "Simmer equal parts whole seeds in water and sip warm all day.",
        "safety": "Gentle and safe for continuous use."
      },
      {
        "name": "Fresh Ginger & Lemon",
        "use": "Ignites digestive fire, flushes stagnant water, and kickstarts sluggish liver metabolism.",
        "preparation": "Sip warm ginger-lemon water upon waking.",
        "safety": "Moderate if experiencing active hyperacidity."
      }
    ],
    "herbalRemedyTips": [
      "Classical CCF (Cumin-Coriander-Fennel) all-day detox tea: Simmer 1/2 tsp each of whole cumin, coriander, and fennel seeds in 4 cups of water for 5 minutes; keep warm in a thermos and sip between meals to flush Ama.",
      "Triphala 7-day evening reset: Take 1 tsp Triphala powder dissolved in a cup of warm water 45 minutes before sleep for 7 consecutive nights to gently rebalance digestive motility and eliminate gut residue.",
      "Morning Warm Ginger-Lemon flush: Drink a large mug of warm water with juice of 1/4 fresh lemon and 2 thin slices of fresh ginger first thing in the morning to stimulate natural peristalsis."
    ]
  }
};

const categoryDefaults: Record<Category, Pick<Condition, "perspective" | "tryToday" | "foods" | "limit" | "practices" | "therapies" | "safety">> = {
  Digestive: { perspective: "Traditional Ayurveda may connect digestive discomfort with meal timing, food qualities, digestive capacity (agni), and individual constitution. These traditional ideas differ from modern medical explanations.", tryToday: ["Sip water regularly", "Eat slowly and mindfully", "Choose smaller, regular meals", "Take a gentle walk after eating", "Practice five minutes of relaxed breathing"], foods: ["Simply cooked vegetables", "Oats or rice", "Banana when tolerated", "Mild soups", "Fennel or cumin in food"], limit: ["Very large meals", "Personal trigger foods", "Late-night eating", "Excess alcohol", "Frequent highly processed foods"], practices: ["Mindful eating", "Gentle post-meal walking", "Mild herbal tea", "Consistent meal timing"], therapies: ["Ayurveda", "Nutrition", "Hydration", "Breathing exercises", "Mindfulness"], safety: "Persistent digestive symptoms can have many causes. Supplements may interact with medicines and may be unsuitable during pregnancy or with liver or kidney conditions." },
  Respiratory: { perspective: "Ayurvedic traditions describe seasonal balance, warmth, rest, and individual constitution as relevant to respiratory comfort. This is a traditional framework, not a modern diagnosis.", tryToday: ["Rest and hydrate", "Use warm fluids", "Try saline nasal rinse safely", "Avoid smoke and strong scents", "Keep indoor air comfortably humid"], foods: ["Warm soups", "Soft fruits", "Ginger in food", "Protein-rich meals", "Warm caffeine-free drinks"], limit: ["Smoke exposure", "Known allergens", "Alcohol when unwell", "Unproven essential-oil ingestion", "Foods that worsen symptoms"], practices: ["Gentle breathing only when comfortable", "Adequate sleep", "Warm shower", "Seasonal routine"], therapies: ["Herbal traditions", "Hydration", "Sleep & recovery", "Breathing exercises", "Yoga"], safety: "Breathing symptoms can become urgent. Herbal products may interact with respiratory, allergy, or other medicines." },
  Lifestyle: { perspective: "Ayurveda traditionally emphasizes daily rhythm, balanced meals, movement, sleep, and constitution. These ideas can complement but never replace medical monitoring or prescribed treatment.", tryToday: ["Take a 10-minute walk", "Build a balanced plate", "Drink water instead of sugary drinks", "Keep a consistent bedtime", "Track one habit without judgment"], foods: ["Fiber-rich vegetables", "Beans when tolerated", "Whole grains", "Nuts and seeds", "Unsweetened foods"], limit: ["Sugary drinks", "Excess alcohol", "Highly processed snacks", "Large portions", "Starting supplements without advice"], practices: ["Dinacharya", "Mindful eating", "Gentle yoga", "Regular sleep schedule"], therapies: ["Nutrition", "Exercise & movement", "Yoga", "Mindfulness", "Ayurveda"], safety: "Do not stop prescribed medication. Coordinate diet, exercise, and supplements with your clinician, especially when managing blood sugar, blood pressure, liver, or heart conditions." },
  Skin: { perspective: "Traditional Ayurveda considers skin wellbeing in relation to constitution, climate, digestion, and daily care. Modern skin conditions have varied causes and may need medical diagnosis.", tryToday: ["Use a fragrance-free moisturizer", "Take a lukewarm shower", "Avoid scratching", "Wear breathable fabrics", "Patch-test new products"], foods: ["Colorful vegetables", "Adequate protein", "Omega-3-rich foods", "Water", "Foods you personally tolerate"], limit: ["Known irritants", "Harsh scrubs", "Fragranced products", "Picking or scratching", "Unverified topical remedies"], practices: ["Gentle self-care routine", "Cooling relaxation", "Mindful stress care", "Traditional oiling only if tolerated"], therapies: ["Skin care", "Nutrition", "Stress support", "Ayurveda", "Mindfulness"], safety: "Do not apply herbs or essential oils to broken skin. Seek care for spreading redness, fever, pain, pus, eye involvement, or rapidly changing lesions." },
  Pain: { perspective: "Ayurvedic practice traditionally discusses movement, warmth, rest, and individualized oil massage. Pain also needs modern assessment when severe, persistent, traumatic, or unexplained.", tryToday: ["Use gentle comfortable movement", "Adjust your workstation", "Take movement breaks", "Try a warm or cool pack", "Prioritize restorative sleep"], foods: ["A varied Mediterranean-style pattern", "Protein-rich foods", "Colorful produce", "Whole grains", "Adequate fluids"], limit: ["Prolonged bed rest", "Painful forced stretching", "Excess alcohol", "High-dose supplements", "Activities that worsen pain"], practices: ["Gentle yoga", "Abhyanga if appropriate", "Relaxed breathing", "Pacing activity"], therapies: ["Exercise & movement", "Massage", "Yoga", "Hydrotherapy", "Acupressure"], safety: "New or worsening pain may require assessment. Massage and stretching are not appropriate for every injury or condition." },
  Women: { perspective: "Ayurvedic traditions emphasize cyclical rhythms, nourishment, rest, and individualized routines. Symptoms may also reflect conditions that require medical evaluation.", tryToday: ["Use a warm pack if comfortable", "Choose gentle movement", "Keep regular meals", "Track symptoms", "Make time for rest"], foods: ["Iron-rich foods", "Calcium-rich foods", "Colorful vegetables", "Whole grains", "Adequate protein"], limit: ["Excess alcohol", "Skipping meals", "Unverified hormone products", "Personal symptom triggers", "High-dose herbal blends"], practices: ["Gentle yoga", "Meditation", "Mindful eating", "Restorative routine"], therapies: ["Yoga", "Nutrition", "Mindfulness", "Ayurveda", "Sleep & recovery"], safety: "Pregnancy, breastfeeding, fertility treatment, and hormone-sensitive conditions require professional advice before herbs or supplements." },
  Men: { perspective: "Traditional Ayurveda approaches vitality through sleep, nourishment, movement, stress balance, and individualized routines. It does not replace screening or medical care.", tryToday: ["Take a brisk walk", "Protect sleep time", "Eat a balanced meal", "Pause for relaxed breathing", "Schedule overdue preventive care"], foods: ["Vegetables", "Whole grains", "Legumes", "Nuts and seeds", "Lean protein"], limit: ["Tobacco", "Excess alcohol", "Unverified enhancement products", "Prolonged sitting", "Highly processed foods"], practices: ["Dinacharya", "Strength and mobility", "Meditation", "Mindful eating"], therapies: ["Exercise & movement", "Nutrition", "Yoga", "Meditation", "Ayurveda"], safety: "Sexual, urinary, or reproductive symptoms deserve qualified assessment. Supplements marketed for performance may contain undeclared ingredients." },
  Mental: { perspective: "Ayurvedic traditions connect emotional balance with daily rhythm, rest, sensory input, nourishment, and constitution. Mental health symptoms have many causes and deserve evidence-based support.", tryToday: ["Take five slow breaths", "Step outside briefly", "Reduce evening screen time", "Write down one concern", "Connect with someone you trust"], foods: ["Regular balanced meals", "Whole grains", "Protein-rich foods", "Colorful produce", "Water"], limit: ["Excess caffeine", "Alcohol as a coping tool", "Late-night screens", "Skipping meals", "Self-medicating with supplements"], practices: ["Meditation", "Pranayama without breath holding", "Gentle yoga", "Consistent sleep routine"], therapies: ["Meditation", "Mindfulness", "Yoga", "Breathing exercises", "Aromatherapy"], safety: "Wellness practices can complement professional mental healthcare. Seek urgent help for thoughts of self-harm, inability to stay safe, severe confusion, or a mental health crisis." },
  General: { perspective: "Ayurveda traditionally emphasizes seasonal routines, digestive balance, restorative sleep, movement, and personal constitution as foundations of wellbeing.", tryToday: ["Drink water regularly", "Eat one colorful meal", "Move for ten minutes", "Get daylight early in the day", "Keep a steady bedtime"], foods: ["Varied vegetables", "Whole fruits", "Whole grains", "Protein-rich foods", "Nuts and seeds"], limit: ["Extreme detoxes", "Excess alcohol", "Very restrictive diets", "Unverified supplements", "Prolonged inactivity"], practices: ["Dinacharya", "Gentle yoga", "Mindful eating", "Meditation"], therapies: ["Nutrition", "Movement", "Sleep & recovery", "Mindfulness", "Ayurveda"], safety: "General advice must be personalized for age, medications, pregnancy, allergies, and kidney, liver, or other health conditions." },
};

const items: Array<[string, string, Category, string, string, boolean?]> = [
["acidity-heartburn","Acidity & Heartburn","Digestive","flame","Burning discomfort or reflux after eating."],["indigestion","Indigestion","Digestive","utensils","Fullness, discomfort, or unsettled digestion."],["constipation","Constipation","Digestive","sprout","Support for regular, comfortable bowel habits."],["gas-bloating","Gas & Bloating","Digestive","wind","Gentle approaches for occasional abdominal fullness."],["diarrhea","Diarrhea","Digestive","droplets","Hydration-focused support for loose stools.",true],["irritable-bowel-syndrome","Irritable Bowel Syndrome","Digestive","activity","Lifestyle support alongside individualized medical care."],["nausea","Nausea","Digestive","waves","Low-risk comfort measures for occasional nausea."],
["common-cold","Common Cold","Respiratory","cloud-sun","Rest and comfort during a typical viral cold."],["cough","Cough","Respiratory","wind","Soothing practices for an uncomplicated cough."],["sore-throat","Sore Throat","Respiratory","mic","Gentle comfort for throat irritation."],["seasonal-allergies","Seasonal Allergies","Respiratory","flower","Daily habits for seasonal pollen exposure."],["sinus-congestion","Sinus Congestion","Respiratory","cloud","Comfort measures for stuffiness and pressure."],["asthma","Asthma","Respiratory","lungs","Complementary wellbeing alongside prescribed asthma care.",true],
["type-2-diabetes","Type 2 Diabetes","Lifestyle","gauge","Lifestyle support alongside medical treatment.",true],["high-blood-pressure","High Blood Pressure","Lifestyle","heart-pulse","Supportive habits alongside regular monitoring.",true],["high-cholesterol","High Cholesterol","Lifestyle","chart","Heart-healthy everyday choices."],["weight-management","Weight Management","Lifestyle","scale","Sustainable nourishment, movement, and sleep habits."],["fatty-liver","Fatty Liver","Lifestyle","shield","Lifestyle support guided by a healthcare professional.",true],["metabolic-wellness","Metabolic Wellness","Lifestyle","sparkles","Everyday habits supporting metabolic health."],
["acne","Acne","Skin","circle-dot","Gentle skin care and lifestyle considerations."],["eczema","Eczema","Skin","hand","Barrier-supportive care for sensitive skin."],["dry-skin","Dry Skin","Skin","droplet","Simple moisture and skin-barrier support."],["psoriasis","Psoriasis","Skin","layers","Complementary comfort alongside medical treatment.",true],["dandruff","Dandruff","Skin","snowflake","Scalp care for flaking and irritation."],["hair-fall","Hair Fall","Skin","scissors","General hair and scalp wellness support.",true],
["back-pain","Back Pain","Pain","accessibility","Gentle movement and recovery support."],["neck-pain","Neck Pain","Pain","move","Everyday mobility and ergonomic care."],["joint-pain","Joint Pain","Pain","bone","Comfortable movement and recovery habits."],["arthritis","Arthritis","Pain","hand","Complementary wellbeing alongside clinical care.",true],["muscle-soreness","Muscle Soreness","Pain","dumbbell","Recovery support after activity."],["stiffness","Stiffness","Pain","stretch-horizontal","Gentle mobility for everyday stiffness."],
["menstrual-cramps","Menstrual Cramps","Women","flower-2","Comfort and self-care during menstruation."],["pms","PMS","Women","calendar-heart","Lifestyle support through the menstrual cycle."],["menopause-support","Menopause Support","Women","sunset","Wellbeing support through the menopause transition."],["womens-wellness","General Women’s Wellness","Women","heart","Foundational habits across life stages."],
["mens-wellness","General Men’s Wellness","Men","shield-check","Foundational habits and preventive wellbeing."],["mens-stress","Stress & Lifestyle Support","Men","briefcase","Practical support for work and life stress."],["reproductive-wellness","Reproductive Wellness","Men","heart-handshake","General reproductive wellbeing and care."],
["stress","Stress","Mental","brain","Calming practices for everyday stress."],["sleep-problems","Sleep Problems","Mental","moon","Support for a steadier sleep routine."],["mild-anxiety","Mild Anxiety","Mental","cloud-moon","Wellness support alongside appropriate care.",true],["relaxation","Relaxation","Mental","feather","Practices to help the body settle."],["mental-fatigue","Mental Fatigue","Mental","battery-low","Restorative habits for mental overload."],
["seasonal-wellness","Immunity & Seasonal Wellness","General","shield-plus","Healthy routines through seasonal changes."],["energy-fatigue","Energy & Fatigue","General","sun","Foundational support for everyday energy.",true],["headache","Headache","General","circle","Low-risk support for occasional headaches.",true],["oral-health","Oral Health","General","smile","Daily practices for teeth and gums."],["healthy-aging","Healthy Aging","General","tree-pine","Movement, connection, and nourishment over time."],["lifestyle-reset","General Detox & Lifestyle Wellness","General","refresh-cw","Gentle routines without extreme cleanses."]
];

export const conditions: Condition[] = items.map(([slug,name,category,icon,summary,serious]) => {
  const herbal = conditionHerbalData[slug];
  return {
    slug,name,category,icon,summary, ...(serious === undefined ? {} : { serious }), ...categoryDefaults[category],
    herbs: herbal?.herbs ?? [],
    herbalRemedyTips: herbal?.herbalRemedyTips ?? [],
    evidence: serious ? "Professional guidance" : "Limited or mixed",
    warnings: serious
      ? ["Severe, sudden, or rapidly worsening symptoms", "Chest pain, difficulty breathing, fainting, or confusion", "New weakness, uncontrolled bleeding, or severe allergic reaction"]
      : ["Symptoms that are severe, persistent, unusual, or worsening", "Chest pain, difficulty breathing, fainting, or confusion", "Severe pain, uncontrolled bleeding, or signs of dehydration"],
  };
});

export const categories = ["All", "Digestive", "Respiratory", "Lifestyle", "Skin", "Pain", "Women", "Men", "Mental", "General"] as const;
export const isCategory = (value: unknown): value is Category =>
  typeof value === "string" && categories.some((category) => category === value && category !== "All");
export const dailyTips = [
  "Step into morning daylight to support your natural sleep–wake rhythm.",
  "Pause for three slow breaths before your next meal.",
  "A short, comfortable walk can be a meaningful form of movement.",
  "Build today’s plate around color, variety, and foods you tolerate.",
  "A consistent bedtime often matters more than a perfect nighttime routine.",
  "Hydration needs vary—let thirst, climate, and activity guide you.",
  "Small routines practiced consistently are often more sustainable than extreme resets.",
];
export const getCondition = (slug: string) => conditions.find((item) => item.slug === slug);
