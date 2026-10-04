import type { Language } from "../context/language-context";

export interface ModalityItem {
  id: string;
  icon: string;
  gradient: string;
  badgeColor: string;
  content: Record<
    Language,
    {
      name: string;
      tagline: string;
      shortDesc: string;
      overview: string;
      traditionsTitle: string;
      traditionsDesc: string;
      traditionsKeys: string[];
      innovationsTitle: string;
      innovationsDesc: string;
      innovationsKeys: string[];
      relevanceTitle: string;
      relevanceSignificance: string;
      relevanceDailyUse: string;
      safetyNote: string;
    }
  >;
}

export const modalitiesData: ModalityItem[] = [
  {
    id: "ayurveda",
    icon: "🌿",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    badgeColor: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    content: {
      en: {
        name: "Ayurveda",
        tagline: "The 5,000-Year-Old Vedic Science of Life & Longevity",
        shortDesc: "A traditional Indian system emphasizing individualized routines, food, movement, and balance.",
        overview:
          "Ayurveda defines health not simply as the absence of illness, but as a vibrant state of metabolic, sensory, and spiritual harmony (Swastha). Its fundamental significance in human life is honoring individual constitutional uniqueness (Prakriti) and preventing chronic disease by living in tune with natural biological rhythms.",
        traditionsTitle: "Ancient Medicinal Traditions",
        traditionsDesc:
          "Codified in classical compendiums including Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya. Ayurveda is built on the Tridosha doctrine (Vata, Pitta, Kapha), the Seven Bodily Tissues (Sapta Dhatu), Digestive Fire (Agni), and the elimination of metabolic toxicity (Ama).",
        traditionsKeys: [
          "Tridosha constitutional diagnosis (Vata, Pitta, Kapha)",
          "Agni (Digestive & metabolic fire) as the foundation of immunity",
          "Panchakarma (Five purification and rejuvenation therapies)",
          "Rasayana (Botanical therapies for cellular longevity and vitality)",
        ],
        innovationsTitle: "Latest Scientific & Clinical Innovations",
        innovationsDesc:
          "Modern systems biology and pharmacology are actively validating classical Ayurvedic formulas. Ayurgenomics correlates genomic single nucleotide polymorphisms (SNPs) with Ayurvedic Prakriti types, proving individualized medicine existed thousands of years ago.",
        innovationsKeys: [
          "Ayurgenomics: Genetic profiling mapping to traditional dosha constitutions",
          "Reverse Pharmacology: Bioactive withanolides in Ashwagandha validated for neuroprotection",
          "Standardized nano-emulsions and liposomal delivery of Curcumin for enhanced absorption",
          "Clinical trials confirming Boswellia serrata (Shallaki) efficacy in inflammatory joint disorders",
        ],
        relevanceTitle: "Relevance & Modern Practical Use",
        relevanceSignificance:
          "In an era of chronic lifestyle epidemics, gut dysbiosis, and mental stress, Ayurveda provides a personalized preventative blueprint rather than a one-size-fits-all symptom mask.",
        relevanceDailyUse:
          "Adopt simple morning rituals: warm water with lemon or ginger, tongue scraping, mindful seasonal meals, and early sleep.",
        safetyNote: "Evidence varies by practice; traditional concepts are educational and do not replace clinical medical diagnoses.",
      },
      hi: {
        name: "आयुर्वेद",
        tagline: "5,000 वर्ष पुराना जीवन, स्वास्थ्य एवं दीर्घायु का वैदिक विज्ञान",
        shortDesc: "व्यक्तिगत प्रकृति, आहार, दिनचर्या और त्रिदोष संतुलन पर आधारित प्राचीन भारतीय चिकित्सा विज्ञान।",
        overview:
          "आयुर्वेद स्वास्थ्य को केवल रोग का अभाव नहीं, बल्कि आत्मा, इंद्रियों, मन और शरीर के पूर्ण संतुलन (स्वस्थ) के रूप में परिभाषित करता है। मानव जीवन में इसका सबसे बड़ा महत्व यह है कि यह प्रत्येक व्यक्ति की अनूठी प्रकृति (Prakriti) का सम्मान करता है और रोग उत्पन्न होने से पहले ही उसकी रोकथाम करता है।",
        traditionsTitle: "प्राचीन औषधीय परंपराएं",
        traditionsDesc:
          "चरक संहिता, सुश्रुत संहिता और अष्टांग हृदय जैसे कालजयी ग्रंथों में संकलित। यह त्रिदोष (वात, पित्त, कफ), सप्त धातु, जठराग्नि और आम (विषाक्त तत्वों) के निष्कासन पर आधारित है।",
        traditionsKeys: [
          "त्रिदोष सिद्धांत (वात, पित्त, कफ का संतुलन)",
          "जठराग्नि (पाचन अग्नि) को रोग प्रतिरोधक क्षमता का मूल आधार मानना",
          "पंचकर्म (शरीर का संपूर्ण कायाकल्प व शुद्धि)",
          "रसायन चिकित्सा (दीर्घायु और ओजस बढ़ाने वाली औषधियां)",
        ],
        innovationsTitle: "नवीनतम वैज्ञानिक एवं क्लिनिकल अनुसंधान",
        innovationsDesc:
          "आधुनिक जीनोमिक्स और फार्माकोलॉजी आज आयुर्वेदिक सिद्धांतों को सिद्ध कर रहे हैं। 'आयुर्जीनोमिक्स' ने साबित किया है कि मानव डीएनए और जीन पैटर्न आयुर्वेदिक प्रकृतियों से मेल खाते हैं।",
        innovationsKeys: [
          "आयुर्जीनोमिक्स: डीएनए और आनुवंशिकी का वात-पित्त-कफ से वैज्ञानिक संबंध",
          "रिवर्स फार्माकोलॉजी: अश्वगंधा के विदानोलाइड्स द्वारा न्यूरोप्रोटेक्शन की पुष्टि",
          "हल्दी के करक्यूमिन का नैनो-फॉर्मूलेशन जिससे अवशोषण कई गुना बढ़ता है",
          "गठिया और सूजन में शल्लकी (Boswellia) के क्लिनिकल परीक्षणों में सफल परिणाम",
        ],
        relevanceTitle: "आधुनिक जीवन में प्रासंगिकता एवं उपयोग",
        relevanceSignificance:
          "आज की तनावपूर्ण जीवनशैली, पेट की बीमारियों और अनिद्रा के युग में आयुर्वेद बिना दुष्प्रभाव के संपूर्ण स्वास्थ्य सुरक्षा कवच प्रदान करता है।",
        relevanceDailyUse:
          "दैनिक जीवन में सुबह गुनगुना पानी पीना, जीभ साफ करना, ताजे भोजन का सेवन और ऋतु के अनुसार दिनचर्या अपनाएं।",
        safetyNote: "पारंपरिक अवधारणाएं व्यक्तिगत हैं; यह आपातकालीन निदान या चिकित्सकीय उपचार का विकल्प नहीं हैं।",
      },
      gu: {
        name: "આયુર્વેદ",
        tagline: "જીવન, સ્વાસ્થ્ય અને દીર્ઘાયુનું 5,000 વર્ષ જૂનું વૈદિક વિજ્ઞાન",
        shortDesc: "વ્યક્તિગત પ્રકૃતિ, ખોરાક, દિનચર્યા અને ત્રિદોષ સંતુલન પર આધારિત પ્રાચીન ભારતીય વિજ્ઞાન.",
        overview:
          "આયુર્વેદ સ્વાસ્થ્યને માત્ર રોગની ગેરહાજરી નથી ગણતું, પરંતુ શરીર, મન, ઇન્દ્રિયો અને આત્માની સંપૂર્ણ પ્રસન્નતા (સ્વસ્થ) માને છે. માનવ જીવનમાં તેનું મહત્વ એ છે કે તે દરેક વ્યક્તિની અલગ પ્રકૃતિને ઓળખીને કુદરતી રીતે રોગપ્રતિકારક શક્તિ વધારે છે.",
        traditionsTitle: "પ્રાચીન ઔષધીય પરંપરાઓ",
        traditionsDesc:
          "ચરક સંહિતા અને સુશ્રુત સંહિતા જેવા શાસ્ત્રોમાં વર્ણવેલ છે. ત્રિદોષ (વાત, પિત્ત, કફ), સપ્ત ધાતુ, જઠરાગ્નિ અને આંતરિક કચરા (આમ) ના નિકાલ પર સમગ્ર સારવાર રચાયેલી છે.",
        traditionsKeys: [
          "ત્રિદોષ પ્રકૃતિ નિદાન (વાત, પિત્ત અને કફનું સંતુલન)",
          "જઠરાગ્નિનું પાચન બળ જ આરોગ્યની ચાવી છે",
          "પંચકર્મ દ્વારા શરીરની ઊંડી આંતરિક સફાઈ અને નવજીવન",
          "રસાયન ચિકિત્સાથી ઓજસ અને આયુષ્યની વૃદ્ધિ",
        ],
        innovationsTitle: "નવીનતમ વૈજ્ઞાનિક અને આધુનિક સંશોધનો",
        innovationsDesc:
          "આજના જેનોમિક્સ વિજ્ઞાને 'આયુર્જેનોમિક્સ' દ્વારા સાબિત કર્યું છે કે વ્યક્તિના ડીએનએ અને પ્રકૃતિ વચ્ચે સીધો સંબંધ છે. હર્બલ અર્કના આધુનિક પ્રયોગો આયુર્વેદને વૈશ્વિક સ્તરે માન્યતા અપાવી રહ્યા છે.",
        innovationsKeys: [
          "આયુર્જેનોમિક્સ: જેનેટિક્સ સાથે વાત-પિત્ત-કફનું વૈજ્ઞાનિક મેપિંગ",
          "અશ્વગંધા પર ન્યુરોલોજીકલ ક્લિનિકલ ટ્રાયલ્સમાં સફળતા",
          "નેનો-ટેકનોલોજી દ્વારા હળદર (કર્ક્યુમિન) નું ઝડપી શોષણ",
          "સાંધાના સોજામાં ગૂગળ અને શલ્લકીના વૈજ્ઞાનિક પુરાવા",
        ],
        relevanceTitle: "આધુનિક જીવનમાં મહત્વ અને ઉપયોગ",
        relevanceSignificance:
          "આજના બેઠાડુ જીવન, અનિયમિત ખોરાક અને માનસિક તણાવ સામે આયુર્વેદ કુદરતી રક્ષણ આપે છે.",
        relevanceDailyUse:
          "સવારે નવશેકું પાણી પીવું, જીભ સાફ કરવી, ઋતુ અનુસાર સાત્વિક ખોરાક લેવો અને નિયમિત દિનચર્યા પાળવી.",
        safetyNote: "પરંપરાગત ઉપચારો વ્યક્તિગત છે; તે ઈમરજન્સી મેડિકલ સારવારનો વિકલ્પ નથી.",
      },
    },
  },
  {
    id: "herbal-traditions",
    icon: "🍵",
    gradient: "from-amber-600 via-emerald-600 to-green-700",
    badgeColor: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    content: {
      en: {
        name: "Herbal Traditions",
        tagline: "Earth's Living Botanical Pharmacopeia Across Civilizations",
        shortDesc: "Plants and spices used across cultures as foods, teas, and therapeutic preparations.",
        overview:
          "Herbalism is the foundational root of global pharmacology. Plant secondary metabolites evolved over millions of years to interact with mammalian cell receptors, modulating inflammation, boosting immunity, and accelerating tissue repair without devastating side effects.",
        traditionsTitle: "Medicinal Traditions & Historical Lineage",
        traditionsDesc:
          "From Ayurvedic Dravyaguna (materia medica) and Native American ethnobotany to Traditional European Phytotherapy, herbalists utilized decoctions, infusions, cold extracts, and herbal ghee to balance vital humors.",
        traditionsKeys: [
          "Whole-plant synergy (phytochemical entourage effect)",
          "Adaptogenic herbs (enhancing universal resilience to stress)",
          "Kitchen pharmacy: spices (ginger, turmeric, cumin) as daily digestives",
          "Herbal infusions and decoctions targeting mucous membrane healing",
        ],
        innovationsTitle: "Latest Innovations & Pharmacology",
        innovationsDesc:
          "Supercritical CO2 extraction, HPLC chemical fingerprinting, and standardized active markers ensure consistent potency and purity, transforming ancient folklore into precision phytotherapy.",
        innovationsKeys: [
          "Liposomal encapsulation increasing herbal bioavailability by up to 2000%",
          "Supercritical CO2 extraction retaining delicate volatile terpenes",
          "AI-driven screening of plant molecules for cellular senescence reversal",
          "Microbiome biotransformation research: gut bacteria metabolizing plant polyphenols",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "Counters antibiotic resistance and chronic low-grade systemic inflammation caused by processed diets.",
        relevanceDailyUse:
          "Drink loose-leaf herbal teas (Tulsi for stress, Chamomile for sleep, Ginger for digestion). Use fresh culinary herbs and spices generously.",
        safetyNote: "Herbs are pharmacologically active and can interact with prescription medications. Consult a healthcare provider.",
      },
      hi: {
        name: "हर्बल परंपराएं",
        tagline: "प्रकृति की वनस्पति औषधियां एवं लोक परंपराएं",
        shortDesc: "विभिन्न संस्कृतियों में पौधों, पत्तियों व मसालों का औषधीय चाय व चूर्ण के रूप में उपयोग।",
        overview:
          "पेड़-पौधे और जड़ी-बूटियां मानव सभ्यता की सबसे पहली और सच्ची दवाएं हैं। पौधों के फाइटोकेमिकल्स शरीर के रिसेप्टर्स के साथ मिलकर बिना किसी दुष्प्रभाव के प्राकृतिक रूप से उपचार करते हैं।",
        traditionsTitle: "प्राचीन औषधीय परंपराएं",
        traditionsDesc:
          "आयुर्वेदीय द्रव्यगुण विज्ञान, लोक चिकित्सा और पारंपरिक ज्ञान में काढ़े (क्वाथ), चूर्ण, स्वरस और औषधीय तेलों का उपयोग सदियों से किया जाता रहा है।",
        traditionsKeys: [
          "पौधे के संपूर्ण सत्व का उपयोग (Whole Plant Synergy)",
          "एडाप्टोजेनिक औषधियां (तनाव से लड़ने की प्राकृतिक क्षमता)",
          "रसोई की फार्मेसी: अदरक, हल्दी, जीरा, सौंफ का दैनिक उपयोग",
          "हर्बल चाय और काढ़े द्वारा फेफड़ों और आंतों की सुरक्षा",
        ],
        innovationsTitle: "नवीनतम वैज्ञानिक नवाचार",
        innovationsDesc:
          "सुपरक्रिटिकल CO2 निष्कर्षण और नैनो-टेक्नोलॉजी ने जड़ी-बूटियों की शुद्धता और प्रभावकारिता को आधुनिक विज्ञान की कसौटी पर खरा साबित किया है।",
        innovationsKeys: [
          "लिपोसोमल तकनीक द्वारा जड़ी-बूटियों का शरीर में 20 गुना अधिक अवशोषण",
          "सुपरक्रिटिकल CO2 निष्कर्षण से बिना रसायन के शुद्ध अर्क तैयार करना",
          "आंतों के माइक्रोबायोम और हर्बल पॉलीफेनोल्स के बीच तालमेल पर शोध",
          "रोग प्रतिरोधक क्षमता बढ़ाने वाले एक्टिव बायो-मॉलिक्यूल्स की पहचान",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोगिता",
        relevanceSignificance:
          "एंटीबायोटिक प्रतिरोध और खान-पान से होने वाली अंदरूनी सूजन से बचाव में हर्बल औषधियां अमृत समान हैं।",
        relevanceDailyUse:
          "तुलसी, अदरक और मुलेठी की हर्बल चाय पिएं। भोजन में पाचक मसालों का नियमित उपयोग करें।",
        safetyNote: "जड़ी-बूटियां रासायनिक दवाओं के साथ प्रभाव डाल सकती हैं। डॉक्टर की सलाह जरूर लें।",
      },
      gu: {
        name: "વનસ્પતિ પરંપરાઓ",
        tagline: "કુદરતની ઔષધીય વનસ્પતિઓ અને દેશી ઔષધભંડાર",
        shortDesc: "વનસ્પતિઓ, પાંદડા અને મસાલાઓનો ઘરગથ્થુ ઔષધિ કે ઉકાળા તરીકે ઉપયોગ.",
        overview:
          "વનસ્પતિઓ માનવજાતની પ્રાકૃતિક ફાર્મસી છે. વનસ્પતિઓના તત્વો આપણા શરીરના કોષો સાથે કુદરતી રીતે જોડાઈને સોજો ઘટાડે છે અને રોગપ્રતિકારક શક્તિ વધારે છે.",
        traditionsTitle: "પરંપરાગત દેશી નુસ્ખા",
        traditionsDesc:
          "રસોડાના મસાલા અને જંગલની વનસ્પતિઓનો ઉકાળો, ચૂર્ણ અને ઔષધીય ઘી બનાવીને શરીરના રોગો મટાડવાની પ્રાચીન પ્રથા છે.",
        traditionsKeys: [
          "આખા છોડનો કુદરતી ઉપયોગ (સંપૂર્ણ પોષણ)",
          "તણાવ સામે લડતી એડાપ્ટોજેનિક ઔષધિઓ",
          "રસોડાના દેશી મસાલા: હળદર, આદુ, જીરું અને અજમો",
          "રોગપ્રતિકારક ઉકાળા અને હર્બલ ટી",
        ],
        innovationsTitle: "આધુનિક સંશોધનો અને વિજ્ઞાન",
        innovationsDesc:
          "આધુનિક એક્સ્ટ્રેક્શન ટેકનોલોજી દ્વારા જડીબુટ્ટીઓના સક્રિય તત્વોને વધુ અસરકારક રીતે શરીરમાં પહોંચાડવામાં આવે છે.",
        innovationsKeys: [
          "લીપોસોમલ પદ્ધતિથી ઔષધિઓનું ઝડપી શોષણ",
          "CO2 એક્સ્ટ્રેક્શનથી કેમિકલ વગર શુદ્ધ અર્કની પ્રાપ્તિ",
          "આંતરડાના બેક્ટેરિયા અને હર્બલ તત્વો વચ્ચેના સંબંધનું સંશોધન",
          "પ્રાકૃતિક એન્ટિ-ઓક્સિડન્ટ્સની ક્લિનિકલ સાબિતી",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં ઉપયોગ",
        relevanceSignificance:
          "કેમિકલયુક્ત દવાઓની આડઅસરોથી બચવા અને શરીરને અંદરથી મજબૂત રાખવા વનસ્પતિઓ ઉત્તમ છે.",
        relevanceDailyUse:
          "રોજ તુલસી, આદુ કે જેઠીમધની ચા પીવો. જમવામાં દેશી મસાલાનો યોગ્ય ઉપયોગ રાખો.",
        safetyNote: "જડીબુટ્ટીઓ દવાઓ સાથે પ્રતિક્રિયા કરી શકે છે. નિષ્ણાતની સલાહ લેવી હિતાવહ છે.",
      },
    },
  },
  {
    id: "yoga",
    icon: "🧘",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    badgeColor: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    content: {
      en: {
        name: "Yoga",
        tagline: "Union of Breath, Neuro-Musculoskeletal Alignment & Mind",
        shortDesc: "Postures and mindful movement supporting mobility, spinal health, and stress resilience.",
        overview:
          "Yoga is not mere gymnastics; it is a profound psycho-somatic science. By marrying conscious biomechanics with continuous breath awareness, it down-regulates sympathetic hyper-arousal, activates vagal nerve tone, restores spinal disc hydration, and harmonizes endocrine output.",
        traditionsTitle: "Classical Lineage & Philosophy",
        traditionsDesc:
          "Grounded in Patanjali's Yoga Sutras (Ashtanga: Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi) and the Hatha Yoga Pradipika, asana practice trains physical stillness so the mind may become still.",
        traditionsKeys: [
          "Asana: Sthira Sukham Asanam (Steadiness and ease in posture)",
          "Spinal axis lengthening and gentle decompression",
          "Bandhas (Neuro-energetic locks) and subtle Mudras",
          "Vagal nerve stimulation via vocalization and deep breath",
        ],
        innovationsTitle: "Modern Neuroscience & Biomechanics",
        innovationsDesc:
          "Neuroimaging reveals regular yoga practice increases gray matter volume in the hippocampus and insula while downregulating the amygdala. Medical yoga is now integrated into cardiac recovery, chronic back pain rehabilitation, and trauma therapy.",
        innovationsKeys: [
          "fMRI studies demonstrating upregulation of GABA neurotransmitters by up to 27%",
          "Myofascial meridian mapping aligning with classical yoga nadis",
          "Clinical orthopedic protocols for spinal disc herniation and postural kyphosis",
          "Therapeutic yoga for trauma (PTSD) via somatic nervous system regulation",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "Counters the sedentary 'desk worker posture', prevents spinal degeneration, and calms chronic anxiety.",
        relevanceDailyUse:
          "Practice 15-20 minutes of daily morning movement: Cat-Cow stretches, Downward Dog, Cobra, and gentle twists.",
        safetyNote: "Adapt practice for joint pain, pregnancy, injury, or severe medical conditions. Never force pain.",
      },
      hi: {
        name: "योग विज्ञान",
        tagline: "शरीर, श्वास, रीढ़ की हड्डी और चित्त का दिव्य संतुलन",
        shortDesc: "आसन और सूक्ष्म व्यायाम जो शरीर के लचीलेपन, रीढ़ की शक्ति और मानसिक शांति को बढ़ाते हैं।",
        overview:
          "योग केवल शारीरिक कसरत नहीं है, बल्कि चित्तवृत्तियों के निरोध और तंत्रिका तंत्र को संतुलित करने का विज्ञान है। यह वेगस तंत्रिका को सक्रिय कर मानसिक तनाव दूर करता है और रीढ़ की हड्डी को स्वस्थ रखता है।",
        traditionsTitle: "शास्त्रीय परंपरा एवं अष्टांग योग",
        traditionsDesc:
          "महर्षि पतंजलि के योग सूत्र और हठयोग प्रदीपिका पर आधारित। आसन का अर्थ है 'स्थिर सुखम् आसनम्'—जिस स्थिति में शरीर स्थिर और मन सुखद विश्राम में रहे।",
        traditionsKeys: [
          "अष्टांग योग (यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान, समाधि)",
          "रीढ़ की हड्डी का लचीलापन और संरेखण",
          "बंध और मुद्राएं जो प्राण ऊर्जा को संतुलित करती हैं",
          "गहरी श्वास के साथ मांसपेशियों का खिंचाव",
        ],
        innovationsTitle: "आधुनिक न्यूरोसाइंस एवं क्लिनिकल शोध",
        innovationsDesc:
          "एमआरआई और न्यूरोबायोलॉजी ने सिद्ध किया है कि योग से मस्तिष्क में गाबा (GABA) न्यूरोट्रांसमीटर 27% तक बढ़ता है, जिससे चिंता और अवसाद दूर होते हैं।",
        innovationsKeys: [
          "मस्तिष्क के हिप्पोकैम्पस में ग्रे मैटर की वृद्धि",
          "कार्डियोवैस्कुलर और हृदय रोगियों के लिए मेडिकल योग प्रोटोकॉल",
          "कमर दर्द और सर्वाइकल स्पोंडिलोसिस में फिजियोथेरेपी की तरह योग का उपयोग",
          "तनाव और मानसिक आघात (PTSD) के उपचार में प्रमाणित प्रभाव",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "कंप्यूटर और मोबाइल के कारण बिगड़े पोस्चर, पीठ दर्द और मानसिक तनाव के लिए योग सर्वोत्तम प्राकृतिक उपचार है।",
        relevanceDailyUse:
          "रोज सुबह 15-20 मिनट सूर्य नमस्कार, ताड़ासन, भुजंगासन और मार्जरी आसन का अभ्यास करें।",
        safetyNote: "चोट, गर्भावस्था या गंभीर जोड़ों के दर्द में विशेष मार्गदर्शन आवश्यक है। जबरदस्ती खिंचाव न करें।",
      },
      gu: {
        name: "યોગ વિજ્ઞાન",
        tagline: "શરીર, શ્વાસ, કરોડરજ્જુ અને મનનું દિવ્ય મિલન",
        shortDesc: "આસનો અને હળવી કસરતો જે શરીરની લચીલાપણું અને માનસિક શાંતિ જાળવે છે.",
        overview:
          "યોગ માત્ર કસરત નથી પરંતુ શારીરિક અને માનસિક આરોગ્યનું સર્વોચ્ચ વિજ્ઞાન છે. તે નર્વસ સિસ્ટમને શાંત કરે છે, કરોડરજ્જુને મજબૂત બનાવે છે અને શરીરમાં પ્રાણશક્તિ વધારે છે.",
        traditionsTitle: "પ્રાચીન અષ્ટાંગ યોગ પરંપરા",
        traditionsDesc:
          "મહર્ષિ પતંજલિના યોગ સૂત્રો પર આધારિત. 'સ્થિર સુખમ્ આસનમ્' ના સિદ્ધાંત મુજબ શરીરને સ્થિર અને મનને શાંત કરવાની સાધના.",
        traditionsKeys: [
          "અષ્ટાંગ યોગના આઠ અંગોનું પાલન",
          "કરોડરજ્જુનું કુદરતી ખેંચાણ અને લચીલાપણું",
          "પ્રાણાયામ અને આસનોનો સુમેળ",
          "શરીરના સાંધાઓ અને સ્નાયુઓની મજબૂતી",
        ],
        innovationsTitle: "આધુનિક મેડિકલ સાયન્સ અને યોગ",
        innovationsDesc:
          "આધુનિક બ્રેઈન સ્કેનમાં સાબિત થયું છે કે રોજિંદા યોગથી મગજમાં ખુશી અને શાંતિ આપતા કેમિકલ્સ વધે છે અને બ્લડ પ્રેશર કંટ્રોલમાં રહે છે.",
        innovationsKeys: [
          "મગજમાં શાંતિ આપતા ગાબા (GABA) લેવલમાં ૨૭% વધારો",
          "કમરના દુખાવા અને સાંધાની સમસ્યામાં મેડિકલ યોગ થેરાપી",
          "હૃદયરોગના દર્દીઓ માટે સલામત પુનર્વસન પ્રોટોકોલ",
          "ઊંઘ સુધારવા અને ડિપ્રેશન ઘટાડવામાં વૈજ્ઞાનિક સાબિતી",
        ],
        relevanceTitle: "આજના યુગમાં મહત્વ",
        relevanceSignificance:
          "કલાકો સુધી ખુરશી પર બેસી રહેવાથી થતા કમર-ગરદનના દુખાવા અને તણાવ સામે યોગ અકસીર છે.",
        relevanceDailyUse:
          "રોજ સવારે ૧૫ મિનિટ સૂર્ય નમસ્કાર, ભુજંગાસન અને હળવા સ્ટ્રેચિંગ કરો.",
        safetyNote: "ઈજા કે ગર્ભાવસ્થા દરમિયાન નિષ્ણાતની દેખરેખ હેઠળ જ યોગ કરો. પીડા થાય તો તરત અટકો.",
      },
    },
  },
  {
    id: "meditation",
    icon: "🪷",
    gradient: "from-violet-600 via-purple-700 to-indigo-800",
    badgeColor: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
    content: {
      en: {
        name: "Meditation & Mindfulness",
        tagline: "Cultivating Mental Stillness, Neuroplasticity & Emotional Equilibrium",
        shortDesc: "Attention practices helping people manage stress, quiet mental chatter, and build self-awareness.",
        overview:
          "Meditation is the intentional training of attention and awareness. Rather than suppressing thoughts, it alters your neurological relationship to them. It quiets the hyperactive Default Mode Network (DMN), preserves telomere length, and shifts brain states from chronic threat (fight-or-flight) to healing equilibrium.",
        traditionsTitle: "Contemplative Traditions",
        traditionsDesc:
          "Stemming from Vedic Dhyana, Buddhist Vipassana (insight), Zen Zazen, and loving-kindness (Metta), these traditions teach the observer consciousness—witnessing thoughts without compulsive identification.",
        traditionsKeys: [
          "Dhyana & Sakshi Bhava (Witness consciousness)",
          "Vipassana (Breath and sensation mindfulness)",
          "Trataka (Focused gaze meditation for concentration)",
          "Yoga Nidra (Conscious psychic rest between waking and sleep)",
        ],
        innovationsTitle: "Neuroscience Breakthroughs",
        innovationsDesc:
          "Pioneered by neuroscientists like Richard Davidson, studies show just 8 weeks of mindfulness practice physically shrinks the amygdala (fear center) and thickens the prefrontal cortex.",
        innovationsKeys: [
          "MBSR (Mindfulness-Based Stress Reduction) proven clinically effective for depression relapse",
          "Downregulation of inflammatory gene expression (NF-kB pathway)",
          "Preservation of cellular telomere length, slowing biological cellular aging",
          "EEG neurofeedback training optimizing alpha and theta brainwave coherence",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "The ultimate antidote to chronic cognitive overload, doom-scrolling, sensory overstimulation, and anxiety.",
        relevanceDailyUse:
          "Dedicate 10 minutes at sunrise or sunset: sit upright, observe natural inhalations and exhalations, and gently return attention when the mind wanders.",
        safetyNote: "Not a substitute for emergency psychiatric crisis intervention or professional mental healthcare.",
      },
      hi: {
        name: "ध्यान (मेडिटेशन)",
        tagline: "मानसिक शांति, एकाग्रता और आंतरिक स्थिरता का विज्ञान",
        shortDesc: "एकाग्रता और साक्षी भाव का अभ्यास जो तनाव दूर कर मानसिक स्पष्टता लाता है।",
        overview:
          "ध्यान मन को खाली करना नहीं, बल्कि विचारों के प्रति साक्षी भाव जगाना है। यह मस्तिष्क के तनाव केंद्र (एमीग्डाला) को शांत करता है और निर्णय लेने की क्षमता व भावनात्मक संतुलन को मजबूत बनाता है।",
        traditionsTitle: "प्राचीन ध्यान परंपराएं",
        traditionsDesc:
          "वैदिक ध्यान, विपश्यना, त्राटक और योग निद्रा जैसी विधाएं सदियों से चित्त की चंचलता को शांत करने के लिए विकसित की गई हैं।",
        traditionsKeys: [
          "साक्षी भाव (विचारों को बिना उलझे देखना)",
          "विपश्यना (श्वास और संवेदनाओं का सजग अवलोकन)",
          "त्राटक (एकाग्रता और दृष्टि शुद्धि का अभ्यास)",
          "योग निद्रा (गहरी मानसिक व तंत्रिका तंत्र शिथिलता)",
        ],
        innovationsTitle: "न्यूरोसाइंस एवं वैज्ञानिक खोजें",
        innovationsDesc:
          "हार्वर्ड और ऑक्सफोर्ड के अध्ययनों ने साबित किया है कि केवल 8 सप्ताह के नियमित ध्यान से मस्तिष्क का प्रीफ्रंटल कॉर्टेक्स मोटा होता है और तनाव उत्पन्न करने वाले न्यूरॉन्स शांत होते हैं।",
        innovationsKeys: [
          "एमबीबीआर (Mindfulness-Based Stress Reduction) क्लिनिकल प्रोटोकॉल",
          "कोशिकाओं की उम्र बढ़ाने वाले टेलोमेयर (Telomeres) की सुरक्षा",
          "अल्फा और थीटा ब्रेनवेव्स में स्थिरता जिससे गहरी शांति मिलती है",
          "कॉर्टिसोल (स्ट्रेस हार्मोन) के स्तर में उल्लेखनीय गिरावट",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "मोबाइल स्क्रीन के अत्यधिक उपयोग, बेचैनी और अनिद्रा से मुक्ति पाने के लिए ध्यान सबसे शक्तिशाली प्राकृतिक साधन है।",
        relevanceDailyUse:
          "रोज सुबह या रात को 10 मिनट सीधे बैठें, केवल आती-जाती श्वास को महसूस करें और मन को शांत होने दें।",
        safetyNote: "गंभीर मानसिक विकारों में योग्य मनोरोग विशेषज्ञ की सलाह का विकल्प नहीं।",
      },
      gu: {
        name: "ધ્યાન (મેડિટેશન)",
        tagline: "મનની એકાગ્રતા, શાંતિ અને આંતરિક સ્થિરતાની કળા",
        shortDesc: "એકાગ્રતા અને મનની સ્થિરતાનો અભ્યાસ જે ચિંતા અને તણાવ દૂર કરે છે.",
        overview:
          "ધ્યાન એ વિચારોથી મુક્ત થઈને વર્તમાન ક્ષણમાં જીવવાની કળા છે. તે મગજના તણાવ કેન્દ્રને શાંત કરે છે, યાદશક્તિ વધારે છે અને જીવનમાં અડગ ધીરજ આપે છે.",
        traditionsTitle: "પરંપરાગત સાધના માર્ગો",
        traditionsDesc:
          "વિપશ્યના, વૈદિક ધ્યાન અને યોગ નિદ્રા દ્વારા મનની ચંચળતા રોકીને શાંતિ મેળવવાની પરંપરા સદીઓ જૂની છે.",
        traditionsKeys: [
          "સાક્ષીભાવ (વિચારોને માત્ર જોવાની કળા)",
          "શ્વાસ પર એકાગ્રતા અને પ્રાણ સાધના",
          "ત્રાટક દ્વારા મનની એકાગ્રતા વધારવી",
          "યોગ નિદ્રાથી ઊંડો માનસિક વિશ્રામ",
        ],
        innovationsTitle: "આધુનિક વિજ્ઞાન અને મગજ પર સંશોધન",
        innovationsDesc:
          "ન્યુરોસાયન્સ મુજબ નિયમિત ધ્યાનથી મગજના કોષોનું આયુષ્ય વધે છે, તણાવના હોર્મોન્સ ઘટે છે અને એકાગ્રતા બમણી થાય છે.",
        innovationsKeys: [
          "માઇન્ડફુલનેસ દ્વારા ડિપ્રેશન અને ચિંતામાં ક્લિનિકલ રાહત",
          "ડીએનએ અને સેલ્યુલર ઉંમર વધતી અટકાવવાની ક્ષમતા",
          "બ્રેઇનવેવ્ઝ (Alpha waves) નું સંતુલન",
          "હૃદયના ધબકારા અને બ્લડ પ્રેશરમાં ઝડપી સ્થિરતા",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "મોબાઇલ નોટિફિકેશન, અશાંતિ અને ઊંઘ ન આવવાની સમસ્યા માટે ધ્યાન શ્રેષ્ઠ દેશી દવા છે.",
        relevanceDailyUse:
          "રોજ સવારે ૧૦ મિનિટ શાંત જગ્યાએ બેસીને ફક્ત શ્વાસની આવનજાવનનું ધ્યાન ધરો.",
        safetyNote: "ગંભીર માનસિક સમસ્યાઓમાં ડૉક્ટરની સલાહ જરૂરી છે.",
      },
    },
  },
  {
    id: "breathing-exercises",
    icon: "🌬️",
    gradient: "from-sky-500 via-blue-600 to-cyan-700",
    badgeColor: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30",
    content: {
      en: {
        name: "Breathing Exercises (Pranayama)",
        tagline: "Mastery of Vital Breath & Autonomic Nervous System Control",
        shortDesc: "Slow, comfortable breathing offering direct control over heart rate variability and mental calm.",
        overview:
          "Breathing is the unique somatic bridge between voluntary and involuntary physiology. While your heartbeat is automatic, consciously modifying your respiration rhythm instantly reshapes autonomic tone, activates the vagus nerve, and optimizes oxygen-carbon dioxide alveolar diffusion.",
        traditionsTitle: "Classical Pranayama Traditions",
        traditionsDesc:
          "Rooted in Hatha Yoga texts, Pranayama ('expansion of life-force') details specific ratios for inhalation (Puraka), retention (Kumbhaka), and exhalation (Rechaka) to cleanse subtle Nadis (energy pathways).",
        traditionsKeys: [
          "Nadi Shodhana (Alternate nostril breathing for hemisphere balance)",
          "Bhramari (Humming bee breath for nitric oxide and vagal tone)",
          "Sheetali / Sheetkari (Cooling breaths to pacify excess Pitta heat)",
          "Ujjayi (Victorious ocean breath calming the sensory mind)",
        ],
        innovationsTitle: "Pulmonology & Autonomic Science",
        innovationsDesc:
          "Modern research shows slow breathing (~5.5 breaths per minute) maximizes Heart Rate Variability (HRV) and respiratory sinus arrhythmia. Nasal breathing stimulates nasal endothelial production of Nitric Oxide (NO)—a potent vasodilator and antimicrobial agent.",
        innovationsKeys: [
          "Nitric Oxide (NO) production in nasal paranasal sinuses 15x higher during humming (Bhramari)",
          "Stanford clinical trials proving Cyclic Sighing outperforms mindfulness for anxiety reduction",
          "HRV biofeedback tools optimizing resonant frequency respiration",
          "Respiratory Muscle Training (RMT) improving VO2 max and arterial compliance",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "An instantaneous, cost-free physiological emergency brake for acute panic, hyperventilation, and blood pressure spikes.",
        relevanceDailyUse:
          "Practice 5 minutes of Nadi Shodhana before meals or sleep. Use 3 long exhales whenever feeling overwhelmed.",
        safetyNote: "Stop if dizzy; avoid forceful breath holding (Kumbhaka) without qualified professional guidance.",
      },
      hi: {
        name: "प्राणायाम व श्वास अभ्यास",
        tagline: "प्राण ऊर्जा का विस्तार एवं तंत्रिका तंत्र का त्वरित नियंत्रण",
        shortDesc: "धीमी और नियंत्रित श्वास क्रियाएं जो तंत्रिका तंत्र को तुरंत शांत करती हैं।",
        overview:
          "श्वास शरीर की एकमात्र ऐसी क्रिया है जो अनैच्छिक होने के साथ-साथ पूरी तरह हमारे नियंत्रण में भी आ सकती है। धीमी, गहरी श्वास कुछ ही सेकंड में हृदय गति को स्थिर कर मस्तिष्क को शांत कर देती है।",
        traditionsTitle: "शास्त्रीय प्राणायाम विज्ञान",
        traditionsDesc:
          "हठयोग में वर्णित पूरक (श्वास लेना), कुम्भक (रोकना) और रेचक (छोड़ना) के अनुपात से शरीर की 72,000 नाड़ियों की शुद्धि की जाती है।",
        traditionsKeys: [
          "नाड़ी शोधन (अनुलोम-विलोम: बाएं और दाएं मस्तिष्क का संतुलन)",
          "भ्रामरी (गुनगुनाहट से नाइट्रिक ऑक्साइड और मानसिक शांति)",
          "शीतली व सीत्कारी (पित्त और शरीर की आंतरिक गर्मी शांत करना)",
          "उज्जायी श्वास (गले की नसों को आराम और फेफड़ों को बल)",
        ],
        innovationsTitle: "आधुनिक मेडिकल पल्मोनोलॉजी",
        innovationsDesc:
          "स्टैनफोर्ड यूनिवर्सिटी के शोध से पता चला है कि भ्रामरी प्राणायाम करने से नाक की नलियों में नाइट्रिक ऑक्साइड का उत्पादन 15 गुना बढ़ जाता है, जिससे फेफड़े वायरस और बैक्टीरिया से सुरक्षित रहते हैं।",
        innovationsKeys: [
          "नाक से सांस लेने पर नाइट्रिक ऑक्साइड (NO) का 15 गुना अधिक स्राव",
          "हार्ट रेट वेरिएबिलिटी (HRV) में उल्लेखनीय सुधार",
          "ब्लड प्रेशर को प्राकृतिक रूप से नियंत्रित करने में मददगार",
          "चिंता और पैनिक अटैक को 2 मिनट में शांत करने की क्षमता",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "गुस्से, घबराहट और अचानक बढ़ते ब्लड प्रेशर को तुरंत नियंत्रित करने का यह सबसे तेज और प्राकृतिक तरीका है।",
        relevanceDailyUse:
          "रोज सुबह 5-10 मिनट अनुलोम-विलोम और भ्रामरी प्राणायाम करें। जब भी तनाव हो, 3 गहरी सांसें धीरे-धीरे छोड़ें।",
        safetyNote: "चक्कर आने पर तुरंत सामान्य सांस लें। बिना अभ्यास के जबरन सांस न रोकें।",
      },
      gu: {
        name: "પ્રાણાયામ અને શ્વાસની કસરત",
        tagline: "શ્વાસ પર નિયંત્રણ અને પ્રાણશક્તિનો પ્રભાવશાળી વિસ્તાર",
        shortDesc: "ધીમા અને નિયંત્રિત શ્વાસ લેવાથી નર્વસ સિસ્ટમ શાંત થાય છે અને પ્રાણવાયુ વધે છે.",
        overview:
          "શ્વાસ એ જીવનની દોરી છે. ધીમા અને ઊંડા શ્વાસ લેવાથી હૃદયના ધબકારા નિયંત્રિત થાય છે, ફેફસાં મજબૂત બને છે અને મગજને ભરપૂર ઓક્સિજન મળે છે.",
        traditionsTitle: "પ્રાચીન પ્રાણાયામ વિધિ",
        traditionsDesc:
          "અનુલોમ-વિલોમ, ભ્રામરી અને શીતલી પ્રાણાયામ સદીઓથી મગજની નસોને શાંત કરવા અને ત્રિદોષ સંતુલિત કરવા માટે વપરાય છે.",
        traditionsKeys: [
          "અનુલોમ-વિલોમ (બંને નસકોરાં દ્વારા સંતુલિત શ્વાસ)",
          "ભ્રામરી પ્રાણાયામ (ગૂંજ દ્વારા મગજને શાંતિ)",
          "શીતલી પ્રાણાયામ (ગરમી અને પિત્ત શમાવવા)",
          "દીર્ઘ શ્વાસ ક્રિયા (ઓક્સિજનનું પ્રમાણ વધારવું)",
        ],
        innovationsTitle: "આધુનિક તબીબી સંશોધનો",
        innovationsDesc:
          "સાયન્ટિફિક રિસર્ચ મુજબ ભ્રામરી પ્રાણાયામથી નાકમાં નાઇટ્રિક ઓક્સાઇડ વધે છે, જે લોહીની નળીઓ પહોળી કરે છે અને બ્લડ પ્રેશર ઘટાડે છે.",
        innovationsKeys: [
          "નાસિકા શ્વાસથી નાઇટ્રિક ઓક્સાઇડનું ૧૫ ગણું ઉત્પાદન",
          "હાર્ટ રેટ વેરિએબિલિટી (HRV) માં સુધારો",
          "ગભરામણ અને પૅનિક એટેક સામે ત્વરિત રક્ષણ",
          "ફેફસાંની ઓક્સિજન ક્ષમતામાં મોટો વધારો",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં મહત્વ",
        relevanceSignificance:
          "અચાનક આવતા ગુસ્સા, ગભરામણ કે હાઈ બીપીમાં ઊંડા શ્વાસ લેવા એ તત્કાળ રાહત આપે છે.",
        relevanceDailyUse:
          "રોજ સવારે ૫ થી ૧૦ મિનિટ અનુલોમ-વિલોમ અને ભ્રામરી પ્રાણાયામ કરો.",
        safetyNote: "ચક્કર આવે તો તરત સામાન્ય શ્વાસ લો; બળપૂર્વક શ્વાસ રોકવો નહીં.",
      },
    },
  },
  {
    id: "nutrition",
    icon: "🥗",
    gradient: "from-green-600 via-emerald-600 to-lime-600",
    badgeColor: "bg-green-500/15 text-green-700 dark:text-green-300 border-green-500/30",
    content: {
      en: {
        name: "Nutrition & Ahara Wisdom",
        tagline: "Food as Sacred Medicine, Metabolic Fuel & Microbiome Nourishment",
        shortDesc: "A varied, balanced eating pattern supporting metabolic health and digestive harmony.",
        overview:
          "In Ayurvedic philosophy: 'Without proper diet, medicine is of no use; with proper diet, medicine is of no need.' Food is not mere calories; it is chemical information that communicates directly with your epigenome and trillions of gut microbes.",
        traditionsTitle: "Ayurvedic Ahara & Traditional Dietetics",
        traditionsDesc:
          "Ayurveda classifies foods by Shad Rasa (Six Tastes: sweet, sour, salty, pungent, bitter, astringent), Virya (thermal potency: heating or cooling), Vipaka (post-digestive effect), and individual digestive fire (Agni).",
        traditionsKeys: [
          "Shad Rasa (Incorporating all 6 tastes to prevent cravings)",
          "Pathya & Apathya (Wholesome vs aggravating foods)",
          "Seasonal eating (Ritucharya: adjusting diet to climatic changes)",
          "Eating freshly cooked, warm foods without screen distractions",
        ],
        innovationsTitle: "Metabolomics & Microbiome Science",
        innovationsDesc:
          "Cutting-edge metagenomics reveals that personalized gut microbiome composition dictates glycemic spikes far more than simple carb counts. Plant polyphenol diversity directly feeds beneficial bacterial strains like Akkermansia muciniphila.",
        innovationsKeys: [
          "Continuous Glucose Monitoring (CGM) proving individual metabolic responses to identical foods",
          "Microbiome-targeted dietary diversity (30+ varied plant foods per week)",
          "Prebiotic resistant starch fueling short-chain fatty acids (SCFAs: butyrate)",
          "Nutrigenomics mapping how specific phytonutrients turn off inflammatory genes",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "The most powerful daily lever to reverse insulin resistance, heal chronic fatigue, and optimize cognitive focus.",
        relevanceDailyUse:
          "Eat your largest, most nourishing meal at midday when Agni peaks. Favor cooked, spiced vegetables and leave 3-4 hours between meals.",
        safetyNote: "Nutritional needs differ with allergies, metabolic conditions, and prescribed medications.",
      },
      hi: {
        name: "आहार एवं पोषण (आहार विज्ञान)",
        tagline: "भोजन ही सर्वोत्तम औषधि और ऊर्जा का मूल स्रोत है",
        shortDesc: "ताजा, सात्विक और मौसम के अनुकूल संतुलित भोजन जो अग्नि और ओजस को बढ़ाता है।",
        overview:
          "आयुर्वेद का प्रसिद्ध सूत्र है: 'यदि आहार सही है तो औषधि की कोई आवश्यकता नहीं है।' भोजन केवल कैलोरी नहीं है, बल्कि वह सूक्ष्म जानकारी है जो हमारे जीन्स, हार्मोन्स और आंतों के स्वास्थ्य को सीधे प्रभावित करती है।",
        traditionsTitle: "आयुर्वेदिक षड्रस आहार परंपरा",
        traditionsDesc:
          "आयुर्वेद भोजन को छह रसों (मधुर, अम्ल, लवण, कटु, तिक्त, कषाय) और जठराग्नि के बल के अनुसार ग्रहण करने का निर्देश देता है।",
        traditionsKeys: [
          "षड्रस भोजन (सभी 6 रसों का संतुलन जिससे अवांछित भूख न लगे)",
          "पथ्य एवं अपथ्य (लाभकारी और त्याज्य खाद्य पदार्थों की पहचान)",
          "ऋतु अनुसार आहार (गर्मी में ठंडा, सर्दी में पौष्टिक व स्निग्ध)",
          "स्क्रीन बंद करके शांत चित्त से भोजन करना",
        ],
        innovationsTitle: "आधुनिक न्यूट्रीजीनोमिक्स और माइक्रोबायोम",
        innovationsDesc:
          "माइक्रोबायोम रिसर्च ने साबित किया है कि विभिन्न प्रकार के प्राकृतिक रेशे और मसाले आंतों के गुड बैक्टीरिया को पोषण देते हैं और सूजन को रोकते हैं।",
        innovationsKeys: [
          "आंतों के माइक्रोबायोम द्वारा इम्यूनिटी और सेरोटोनिन (खुशी) का निर्माण",
          "सप्ताह में 30 अलग-अलग प्रकार के पौधों और मसालों का सेवन",
          "प्रीबायोटिक फाइबर द्वारा ब्यूटायरेट (फैटी एसिड) का निर्माण",
          "इंसुलिन स्पाइक और शुगर को नियंत्रित करने में फाइबर की भूमिका",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "डायबिटीज, फैटी लिवर, गैस और एसिडिटी से बचने के लिए सात्विक आहार सबसे बड़ा सुरक्षा कवच है।",
        relevanceDailyUse:
          "दोपहर का भोजन सबसे पौष्टिक रखें क्योंकि तब पाचन अग्नि तेज होती है। रात को सोने से 3 घंटे पहले हल्का भोजन करें।",
        safetyNote: "व्यक्तिगत एलर्जी, रोग और दवाओं के अनुसार आहार में आवश्यक बदलाव करें।",
      },
      gu: {
        name: "આહાર અને પોષણ",
        tagline: "ખોરાક એ જ સાચી દવા અને સમગ્ર આરોગ્યનો પાયો છે",
        shortDesc: "તાજો, સાત્વિક અને પચી શકે તેવો પૌષ્ટિક ખોરાક જે ઓજસ અને રોગપ્રતિકારક શક્તિ વધારે છે.",
        overview:
          "આયુર્વેદ કહે છે કે યોગ્ય આહાર લેનારને દવાની જરૂર પડતી નથી. સાચો ખોરાક આંતરડાના સ્વાસ્થ્યને સુધારે છે અને જીવનભર સ્ફૂર્તિ જાળવી રાખે છે.",
        traditionsTitle: "ષડરસ આહાર પરંપરા",
        traditionsDesc:
          "છ સ્વાદો (ગળ્યો, ખાટો, ખારો, તીખો, કડવો, તૂરો) નું સંતુલન અને જઠરાગ્નિની ક્ષમતા મુજબ ભોજન લેવું એ આયુર્વેદનો નિયમ છે.",
        traditionsKeys: [
          "છ રસોવાળો સંતુલિત સાત્વિક ખોરાક",
          "પથ્ય અને અપથ્ય (હિતકારી અને અહિતકારી ખોરાક)",
          "ઋતુ પ્રમાણે આહારમાં ફેરફાર",
          "મોબાઇલ કે ટીવી વગર શાંતિથી ચાવીને જમવું",
        ],
        innovationsTitle: "આધુનિક ગટ-માઇક્રોબાયોમ વિજ્ઞાન",
        innovationsDesc:
          "નવીનતમ સંશોધનો મુજબ આપણા શરીરની ૭૦% રોગપ્રતિકારક શક્તિ આંતરડામાં રહેલા સારા બેક્ટેરિયા પર નિર્ભર છે, જેને ફાઇબર પોષણ આપે છે.",
        innovationsKeys: [
          "આંતરડાના સારા બેક્ટેરિયાનું જતન",
          "નેચરલ ફાઇબરથી બ્લડ સુગરનું નિયંત્રણ",
          "વિવિધ રંગના શાકભાજીથી શરીરની શુદ્ધિ",
          "પ્રોસેસ્ડ ફૂડના નુકસાન સામે સુરક્ષા",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં ઉપયોગ",
        relevanceSignificance:
          "એસિડિટી, અપચો અને ડાયાબિટીસથી બચવા માટે ઘરનો તાજો ખોરાક સર્વોત્તમ છે.",
        relevanceDailyUse:
          "બપોરનું ભોજન મુખ્ય રાખવું અને રાત્રે હળવો ખોરાક લેવો. જમ્યા પછી તુરંત ઠંડુ પાણી ન પીવું.",
        safetyNote: "શરીરની પ્રકૃતિ અને એલર્જી ધ્યાનમાં રાખીને ખોરાક લો.",
      },
    },
  },
  {
    id: "hydration",
    icon: "💧",
    gradient: "from-cyan-600 via-blue-600 to-teal-700",
    badgeColor: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    content: {
      en: {
        name: "Hydration & Fluid Balance",
        tagline: "Cellular Fluid Balance, Lymphatic Cleansing & Metabolic Conductance",
        shortDesc: "Regular, suitable fluid intake supporting kidney filtration, joint lubrication, and vitality.",
        overview:
          "Water is the universal solvent of human biology, comprising ~60% of adult body mass. Proper hydration maintains blood plasma viscosity, transports cellular nutrients, cushions articular joints, and prevents toxic metabolite crystallization in kidneys.",
        traditionsTitle: "Ayurvedic Water Rituals",
        traditionsDesc:
          "Ayurveda warns against chugging large quantities of cold water. It champions Usha Pana (drinking room-temperature or copper-infused water upon waking) and sipping warm water throughout the day to kindle digestive fire (Dipana).",
        traditionsKeys: [
          "Usha Pana (Dawn hydration to stimulate morning peristalsis)",
          "Tamra Jal (Water stored in pure copper vessels for oligodynamic benefits)",
          "Ushnodaka (Boiled water cooled to lukewarm for enhanced cellular penetration)",
          "Avoiding ice-cold water during meals to prevent quenching Agni",
        ],
        innovationsTitle: "Cellular Electrolyte Biophysics",
        innovationsDesc:
          "Modern physiology reveals that water hydration is not just about volume—it depends on the sodium-potassium ATPase pump and trace minerals (magnesium, potassium) maintaining intracellular versus extracellular fluid osmotic balance.",
        innovationsKeys: [
          "Optimal electrolyte stoichiometry preventing hyponatremia and cellular dehydration",
          "Structured water dynamics at biological hydrophilic membranes (exclusion zone water)",
          "Clinical hydration biomarkers: urine specific gravity monitoring",
          "Circadian renal filtration tracking",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "Eliminates chronic dehydration headaches, prevents kidney stone formation, and eases constipation.",
        relevanceDailyUse:
          "Start the day with 1-2 cups of warm water. Sip room-temperature water between meals rather than gulping huge amounts while eating.",
        safetyNote: "Individuals with severe heart failure or kidney disease must follow individualized fluid limits.",
      },
      hi: {
        name: "जल सेवन व हाइड्रेशन",
        tagline: "कोशिकाओं की शुद्धि, रक्त संचार और ऊर्जा का प्रवाह",
        shortDesc: "नियमित गुनगुने या ताजे जल का सेवन जो शरीर से विषाक्त तत्व बाहर निकालता है।",
        overview:
          "मानव शरीर का लगभग 60% हिस्सा जल है। पर्याप्त और सही तरीके से पानी पीने से रक्त साफ रहता है, जोड़ों में चिकनाई बनी रहती है और गुर्दे शरीर से विषैले तत्व बाहर निकाल पाते हैं।",
        traditionsTitle: "आयुर्वेदिक जल परंपरा",
        traditionsDesc:
          "आयुर्वेद ठंडा या फ्रिज का पानी पीने से मना करता है। यह उषापान (सुबह उठकर तांबे के बर्तन का पानी पीना) और दिनभर घूंट-घूंट गुनगुना पानी पीने की सलाह देता है।",
        traditionsKeys: [
          "उषापान (सुबह खाली पेट गुनगुना पानी पीकर पेट साफ करना)",
          "ताम्र जल (तांबे के बर्तन में रखा जल जो बैक्टीरिया मुक्त होता है)",
          "उष्णोदक (उबालकर गुनगुना किया हुआ पानी जो पाचन तेज करता है)",
          "भोजन के बीच में अत्यधिक ठंडा पानी न पीना",
        ],
        innovationsTitle: "आधुनिक इलेक्ट्रोलाइट बायोफिजिक्स",
        innovationsDesc:
          "वैज्ञानिकों के अनुसार केवल सादा पानी पीना पर्याप्त नहीं है; शरीर में सोडियम, पोटैशियम और मैग्नीशियम का संतुलन होना आवश्यक है ताकि पानी कोशिकाओं के भीतर प्रवेश कर सके।",
        innovationsKeys: [
          "इलेक्ट्रोलाइट्स का सही अनुपात जिससे डिहाइड्रेशन तुरंत दूर होता है",
          "गुर्दों की कार्यक्षमता और रक्तचाप पर जलयोजन का प्रभाव",
          "कोशिकाओं की झिल्ली पर पानी के अवशोषण की प्रक्रिया",
          "सिरदर्द और थकान दूर करने में हाइड्रेशन का महत्व",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "सुबह की सुस्ती, सिरदर्द, कब्ज और त्वचा के रूखेपन को दूर करने का यह सबसे आसान प्राकृतिक उपाय है।",
        relevanceDailyUse:
          "सुबह 1-2 गिलास गुनगुना पानी पिएं। दिनभर थोड़ा-थोड़ा पानी घूंट-घूंट करके पिएं, एक साथ बहुत सारा न पिएं।",
        safetyNote: "गुर्दे या हृदय रोग के मरीजों को डॉक्टर द्वारा बताई गई सीमित मात्रा में ही जल पीना चाहिए।",
      },
      gu: {
        name: "પાણી અને જળસંચય",
        tagline: "કોષોની શુદ્ધિ, લોહીનું ભ્રમણ અને સાંધાની મજબૂતી",
        shortDesc: "સમયસર હૂંફાળા કે સાદા પાણીનું સેવન જે શરીરના કચરાને બહાર ફેંકે છે.",
        overview:
          "આપણું શરીર ૬૦% પાણીનું બનેલું છે. પૂરતું પાણી પીવાથી પાચન બરાબર રહે છે, ચામડી ચમકદાર બને છે અને કિડનીમાંથી કચરો સાફ થાય છે.",
        traditionsTitle: "આયુર્વેદિક જળ નિયમો",
        traditionsDesc:
          "આયુર્વેદ ફ્રિજનું બરફવાળું પાણી પીવાની સખત મનાઈ કરે છે. સવારે ઉષાપાન (તાંબાના વાસણનું પાણી) અને દિવસ દરમિયાન નવશેકું પાણી પીવું ઉત્તમ છે.",
        traditionsKeys: [
          "ઉષાપાન (સવારે ઉઠીને નવશેકું પાણી પીવું)",
          "તાંબાના વાસણમાં રાખેલ શુદ્ધ પાણી",
          "જમતી વખતે વધારે પડતું પાણી ન પીવું",
          "ધીમે ધીમે ઘૂંટડે ઘૂંટડે પાણી પીવાની આદત",
        ],
        innovationsTitle: "આધુનિક ઇલેક્ટ્રોલાઇટ વિજ્ઞાન",
        innovationsDesc:
          "આધુનિક સંશોધનો મુજબ શરીરમાં પાણી ટકાવી રાખવા માટે મીઠું, પોટેશિયમ અને મેગ્નેશિયમ જેવા કુદરતી ક્ષારો જરૂરી છે.",
        innovationsKeys: [
          "ઇલેક્ટ્રોલાઇટ સંતુલનથી સ્નાયુઓના ખેંચાણમાં રાહત",
          "માથાના દુખાવા અને થાક સામે તાત્કાલિક ઉકેલ",
          "કિડનીમાં પથરી બનતી અટકાવવામાં પાણીની ભૂમિકા",
          "શરીરના તાપમાનનું નિયંત્રણ",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં મહત્વ",
        relevanceSignificance:
          "કબજિયાત, એસિડિટી અને બપોરના થાકથી બચવા માટે સાચું હાઇડ્રેશન ખૂબ જરૂરી છે.",
        relevanceDailyUse:
          "સવારે ઊઠીને ૧-૨ ગ્લાસ હૂંફાળું પાણી પીવો. આખો દિવસ જરૂર મુજબ ઘૂંટડે ઘૂંટડે પાણી પીતા રહો.",
        safetyNote: "હૃદય કે કિડનીના દર્દીઓએ ડૉક્ટરના કહ્યા મુજબ જ પાણીની માત્રા રાખવી.",
      },
    },
  },
  {
    id: "sleep-recovery",
    icon: "😴",
    gradient: "from-indigo-700 via-slate-800 to-blue-900",
    badgeColor: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30",
    content: {
      en: {
        name: "Sleep & Circadian Recovery",
        tagline: "Glymphatic Brain Cleansing & Cellular DNA Repair",
        shortDesc: "Consistent timing and a calm routine supporting restorative sleep architecture.",
        overview:
          "Sleep is nature's supreme neurobiological medicine. During deep slow-wave sleep, the brain activates the glymphatic system—a specialized metabolic waste clearance mechanism that flushes out neurotoxic proteins including beta-amyloid.",
        traditionsTitle: "Nidra in Classical Traditions",
        traditionsDesc:
          "Ayurveda reveres Nidra as one of the Three Pillars of Life (Trayopasthambha: Ahara, Nidra, Brahmacharya). Traditional protocols emphasize sleeping before 10 PM to utilize Pitta time for cellular digestion.",
        traditionsKeys: [
          "Nidra as a foundational pillar of Ojas (vital immunity)",
          "Pada Abhyanga (Warm oil foot massage before bed to ground Vata)",
          "Yoga Nidra (Conscious guided relaxation for deep delta brainwave access)",
          "Avoiding evening stimulation and sleeping in quiet darkness",
        ],
        innovationsTitle: "Chronobiology & Sleep Architecture",
        innovationsDesc:
          "The 2017 Nobel Prize in Medicine unraveled the molecular feedback loops of circadian clock genes. Clinical polysomnography proves deep and REM sleep stages are crucial for memory consolidation and emotional regulation.",
        innovationsKeys: [
          "Glymphatic system discovery: CSF flow flushing brain toxins during slow-wave sleep",
          "Melanopsin ganglion cells: evening blue light from screens suppressing melatonin",
          "Wearable sleep architecture tracking (REM, Deep, and light sleep metrics)",
          "Temperature drop dynamics: core body temperature cooling by 1°C to initiate sleep",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "The single greatest protector against Alzheimer's, metabolic disease, immune suppression, and burnout.",
        relevanceDailyUse:
          "Dim screens 1-2 hours before bed. Keep the bedroom cool and dark. Maintain a consistent bedtime every night.",
        safetyNote: "Persistent insomnia or chronic daytime sleepiness warrants professional medical assessment.",
      },
      hi: {
        name: "निद्रा एवं विश्राम (निद्रा विज्ञान)",
        tagline: "मस्तिष्क की विषमुक्ति, कोशिकाओं की मरम्मत और ऊर्जा का संचय",
        shortDesc: "नियमित समय पर गहरी नींद जो शरीर के ऊतकों की मरम्मत और मस्तिष्क विश्राम कराती है।",
        overview:
          "नींद प्रकृति का सबसे बड़ा उपचारक है। गहरी नींद के दौरान मस्तिष्क 'ग्लिम्फैटिक सिस्टम' को सक्रिय करता है, जो दिनभर दिमाग में जमा हुए विषाक्त प्रोटीन्स को धोकर बाहर निकालता है और याददाश्त को मजबूत करता है।",
        traditionsTitle: "आयुर्वेद में निद्रा का महत्व",
        traditionsDesc:
          "आयुर्वेद ने निद्रा को जीवन के तीन प्रमुख स्तंभों (आहार, निद्रा, ब्रह्मचर्य) में स्थान दिया है। रात 10 बजे से पहले सोना शरीर के लिए सर्वोत्तम बताया गया है।",
        traditionsKeys: [
          "निद्रा: ओजस और जीवन शक्ति की रक्षक",
          "पादाभ्यंग (सोने से पहले तलवों पर तिल के तेल की मालिश)",
          "योग निद्रा द्वारा तनाव और अनियंत्रित विचारों को शांत करना",
          "सूर्यास्त के बाद उत्तेजक गतिविधियों से बचना",
        ],
        innovationsTitle: "आधुनिक क्रोनोबायोलॉजी शोध",
        innovationsDesc:
          "वैज्ञानिकों ने पाया है कि मोबाइल की नीली रोशनी मेलाटोनिन (स्लीप हार्मोन) को रोकती है, जिससे गहरी नींद नहीं आती। गहरी नींद से ही इम्यून सिस्टम रीसेट होता है।",
        innovationsKeys: [
          "ग्लिम्फैटिक सिस्टम द्वारा अल्जाइमर पैदा करने वाले प्रोटीन्स की सफाई",
          "मेलाटोनिन हार्मोन और जैविक घड़ी (Circadian Rhythm) का नियमन",
          "नींद के दौरान ग्रोथ हार्मोन का स्राव जो मांसपेशियों को ठीक करता है",
          "याददाश्त और मानसिक एकाग्रता का सुदृढ़ीकरण",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "मानसिक तनाव, चिड़चिड़ापन, दिल की बीमारियों और कमजोर इम्यूनिटी से बचने के लिए 7-8 घंटे की गहरी नींद जरूरी है।",
        relevanceDailyUse:
          "सोने से 1 घंटा पहले मोबाइल स्क्रीन बंद करें। कमरे को ठंडा और अंधेरा रखें। रात 10 बजे तक सोने का नियम बनाएं।",
        safetyNote: "लगातार अनिद्रा या दिन में अत्यधिक नींद आने पर डॉक्टर से जांच अवश्य कराएं।",
      },
      gu: {
        name: "ઊંઘ અને આરામ",
        tagline: "મગજની આંતરિક સફાઈ, ડીએનએ રિપેર અને નવી તાજગી",
        shortDesc: "નિયમિત સમયે ગાઢ ઊંઘ જે શરીરને નવી ઊર્જા આપે છે અને મગજ તાજું કરે છે.",
        overview:
          "ગાઢ ઊંઘ એ શરીર માટે કુદરતી અમૃત છે. ઊંઘ દરમિયાન મગજમાંથી ઝેરી કચરો સાફ થાય છે, કોષોનું સમારકામ થાય છે અને નવી ઊર્જાનો સંચાર થાય છે.",
        traditionsTitle: "આયુર્વેદમાં નિદ્રાનો મહિમા",
        traditionsDesc:
          "આયુર્વેદ મુજબ ખોરાકની જેમ ગાઢ ઊંઘ પણ જીવનનો આધારસ્તંભ છે. રાત્રે ૧૦ વાગ્યા પહેલા સૂઈ જવું સ્વાસ્થ્ય માટે સૌથી હિતકારી છે.",
        traditionsKeys: [
          "ત્રયોપસ્તંભ: આહાર, નિદ્રા અને બ્રહ્મચર્ય",
          "પગના તળિયે તેલની માલિશ (પાદાભ્યંગ) થી ગાઢ ઊંઘ",
          "રાત્રે હળદરવાળું હૂંફાળું દૂધ પીવું",
          "અંધારા અને શાંત વાતાવરણમાં સૂવું",
        ],
        innovationsTitle: "આધુનિક સ્લીપ સાયન્સ",
        innovationsDesc:
          "સંશોધનો કહે છે કે ગાઢ ઊંઘ દરમિયાન મગજની સફાઈ પ્રણાલી (Glymphatic system) સક્રિય થઈને યાદશક્તિ વધારે છે.",
        innovationsKeys: [
          "સ્ક્રીનની બ્લુ લાઇટથી મેલાટોનિન હોર્મોન ઘટવાનો પુરાવો",
          "ઊંઘ દરમિયાન રોગપ્રતિકારક શક્તિનું રિસેટિંગ",
          "હૃદય અને બ્લડ પ્રેશરને મળતો સંપૂર્ણ આરામ",
          "માનસિક થાક અને સ્ટ્રેસમાં ઘટાડો",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "માનસિક શાંતિ, ચહેરાની ચમક અને આખો દિવસ તાજગી જાળવવા માટે પૂરતી ઊંઘ અનિવાર્ય છે.",
        relevanceDailyUse:
          "સૂવાના ૧ કલાક પહેલા મોબાઇલ બંધ કરો. રૂમમાં અંધારું રાખો અને દરરોજ એક જ સમયે સૂવાની આદત રાખો.",
        safetyNote: "સતત ઊંઘ ન આવતી હોય તો યોગ્ય તબીબી તપાસ કરાવો.",
      },
    },
  },
  {
    id: "exercise-movement",
    icon: "🏃",
    gradient: "from-orange-500 via-amber-600 to-red-600",
    badgeColor: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/30",
    content: {
      en: {
        name: "Exercise & Functional Movement",
        tagline: "Metabolic Longevity, Bone Density & Myokine Signaling",
        shortDesc: "Regular, suitable movement supporting physical stamina, heart health, and mental wellbeing.",
        overview:
          "Human biology is built for regular physical exertion. Skeletal muscle is now recognized as an endocrine organ: contracting muscle fibers release specialized signaling peptides called myokines that reduce systemic inflammation and support brain neurogenesis.",
        traditionsTitle: "Vyayama & Classical Conditioning",
        traditionsDesc:
          "Ayurveda describes Vyayama (exercise) with a critical nuance: it advises exercising up to half of one's capacity (Ardha Shakti—until light perspiration forms on the forehead and nose) to strengthen without depleting vital Ojas.",
        traditionsKeys: [
          "Vyayama to Ardha Shakti (Exercising to half capacity to preserve Ojas)",
          "Brisk walking (Shatapadi: 100 steps after meals for digestion)",
          "Sun Salutations (Surya Namaskar) as full-body dynamic conditioning",
          "Martial movements and bodyweight resistance training",
        ],
        innovationsTitle: "Exercise Physiology & Longevity Research",
        innovationsDesc:
          "Zone 2 cardio builds mitochondrial volume and metabolic flexibility. Studies confirm cardiorespiratory fitness (measured by VO2 max) is the single strongest predictor of all-cause mortality risk reduction.",
        innovationsKeys: [
          "Myokine release (interleukin-6 and irisin) stimulating white fat browning",
          "VO2 max and muscle grip strength as primary clinical predictors of longevity",
          "Resistance training reversing age-related bone mineral density loss and sarcopenia",
          "High-intensity interval training (HIIT) triggering mitochondrial biogenesis",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "The ultimate preventive medicine against insulin resistance, osteoporosis, metabolic syndrome, and cardiovascular decay.",
        relevanceDailyUse:
          "Combine 30 minutes of daily Zone 2 walking/jogging with 2-3 sessions of weekly resistance training. Never stay seated for more than 60 minutes continuously.",
        safetyNote: "Build intensity gradually. Seek professional evaluation for chest discomfort or joint pain.",
      },
      hi: {
        name: "व्यायाम एवं गतिशीलता",
        tagline: "मांसपेशियों की मजबूती, मेटाबॉलिज्म और दीर्घायु का आधार",
        shortDesc: "दैनिक हल्का या मध्यम शारीरिक श्रम जो रक्तसंचार और मेटाबॉलिज्म को सुचारु रखता है।",
        overview:
          "मानव शरीर चलने-फिरने और श्रम करने के लिए बना है। जब मांसपेशियां काम करती हैं, तो वे 'मायोकाइन्स' नामक रसायन छोड़ती हैं जो पूरे शरीर की सूजन को घटाते हैं और मस्तिष्क की कार्यक्षमता बढ़ाते हैं।",
        traditionsTitle: "आयुर्वेदिक व्यायाम सिद्धांत",
        traditionsDesc:
          "आयुर्वेद 'अर्धशक्ति' व्यायाम की सलाह देता है—अर्थात अपनी क्षमता से आधा व्यायाम करें (जब माथे और नाक पर पसीना आने लगे), ताकि शरीर मजबूत बने और ऊर्जा नष्ट न हो।",
        traditionsKeys: [
          "अर्धशक्ति व्यायाम (ओजस को सुरक्षित रखते हुए शक्ति बढ़ाना)",
          "शतपदी (भोजन के बाद 100 कदम टहलने से पाचन सुधरता है)",
          "सूर्य नमस्कार (संपूर्ण शरीर का सर्वांगीण व्यायाम)",
          "प्राकृतिक गतिविधियों और चलने-फिरने को प्राथमिकता देना",
        ],
        innovationsTitle: "आधुनिक फिजियोलॉजी और दीर्घायु शोध",
        innovationsDesc:
          "वैज्ञानिकों के अनुसार मांसपेशियों की ताकत और फेफड़ों की क्षमता (VO2 Max) बुढ़ापे में बीमारियों से बचने का सबसे बड़ा पैमाना है। वेट ट्रेनिंग से हड्डियां मजबूत होती हैं।",
        innovationsKeys: [
          "मायोकाइन्स द्वारा फैट बर्निंग और मेटाबॉलिक सुधार",
          "हड्डियों का घनत्व (Bone Density) बढ़ाने में स्ट्रेंथ ट्रेनिंग की भूमिका",
          "इंसुलिन संवेदनशीलता में सुधार जिससे डायबिटीज से बचाव होता है",
          "माइटोकॉन्ड्रिया की संख्या में वृद्धि जिससे दिनभर ऊर्जा बनी रहती है",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "मोटापा, डायबिटीज और दिल की बीमारियों से बचने के लिए दैनिक शारीरिक सक्रियता अनिवार्य है।",
        relevanceDailyUse:
          "रोजाना 30-45 मिनट तेज गति से चलें या व्यायाम करें। दिनभर में लगातार 1 घंटे से ज्यादा बैठे न रहें।",
        safetyNote: "अपनी क्षमता अनुसार धीरे-धीरे अभ्यास बढ़ाएं। हृदय रोग या जोड़ों के दर्द में डॉक्टर से सलाह लें।",
      },
      gu: {
        name: "વ્યાયામ અને શારીરિક શ્રમ",
        tagline: "સ્નાયુઓની શક્તિ, હૃદયનું આરોગ્ય અને લાંબુ આયુષ્ય",
        shortDesc: "દરરોજ હળવી કસરત કે ઝડપી ચાલવું જે પાચન અને રક્તસંચાર સુધારે છે.",
        overview:
          "શરીરને તંદુરસ્ત રાખવા માટે નિયમિત કસરત જરૂરી છે. કસરત કરવાથી શરીરમાં ચરબી ઘટે છે, હાડકાં મજબૂત બને છે અને આખો દિવસ ઉત્સાહ રહે છે.",
        traditionsTitle: "આયુર્વેદિક વ્યાયામ નિયમો",
        traditionsDesc:
          "આયુર્વેદ અર્ધશક્તિ સુધી જ કસરત કરવાની સલાહ આપે છે જેથી શરીર થાકીને નિર્બળ ન બને પરંતુ બળવાન બને.",
        traditionsKeys: [
          "અર્ધશક્તિ વ્યાયામ (ક્ષમતા મુજબ જ કસરત)",
          "જમ્યા પછી ૧૦૦ ડગલાં ચાલવું (શતપદી)",
          "સૂર્ય નમસ્કારથી આખા શરીરનું સ્ટ્રેચિંગ",
          "રોજિંદી શારીરિક સક્રિયતા જાળવવી",
        ],
        innovationsTitle: "આધુનિક સ્પોર્ટ્સ સાયન્સ",
        innovationsDesc:
          "સંશોધનો મુજબ સ્નાયુઓની મજબૂતી અને ચાલવાની ઝડપ વ્યક્તિના આયુષ્ય સાથે સીધી રીતે જોડાયેલી છે.",
        innovationsKeys: [
          "હાડકાંની મજબૂતી અને કેલ્શિયમ જાળવણી",
          "ડાયાબિટીસ અને કોલેસ્ટ્રોલ કંટ્રોલ",
          "હૃદયની પમ્પિંગ ક્ષમતામાં સુધારો",
          "એન્ડોર્ફિન હોર્મોનથી મનની ખુશી",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "ખુરશી પર સતત બેસી રહેવાથી થતી બીમારીઓ સામે કસરત એ સૌથી ઉત્તમ ઢાલ છે.",
        relevanceDailyUse:
          "રોજ ૩૦ થી ૪૫ મિનિટ ઝડપથી ચાલો અથવા કસરત કરો. દર કલાકે ઊભા થઈને થોડું હલનચલન કરો.",
        safetyNote: "પોતાની ક્ષમતા મુજબ ધીમે ધીમે કસરત વધારવી. અસહ્ય દુખાવામાં કસરત ન કરવી.",
      },
    },
  },
  {
    id: "naturopathy",
    icon: "🌱",
    gradient: "from-lime-600 via-emerald-700 to-green-800",
    badgeColor: "bg-lime-500/15 text-lime-700 dark:text-lime-300 border-lime-500/30",
    content: {
      en: {
        name: "Naturopathy",
        tagline: "The Healing Power of Nature (Vis Medicatrix Naturae)",
        shortDesc: "A broad approach focused on lifestyle medicine, gentle detoxification, and non-drug therapies.",
        overview:
          "Naturopathy is founded on the biological reality that the human body possesses an innate, self-regulating healing force. When artificial toxic burdens (processed foods, pollution, chronic stress) are removed, physiology naturally returns to equilibrium.",
        traditionsTitle: "Nature Cure Foundations",
        traditionsDesc:
          "Rooted in ancient Greek medicine and popularized by Father Sebastian Kneipp and Mahatma Gandhi, nature cure leverages the Panchamahabhutas (earth, water, fire/sun, air, ether) through fasting, mud packs, and sunshine.",
        traditionsKeys: [
          "Vis Medicatrix Naturae (The healing power of nature)",
          "Tolle Causam (Identify and treat the root cause, not just symptoms)",
          "Therapeutic fasting (Langhana) allowing internal organs to detoxify",
          "Earth therapies (mud packs for heat dissipation and anti-inflammatory relief)",
        ],
        innovationsTitle: "Autophagy & Lifestyle Oncology",
        innovationsDesc:
          "Yoshinori Ohsumi's 2016 Nobel Prize on autophagy proved the cellular cleansing mechanism of fasting. Intermittent fasting clears damaged intracellular organelles and optimizes metabolic biomarkers.",
        innovationsKeys: [
          "Autophagy research validating ancient fasting protocols for cellular renewal",
          "Integrative naturopathic supportive care in chronic lifestyle conditions",
          "Circadian fasting protocols optimizing liver enzyme profiles and lipid panels",
          "Clinical documentation of whole-food plant interventions reversing coronary plaque",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "A compassionate, non-invasive methodology that empowers patients with lifestyle ownership rather than lifetime pill reliance.",
        relevanceDailyUse:
          "Practice intermittent overnight fasting (12-14 hours between dinner and breakfast), take fresh air walks, and use warm mud/clay compresses for local aches.",
        safetyNote: "Training and evidence vary. It should complement, never replace, qualified emergency medical care.",
      },
      hi: {
        name: "प्राकृतिक चिकित्सा (नेचरोपैथी)",
        tagline: "प्रकृति की स्वयं ठीक करने की असीम शक्ति",
        shortDesc: "दवा रहित जीवनशैली, मिट्टी-जल-धूप चिकित्सा जो शरीर की स्वयं ठीक होने की क्षमता जगाती है।",
        overview:
          "प्राकृतिक चिकित्सा का मूल सिद्धांत है कि शरीर में स्वयं को ठीक करने की अद्भुत प्राकृतिक शक्ति होती है। जब हम शरीर से विजातीय द्रव्य (कचरा और टॉक्सिन्स) निकाल देते हैं, तो रोग अपने आप समाप्त हो जाते हैं।",
        traditionsTitle: "पंचमहाभूत आधारित चिकित्सा",
        traditionsDesc:
          "महात्मा गांधी और सेबेस्टियन नीप द्वारा प्रचारित प्राकृतिक चिकित्सा मिट्टी, पानी, धूप, हवा और उपवास के माध्यम से शरीर को शुद्ध करती है।",
        traditionsKeys: [
          "मिट्टी पट्टी (पेट और माथे पर ठंडक व सूजन दूर करने के लिए)",
          "उपवास चिकित्सा (आंतों को आराम और आटोफैगी की शुरुआत)",
          "धूप स्नान (विटामिन डी और त्वचा की शुद्धि)",
          "रोग के मूल कारण को दूर करना, न कि केवल लक्षणों को दबाना",
        ],
        innovationsTitle: "ऑटोफैगी (Autophagy) पर नोबेल रिसर्च",
        innovationsDesc:
          "2016 में जापानी वैज्ञानिक को ऑटोफैगी पर नोबेल पुरस्कार मिला, जिससे यह सिद्ध हुआ कि उपवास करने से शरीर की पुरानी और खराब कोशिकाएं खुद नष्ट होकर नए स्वस्थ सेल बनाती हैं।",
        innovationsKeys: [
          "उपवास से कोशिकाओं का नवीनीकरण (ऑटोफैगी का प्रमाण)",
          "फैटी लिवर और कोलेस्ट्रॉल कम करने में इंटरमिटेंट फास्टिंग का प्रभाव",
          "प्राकृतिक आहार से धमनियों में जमी रुकावटों को कम करना",
          "शरीर की आंतरिक प्रतिरोधक क्षमता को जगाना",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "दवाओं के अत्यधिक सेवन से बचने और शरीर की स्वाभाविक शुद्धि के लिए प्राकृतिक चिकित्सा सर्वोत्तम है।",
        relevanceDailyUse:
          "रात के भोजन और सुबह के नाश्ते में 12-14 घंटे का अंतर रखें। हफ्ते में एक दिन हल्का भोजन या उपवास करें।",
        safetyNote: "योग्य प्राकृतिक चिकित्सक के मार्गदर्शन में ही अपनाएं। आपातकालीन स्थिति में एलोपैथी की मदद लें।",
      },
      gu: {
        name: "કુદરતી ઉપચાર (નેચરોપેથી)",
        tagline: "કુદરતની પંચમહાભૂત ઉપચાર પદ્ધતિ અને સ્વનિરાકરણ",
        shortDesc: "દવા વગર કુદરતી તત્વો (માટી, પાણી, સૂર્યપ્રકાશ) દ્વારા શરીરને સ્વસ્થ રાખવાની રીત.",
        overview:
          "નેચરોપેથીનો નિયમ છે કે શરીર પોતે જ પોતાનો ડૉક્ટર છે. ખોટા ખોરાક અને ઝેરી તત્વો દૂર થતાં જ શરીર કુદરતી રીતે સ્વસ્થ થઈ જાય છે.",
        traditionsTitle: "ગાંધીવાદી કુદરતી ઉપચાર",
        traditionsDesc:
          "માટીના લેપ, સૂર્યસ્નાન, કટિસ્નાન અને ઉપવાસ દ્વારા દવા વગર રોગો મટાડવાની આ સદીઓ જૂની નિર્દોષ પદ્ધતિ છે.",
        traditionsKeys: [
          "માટી પટ્ટી દ્વારા પેટની ગરમી અને સોજો દૂર કરવો",
          "ઉપવાસ દ્વારા આંતરિક સફાઈ અને નવી ઊર્જા",
          "સૂર્યપ્રકાશ અને તાજી હવાથી રોગપ્રતિકારક શક્તિ",
          "રોગના મૂળ કારણને નાબૂદ કરવું",
        ],
        innovationsTitle: "આધુનિક ઓટોફેગી સંશોધન",
        innovationsDesc:
          "નોબેલ પ્રાઇઝ વિજેતા સંશોધન મુજબ સમયાંતરે ઉપવાસ કરવાથી શરીર જૂના અને નકામા કોષોને ખાઈ જઈને નવા કોષો બનાવે છે.",
        innovationsKeys: [
          "ઉપવાસથી સેલ્યુલર રિપેરિંગ (ઓટોફેગી)",
          "વજન ઘટાડવા અને લિવર ડિટોક્સમાં અકસીર",
          "કુદરતી શાકભાજીના રસથી શરીરની આલ્કલાઇન સફાઈ",
          "દવાઓની આડઅસર વગર સ્વાસ્થ્ય પ્રાપ્તિ",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં મહત્વ",
        relevanceSignificance:
          "બિનજરૂરી ગોળીઓથી બચવા અને શરીરને કુદરતી રીતે ડિટોક્સ કરવા નેચરોપેથી શ્રેષ્ઠ છે.",
        relevanceDailyUse:
          "રાત્રે વહેલા જમીને સવારે મોડા નાસ્તો કરો (૧૨ કલાકનું ઇન્ટરમિટન્ટ ફાસ્ટિંગ). તાજી હવામાં શ્વાસ લો.",
        safetyNote: "યોગ્ય કુદરતી ચિકિત્સકની સલાહ મુજબ જ અપનાવો. ઈમરજન્સીમાં ડૉક્ટર પાસે જાવ.",
      },
    },
  },
  {
    id: "aromatherapy",
    icon: "🌸",
    gradient: "from-pink-500 via-rose-600 to-purple-600",
    badgeColor: "bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-500/30",
    content: {
      en: {
        name: "Aromatherapy & Olfactory Medicine",
        tagline: "Volatile Terpenes, Limbic System Stimulation & Emotional Calming",
        shortDesc: "Therapeutic scents part of relaxation rituals, nervous system calming, and mental clarity.",
        overview:
          "The olfactory nerve is the only direct, unmyelinated pathway connecting sensory input directly into the limbic system (the amygdala and hippocampus), bypassing the analytical neocortex. Inhaled volatile plant aromatic compounds trigger immediate neurochemical alterations.",
        traditionsTitle: "Ancient Gandha Chikitsa",
        traditionsDesc:
          "From ancient Egyptian temple kyphi to Ayurvedic Gandha Chikitsa and Persian rosewater distillations, essential oils of sandalwood, frankincense, jasmine, and vetiver were used to purify air and elevate spiritual consciousness.",
        traditionsKeys: [
          "Gandha Chikitsa (Balancing doshas via aromatics: calming Vata with sweet, warm florals)",
          "Steam inhalation with volatile oils for respiratory mucus clearance",
          "Topical dilution in carrier oils (sesame, jojoba) for transdermal absorption",
          "Sacred resins (Guggulu, Frankincense) burned to cleanse environmental space",
        ],
        innovationsTitle: "Neuropharmacology of Terpenes",
        innovationsDesc:
          "Gas chromatography-mass spectrometry (GC-MS) isolates bioactive compounds such as linalool and beta-caryophyllene. Studies demonstrate linalool binds GABA-A receptors similarly to anxiolytics without cognitive impairment.",
        innovationsKeys: [
          "Linalool inhalation modulating GABAergic neurotransmission to reduce acute anxiety",
          "Clinical aromatherapy in surgical post-op units significantly lowering pain scores",
          "Beta-caryophyllene acting as a dietary cannabinoid binding CB2 receptors",
          "Cold ultrasonic diffusion preserving heat-labile volatile aromatic hydrocarbons",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "Instantaneous emotional de-escalation for panic, work fatigue, and sleep latency troubles without ingesting pharmaceutical sedatives.",
        relevanceDailyUse:
          "Diffuse 3-4 drops of pure lavender before bed. Keep peppermint oil at your desk for afternoon alertness.",
        safetyNote: "Never ingest pure essential oils. Always dilute in carrier oil before skin application.",
      },
      hi: {
        name: "सुगंध चिकित्सा (Aromatherapy)",
        tagline: "प्राकृतिक फूलों व औषधीय तेलों की सुगंध से तनावमुक्ति और मन की शांति",
        shortDesc: "प्राकृतिक सुगंधों से तंत्रिका तंत्र को शांत करने और मानसिक ऊर्जा बढ़ाने की विधा।",
        overview:
          "सूंघने की शक्ति का मस्तिष्क के भावनात्मक केंद्र (लिम्बिक सिस्टम) से सीधा संबंध होता है। प्राकृतिक फूलों और जड़ी-बूटियों के अर्क की खुशबू कुछ ही सेकंड में तनाव कम कर मन को आनंदित कर देती है।",
        traditionsTitle: "गंध चिकित्सा की प्राचीन परंपरा",
        traditionsDesc:
          "आयुर्वेद में 'गंध चिकित्सा' का विशेष स्थान है। चंदन, गुलाब, चमेली और खस के इत्र से वात और पित्त दोष को शांत किया जाता था।",
        traditionsKeys: [
          "गंध चिकित्सा (वात और पित्त को सुगंध से शांत करना)",
          "भाप में नीलगिरी और कपूर डालकर श्वसन मार्ग साफ करना",
          "तिल या बादाम के तेल में मिलाकर त्वचा पर लगाना",
          "गुग्गुल और लोबान के धुएं से वातावरण को शुद्ध करना",
        ],
        innovationsTitle: "न्यूरोबायोलॉजी एवं आधुनिक परीक्षण",
        innovationsDesc:
          "अध्ययनों से पता चला है कि लैवेंडर के तेल में मौजूद लिनालूल मस्तिष्क के गाबा (GABA) रिसेप्टर्स को शांत करता है, जिससे घबराहट और अनिद्रा में तुरंत लाभ होता है।",
        innovationsKeys: [
          "लैवेंडर की सुगंध से तनाव में तुरंत कमी के क्लिनिकल प्रमाण",
          "अस्पतालों में ऑपरेशन के बाद दर्द और घबराहट कम करने में उपयोग",
          "पुदीने (Peppermint) के तेल से मानसिक थकान और सिरदर्द में राहत",
          "अल्ट्रासोनिक डिफ्यूज़र द्वारा शुद्ध सुगंध का प्रसार",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "बिना किसी दवाई के तुरंत मूड फ्रेश करने, सिरदर्द मिटाने और अच्छी नींद लाने के लिए सुगंध चिकित्सा अद्भुत है।",
        relevanceDailyUse:
          "रात को तकिए पर 2 बूंद लैवेंडर का तेल डालें। दिन में ताजगी के लिए पुदीने की खुशबू सूंघें।",
        safetyNote: "एसेंशियल ऑयल का सीधे सेवन न करें; त्वचा पर हमेशा नारियल या बादाम तेल में मिलाकर लगाएं।",
      },
      gu: {
        name: "સુગંધ ચિકિત્સા (એરોમાથેરાપી)",
        tagline: "કુદરતી અત્તર અને સુગંધિત તેલ દ્વારા મનની શાંતિ",
        shortDesc: "સુગંધિત વનસ્પતિ તેલ દ્વારા તણાવ મુક્તિ અને તાજગી મેળવવાનો પ્રયોગ.",
        overview:
          "સુગંધ સીધી આપણા મગજના લાગણી કેન્દ્ર પર અસર કરે છે. કુદરતી તેલની સુગંધ લેવાથી મગજ તરત શાંત થાય છે અને તણાવ ઘટે છે.",
        traditionsTitle: "પ્રાચીન ગંધ ચિકિત્સા",
        traditionsDesc:
          "ચંદન, ગુલાબ, કેવડો અને લોબાનની સુગંધ દ્વારા વાતાવરણ અને મનને પવિત્ર કરવાની પરંપરા ઘણી પ્રાચીન છે.",
        traditionsKeys: [
          "ચંદન અને ગુલાબથી મગજની ગરમી શાંત કરવી",
          "નીલગિરીના તેલનો નાસ લઈને કફ દૂર કરવો",
          "તેલમાં મિક્સ કરીને માલિશ કરવી",
          "લોબાન અને ગૂગળના ધૂપથી ઘરની શુદ્ધિ",
        ],
        innovationsTitle: "આધુનિક સાયન્સ અને ન્યુરોલોજી",
        innovationsDesc:
          "લેવેન્ડર અને ફુદીનાના તેલ પર થયેલા સંશોધનો દર્શાવે છે કે તેની સુગંધ લેવાથી સ્ટ્રેસ હોર્મોન્સ ઘટે છે અને ઊંઘ ઝડપી આવે છે.",
        innovationsKeys: [
          "લેવેન્ડરથી ઊંઘ અને ચિંતામાં ક્લિનિકલ રાહત",
          "ફુદીનાથી માથાનો દુખાવો અને સુસ્તી દૂર થવી",
          "હોસ્પિટલોમાં દર્દીઓના તણાવ નિવારણ માટે ઉપયોગ",
          "ડિફ્યુઝર દ્વારા ઘરની હવા શુદ્ધ કરવી",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "ઓફિસના કામના થાક, માથાના દુખાવા અને અનિદ્રામાં ગોળી લીધા વગર રાહત મેળવવા માટે સુગંધ શ્રેષ્ઠ છે.",
        relevanceDailyUse:
          "રાત્રે સૂતી વખતે રૂમમાં લેવેન્ડર તેલનો ડિફ્યુઝર વાપરો. માથું દુખે ત્યારે કપાળે નીલગિરી તેલ લગાડો.",
        safetyNote: "તેલ પીવું નહીં; ચામડી પર યોગ્ય રીતે મિક્સ કરીને જ લગાડવું.",
      },
    },
  },
  {
    id: "massage",
    icon: "💆",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    badgeColor: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    content: {
      en: {
        name: "Massage & Abhyanga Bodywork",
        tagline: "Lymphatic Drainage, Fascial Unwinding & Nervous System Pacification",
        shortDesc: "Touch and soft-tissue manual therapy offering short-term relaxation, comfort, and circulation.",
        overview:
          "Therapeutic touch is a biological imperative. Systematic manual pressure on soft tissue lowers circulating serum cortisol, triggers central oxytocin synthesis, mobilizes interstitial lymphatic fluid, and releases localized fascial cross-linking.",
        traditionsTitle: "Ayurvedic Abhyanga & Marma Therapy",
        traditionsDesc:
          "Classical Abhyanga uses warm, herbally-infused oils selected for the constitution. The Ashtanga Hridaya advises daily self-massage to ward off aging, fatigue, and Vata disorders.",
        traditionsKeys: [
          "Daily Abhyanga (Warm medicated sesame or coconut oil self-massage)",
          "Marma Chikitsa (Stimulating 107 vital neuro-lymphatic energy points)",
          "Shirodhara (Continuous warm herbal oil stream over the forehead)",
          "Fascia mobilization along anatomical muscle meridians",
        ],
        innovationsTitle: "Mechanobiology of Fascia & Lymphatics",
        innovationsDesc:
          "Recent anatomical imaging confirms that the interstitium—a fluid-filled network within connective tissues—facilitates whole-body cellular communication. Manual bodywork mechanically drains inflammatory cytokines via lymphatic flow.",
        innovationsKeys: [
          "Fascial mechanotransduction: manual pressure stimulating fibroblasts to synthesize healthy collagen",
          "Clinical trials showing Abhyanga lowers salivary cortisol and subjective stress scores",
          "Percussion therapy and instrument-assisted soft tissue mobilization (IASTM)",
          "Increases in natural killer (NK) white blood cell count following lymphatic drainage",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "Restores physical ease to cramped postural muscles, prevents joint stiffness, and deeply soothes an overstimulated nervous system.",
        relevanceDailyUse:
          "Perform a 10-minute warm sesame oil self-massage before a morning shower once or twice a week. Massage your feet before bed.",
        safetyNote: "Avoid massaging over open wounds, acute fractures, blood clots, or during high fever.",
      },
      hi: {
        name: "अभ्यंग व मालिश (Massage Therapy)",
        tagline: "गर्म औषधीय तेल से वात शमन, रक्तसंचार और मांसपेशियों का पोषण",
        shortDesc: "गर्म तिल या औषधीय तेलों से मालिश जो वात दोष शांत कर जोड़ों को पोषण देती है।",
        overview:
          "स्पर्श चिकित्सा शरीर को स्वस्थ रखने का सबसे प्राचीन माध्यम है। गर्म तेल से मालिश करने पर तनाव हार्मोन (कोर्टिसोल) कम होता है, रक्तसंचार बढ़ता है और त्वचा तथा जोड़ों को गहरा पोषण मिलता है।",
        traditionsTitle: "आयुर्वेदिक अभ्यंग परंपरा",
        traditionsDesc:
          "अष्टांग हृदय में लिखा है: 'अभ्यंगमाचरेन्नित्यं स जराश्रमवातहा'—अर्थात प्रतिदिन तेल मालिश करने से बुढ़ापा, थकान और वात रोग दूर रहते हैं।",
        traditionsKeys: [
          "नित्य अभ्यंग (गर्म तिल के तेल से पूरे शरीर की मालिश)",
          "मर्म चिकित्सा (शरीर के 107 मुख्य ऊर्जा बिंदुओं को सक्रिय करना)",
          "शिरोधारा (माथे पर औषधीय तेल की निरंतर धारा से अनिद्रा व तनाव मुक्ति)",
          "जोड़ों और मांसपेशियों की जकड़न को दूर करना",
        ],
        innovationsTitle: "लिम्फैटिक एवं फेशिया साइंस",
        innovationsDesc:
          "वैज्ञानिकों ने पाया है कि मालिश से शरीर के लिम्फ नोड्स सक्रिय होते हैं, जिससे विषाक्त पदार्थ बाहर निकलते हैं और व्हाइट ब्लड सेल्स की संख्या बढ़ती है।",
        innovationsKeys: [
          "कोर्टिसोल (स्ट्रेस हार्मोन) में कमी और ऑक्सीटोसिन में वृद्धि",
          "मांसपेशियों के फेशिया (Fascia) में लचीलापन और दर्द से राहत",
          "एथलीटों में रिकवरी और लैक्टिक एसिड निकालने में मदद",
          "रक्तसंचार बढ़ने से त्वचा का निखार और ओजस",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "शरीर की अकड़न, जोड़ों के दर्द और मानसिक थकान को दूर करने के लिए तेल मालिश सर्वोत्तम घरेलू उपचार है।",
        relevanceDailyUse:
          "हफ्ते में 2-3 बार नहाने से पहले हल्के गर्म तिल के तेल से मालिश करें। रात को पैरों के तलवों की मालिश करें।",
        safetyNote: "सूजन, घाव, बुखार या नसों में थक्के (DVT) की स्थिति में मालिश न करें।",
      },
      gu: {
        name: "અભ્યંગ અને માલિશ",
        tagline: "હૂંફાળા તેલની માલિશથી વાયુ શાંત કરવો અને સાંધા મજબૂત કરવા",
        shortDesc: "હૂંફાળા તલ કે સરસવના તેલથી માલિશ જે વાયુ શાંત કરે છે અને સાંધા મજબૂત બનાવે છે.",
        overview:
          "તેલ માલિશ એ શરીરને યુવાન રાખવાની ઉત્તમ રીત છે. તે શરીરનો થાક ઉતારે છે, લોહીનું પરિભ્રમણ વધારે છે અને સાંધાઓને લુબ્રિકેશન આપે છે.",
        traditionsTitle: "આયુર્વેદિક અભ્યંગ વિધિ",
        traditionsDesc:
          "રોજ હૂંફાળા તલના તેલથી માલિશ કરવાથી ક્યારેય વાયુનો પ્રકોપ થતો નથી અને શરીર વજ્ર જેવું મજબૂત બને છે.",
        traditionsKeys: [
          "નિત્ય અભ્યંગ (રોજ સવારે સ્નાન પહેલાં તેલ માલિશ)",
          "મર્મ ચિકિત્સા દ્વારા નસોને નવું જીવન",
          "શિરોધારાથી માનસિક તણાવ અને અનિદ્રા મુક્તિ",
          "સાંધાના ઘસારા સામે તેલનું કુદરતી રક્ષણ",
        ],
        innovationsTitle: "આધુનિક મેડિકલ પુરાવા",
        innovationsDesc:
          "આધુનિક સંશોધનો મુજબ લિમ્ફેટિક મસાજથી શરીરનો સોજો ઘટે છે અને રોગપ્રતિકારક કોષો સક્રિય થાય છે.",
        innovationsKeys: [
          "સ્ટ્રેસ હોર્મોનમાં ઘટાડો અને સ્નાયુઓમાં રાહત",
          "લોહીનું ભ્રમણ સુધરીને ચામડી ચમકદાર બનવી",
          "કસરત પછીના સ્નાયુઓના દુખાવામાં ઝડપી આરામ",
          "ઊંઘની ગુણવત્તામાં મોટો સુધારો",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "સાંધાના દુખાવા, કમરની જકડન અને જૂના થાકને દૂર કરવા માટે તેલ માલિશ અજોડ છે.",
        relevanceDailyUse:
          "અઠવાડિયામાં બે વાર નવશેકા તલના તેલથી માલિશ કરો. રાત્રે સૂતી વખતે પગના તળિયે માલિશ કરો.",
        safetyNote: "સોજો, તાવ કે ઇજા હોય ત્યારે માલિશ ન કરવી.",
      },
    },
  },
  {
    id: "acupressure",
    icon: "👐",
    gradient: "from-teal-600 via-emerald-600 to-cyan-700",
    badgeColor: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30",
    content: {
      en: {
        name: "Acupressure & Meridian Points",
        tagline: "Targeted Neuro-Reflex Stimulation & Endorphin Release",
        shortDesc: "Manual pressure on key bio-energetic points relieving tension, headache, and nausea.",
        overview:
          "Acupressure applies localized manual mechanical pressure to specific somatic trigger points. This stimulation triggers local nitric oxide release, reduces muscular hypertonicity, and sends afferent signals to the spinal cord and brainstem that gate pain perception.",
        traditionsTitle: "Eastern Meridian Traditions",
        traditionsDesc:
          "Originating from Chinese meridian systems and Ayurvedic Marma vidya, practitioners target points along energy pathways (Jing-Luo) to relieve energy stagnation and tonify organ Qi.",
        traditionsKeys: [
          "LI4 (Hegu) on the hand for tension headaches and facial pain",
          "PC6 (Neiguan) on the inner wrist for nausea, motion sickness, and anxiety",
          "ST36 (Zusanli) below the knee for digestive fire and general vitality",
          "Marma point therapy (stimulating neuromuscular junctions)",
        ],
        innovationsTitle: "Neuro-Reflex & Pain Gate Science",
        innovationsDesc:
          "Studies validate that applying pressure to PC6 and LI4 triggers endogenous opioid (endorphin and enkephalin) release in the central nervous system, blocking incoming pain signals according to the Melzack-Wall Gate Control Theory.",
        innovationsKeys: [
          "Functional MRI confirming cortical pain matrix deactivation during acupressure",
          "Clinical wristband trials showing dramatic reduction in chemotherapy-induced and pregnancy nausea",
          "Acupoint low electrical impedance confirming unique skin conductance sites",
          "Myofascial trigger point dry-needling and manual ischemic compression correspondence",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "An always-available, zero-cost, self-administered tool for nausea, motion sickness, and tension headaches.",
        relevanceDailyUse:
          "For headaches or tension, press firmly on the webbing between your thumb and index finger (LI4) in circular motions for 1-2 minutes.",
        safetyNote: "Never apply heavy pressure over inflamed skin or bruises. Certain points are contraindicated in pregnancy.",
      },
      hi: {
        name: "एक्यूप्रेशर एवं मर्म बिंदु",
        tagline: "ऊर्जा बिंदुओं पर दबाव देकर दर्द निवारण और अंगों की सक्रियता",
        shortDesc: "विशेष ऊर्जा बिंदुओं पर दबाव देकर दर्द से राहत और ऊर्जा प्रवाह को सुगम बनाना।",
        overview:
          "एक्यूप्रेशर शरीर के विशेष संवेदनशील बिंदुओं पर उंगलियों से दबाव देने की प्राचीन कला है। यह शरीर में प्राकृतिक पेनकिलर (एंडोर्फिन) को स्रावित करता है और दर्द के संकेतों को मस्तिष्क तक पहुंचने से रोकता है।",
        traditionsTitle: "मर्म एवं मेरिडियन परंपरा",
        traditionsDesc:
          "प्राचीन चीनी चिकित्सा और भारतीय मर्म विज्ञान के अनुसार शरीर में ऊर्जा के विशेष मार्ग होते हैं, जिनमें रुकावट आने पर रोग होते हैं। इन बिंदुओं पर दबाव देकर ऊर्जा का प्रवाह बहाल किया जाता है।",
        traditionsKeys: [
          "एलआई-4 (अंगूठे और तर्जनी के बीच: सिरदर्द और दांत दर्द में राहत)",
          "पीसी-6 (कलाई के अंदर: उल्टी, जी मिचलाना और घबराहट में उपयोगी)",
          "एसटी-36 (घुटने के नीचे: पाचन और ऊर्जा बढ़ाने के लिए)",
          "मर्म चिकित्सा द्वारा तंत्रिका तंत्र को सक्रिय करना",
        ],
        innovationsTitle: "न्यूरोलॉजिकल शोध एवं पेन-गेट थ्योरी",
        innovationsDesc:
          "एमआरआई अध्ययनों से सिद्ध हुआ है कि एक्यूप्रेशर बिंदुओं को दबाने से मस्तिष्क में एंडोर्फिन निकलता है, जो दर्द को तुरंत कम करता है।",
        innovationsKeys: [
          "गर्भावस्था और यात्रा में उल्टी रोकने में पीसी-6 बिंदु की क्लिनिकल सफलता",
          "माइग्रेन और तनाव वाले सिरदर्द में दवा जितना प्रभावी",
          "शरीर के इन बिंदुओं पर बिजली का प्रतिरोध कम होने की वैज्ञानिक पुष्टि",
          "मांसपेशियों के ट्रिगर पॉइंट्स को ढीला करने में मददगार",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "यात्रा में उल्टी आना, अचानक सिरदर्द होना या घबराहट होने पर एक्यूप्रेशर तुरंत राहत देता है।",
        relevanceDailyUse:
          "सिरदर्द होने पर अंगूठे और पहली उंगली के बीच के बिंदु को 2 मिनट तक गोल-गोल दबाएं।",
        safetyNote: "चोटग्रस्त या सूजे हुए हिस्से पर दबाव न दें। गर्भवती महिलाओं को कुछ बिंदुओं से बचना चाहिए।",
      },
      gu: {
        name: "એક્યુપ્રેશર",
        tagline: "શરીરના ચોક્કસ પોઇન્ટ્સ દબાવીને દુખાવામાં તાત્કાલિક રાહત",
        shortDesc: "ચોક્કસ ઊર્જા બિંદુઓ પર દબાણ આપીને કુદરતી રીતે દર્દ મટાડવાની કળા.",
        overview:
          "એક્યુપ્રેશર દવા વગર માત્ર હાથના પ્રેશરથી રોગ મટાડવાની પ્રાચીન વિદ્યા છે. તે શરીરમાં કુદરતી પેઇનકિલર્સ છોડે છે અને લોહીનું ભ્રમણ વધારે છે.",
        traditionsTitle: "મેરિડિયન અને મર્મ પરંપરા",
        traditionsDesc:
          "હાથ, પગ અને કાન પર શરીરના તમામ અંગોના પોઇન્ટ્સ આવેલા છે જેને દબાવવાથી તે અંગો સ્વસ્થ બને છે.",
        traditionsKeys: [
          "હાથના અંગૂઠા પાસે દબાવવાથી માથાના દુખાવામાં રાહત (LI4)",
          "કાંડા પર દબાવવાથી ઉબકા અને ચક્કરમાં રાહત (PC6)",
          "ઘૂંટણ નીચે દબાવવાથી પાચનશક્તિ વધવી (ST36)",
          "પગના તળિયાના પોઇન્ટ્સથી આખા શરીરને ઊર્જા",
        ],
        innovationsTitle: "આધુનિક સંશોધનો",
        innovationsDesc:
          "સાયન્ટિફિક રિસર્ચ મુજબ એક્યુપ્રેશર નર્વસ સિસ્ટમને ઉત્તેજિત કરીને મગજમાંથી કુદરતી દર્દનિવારક કેમિકલ્સ મુક્ત કરે છે.",
        innovationsKeys: [
          "મુસાફરીમાં ઊલટી થતી અટકાવવામાં સફળતા",
          "માથાના દુખાવા અને માઈગ્રેનમાં તુરંત રાહત",
          "દવા લીધા વગર સ્નાયુઓનો તણાવ દૂર થવો",
          "બ્લડ પ્રેશરને સ્થિર રાખવામાં મદદ",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં મહત્વ",
        relevanceSignificance:
          "અચાનક થતા માથાના દુખાવા કે ગેસ-ઉબકામાં કોઈ પણ સાધન વગર જાતે જ રાહત મેળવી શકાય છે.",
        relevanceDailyUse:
          "માથું દુખે ત્યારે હાથના અંગૂઠા અને આંગળી વચ્ચેનો ભાગ ૧-૨ મિનિટ દબાવો.",
        safetyNote: "સોજો કે ઘા વાળી જગ્યાએ દબાણ ન આપવું. ગર્ભવતી મહિલાઓએ સાવચેતી રાખવી.",
      },
    },
  },
  {
    id: "traditional-chinese-medicine",
    icon: "☯️",
    gradient: "from-red-600 via-rose-700 to-amber-700",
    badgeColor: "bg-red-500/15 text-red-700 dark:text-red-300 border-red-500/30",
    content: {
      en: {
        name: "Traditional Chinese Medicine (TCM)",
        tagline: "Yin-Yang Polarity, Qi Dynamics & Five-Phase Ecological Harmony",
        shortDesc: "Ancient frameworks of acupuncture, herbal synergy, and energetic balance.",
        overview:
          "TCM views the human body as an ecological microcosm governed by the dual complementary forces of Yin (cooling, nourishing, receptive) and Yang (warming, active, metabolizing). Disease arises from stagnant or deficient Qi (vital energy) flowing through meridian pathways.",
        traditionsTitle: "Classical Foundations",
        traditionsDesc:
          "Recorded in the Huangdi Neijing (Yellow Emperor's Inner Classic) over 2,000 years ago, TCM diagnostics utilize radial pulse diagnosis, tongue examination, acupuncture, moxibustion, cupping, and complex polyherbal formulas.",
        traditionsKeys: [
          "Yin-Yang balance (Harmonizing active heat and nourishing moisture)",
          "Qi and Blood (Xue) circulation through the 14 main meridians",
          "Five Element Theory (Wood, Fire, Earth, Metal, Water organ networks)",
          "Synergistic herbal formulas with emperor, minister, assistant, and guide herbs",
        ],
        innovationsTitle: "Nobel Recognition & Bio-Acupuncture",
        innovationsDesc:
          "In 2015, Dr. Tu Youyou was awarded the Nobel Prize in Medicine for discovering artemisinin from sweet wormwood (Qinghao) based on ancient TCM texts. Modern electro-acupuncture is documented to stimulate vagal-adrenal anti-inflammatory pathways.",
        innovationsKeys: [
          "2015 Nobel Prize in Medicine validating antimalarial artemisinin from ancient TCM texts",
          "Electro-acupuncture activation of the vagal-adrenal anti-inflammatory axis",
          "Fascial water-channel conductance aligning with meridian mapping",
          "Tongue imaging AI tools matching classical diagnostic classifications",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "A profound holistic model for chronic pain, gynecological imbalances, and deep immune support.",
        relevanceDailyUse:
          "Drink warm teas, consume seasonal cooked foods, protect your lower back and neck from cold wind, and practice gentle Qigong.",
        safetyNote: "Seek appropriately credentialed, licensed practitioners. Polyherbal formulations can interact with pharmaceuticals.",
      },
      hi: {
        name: "पारंपरिक चीनी चिकित्सा (TCM)",
        tagline: "यिन-यांग संतुलन, ची ऊर्जा और पंचतत्व सामंजस्य",
        shortDesc: "यिन-यांग और ची ऊर्जा के संतुलन पर आधारित एक्यूपंक्चर और हर्बल पद्धति।",
        overview:
          "पारंपरिक चीनी चिकित्सा शरीर को प्रकृति का एक छोटा रूप मानती है, जो यिन (शीतल, शांत) और यांग (उष्ण, सक्रिय) ऊर्जाओं के संतुलन पर चलता है। जब शरीर में 'ची' (प्राण ऊर्जा) का प्रवाह बाधित होता है, तब बीमारियां जन्म लेती हैं।",
        traditionsTitle: "यिन-यांग एवं मेरिडियन सिद्धांत",
        traditionsDesc:
          "2000 वर्ष पुराने ग्रंथों (ह्वांगदी नेइजिंग) पर आधारित। इसमें जीभ की परीक्षा, नाड़ी परीक्षा, एक्यूपंक्चर, मोक्सीबस्टन और जड़ी-बूटियों के जटिल योगों का उपयोग होता है।",
        traditionsKeys: [
          "यिन और यांग का संतुलन (शीतलता और गर्मी का सामंजस्य)",
          "14 मुख्य मेरिडियन में 'ची' और रक्त का प्रवाह",
          "पंचतत्व सिद्धांत (लकड़ी, अग्नि, पृथ्वी, धातु, जल)",
          "कपिंग थेरेपी और एक्यूपंक्चर द्वारा नसों का अवरोध खोलना",
        ],
        innovationsTitle: "नोबेल पुरस्कार एवं आधुनिक शोध",
        innovationsDesc:
          "2015 में चीनी वैज्ञानिक तू यूयू को प्राचीन टीसीएम ग्रंथ के आधार पर मलेरिया की दवा 'आर्टेमिसिनिन' खोजने के लिए नोबेल पुरस्कार दिया गया। आज इलेक्ट्रो-एक्यूपंक्चर सूजन घटाने में चिकित्सकीय रूप से प्रमाणित है।",
        innovationsKeys: [
          "2015 में प्राचीन टीसीएम ज्ञान के आधार पर चिकित्सा का नोबेल पुरस्कार",
          "इलेक्ट्रो-एक्यूपंक्चर द्वारा तंत्रिका तंत्र और सूजन का नियंत्रण",
          "फेशिया और मेरिडियन के बीच वैज्ञानिक संबंध की पुष्टि",
          "दर्द प्रबंधन में एक्यूपंक्चर का वैश्विक स्तर पर उपयोग",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "पुराने दर्द, जोड़ों की सूजन और हार्मोनल असंतुलन को बिना सर्जरी या भारी दवाओं के ठीक करने में यह अत्यंत उपयोगी है।",
        relevanceDailyUse:
          "गर्म सूप और काढ़े पिएं, ठंडी हवा से गर्दन और कमर को बचाएं, और रोजाना हल्का चीगोंग या ताई ची करें।",
        safetyNote: "लाइसेंस प्राप्त विशेषज्ञ से ही उपचार कराएं। दवाओं के साथ हर्बल इंटरैक्शन की जांच करें।",
      },
      gu: {
        name: "પરંપરાગત ચાઈનીઝ ચિકિત્સા (TCM)",
        tagline: "યિન-યાંગ ધ્રુવીયતા, ચી ઊર્જા અને પંચતત્વ સંતુલન",
        shortDesc: "યિન-યાંગ અને એક્યુપંક્ચર પર આધારિત પ્રાચીન સારવાર પદ્ધતિ.",
        overview:
          "ચીની ચિકિત્સા શરીરને પ્રકૃતિનું પ્રતિબિંબ ગણે છે. યિન (ઠંડક) અને યાંગ (ગરમી) ના સંતુલનથી શરીર સ્વસ્થ રહે છે અને ચી (જીવન ઊર્જા) શરીરમાં અવિરત વહે છે.",
        traditionsTitle: "પ્રાચીન તબીબી પદ્ધતિ",
        traditionsDesc:
          "એક્યુપંક્ચર, કપિંગ થેરાપી અને નાડી પરીક્ષણ દ્વારા રોગનું મૂળ શોધીને સારવાર કરવાની હજારો વર્ષ જૂની પરંપરા છે.",
        traditionsKeys: [
          "યિન અને યાંગનું આંતરિક સંતુલન",
          "મેરિડિયન માર્ગોમાં ચી ઊર્જાનો પ્રવાહ",
          "જીભ અને નાડી દ્વારા રોગનું સચોટ નિદાન",
          "એક્યુપંક્ચર સોય દ્વારા નસોની સક્રિયતા",
        ],
        innovationsTitle: "નોબેલ પ્રાઇઝ અને વૈજ્ઞાનિક સ્વીકૃતિ",
        innovationsDesc:
          "૨૦૧૫માં આ પ્રાચીન જ્ઞાનના આધારે શોધાયેલી દવા માટે નોબેલ પ્રાઇઝ મળ્યું હતું. આજે આખી દુનિયામાં પેઇન મેનેજમેન્ટ માટે એક્યુપંક્ચર વપરાય છે.",
        innovationsKeys: [
          "મેલેરિયાની દવા આર્ટેમિસિનિન માટે નોબેલ પારિતોષિક",
          "ક્રોનિક પેઇનમાં એક્યુપંક્ચરની સાબિત થયેલી સફળતા",
          "નર્વસ સિસ્ટમ પર પોઝિટિવ અસરના ક્લિનિકલ પુરાવા",
          "કપિંગ થેરાપીથી સ્નાયુઓનો કચરો દૂર થવો",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "જૂના સાંધાના દુખાવા, હોર્મોનલ સમસ્યાઓ અને અશક્તિમાં કુદરતી ઉપચાર માટે આ પદ્ધતિ પ્રખ્યાત છે.",
        relevanceDailyUse:
          "ગરમ અને તાજો ખોરાક ખાઓ, અતિશય ઠંડા વાતાવરણથી બચો અને હળવી કસરત કરો.",
        safetyNote: "પ્રમાણિત નિષ્ણાત પાસે જ સારવાર લેવી. જાતે સોય લગાડવી નહીં.",
      },
    },
  },
  {
    id: "hydrotherapy",
    icon: "🛀",
    gradient: "from-blue-600 via-cyan-600 to-sky-700",
    badgeColor: "bg-blue-500/15 text-blue-700 dark:text-blue-300 border-blue-500/30",
    content: {
      en: {
        name: "Hydrotherapy & Thermal Medicine",
        tagline: "Vascular Gymnastics, Heat Shock Proteins & Cold Exposure Resilience",
        shortDesc: "Warm, cool, or contrast water applications optimizing circulation and immune vigilance.",
        overview:
          "Water conducts thermal energy 24 times faster than air. Exploiting water's temperature gradients exerts profound mechanical and vascular effects: heat dilates vessels and loosens connective tissue, while cold elicits vasoconstriction, shunts blood to core organs, and spurs norepinephrine synthesis.",
        traditionsTitle: "Thermal Traditions Across History",
        traditionsDesc:
          "From Roman Thermae and Nordic saunas to Japanese Onsen, Turkish Hamams, and Ayurvedic Avagaha Sweda, thermal water immersion has been a cornerstone of detoxification and convalescence for millenia.",
        traditionsKeys: [
          "Avagaha Sweda (Warm medicated herbal tub baths for pelvic and joint stiffness)",
          "Contrast bathing (Alternating hot and cold water to create vascular pumping)",
          "Steam inhalation for liquefying respiratory congestion",
          "Epsom salt baths replenishing transdermal magnesium",
        ],
        innovationsTitle: "Heat Shock Proteins & Cryotherapy Biology",
        innovationsDesc:
          "Scientific investigation demonstrates thermal stress triggers heat shock proteins (HSP70) that refold misfolded cellular proteins. Deliberate cold immersion increases circulating norepinephrine by up to 530% and activates brown adipose tissue (BAT).",
        innovationsKeys: [
          "Heat shock proteins (HSP) preventing neurodegenerative protein aggregation",
          "Cold water immersion spiking dopamine by 250% for hours with zero subsequent crash",
          "Brown adipose tissue (BAT) activation burning glucose and triglycerides for thermogenesis",
          "Contrast therapy accelerating athletic muscle clearance of blood lactate",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "A potent tool to boost metabolic health, elevate mood, reset the autonomic nervous system, and speed athletic recovery.",
        relevanceDailyUse:
          "Finish your morning shower with 30-60 seconds of cool water for sustained alertness. Enjoy a warm epsom salt soak before bed to promote deep sleep.",
        safetyNote: "Avoid extreme temperatures if you have uncontrolled hypertension, cardiovascular disease, or neuropathy.",
      },
      hi: {
        name: "जल चिकित्सा (Hydrotherapy)",
        tagline: "गर्म-ठंडे पानी से रक्तसंचार, डिटॉक्स और मांसपेशियों की रिकवरी",
        shortDesc: "गर्म और ठंडे पानी के स्नान या भाप से रक्तसंचार और मांसपेशियों की शिथिलता दूर करना।",
        overview:
          "पानी हवा की तुलना में 24 गुना तेजी से तापमान स्थानांतरित करता है। गर्म पानी से नसें फैलती हैं और मांसपेशियां शिथिल होती हैं, जबकि ठंडा पानी शरीर में नोरेपिनेफ्रिन और डोपामाइन बढ़ाता है जिससे स्फूर्ति आती है।",
        traditionsTitle: "प्राचीन जल चिकित्सा परंपराएं",
        traditionsDesc:
          "रोमन बाथ, फिनिश सौना, जापानी ऑनसेन और आयुर्वेद के 'अवगाह स्वेद' में गर्म-ठंडे पानी और औषधीय भाप से रोगों को ठीक करने की अद्भुत परंपरा है।",
        traditionsKeys: [
          "अवगाह स्वेद (औषधीय गर्म पानी के टब में बैठकर जोड़ों का दर्द मिटाना)",
          "कंट्रास्ट बाथ (बारी-बारी से गर्म और ठंडे पानी का स्नान)",
          "भाप स्नान (स्वेदन) द्वारा पसीने से विषाक्त पदार्थों को निकालना",
          "सेंधा नमक युक्त गर्म पानी से पैरों की सिकाई",
        ],
        innovationsTitle: "हीट शॉक प्रोटीन एवं क्रायोथेरेपी रिसर्च",
        innovationsDesc:
          "वैज्ञानिकों के अनुसार ठंडे पानी के स्नान से डोपामाइन का स्तर 250% तक बढ़ जाता है जो कई घंटों तक बना रहता है। सौना से दिल की सेहत दौड़ने जितनी सुधरती है।",
        innovationsKeys: [
          "हीट शॉक प्रोटीन्स द्वारा कोशिकाओं की मरम्मत",
          "ठंडे पानी से ब्राउन फैट का सक्रिय होना जिससे मोटापा घटता है",
          "डोपामाइन और नोरेपिनेफ्रिन में भारी वृद्धि से मानसिक स्फूर्ति",
          "मांसपेशियों के दर्द और सूजन में तेजी से रिकवरी",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "दिनभर की थकावट मिटाने, इम्यूनिटी बढ़ाने और मूड को तुरंत बेहतर करने के लिए यह बहुत प्रभावी है।",
        relevanceDailyUse:
          "सुबह नहाने के अंत में 30 सेकंड ठंडा पानी डालें। रात को सोने से पहले गर्म पानी में पैर रखकर बैठें।",
        safetyNote: "हार्ट पेशेंट और हाई बीपी वाले मरीजों को बहुत ज्यादा ठंडे या गर्म पानी के झटके से बचना चाहिए।",
      },
      gu: {
        name: "જળ ચિકિત્સા (હાઇડ્રોથેરાપી)",
        tagline: "ગરમ અને ઠંડા પાણીના પ્રયોગથી નવી ઊર્જા અને સ્નાયુઓની રાહત",
        shortDesc: "ગરમ-ઠંડા પાણીના સ્નાન કે શેક દ્વારા થાક અને સ્નાયુઓનો દુખાવો દૂર કરવો.",
        overview:
          "પાણીના તાપમાનનો ઉપયોગ કરીને શરીરના અંગોને ઉત્તેજિત કરવાની આ અદ્ભુત પદ્ધતિ છે. ગરમ પાણી સ્નાયુઓને આરામ આપે છે અને ઠંડુ પાણી રોગપ્રતિકારક શક્તિ વધારે છે.",
        traditionsTitle: "પરંપરાગત સ્નાન વિધિ",
        traditionsDesc:
          "જાપાનીઝ ગરમ પાણીના કુંડ, આયુર્વેદિક બાષ્પ સ્નાન (સ્ટીમ બાથ) અને નવશેકા પાણીનો શેક સદીઓથી થાક ઉતારવા માટે વપરાય છે.",
        traditionsKeys: [
          "ઔષધીય વરાળ સ્નાન (સ્ટીમ બાથથી કચરો બહાર કાઢવો)",
          "ગરમ અને ઠંડા પાણીનું વારાફરતી સ્નાન",
          "મીઠાવાળા ગરમ પાણીમાં પગ બોળી રાખવા",
          "સાંધાના દુખાવામાં ગરમ પાણીની થેલીનો શેક",
        ],
        innovationsTitle: "આધુનિક કોલ્ડ થેરાપી સાયન્સ",
        innovationsDesc:
          "નવીનતમ સંશોધનો મુજબ સવારે ઠંડા પાણીથી નહાવાથી મગજમાં ડોપામાઈન વધે છે અને શરીર આખો દિવસ તાજગી અનુભવે છે.",
        innovationsKeys: [
          "ઠંડા પાણીના સ્નાનથી માનસિક ઉર્જામાં વધારો",
          "મેટાબોલિઝમ ઝડપી બનીને કેલરી બર્ન થવી",
          "સાંધા અને સ્નાયુઓના સોજામાં ઝડપી ઘટાડો",
          "બ્લડ પ્રેશર અને નસોનું ટોનિંગ",
        ],
        relevanceTitle: "રોજિંદા જીવનમાં મહત્વ",
        relevanceSignificance:
          "શરીરનો થાક ઉતારવા, આળસ ભગાવવા અને ગાઢ ઊંઘ માટે ગરમ-ઠંડુ પાણી ઉત્તમ ઔષધ છે.",
        relevanceDailyUse:
          "સવારે સ્નાનના અંતે ૩૦ સેકન્ડ ઠંડુ પાણી રેડો. રાત્રે સૂતા પહેલા હૂંફાળા પાણીથી પગ ધોવો.",
        safetyNote: "હાઈ બ્લડ પ્રેશર કે હૃદયની તકલીફ હોય તેમણે અતિશય ઠંડા પાણીના ઝટકાથી બચવું.",
      },
    },
  },
  {
    id: "lifestyle-sunlight",
    icon: "🌞",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    badgeColor: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
    content: {
      en: {
        name: "Lifestyle & Chronobiology",
        tagline: "Circadian Alignment with Solar Rhythms & Nature's Seasons",
        shortDesc: "Daily biological flow, morning sunlight, grounding, and connection supporting holistic wellness.",
        overview:
          "Human gene expression, hormonal pulses, and digestive enzymes operate on a 24-hour circadian clock entrained by the solar cycle. When our light exposure, meal timing, and sleep patterns become asynchronous with the sun, chronic metabolic and mental health issues emerge.",
        traditionsTitle: "Ayurvedic Dinacharya & Ritucharya",
        traditionsDesc:
          "Ayurveda structured human life around Dinacharya (daily routine synchronized with nature's biological transitions) and Ritucharya (seasonal protocol shifts across the 6 Indian seasons).",
        traditionsKeys: [
          "Brahma Muhurta (Awakening in the pre-dawn stillness)",
          "Surya Namaskar at sunrise to absorb morning photonic energy",
          "Ritucharya (Adapting diet, clothing, and herbs as seasons shift)",
          "Evening digital sunset (Dimming light sources after sunset)",
        ],
        innovationsTitle: "Photobiology & Circadian Clock Genes",
        innovationsDesc:
          "The discovery of intrinsically photosensitive retinal ganglion cells (ipRGCs) containing melanopsin proved that morning photon exposure directly sets the suprachiasmatic nucleus (SCN)—the brain's master biological clock.",
        innovationsKeys: [
          "Morning sunlight exposure setting the circadian pacemaker, promoting daytime alertness and night melatonin",
          "Near-infrared (NIR) solar light stimulating mitochondrial cytochrome c oxidase to boost ATP synthesis",
          "Circadian disruption recognized by WHO as a probable carcinogen",
          "Grounding (earthing) reducing red blood cell aggregation and surface charge viscosity",
        ],
        relevanceTitle: "Significance & Modern Daily Use",
        relevanceSignificance:
          "The most foundational cure for perpetual jetlag, seasonal affective disorder, sluggish morning energy, and insomnia.",
        relevanceDailyUse:
          "Step outside for 10-15 minutes of natural sunlight within 60 minutes of waking. Avoid bright overhead lighting after 9 PM.",
        safetyNote: "Protect skin from harsh ultraviolet midday rays. Adapt for seasonal extremes.",
      },
      hi: {
        name: "दिनचर्या व सूर्यप्रकाश (Chronobiology)",
        tagline: "प्राकृतिक जैविक लय, सुबह की धूप और मौसमी ऋतुचर्या",
        shortDesc: "सुबह की धूप, खुली हवा और प्रकृति से जुड़ाव जो मेलाटोनिन और विटामिन डी को संतुलित करता है।",
        overview:
          "मानव शरीर की प्रत्येक कोशिका सूर्य की गति और 24 घंटे की जैविक घड़ी (Circadian Rhythm) के अनुसार काम करती है। जब हम प्रकृति की लय से हटकर देर रात तक जागते हैं और सूरज से दूर रहते हैं, तो बीमारियां शुरू होती हैं।",
        traditionsTitle: "दिनचर्या एवं ऋतुचर्या की वैदिक परंपरा",
        traditionsDesc:
          "आयुर्वेद में दिनचर्या (दैनिक नियम) और ऋतुचर्या (मौसम के अनुसार जीवनशैली) का विस्तृत वर्णन है। सुबह ब्रह्म मुहूर्त में उठना और सूर्य को अर्घ्य देना स्वास्थ्य की आधारशिला है।",
        traditionsKeys: [
          "ब्रह्म मुहूर्त (सूर्योदय से पूर्व जागना)",
          "सूर्योदय के समय सूर्य नमस्कार और खुली धूप का सेवन",
          "ऋतुचर्या (छह ऋतुओं के अनुसार भोजन और वस्त्र में बदलाव)",
          "शाम को सूर्यास्त के बाद शांति और विश्राम",
        ],
        innovationsTitle: "फोटोबायोलॉजी एवं जैविक घड़ी विज्ञान",
        innovationsDesc:
          "2017 के नोबेल पुरस्कार से साबित हुआ कि हमारे शरीर में क्लॉक जीन्स (Clock Genes) होते हैं। सुबह की धूप आंखों की रेटिना पर पड़ते ही मस्तिष्क को मेलाटोनिन और कोर्टिसोल का सही चक्र सेट करने का संकेत मिलता है।",
        innovationsKeys: [
          "सुबह की धूप से मेलाटोनिन और सेरोटोनिन का सटीक संतुलन",
          "विटामिन डी का प्राकृतिक निर्माण जो हड्डियों और इम्यूनिटी को मजबूत करता है",
          "माइटोकॉन्ड्रिया में एटीपी (ऊर्जा) उत्पादन को बढ़ावा देने वाली इन्फ्रारेड किरणें",
          "रात को नीली रोशनी (मोबाइल) से बचने पर गहरी नींद का लाभ",
        ],
        relevanceTitle: "दैनिक जीवन में उपयोग",
        relevanceSignificance:
          "सुबह की सुस्ती, मूड स्विंग्स, डिप्रेशन और अनिद्रा से बचने का यह सबसे सरल, मुफ्त और प्राकृतिक उपाय है।",
        relevanceDailyUse:
          "सुबह उठने के 1 घंटे के भीतर 10-15 मिनट बाहर धूप में जाएं। रात 9 बजे के बाद घर की तेज लाइटें बंद कर दें।",
        safetyNote: "दोपहर की अत्यधिक तेज धूप से त्वचा की रक्षा करें। मौसम के अनुकूल कपड़े पहनें।",
      },
      gu: {
        name: "દિનચર્યા અને સૂર્યપ્રકાશ",
        tagline: "કુદરતી જૈવિક ઘડિયાળ, સવારનો તડકો અને ઋતુચર્યા",
        shortDesc: "સવારનો કુદરતી તડકો અને ખુલ્લી હવા જે વિટામિન ડી અને માનસિક ઉલ્લાસ આપે છે.",
        overview:
          "આપણું શરીર સૂર્યની ગતિ સાથે ચાલે છે. સવારના કુદરતી તડકામાં રહેવાથી ઊંઘ અને જાગવાની જૈવિક લય બરાબર રહે છે અને આખો દિવસ ઊર્જા જળવાય છે.",
        traditionsTitle: "આયુર્વેદિક દિનચર્યા વિજ્ઞાન",
        traditionsDesc:
          "બ્રહ્મ મુહૂર્તમાં જાગવું, સૂર્ય નમસ્કાર કરવા અને ઋતુ પ્રમાણે જીવનશૈલી બદલવી એ સદીઓથી નિરોગી રહેવાનું રહસ્ય છે.",
        traditionsKeys: [
          "બ્રહ્મ મુહૂર્તમાં જાગીને તાજગી મેળવવી",
          "સવારના કુદરતી તડકાથી વિટામિન ડી મેળવવું",
          "ઋતુ પ્રમાણે આહાર અને વિહારમાં ફેરફાર",
          "સૂર્યાસ્ત પછી લાઈટો ધીમી કરીને મનને આરામ આપવો",
        ],
        innovationsTitle: "આધુનિક ક્રોનોબાયોલોજી",
        innovationsDesc:
          "આધુનિક વિજ્ઞાન મુજબ સવારનો તડકો આંખોમાં જતાં જ મગજને સંકેત મળે છે, જેથી દિવસભર સતર્કતા રહે છે અને રાત્રે ગાઢ ઊંઘ આવે છે.",
        innovationsKeys: [
          "વિટામિન ડી અને મેલાટોનિનનું કુદરતી સંતુલન",
          "ડિપ્રેશન અને માનસિક થાક સામે કુદરતી રક્ષણ",
          "કોષોની અંદર ઊર્જા (ATP) નું ઉત્પાદન વધવું",
          "જૈવિક ઘડિયાળ (Circadian Clock) નું નિયમન",
        ],
        relevanceTitle: "આજના સમયમાં મહત્વ",
        relevanceSignificance:
          "સવારની સુસ્તી, મૂડ ખરાબ રહેવો અને રાત્રે ઊંઘ ન આવવાની સમસ્યા સામે સૂર્યપ્રકાશ શ્રેષ્ઠ કુદરતી ઔષધ છે.",
        relevanceDailyUse:
          "સવારે ઉઠ્યા પછી ૧૫ મિનિટ તાજા તડકામાં સમય વિતાવો. રાત્રે ૧૦ વાગ્યા સુધીમાં સૂઈ જાવ.",
        safetyNote: "બપોરના આકરા તડકાથી ત્વચાનું રક્ષણ કરો. ઋતુ અનુસાર કપડાં પહેરો.",
      },
    },
  },
];
