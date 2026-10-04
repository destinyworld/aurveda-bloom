import type { Category } from "./conditions";
import type { Language } from "../context/language-context";

export const categoryDinacharyaI18n: Record<
  Language,
  Record<Category, { morning: string; midday: string; evening: string }>
> = {
  en: {
    Digestive: {
      morning: "Begin with 1-2 cups of warm water or ginger-cumin infusion to kindle Agni. Avoid cold or heavy breakfasts.",
      midday: "Take your primary warm meal between 12:00 and 1:30 PM when digestive fire is strongest. Accompany with thin spiced buttermilk.",
      evening: "Opt for a light, warm dinner (moong dal soup or khichdi) at least 2-3 hours before sleep. Avoid heavy curds or raw salads at night.",
    },
    Respiratory: {
      morning: "Sip warm Tulsi-ginger-black pepper tea; take 5 minutes of mild herbal steam inhalation to clear airways.",
      midday: "Eat freshly cooked warm soups, grains, and lightly spiced vegetables; avoid cold milk, yogurt, and chilled bananas.",
      evening: "Sip warm golden turmeric milk with a pinch of black pepper; keep chest and neck warmly covered at night.",
    },
    Lifestyle: {
      morning: "Awaken near sunrise; drink 1 glass of warm lemon or fenugreek water; engage in 30 minutes of brisk movement or yoga.",
      midday: "Favor complex millets (jowar, bajra, ragi) and bitter vegetables; take a 100-step stroll after meals.",
      evening: "Conclude dinner before 7:30 PM; practice digital detox 1 hour before sleep to support metabolic recovery.",
    },
    Skin: {
      morning: "Hydrate with warm coriander-fennel water; wash face with gentle chickpea (besan) or neem herbal wash.",
      midday: "Eat fresh, cooling meals with cucumber, coriander, and sweet fruits; avoid pungent fermented pickles and fried snacks.",
      evening: "Apply pure aloe vera gel or coconut oil topically before rest; take Triphala or Manjistha tea at bedtime.",
    },
    Pain: {
      morning: "Perform warm self-massage (Abhyanga) with sesame or Mahanarayan oil followed by warm sunbathing or shower.",
      midday: "Eat warm, well-cooked meals with spices like ginger, garlic, and turmeric that kindle digestion without drying tissues.",
      evening: "Apply a warm compress or heating pad over stiff areas; drink warm milk with turmeric and nutmeg before bed.",
    },
    Women: {
      morning: "Start with warm water, soaked almonds, and raisins; practice gentle morning pelvic yoga and butterfly pose.",
      midday: "Eat balanced iron-rich lunch with greens, lentils, and beetroots; chew fennel seeds post-meal.",
      evening: "Sip warm cumin-fennel infusion; practice restorative legs-up-the-wall pose (Viparita Karani) before sleep.",
    },
    Men: {
      morning: "Hydrate deeply; take Ashwagandha with warm milk; perform 30-45 minutes of strength or endurance training.",
      midday: "Nourish with protein-dense lentils, roasted pumpkin seeds, and steamed greens; hydrate with coconut water.",
      evening: "Take an early dinner; unplug electronics 1 hour before bed to support deep REM sleep and testosterone recovery.",
    },
    Mental: {
      morning: "Spend 15 minutes in Nadi Shodhana (Alternate Nostril Breath) and Brahmari pranayama; sip warm Brahmi tea.",
      midday: "Eat lunch in peaceful silence without looking at screens; take a mindful 10-minute walk in natural daylight.",
      evening: "Practice Padabhyanga (warm oil massage on feet soles); drink warm milk with nutmeg; retire by 10:00 PM.",
    },
    General: {
      morning: "Drink warm water from a copper vessel (Ushapan); stretch gently and practice 5 minutes of deep belly breathing.",
      midday: "Eat fresh, warm seasonal lunch; avoid heavy refrigerated leftovers or iced drinks.",
      evening: "Wind down with gentle stretching and a warm digestive infusion; sleep in a cool, dark, quiet room.",
    },
  },
  hi: {
    Digestive: {
      morning: "सुबह 1-2 कप गुनगुना पानी या अदरक का पानी पीकर जठराग्नि को प्रदीप्त करें। ठंडा या गरिष्ठ नाश्ता न करें।",
      midday: "दोपहर 12 से 1:30 बजे मुख्य भोजन लें जब सूर्य व जठराग्नि चरम पर हों। साथ में भुना जीरा युक्त ताजी पतली छाछ लें।",
      evening: "सोने से 2-3 घंटे पहले हल्का सुपाच्य भोजन (मूंग दाल सूप या पतली खिचड़ी) लें। रात में दही, राजमा या कच्चा सलाद न खाएं।",
    },
    Respiratory: {
      morning: "सुबह तुलसी, सोंठ और काली मिर्च की गर्म चाय पिएं; श्वसन नलियों को साफ रखने के लिए अजवाइन की भाप लें।",
      midday: "दोपहर में गरमा-गरम सूप, दाल-चावल और हल्के मसालेदार सब्जियां लें; ठंडा दूध, दही और केला बिल्कुल न लें।",
      evening: "रात को चुटकी भर काली मिर्च युक्त हल्दी वाला गुनगुना दूध पिएं; छाती और गले को गर्म कपड़े से ढककर सोएं।",
    },
    Lifestyle: {
      morning: "सूर्योदय से पूर्व उठें; गुनगुने पानी में नींबू या मेथी का पानी पिएं; 30 मिनट तेज गति से सैर या योग करें।",
      midday: "दोपहर में मोटे अनाज (ज्वार, बाजरा, रागी) और करेला/परवल लें; भोजन के तुरंत बाद 100 कदम अवश्य टहलें।",
      evening: "शाम 7:30 बजे से पहले हल्का भोजन समाप्त करें; रात को सोने से 1 घंटा पूर्व मोबाइल-स्क्रीन से दूरी बनाएं।",
    },
    Skin: {
      morning: "सुबह धनिया-सौंफ का शीतल जल पिएं; चेहरे को बेसन या नीम के गुनगुने पानी से धोएं।",
      midday: "दोपहर में खीरा, धनिया, ककड़ी और मीठे फलों से युक्त शीतल भोजन लें; तीखे अचार व सिरके से बचें।",
      evening: "सोने से पूर्व त्वचा पर शुद्ध एलोवेरा जेल या नारियल तेल लगाएं; रात को त्रिफला या मंजिष्ठा का काढ़ा लें।",
    },
    Pain: {
      morning: "हल्के गर्म तिल या महानारायण तेल से मालिश (अभ्यंग) करें, फिर 10 मिनट हल्की धूप या गर्म पानी से स्नान लें।",
      midday: "दोपहर में सोंठ, लहसुन और हल्दी से पका हुआ गर्म सुपाच्य भोजन लें; यह नसों में वात जमने नहीं देता।",
      evening: "अकड़े हुए जोड़ों पर गर्म सेंक दें; रात को सोने से पहले हल्दी व चुटकी भर जायफल युक्त गुनगुना दूध पिएं।",
    },
    Women: {
      morning: "सुबह गुनगुने पानी के साथ 5 भीगे बादाम व 7 मुनक्का लें; तितली आसन (बद्धकोणासन) का अभ्यास करें।",
      midday: "दोपहर में पालक, चुकंदर, दाल और अनार से भरपूर पौष्टिक भोजन लें; भोजनोपरांत सौंफ चबाएं।",
      evening: "शाम को जीरा-सौंफ की चाय पिएं; सोने से पहले विपरीत करणी आसन (दीवार के सहारे पैर ऊपर) करें।",
    },
    Men: {
      morning: "भरपूर पानी पिएं; अश्वगंधा गुनगुने दूध से लें; 30-45 मिनट व्यायाम या दंड-बैठक का अभ्यास करें।",
      midday: "दोपहर में दालें, भुने कद्दू के बीज, हरी सब्जियां और ताजा नारियल पानी लें।",
      evening: "जल्दी भोजन करें; रात को स्क्रीन से दूर रहें ताकि गहरी नींद में टेस्टोस्टेरोन और ओजस का पुनर्भरण हो सके।",
    },
    Mental: {
      morning: "15 मिनट अनुलोम-विलोम व भ्रामरी प्राणायाम करें; ब्राह्मी-शंखपुष्पी की गुनगुनी चाय पिएं।",
      midday: "शांत मन से बिना मोबाइल देखे भोजन करें; दोपहर में 10 मिनट ताजी खुली हवा में टहलें।",
      evening: "रात को पैरों के तलवों पर तिल तेल मालिश (पादभ्यंग) करें; चुटकी भर जायफल वाला दूध पीकर 10 बजे तक सो जाएं।",
    },
    General: {
      morning: "तांबे के बर्तन में रखा पानी (उषापान) पिएं; हल्का व्यायाम व 5 मिनट गहरी सांसों का अभ्यास करें।",
      midday: "ताजा, गर्म और मौसमी भोजन करें; फ्रिज का बासी खाना या बर्फ का ठंडा पानी न लें।",
      evening: "हल्की सौंफ-अजवाइन की चाय पिएं; शांत व अंधेरे कमरे में समय पर विश्राम करें।",
    },
  },
  gu: {
    Digestive: {
      morning: "સવારે ૧-૨ ગ્લાસ નવશેકું પાણી કે આદુનું પાણી પીને જઠરાગ્નિ તેજ કરો. ઠંડો કે ભારે નાસ્તો ન કરવો.",
      midday: "બપોરે ૧૨ થી ૧:૩૦ વચ્ચે મુખ્ય ભોજન લેવું જ્યારે પાચન અગ્નિ પ્રબળ હોય. સાથે શેકેલા જીરાવાળી તાજી મોળી છાશ પીવી.",
      evening: "સૂવાના ૨-૩ કલાક પહેલાં મગની દાળનો સૂપ કે ખીચડી જેવો હળવો ખોરાક લેવો. રાત્રે દહીં, કઠોળ કે કાચું સલાડ ન ખાવું.",
    },
    Respiratory: {
      morning: "સવારે તુલસી-સૂંઠ-મરીની ગરમ ચા પીવી; શ્વાસનળી સાફ કરવા અજમાનો નાસ લેવો.",
      midday: "બપોરે ગરમ સૂપ, દાળ-ભાત અને હળવા મસાલાવાળા શાક લેવા; ઠંડું દૂધ, દહીં કે કેળાં ન ખાવા.",
      evening: "રાત્રે ચપટી મરીવાળું હળદરવાળું ગરમ દૂધ પીવું; છાતી અને ગળાને હૂંફાળા કપડાથી ઢાંકીને સૂવું.",
    },
    Lifestyle: {
      morning: "સૂર્યોદય પહેલાં ઊઠવું; નવશેકા પાણીમાં લીંબુ અથવા મેથીનું પાણી પીવું; ૩૦ મિનિટ કસરત કે ચાલવું.",
      midday: "બપોરે જુવાર, બાજરી, રાગી જેવા ધાન્ય અને કારેલાં-પરવળ લેવા; જમ્યા પછી ૧૦૦ ડગલાં અચૂક ચાલવું.",
      evening: "સાંજે ૭:૩૦ પહેલાં હળવું ભોજન પૂરું કરવું; રાત્રે સૂવાના ૧ કલાક પહેલાં મોબાઈલ-ટીવી બંધ કરવા.",
    },
    Skin: {
      morning: "સવારે ધાણા-વરિયાળીનું પાણી પીવું; ચહેરો ચણાના લોટ કે લીમડાના પાણીથી ધોવો.",
      midday: "બપોરે કાકડી, કોથમીર અને મીઠા ફળોવાળો ખોરાક લેવો; તીખા અથાણાં અને આથેલી ચીજો ટાળવી.",
      evening: "સૂતાં પહેલાં ચામડી પર એલોવેરા જેલ કે કોપરેલ લગાવવું; રાત્રે ત્રિફળા અથવા મંજીષ્ઠાનો ઉકાળો લેવો.",
    },
    Pain: {
      morning: "હૂંફાળા તલ કે મહાનாராயણ તેલથી માલિશ કરવી, પછી ૧૦ મિનિટ કુમળા તડકામાં બેસવું અથવા ગરમ સ્નાન કરવું.",
      midday: "બપોરે સૂંઠ, લસણ અને હળદરવાળો ગરમ પૌષ્ટિક ખોરાક લેવો જેથી વાયુ શાંત રહે.",
      evening: "દુખતા સાંધા પર ગરમ શેક કરવો; રાત્રે હળદર અને ચપટી જાયફળવાળું ગરમ દૂધ પીવું.",
    },
    Women: {
      morning: "સવારે નવશેકા પાણી સાથે ૫ પલાળેલા બદામ અને મુનક્કા લેવા; પતંગિયા આસન (ભદ્રાસન) કરવું.",
      midday: "બપોરે પાલક, બીટ, દાળ અને દાડમવાળો પૌષ્ટિક ખોરાક લેવો; જમ્યા પછી વરિયાળી ચાવવી.",
      evening: "સાંજે જીરું-વરિયાળીની ચા પીવી; સૂતાં પહેલાં ૫ મિનિટ દીવાલના ટેકે પગ ઊંચા રાખી આરામ કરવો.",
    },
    Men: {
      morning: "પૂરતું પાણી પીવું; અશ્વગંધા ગરમ દૂધ સાથે લેવી; ૩૦-૪૫ મિનિટ કસરત કે પ્રાણાયામ કરવા.",
      midday: "બપોરે દાળ, શેકેલા કોળાના બીજ, લીલા શાકભાજી અને તાજું નાળિયેર પાણી લેવું.",
      evening: "વહેલું જમવું; રાત્રે મોબાઇલથી દૂર રહેવું જેથી ગાઢ ઊંઘમાં શારીરિક શક્તિનો પુનઃસંચય થાય.",
    },
    Mental: {
      morning: "૧૫ મિનિટ અનુલોમ-વિલોમ અને ભ્રામરી પ્રાણાયામ કરવા; બ્રાહ્મી-શંખપુષ્પીની હર્બલ ચા પીવી.",
      midday: "શાંતિથી મોબાઈલ જોયા વગર જમવું; બપોરે ૧૦ મિનિટ તાજી હવામાં લટાર મારવી.",
      evening: "રાત્રે પગના તળિયે તેલ ઘસવું (પાદાભ્યંગ); ચપટી જાયફળવાળું દૂધ પી ૧૦ વાગ્યા સુધીમાં સૂઈ જવું.",
    },
    General: {
      morning: "તાંબાના વાસણનું પાણી (ઉષાપાન) પીવું; હળવી કસરત અને ૫ મિનિટ ઊંડા શ્વાસ લેવા.",
      midday: "તાજું, ગરમ અને મોસમી ભોજન લેવું; ફ્રિજનું વાસી જમણ કે ઠંડું પાણી ન લેવું.",
      evening: "વરિયાળી-અજમાની હર્બલ ચા પીવી; શાંત ઓરડામાં સમયસર સૂઈ જવું.",
    },
  },
};

export const categoryDietaryI18n: Record<
  Language,
  Record<Category, { favor: string[]; avoid: string[] }>
> = {
  en: {
    Digestive: {
      favor: ["Warm cooked moong dal", "Pomegranate & stewed apples", "Thin buttermilk with roasted cumin", "Warm ghee with steamed vegetables"],
      avoid: ["Cold iced drinks & smoothies", "Deep-fried & heavy oily foods", "Excess raw salads after sundown", "Refined flour (maida) & packaged snacks"],
    },
    Respiratory: {
      favor: ["Tulsi & ginger herbal tea", "Pure honey with black pepper", "Warm light vegetable soups", "Steamed greens with roasted cumin"],
      avoid: ["Cold chilled dairy & ice cream", "Cold bananas & citrus at night", "Exposure to chilly wind & dust", "Heavy sweets & oily preparations"],
    },
    Lifestyle: {
      favor: ["Barley, millets & quinoa", "Bitter gourd, methi & amla", "Triphala water at night", "Raw soaked almonds & walnuts"],
      avoid: ["Refined sugar & soda beverages", "Deep fried foods & trans-fats", "Daytime naps after meals", "Refined flour (maida) & pastries"],
    },
    Skin: {
      favor: ["Fresh coconut water & amla juice", "Coriander, cucumber & bottle gourd", "Pure cow's ghee in small moderation", "Pomegranates & sweet grapes"],
      avoid: ["Excess red chili, garlic & vinegar", "Fermented foods & sour curd", "Synthetic cosmetic fragrances", "Smoking & alcohol"],
    },
    Pain: {
      favor: ["Warm sesame oil preparations", "Garlic, ginger & turmeric seasonings", "Cooked moong dal with cumin & ghee", "Warm nutritious vegetable broths"],
      avoid: ["Cold dry snacks (chips, crackers)", "Heavy beans (rajma, chole) at night", "Direct exposure to cold AC drafts", "Excessive prolonged standing or sitting"],
    },
    Women: {
      favor: ["Shatavari with warm milk", "Soaked black raisins & dates", "Sesame seeds & jaggery in moderation", "Cooked beets, spinach & pomegranates"],
      avoid: ["Excessive coffee, tea & energy drinks", "Skipping meals & crash fasting", "Cold refrigerated food during menses", "Extreme physical overexertion during cycle"],
    },
    Men: {
      favor: ["Ashwagandha & Safed Musli", "Pumpkin & sunflower seeds", "Soaked almonds, walnuts & figs", "Amla juice & cow's ghee"],
      avoid: ["Excessive alcohol & smoking", "Late-night heavy snacking", "Chronic unmanaged work stress", "Processed meats & deep-fried takeout"],
    },
    Mental: {
      favor: ["Brahmi & Shankhpushpi", "Soaked walnuts & almonds", "Warm spiced milk with nutmeg", "Chamomile & rose herbal tea"],
      avoid: ["Caffeine after 2:00 PM", "Late night stimulating screen use", "Consuming negative media before sleep", "Skipping meals & irregular sleep hours"],
    },
    General: {
      favor: ["Fresh seasonal whole foods", "Cooked moong dal & basmati rice", "Amla, pomegranate & fresh papaya", "Pure cow's ghee & cumin seasoning"],
      avoid: ["Ultra-processed packaged foods", "Ice-cold refrigerated drinks", "Eating late past 9:00 PM", "Suppression of natural bodily urges"],
    },
  },
  hi: {
    Digestive: {
      favor: ["पकी हुई मूंग की दाल", "अनार व पके हुए मीठे फल", "भुना जीरा युक्त ताजी पतली छाछ", "सब्जियों में थोड़ा देसी गाय का घी"],
      avoid: ["बर्फ का ठंडा पानी व स्मूदी", "अधिक तला-भुना गरिष्ठ भोजन", "सूर्यास्त के बाद कच्चा सलाद", "मैदा, जंक फूड व बासी भोजन"],
    },
    Respiratory: {
      favor: ["तुलसी व अदरक की हर्बल चाय", "शहद के साथ पिसी काली मिर्च", "गरमा-गरम मूंग व सब्जी सूप", "भुने जीरे से बनी हरी सब्जियां"],
      avoid: ["फ्रिज का ठंडा दूध, दही व आइसक्रीम", "रात को केला व खट्टे फल", "ठंडी हवा व धूल का सीधा संपर्क", "भारी मिठाइयां व तैलीय भोजन"],
    },
    Lifestyle: {
      favor: ["जौ, बाजरा व साबुत मूंग", "करेला, मेथी, परवल व आंवला", "रात को गुनगुने पानी से त्रिफला", "भीगे हुए बादाम व अखरोट"],
      avoid: ["सफेद चीनी व कोल्ड ड्रिंक्स", "समोसे, कचौड़ी व तली चीजें", "भोजन के तुरंत बाद दिन में सोना", "मैदा, बेकरी व डिब्बाबंद खाद्य"],
    },
    Skin: {
      favor: ["ताजा नारियल पानी व आंवला रस", "धनिया, खीरा, लौकी व तोरई", "सब्जियों में थोड़ा शुद्ध गाय का घी", "मीठे अनार व मुनक्का"],
      avoid: ["अत्यधिक लाल मिर्च, सिरका व लहसुन", "खट्टा दही व बासी फर्मेंटेड भोजन", "रासायनिक व खुशबूदार कॉस्मेटिक्स", "धूम्रपान व मदिरापान"],
    },
    Pain: {
      favor: ["तिल का तेल व मेथी के दाने", "लहसुन, सोंठ व हल्दी के व्यंजन", "देसी घी युक्त गर्म मूंग दाल", "गर्म सूप व पौष्टिक दलिया"],
      avoid: ["सूखे कुरकुरे नमकीन व चिप्स", "रात में राजमा, छोले व उड़द", "सीधे एसी की ठंडी हवा का झोंका", "लगातार एक ही मुद्रा में बैठे रहना"],
    },
    Women: {
      favor: ["शतावरी चूर्ण गुनगुने दूध के साथ", "भीगी हुई काली मुनक्का व खजूर", "तिल व पुराना देसी गुड़", "चुकंदर, पालक व ताजे अनार"],
      avoid: ["अधिक चाय, कॉफी व एनर्जी ड्रिंक्स", "समय पर भोजन न करना व कठिन उपवास", "मासिक धर्म में ठंडा व बासी भोजन", "माहवारी के दिनों में अत्यधिक भारी श्रम"],
    },
    Men: {
      favor: ["अश्वगंधा व सफेद मूसली", "कद्दू व सूरजमुखी के बीज", "भीगे बादाम, अखरोट व अंजीर", "आंवला स्वरस व देसी गाय का घी"],
      avoid: ["धूम्रपान व अत्यधिक शराब", "देर रात भारी स्नैक्स खाना", "लगातार तनाव व नींद की कमी", "प्रोसेस्ड मीट व तला-भुना जंक फूड"],
    },
    Mental: {
      favor: ["ब्राह्मी व शंखपुष्पी सीरप", "भीगे हुए अखरोट व बादाम", "जायफल युक्त गुनगुना गाय का दूध", "गुलाब व कैमोमाइल की चाय"],
      avoid: ["दोपहर 2 बजे के बाद चाय/कॉफी", "देर रात तक स्क्रीन देखना", "सोने से पूर्व तनावपूर्ण खबरें देखना", "अनियमित समय पर सोना व जागना"],
    },
    General: {
      favor: ["ताजे मौसमी फल व सब्जियां", "पकी मूंग दाल व बासमती चावल", "आंवला, अनार व पका पपीता", "शुद्ध गाय का घी व जीरा छौंक"],
      avoid: ["अत्यधिक प्रोसेस्ड पैकेटबंद भोजन", "फ्रिज का बर्फ जैसा ठंडा पानी", "रात 9 बजे के बाद भोजन करना", "प्राकृतिक वेगों (प्यास, मल, मूत्र) को रोकना"],
    },
  },
  gu: {
    Digestive: {
      favor: ["રાંધેલી મગની દાળ", "દાડમ અને બાફેલા સફરજન", "શેકેલા જીરાવાળી તાજી છાશ", "શાકભાજીમાં થોડું ગાયનું ઘી"],
      avoid: ["ફ્રીજનું બરફવાળું ઠંડું પાણી", "વધુ પડતું તળેલું-ચીકણું જમણ", "સાંજ પછી કાચું સલાડ", "મેંદો, જંકફૂડ અને વાસી ખોરાક"],
    },
    Respiratory: {
      favor: ["તુલસી અને આદુની હર્બલ ચા", "મધ સાથે કાળા મરીનું ચાટણ", "ગરમ વેજીટેબલ સૂપ", "શેકેલા જીરા સાથે બાફેલી ભાજી"],
      avoid: ["ઠંડું દૂધ, દહીં અને આઈસ્ક્રીમ", "રાત્રે કેળાં કે ખાટા ફળો", "ઠંડો પવન અને ધૂળની એલર્જી", "ભારે મીઠાઈ અને તળેલી વાનગીઓ"],
    },
    Lifestyle: {
      favor: ["જવ, બાજરી અને આખા મગ", "કારેલાં, મેથી, પરવળ અને આમળાં", "રાત્રે નવશેકા પાણી સાથે ત્રિફળા", "પલાળેલા બદામ અને અખરોટ"],
      avoid: ["સફેદ ખાંડ અને કોલ્ડ્રિંક્સ", "તળેલું ફરસાણ અને જંકફૂડ", "જમ્યા પછી દિવસની ઊંઘ", "મેંદો, બેકરી અને પેકેટવાળી વસ્તુઓ"],
    },
    Skin: {
      favor: ["તાજું નાળિયેર પાણી અને આમળાંનો રસ", "ધાણા, કાકડી, દૂધી અને તુરિયાં", "શાકમાં થોડું શુદ્ધ ગાયનું ઘી", "મીઠાં દાડમ અને કાળી દ્રાક્ષ"],
      avoid: ["વધુ પડતાં લાલ મરચાં, વિનેગર અને લસણ", "ખાટું દહીં અને આથેલી વાનગીઓ", "કેમિકલવાળા સુગંધી ક્રીમ", "ધૂમ્રપાન અને દારૂ"],
    },
    Pain: {
      favor: ["તલનું તેલ અને મેથીના દાણા", "લસણ, સૂંઠ અને હળદરવાળા શાક", "ગાયના ઘીવાળી ગરમ મગની દાળ", "ગરમ પૌષ્ટિક સૂપ અને રાબ"],
      avoid: ["સૂકા કુરકુરે અને ફરસાણ", "રાત્રે રાજમા, છોલે કે અડદ", "સીધો એસીનો ઠંડો પવન", "એકધારી બેસી કે ઊભા રહેવાની ટેવ"],
    },
    Women: {
      favor: ["શતાવરી દૂધ સાથે", "પલાળેલી કાળી દ્રાક્ષ અને ખજૂર", "તલ અને દેશી ગોળ", "બીટ, પાલક અને દાડમ"],
      avoid: ["વધુ ચા, કોફી અને એનર્જી ડ્રિંક્સ", "ભૂખ્યા રહેવું કે અતિશય ઉપવાસ", "માસિક દરમિયાન ઠંડો-વાસી ખોરાક", "માસિકના દિવસોમાં વધુ પડતો શ્રમ"],
    },
    Men: {
      favor: ["અશ્વગંધા અને સફેદ મૂસળી", "કોળાના બીજ અને સૂર્યમુખી બીજ", "પલાળેલા બદામ, અખરોટ અને અંજીર", "આમળાંનો રસ અને ગાયનું ઘી"],
      avoid: ["ધૂમ્રપાન અને આલ્કોહોલ", "મોડી રાત્રે ભારે નાસ્તો", "સતત તણાવ અને ઊંઘનો અભાવ", "જંકફૂડ અને વધુ પડતી ચરબીવાળો ખોરાક"],
    },
    Mental: {
      favor: ["બ્રાહ્મી અને શંખપુષ્પી", "પલાળેલા અખરોટ અને બદામ", "જાયફળવાળું ગાયનું ગરમ દૂધ", "ગુલાબ અને કેમોમાઈલની ચા"],
      avoid: ["બપોર પછી ચા કે કોફી", "મોડી રાત સુધી મોબાઈલ વાપરવો", "સૂતાં પહેલાં ચિંતા કરાવતા સમાચારો", "અનિયમિત ઊંઘ અને ખાવાના સમય"],
    },
    General: {
      favor: ["તાજા મોસમી ફળો અને શાક", "રાંધેલી મગની દાળ અને ભાત", "આમળાં, દાડમ અને પાકું પપૈયું", "ગાયનું ઘી અને જીરાનો વઘાર"],
      avoid: ["પેકેટવાળા પ્રોસેસ્ડ નાસ્તા", "ફ્રિજનું બરફ જેવું ઠંડું પાણી", "રાત્રે ૯ વાગ્યા પછી જમવું", "કુદરતી હાજત કે તરસને રોકી રાખવી"],
    },
  },
};

export const doshaLabelsI18n: Record<Language, Record<string, string>> = {
  en: {
    vata: "Vata Pacifying (Air & Space)",
    pitta: "Pitta Pacifying (Fire & Water)",
    kapha: "Kapha Invigorating (Earth & Water)",
    tridosha: "Tridoshic Harmonization (Vata · Pitta · Kapha)",
  },
  hi: {
    vata: "वात शामक (वायु व आकाश संतुलन)",
    pitta: "पित्त शामक (अग्नि व जल संतुलन)",
    kapha: "कफ शामक (पृथ्वी व जल संतुलन)",
    tridosha: "त्रिदोष संतुलन (वात · पित्त · कफ समता)",
  },
  gu: {
    vata: "વાયુ શામક (વાયુ અને આકાશ સંતુલન)",
    pitta: "પિત્ત શામક (અગ્નિ અને જળ સંતુલન)",
    kapha: "કફ શામક (પૃથ્વી અને જળ સંતુલન)",
    tridosha: "ત્રિદોષ સંતુલન (વાયુ · પિત્ત · કફ સમાનતા)",
  },
};

export const thermalLabelsI18n: Record<Language, Record<string, string>> = {
  en: {
    warm: "Warm, Grounding & Nourishing",
    cool: "Cooling, Soothing & Anti-inflammatory",
    hot: "Warming, Expectorant & Lightening",
    adaptogenic: "Balancing & Adaptogenic",
  },
  hi: {
    warm: "उष्ण, स्थिर व पोषक (वातनाशक)",
    cool: "शीतल, शांत व पित्तशामक",
    hot: "उष्ण, कफघ्न व दीपन (कफनाशक)",
    adaptogenic: "संतुलनकारी व त्रिदोष रसायन",
  },
  gu: {
    warm: "હૂંફાળું, સ્થિર અને પૌષ્ટિક (વાયુનાશક)",
    cool: "ઠંડું, શાંત અને પિત્તશામક",
    hot: "ગરમ, કફનાશક અને હળવું",
    adaptogenic: "સંતુલનકારી અને ત્રિદોષ રસાયણ",
  },
};

export const categoryNamesI18n: Record<Language, Record<string, string>> = {
  en: {
    Digestive: "Digestive Wellness",
    Respiratory: "Respiratory Health",
    Lifestyle: "Lifestyle & Metabolic",
    Skin: "Skin & Dermatology",
    Pain: "Musculoskeletal & Pain",
    Women: "Women’s Health",
    Men: "Men’s Health",
    Mental: "Mental & Emotional",
    General: "General Health",
    AiSynthesis: "AI Holistic Synthesis",
  },
  hi: {
    Digestive: "पाचन स्वास्थ्य",
    Respiratory: "श्वसन तंत्र स्वास्थ्य",
    Lifestyle: "जीवनशैली व चयापचय",
    Skin: "त्वचा एवं रक्त शुद्धि",
    Pain: "जोड़ व दर्द निवारण",
    Women: "महिला समग्र स्वास्थ्य",
    Men: "पुरुष समग्र स्वास्थ्य",
    Mental: "मानसिक शांति व संतुलन",
    General: "समग्र सामान्य स्वास्थ्य",
    AiSynthesis: "AI समग्र आयुर्वेदिक विश्लेषण",
  },
  gu: {
    Digestive: "પાચન સ્વાસ્થ્ય",
    Respiratory: "શ્વસન તંત્ર સ્વાસ્થ્ય",
    Lifestyle: "લાઈફસ્ટાઈલ અને ચયાપચય",
    Skin: "ચામડી અને લોહી શુદ્ધિ",
    Pain: "સાંધા અને દર્દ નિવારણ",
    Women: "મહિલા સમગ્ર સ્વાસ્થ્ય",
    Men: "પુરુષ સમગ્ર સ્વાસ્થ્ય",
    Mental: "માનસિક શાંતિ અને સંતુલન",
    General: "સમગ્ર સામાન્ય સ્વાસ્થ્ય",
    AiSynthesis: "AI સમગ્ર આયુર્વેદિક વિશ્લેષણ",
  },
};

export interface CustomAiGuidanceData {
  title: Record<Language, string>;
  category: Record<Language, string>;
  doshaKey: "vata" | "pitta" | "kapha" | "tridosha";
  thermalKey: "warm" | "cool" | "hot" | "adaptogenic";
  perspective: Record<Language, string>;
  remedyTips: Record<Language, string[]>;
  dinacharya: Record<Language, { morning: string; midday: string; evening: string }>;
  dietary: Record<Language, { favor: string[]; avoid: string[] }>;
  safety: Record<Language, string>;
}

export const customAiKnowledgeBase: Record<string, CustomAiGuidanceData> = {
  thyroid: {
    title: {
      en: "Thyroid & Metabolic Hormonal Balance",
      hi: "थायरॉइड एवं चयापचय हार्मोनल संतुलन",
      gu: "થાઇરોઇડ અને હોર્મોનલ ચયાપચય સંતુલન",
    },
    category: {
      en: "AI Holistic Synthesis",
      hi: "AI समग्र आयुर्वेदिक विश्लेषण",
      gu: "AI સમગ્ર આયુર્વેદિક વિશ્લેષણ",
    },
    doshaKey: "kapha",
    thermalKey: "warm",
    perspective: {
      en: "Ayurveda understands thyroid dysfunction through Kantha Srotas (throat channels), Agnimandya (impaired cellular metabolism), and Medo Dhatu vitiation under Kapha-Vata dominance.",
      hi: "आयुर्वेद में थायरॉइड असंतुलन को जठराग्नि व धातु अग्नि की मंदता, मेद धातु की वृद्धि तथा कंठ स्त्रोतस में कफ-वात के अवरोध के रूप में देखा जाता है।",
      gu: "આયુર્વેદમાં થાઈરોઈડની તકલીફને જઠરાગ્નિની મંદતા, મેદ ધાતુની વૃદ્ધિ અને ગળાના પોલાણમાં કફ-વાયુના અવરોધ તરીકે સમજવામાં આવે છે.",
    },
    remedyTips: {
      en: [
        "Kanchanar Guggulu & Warm Water: Classical formulation that clears glandular swelling and supports normal thyroid function.",
        "Overnight Coriander Seed Infusion: Soak 2 tsp coriander seeds in 1 glass of water overnight; boil down to half in the morning and sip warm.",
        "Ashwagandha & Warm Cow's Milk: 1/2 tsp pure Ashwagandha powder in warm milk at bedtime supports endocrine and cortisol modulation.",
      ],
      hi: [
        "कांचनार गुग्गुलु व गुनगुना जल: यह ग्रंथियों की सूजन को साफ करता है और थायरॉइड की कार्यप्रणाली को स्वाभाविक बनाता है।",
        "साबुत धनिया का सुबह काढ़ा: 2 चम्मच साबुत धनिया रातभर 1 गिलास पानी में भिगोएं; सुबह उबालकर आधा कर लें और खाली पेट पिएं।",
        "अश्वगंधा व गुनगुना गाय का दूध: रात को आधा चम्मच अश्वगंधा दूध के साथ लेने से थायरॉइड हार्मोन और तनाव नियंत्रित रहता है।",
      ],
      gu: [
        "કાંચનાર ગૂગળ નવશેકા પાણી સાથે: ગળાની ગ્રંથિઓની સોજો ઉતારી થાઇરોઇડનું કાર્ય કુદરતી બનાવે છે.",
        "આખા ધાણાનો સવારનો ઉકાળો: ૨ ચમચી આખા ધાણા રાત્રે પલાળી સવારે ઉકાળીને ગાળી પીવાથી થાઇરોઇડમાં ખૂબ લાભ થાય છે.",
        "અશ્વગંધા અને ગાયનું દૂધ: રાત્રે અશ્વગંધા દૂધમાં પીવાથી હોર્મોન્સ સંતુલિત રહે છે અને નબળાઈ દૂર થાય છે.",
      ],
    },
    dinacharya: {
      en: {
        morning: "Practice 15 minutes of Ujjayi pranayama and Sarvangasana (shoulder stand) to stimulate throat circulation.",
        midday: "Eat warm whole-grain lunch with cooked seasonal greens, pumpkin seeds, and pinch of iodized rock salt.",
        evening: "Gentle neck stretching; take light dinner before 7:30 PM; massage neck with warm sesame oil.",
      },
      hi: {
        morning: "15 मिनट उज्जायी प्राणायाम और सर्वांगासन करें जिससे गले की थायरॉइड ग्रंथि में रक्त संचार तेज हो।",
        midday: "दोपहर में साबुत अनाज, कद्दू के बीज, हरी सब्जियां और सेंधा नमक युक्त सुपाच्य भोजन लें।",
        evening: "गले पर हल्के गर्म तिल के तेल से मालिश करें; रात का हल्का भोजन 7:30 बजे से पहले समाप्त करें।",
      },
      gu: {
        morning: "૧૫ મિનિટ ઉજ્જયી પ્રાણાયામ અને સર્વાંગાસન કરવું જેથી ગળાની ગ્રંથિમાં લોહીનું પરિભ્રમણ વધે.",
        midday: "બપોરે આખા ધાન્ય, કોળાના બીજ અને લીલા શાકભાજીવાળો હળવો પૌષ્ટિક ખોરાક લેવો.",
        evening: "ગળા પર હૂંફાળા તલના તેલની માલિશ કરવી; રાત્રે ૭:૩૦ પહેલાં હળવું ભોજન લેવું.",
      },
    },
    dietary: {
      en: {
        favor: ["Roasted coriander seeds", "Pumpkin seeds (natural zinc)", "Cooked moong dal & barley", "Amla & pure cow's ghee"],
        avoid: ["Excess raw cabbage, cauliflower & soy", "Refined sugar & cold desserts", "Deep-fried gluten-heavy snacks", "Ice water with meals"],
      },
      hi: {
        favor: ["भुना साबुत धनिया व सोंठ", "कद्दू के बीज (प्राकृतिक जिंक)", "पकी मूंग दाल व जौ की रोटी", "आंवला व गाय का शुद्ध घी"],
        avoid: ["कच्ची पत्तागोभी, फूलगोभी व सोया", "सफेद चीनी व कोल्ड ड्रिंक्स", "मैदा, पेस्ट्री व डिब्बाबंद स्नैक्स", "भोजन के साथ ठंडा पानी"],
      },
      gu: {
        favor: ["શેકેલા ધાણા અને સૂંઠ", "કોળાના બીજ (કુદરતી ઝીંક)", "રાંધેલી મગની દાળ અને જવની રોટલી", "આમળાં અને ગાયનું શુદ્ધ ઘી"],
        avoid: ["કાચી કોબીજ, ફ્લાવર અને સોયાબીન", "સફેદ ખાંડ અને ઠંડા પીણાં", "મેંદો, જંકફૂડ અને તળેલી વાનગીઓ", "જમતી વખતે ફ્રિજનું પાણી"],
      },
    },
    safety: {
      en: "Do not alter or discontinue prescribed thyroid replacement medications (e.g. Levothyroxine) without physician supervision. Monitor TSH levels periodically.",
      hi: "चिकित्सक द्वारा निर्धारित थायरॉइड की दवाएं अचानक बंद न करें। समय-समय पर TSH रक्त जांच अवश्य कराएं।",
      gu: "ડૉક્ટર દ્વારા આપવામાં આવેલી થાઇરોઇડની દવાઓ બંધ ન કરવી. સમયાંતરે લોહીમાં TSH નો રિપોર્ટ કરાવતા રહેવું.",
    },
  },
  varicose: {
    title: {
      en: "Varicose Veins & Venous Circulation",
      hi: "वेरिकोज वेन्स एवं शिरा रक्त संचार",
      gu: "વેરિકોઝ વેઇન્સ અને નસોનું રક્ત પરિભ્રમણ",
    },
    category: {
      en: "AI Holistic Synthesis",
      hi: "AI समग्र आयुर्वेदिक विश्लेषण",
      gu: "AI સમગ્ર આયુર્વેદિક વિશ્લેષણ",
    },
    doshaKey: "vata",
    thermalKey: "warm",
    perspective: {
      en: "Ayurveda classifies varicose veins under Siragranthi, where aggravated Vyana Vata distorts the elastic tone of blood-carrying vessels (Raktavaha Srotas).",
      hi: "आयुर्वेद में वेरिकोज वेन्स को 'सिराग्रंथि' कहा जाता है, जहां प्रकुपित व्यान वात नसों की दीवारों को कमजोर व विकृत कर देता है।",
      gu: "આયુર્વેદમાં વેરિકોઝ વેઇન્સને 'શિરાગ્રંથિ' કહેવાય છે, જેમાં વધેલો વ્યાન વાયુ લોહીની નસોને ફૂલાવીને વાંકીચૂંકી કરી દે છે.",
    },
    remedyTips: {
      en: [
        "Gentle Upward Sesame Oil Anointment: Lightly apply warm sesame or Sahacharadi oil from ankles toward thighs (never massage forcefully over bulging veins).",
        "Triphala & Guggulu at Bedtime: Take 1 tablet of Kaishore Guggulu or 1/2 tsp Triphala with warm water to clear venous toxin stagnation.",
        "Leg Elevation Therapy (Viparita Karani): Rest on your back with legs elevated at 45-90 degrees against a wall for 15 minutes twice daily.",
      ],
      hi: [
        "पैरों पर नीचे से ऊपर तेल लेपन: हल्के गुनगुने तिल या सहचरादि तेल को पंजों से घुटनों की ओर ऊपर की दिशा में लगाएं (उभरी नसों पर दबाव न डालें)।",
        "कैशोर गुग्गुलु व त्रिफला: रात को गुनगुने पानी से 1 गोली कैशोर गुग्गुलु लें; यह नसों की सूजन और रक्त की अशुद्धि को मिटाता है।",
        "दीवार के सहारे पैर ऊपर उठाना: दिन में दो बार 15 मिनट दीवार के सहारे पैर ऊपर रखकर लेटें, इससे पैरों में रक्त का जमाव कम होता है।",
      ],
      gu: [
        "પગ પર નીચેથી ઉપર તેલ ચોળવું: હૂંફાળા તલના તેલને પાનીથી ઘૂંટણ તરફ ઉપરની દિશામાં હળવેથી લગાવવું (ફૂલેલી નસો દબાવવી નહીં).",
        "કૈશોર ગૂગળ અને ત્રિફળા: રાત્રે ગરમ પાણી સાથે કૈશોર ગૂગળ લેવાથી નસોનો સોજો ઉતરે છે.",
        "દીવાલના ટેકે પગ ઊંચા રાખવા: દિવસમાં બે વાર ૧૫ મિનિટ દીવાલ પર પગ ઊંચા રાખી સૂવાથી પગનું લોહી પાછું ફરે છે.",
      ],
    },
    dinacharya: {
      en: {
        morning: "Avoid standing stationary for long periods; perform ankle rotations and calf flexing before getting out of bed.",
        midday: "Take a walking break every 45 minutes; wear graduated compression stockings if recommended.",
        evening: "15 minutes of leg elevation; soak feet in warm water with a handful of rock salt before sleeping.",
      },
      hi: {
        morning: "बिस्तर से उठने से पहले पंजों को गोल घुमाएं; एक ही जगह लंबे समय तक खड़े रहने से बचें।",
        midday: "हर 45 मिनट बाद 2 मिनट टहलें; कुर्सी पर बैठते समय पैरों को मोड़कर न बैठें।",
        evening: "15 मिनट पैर ऊपर रखकर विश्राम करें; सोने से पहले गुनगुने नमक के पानी में पैर रखें।",
      },
      gu: {
        morning: "સવારે ઊઠતાં પહેલાં પગના પંજા ગોળાકાર ફેરવવા; એક જગ્યાએ લાંબો સમય ઊભા ન રહેવું.",
        midday: "દર ૪૫ મિનિટે થોડું ચાલવું; ખુરશી પર બેસતી વખતે પગ પર પગ ન ચડાવવો.",
        evening: "૧૫ મિનિટ પગ ઊંચા રાખવા; સૂતાં પહેલાં નવશેકા મીઠાવાળા પાણીમાં પગ બોળી રાખવા.",
      },
    },
    dietary: {
      en: {
        favor: ["Bioflavonoid-rich berries & pomegranates", "High-fiber oats, barley & moong", "Fresh ginger & garlic in food", "Hydrating warm infusions"],
        avoid: ["Constipation-inducing dry foods", "Excess salt & refined sodium", "Deep-fried & heavy oily foods", "Alcohol & tobacco"],
      },
      hi: {
        favor: ["अनार, पपीता व ताजे जामुन", "फाइबर युक्त ओट्स, जौ व मूंग दाल", "लहसुन, अदरक व हल्दी युक्त आहार", "पर्याप्त गुनगुना पानी"],
        avoid: ["कब्ज करने वाला सूखा भोजन", "अत्यधिक नमक व नमकीन", "तली-भुनी भारी चीजें", "धूम्रपान व शराब"],
      },
      gu: {
        favor: ["દાડમ, પપૈયું અને તાજાં ફળો", "ફાઇબરવાળા જવ, મગ અને શાક", "લસણ, આદુ અને હળદર", "પૂરતું હૂંફાળું પાણી"],
        avoid: ["કબજિયાત કરે તેવા સૂકા નાસ્તા", "વધુ પડતું મીઠું અને નમકીન", "તળેલું-ચીકણું ફરસાણ", "તમાકુ અને દારૂ"],
      },
    },
    safety: {
      en: "Seek immediate medical care for severe pain, sudden leg swelling, skin ulcers, bleeding veins, or suspected deep vein thrombosis (DVT).",
      hi: "अचानक पैर में तेज दर्द, अत्यधिक सूजन, नस फटना या त्वचा पर घाव होने पर तुरंत संवहनी रोग विशेषज्ञ (सर्जन) से संपर्क करें।",
      gu: "પગમાં અચાનક અસહ્ય દુખાવો, સોજો કે ચામડી પર ચાંદા પડે તો તાત્કાલિક સ્પેશિયાલિસ્ટ ડૉક્ટરને બતાવવું.",
    },
  },
  vertigo: {
    title: {
      en: "Vertigo & Vestibular Balance",
      hi: "वर्टिगो, चक्कर आना एवं संतुलन",
      gu: "વર્ટિગો, ચક્કર આવવા અને સંતુલન",
    },
    category: {
      en: "AI Holistic Synthesis",
      hi: "AI समग्र आयुर्वेदिक विश्लेषण",
      gu: "AI સમગ્ર આયુર્વેદિક વિશ્લેષણ",
    },
    doshaKey: "vata",
    thermalKey: "warm",
    perspective: {
      en: "Ayurveda describes vertigo as 'Bhrama', caused by aggravated Vata disturbing the Prana channels in the head, often combined with aggravated Pitta.",
      hi: "आयुर्वेद में चक्कर आने और सिर घूमने को 'भ्रम' कहा जाता है, जो सिर में प्राण वात और पित्त के असंतुलन से उत्पन्न होता है।",
      gu: "આયુર્વેદમાં ચક્કર આવવાને 'ભ્રમ' કહે છે, જે મગજમાં વાયુ અને પિત્ત વધી જવાથી થાય છે.",
    },
    remedyTips: {
      en: [
        "Almond Oil / Cow's Ghee Nasya: Instill 2 drops of lukewarm pure cow's ghee into each nostril each morning to nourish sensory vestibular channels.",
        "Coriander & Amla Infusion: Soak 1 tsp coriander seeds and 1/2 tsp amla in water overnight; strain and drink with rock sugar in the morning.",
        "Ginger & Mint Herbal Tea: Steep fresh ginger and mint in warm water; sip slowly to counteract dizzy spells and inner ear disturbances.",
      ],
      hi: [
        "गाय के घी का नस्य: सुबह दोनों नथुनों में 2-2 बूंद गुनगुना गाय का घी डालें; यह सिर की नसों को शांत कर चक्कर आने से रोकता है।",
        "धनिया व आंवला का शीतल जल: 1 चम्मच साबुत धनिया और आधा चम्मच आंवला रातभर पानी में भिगोकर सुबह मिश्री मिलाकर पिएं।",
        "अदरक व पुदीना चाय: ताजे अदरक और पुदीने की हल्की चाय पीने से कान के अंदरूनी संतुलन और चक्कर में तुरंत राहत मिलती है।",
      ],
      gu: [
        "ગાયના ઘીનું નસ્ય: સવારે નાકમાં ૨-૨ ટીપાં ગાયનું ઘી નાખવાથી મગજની નસો ઠંડી થાય છે અને ચક્કર અટકે છે.",
        "ધાણા અને આમળાંનું પાણી: આખા ધાણા અને આમળાં રાત્રે પલાળી સવારે સાકર સાથે પીવાથી પિત્તના ચક્કર શાંત થાય છે.",
        "આદુ અને ફુદીનાની ચા: હૂંફાળી આદુ-ફુદીનાની ચા પીવાથી કાનના આંતરિક સંતુલનમાં રાહત મળે છે.",
      ],
    },
    dinacharya: {
      en: {
        morning: "Avoid sudden head jerks or rapidly rising from bed; sit on the bed edge for 1 minute before standing.",
        midday: "Keep well hydrated; avoid skipping meals; take lunch in a calm shaded environment.",
        evening: "Gentle Padabhyanga (oil massage on feet soles); sleep with head slightly elevated on a firm pillow.",
      },
      hi: {
        morning: "बिस्तर से अचानक झटके से न उठें; उठने से पहले 1 मिनट बैठें; सिर को धीरे-धीरे घुमाएं।",
        midday: "भूखे पेट न रहें; पर्याप्त पानी पिएं; तेज धूप में सीधे निकलने से बचें।",
        evening: "रात को पैरों के तलवों में तिल तेल मालिश करें; सिर को थोड़ा ऊंचा रखकर सोएं।",
      },
      gu: {
        morning: "પથારીમાંથી અચાનક ન ઊઠવું; ૧ મિનિટ બેસીને પછી ઊભા થવું; માથું ધીમેથી ફેરવવું.",
        midday: "ભૂખ્યા ન રહેવું; પૂરતું પાણી પીવું; તડકામાં માથે ટોપી કે છત્રી રાખવી.",
        evening: "પગના તળિયે તેલ ઘસવું; માથા નીચે થોડું ઊંચું ઓશીકું રાખી સૂવું.",
      },
    },
    dietary: {
      en: {
        favor: ["Sweet juicy fruits (apples, pears, grapes)", "Soaked almonds & walnuts", "Moong dal with cumin & cow's ghee", "Hydrating coconut water"],
        avoid: ["Excess coffee, nicotine & stimulants", "Very salty & MSG-laden packaged foods", "Skipping meals & prolonged fasting", "Artificial chemical sweeteners"],
      },
      hi: {
        favor: ["मीठे फल (अनार, सेब, पके अंगूर)", "भीगे हुए बादाम व अखरोट", "देसी घी युक्त मूंग दाल", "ताजा नारियल पानी"],
        avoid: ["अधिक चाय, कॉफी व सिगरेट", "अधिक नमक व खटाई", "लंबे समय तक भूखे रहना", "बासी व डिब्बाबंद भोजन"],
      },
      gu: {
        favor: ["મીઠાં ફળો (દાડમ, સફરજન, દ્રાક્ષ)", "પલાળેલા બદામ અને અખરોટ", "ઘીવાળી મગની દાળ", "તાજું નાળિયેર પાણી"],
        avoid: ["વધુ ચા, કોફી અને બીડી-સિગારેટ", "વધારે પડતું મીઠું અને અથાણાં", "ભૂખ્યા પેટે રહેવું", "વાસી અને પેકેટવાળો ખોરાક"],
      },
    },
    safety: {
      en: "Seek urgent medical care if dizziness is accompanied by speech difficulty, facial numbness, double vision, loss of consciousness, or chest pain.",
      hi: "यदि चक्कर के साथ बोलने में लड़खड़ाहट, चेहरे का सुन्नपन, सीने में दर्द या बेहोशी हो तो तुरंत आपातकालीन न्यूरोलॉजिस्ट से संपर्क करें।",
      gu: "જો ચક્કર સાથે બોલવામાં તકલીફ, મોં વાંકું થવું, ડબલ દેખાવું કે બેભાન થવું જણાય તો તાત્કાલિક ઈમરજન્સી હૉસ્પિટલ પહોંચવું.",
    },
  },
};
