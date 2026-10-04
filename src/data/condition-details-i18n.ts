import type { Category, Herb } from "./conditions";
import type { Language } from "../context/language-context";
import { fullDetails } from "./condition-details-data";

export const categoryPerspectivesI18n: Record<Language, Record<Category, string>> = {
  en: {
    Digestive: "Traditional Ayurveda connects digestive discomfort with meal timing, food qualities, digestive capacity (Agni), and individual constitution.",
    Respiratory: "Ayurvedic traditions describe seasonal balance, warmth, rest, and constitutional dosha equilibrium as foundational to respiratory comfort.",
    Lifestyle: "Ayurveda traditionally emphasizes circadian rhythm (Dinacharya), balanced whole foods (Ahara), movement, sleep, and constitution.",
    Skin: "Traditional Ayurveda considers skin wellbeing in direct relation to blood tissue purity (Rakta Dhatu), digestive heat, climate, and daily topical care.",
    Pain: "Ayurvedic practice traditionally addresses joint and musculoskeletal ease through warmth, gentle movement, and individualized herbalized oil massage (Abhyanga).",
    Women: "Ayurvedic traditions emphasize cyclical hormonal rhythms, cellular nourishment (Rasa Dhatu), restorative rest, and individualized daily routines.",
    Men: "Traditional Ayurveda approaches male vitality through restorative sleep, reproductive tissue nourishment (Shukra Dhatu), stress modulation, and physical stamina.",
    Mental: "Ayurvedic traditions connect emotional equilibrium with daily sensory rhythm, meditation, sattvic nourishment, and balancing the mental humors (Sattva, Rajas, Tamas).",
    General: "Ayurveda traditionally emphasizes seasonal routines (Ritucharya), digestive balance, restorative sleep, movement, and individual constitution.",
  },
  hi: {
    Digestive: "आयुर्वेद पाचन संबंधी समस्याओं को भोजन के समय, भोजन के गुणों, जठराग्नि और व्यक्तिगत प्रकृति के असंतुलन से जोड़ता है। जठराग्नि को प्रदीप्त रखना स्वास्थ्य की कुंजी है।",
    Respiratory: "आयुर्वेद ऋतु परिवर्तन, कफ और वात दोष के प्रकोप, तथा श्वसन तंत्र में बलगम व आम के संचय को श्वसन असंतुलन का मूल कारण मानता है।",
    Lifestyle: "आयुर्वेद दैनिक दिनचर्या, संतुलित सात्विक आहार, नियमित शारीरिक श्रम और गहरी नींद को जीवनशैली से जुड़े रोगों से बचाव का मूल आधार मानता है।",
    Skin: "आयुर्वेद त्वचा के स्वास्थ्य को सीधे रक्त धातु की शुद्धि, अत्यधिक पित्त की शांति और आंतों के स्वास्थ्य से जुड़ा मानता है। रक्त शोधन से त्वचा में निखार आता है।",
    Pain: "आयुर्वेद जोड़ों और मांसपेशियों के दर्द को वात दोष के प्रकोप और जोड़ों में आम (विषाक्त पदार्थों) के जमाव से जोड़ता है। गर्म तेल मालिश से वात शांत होता है।",
    Women: "आयुर्वेद महिलाओं के स्वास्थ्य को प्राकृतिक मासिक चक्र, अपान वात के सुचारु प्रवाह और पोषक रस धातु के संतुलन के साथ जोड़कर देखता है।",
    Men: "आयुर्वेद पुरुषों के स्वास्थ्य को ओजस, शुक्र धातु की पुष्टि, मानसिक तनाव नियंत्रण और शारीरिक सहनशक्ति से जोड़ता है।",
    Mental: "आयुर्वेद मानसिक शांति को सात्विक आहार, प्राणायाम, पर्याप्त नींद और सत्व गुण की वृद्धि के साथ जोड़ता है। मन को शांत रखना ही सच्चा आरोग्य है।",
    General: "आयुर्वेद ऋतुचर्या, संतुलित पाचन, गहरी नींद और व्यक्तिगत प्रकृति के अनुसार जीवन जीने को संपूर्ण स्वास्थ्य का आधार मानता है।",
  },
  gu: {
    Digestive: "આયુર્વેદ પાચનની સમસ્યાઓને જમવાના સમય, ખોરાકની પ્રકૃતિ, જઠરાગ્નિ અને ત્રિદોષના અસંતુલન સાથે જોડે છે. જઠરાગ્નિ તેજ રાખવી એ જ સાચું આરોગ્ય છે.",
    Respiratory: "આયુર્વેદ ઋતુ બદલાવ, કફ-વાયુના પ્રકોપ અને શ્વાસનળીમાં કફ ભરાવાને શ્વાસના રોગોનું મુખ્ય કારણ ગણે છે. હૂંફાળા ઉપચારથી રાહત મળે છે.",
    Lifestyle: "આયુર્વેદ નિયમિત દિનચર્યા, સાત્વિક આહાર, નિયમિત કસરત અને ગાઢ ઊંઘને લાઈફસ્ટાઈલ રોગો સામે કુદરતી રક્ષણનું મૂળ માને છે.",
    Skin: "આયુર્વેદ ચામડીના આરોગ્યને લોહીની શુદ્ધિ, પિત્તની ગરમી અને પાચનતંત્ર સાથે સંબંધિત ગણે છે. લોહી શુદ્ધ થતાં ત્વચા ચમકીલી બને છે.",
    Pain: "આયુર્વેદ સાંધા અને સ્નાયુઓના દુખાવાને વાયુ દોષના પ્રકોપ અને સાંધામાં કચરો (આમ) જમા થવા સાથે જોડે છે. તેલ માલિશથી વાયુ શાંત થાય છે.",
    Women: "આયુર્વેદ સ્ત્રી સ્વાસ્થ્યને કુદરતી માસિક ચક્ર, અપાન વાયુના સંતુલન અને પોષક રસ ધાતુ સાથે જોડીને જુએ છે.",
    Men: "આયુર્વેદ પુરુષોના સ્વાસ્થ્યને ઓજસ, શુક્ર ધાતુની પુષ્ટિ, તણાવ મુક્તિ અને શારીરિક શક્તિ સાથે જોડે છે.",
    Mental: "આયુર્વેદ માનસિક શાંતિને સાત્વિક આહાર, પ્રાણાયામ, પૂરતી ઊંઘ અને સત્વ ગુણની વૃદ્ધિ સાથે જોડે છે. અશાંત મન રોગોનું મૂળ છે.",
    General: "આયુર્વેદ ઋતુચર્યા, સંતુલિત પાચન, ગાઢ ઊંઘ અને શરીરની પ્રકૃતિ અનુસાર જીવન જીવવાને સાચા સ્વાસ્થ્યનો પાયો માને છે.",
  },
};

export const categorySafetyI18n: Record<Language, Record<Category, string>> = {
  en: {
    Digestive: "Persistent digestive symptoms can have serious causes. Supplements may interact with medications and may be unsuitable during pregnancy or liver/kidney conditions.",
    Respiratory: "Breathing symptoms can escalate rapidly. Herbal products should complement, not replace, prescribed asthma or pulmonary treatments.",
    Lifestyle: "Do not discontinue prescribed pharmaceuticals. Always coordinate diet, exercise, and herbs with your physician, particularly with diabetes or hypertension.",
    Skin: "Do not apply potent herbs or essential oils directly to open wounds. Seek prompt clinical care for rapidly spreading redness, fever, or lesions.",
    Pain: "Severe, sudden, or traumatic joint/back pain requires qualified medical assessment. Vigorous massage is contraindicated over acute inflammation.",
    Women: "Pregnancy, breastfeeding, and hormone-sensitive conditions strictly require qualified medical advice before starting any herbal regimen.",
    Men: "Urinary, prostate, or sexual symptoms warrant professional diagnostic screening. Unregulated performance supplements may pose cardiovascular risks.",
    Mental: "Wellness rituals support, but do not replace, psychiatric healthcare. Seek immediate crisis intervention for severe despair or self-harm concerns.",
    General: "General guidance must be individualized for age, prescription drugs, pregnancy, allergies, and renal or hepatic considerations.",
  },
  hi: {
    Digestive: "लगातार बनी रहने वाली पाचन समस्याओं में योग्य चिकित्सक से परामर्श लें। गर्भावस्था या लिवर-किडनी रोग में जड़ी-बूटियों का प्रयोग सावधानी से करें।",
    Respiratory: "सांस फूलने या तेज खांसी में तुरंत डॉक्टर से संपर्क करें। हर्बल उपाय हमेशा निर्धारित इनहेलर या दवाओं के पूरक रूप में ही अपनाएं।",
    Lifestyle: "डॉक्टर द्वारा दी गई ब्लड प्रेशर या शुगर की दवाएं बंद न करें। आहार या हर्बल सप्लीमेंट्स शुरू करने से पहले अपने चिकित्सक को सूचित करें।",
    Skin: "खुले घाव या कटी हुई त्वचा पर सीधे तेज जड़ी-बूटियां या तेल न लगाएं। अत्यधिक लालिमा, मवाद या तेजी से फैलने वाले दाने होने पर डॉक्टर को दिखाएं।",
    Pain: "अचानक या असहनीय दर्द में डॉक्टर से जांच कराएं। गंभीर सूजन, फ्रैक्चर या चोट की स्थिति में जबरन मालिश न करें।",
    Women: "गर्भावस्था, स्तनपान और हार्मोन संबंधी संवेदनशील स्थितियों में कोई भी नई जड़ी-बूटी शुरू करने से पहले स्त्री रोग विशेषज्ञ की सलाह अवश्य लें।",
    Men: "पेशाब, प्रोस्टेट या प्रजनन संबंधी किसी भी असामान्य लक्षण में योग्य डॉक्टर से जांच कराएं। बिना प्रमाणित सप्लीमेंट्स का सेवन न करें।",
    Mental: "घरेलू उपाय मानसिक स्वास्थ्य का पूरक हैं। गंभीर तनाव, अवसाद या पैनिक अटैक की स्थिति में पेशेवर मनोचिकित्सक से परामर्श लें।",
    General: "सामान्य स्वास्थ्य सलाह को उम्र, दवाओं, गर्भावस्था और अन्य स्वास्थ्य स्थितियों के अनुसार व्यक्तिगत रूप से अपनाएं।",
  },
  gu: {
    Digestive: "સતત પાચનની તકલીફ રહેતી હોય તો તબીબી સલાહ લો. ગર્ભાવસ્થા કે લિવર/કિડનીની બીમારીમાં સાવચેતી રાખવી.",
    Respiratory: "શ્વાસ લેવામાં વધારે તકલીફ થાય તો તાત્કાલિક ડૉક્ટરનો સંપર્ક કરો. નિયમિત દવાઓ સાથે જ ઘરગથ્થુ ઉપચાર કરો.",
    Lifestyle: "ડૉક્ટરની દવાઓ બંધ ન કરો. ખોરાક કે કસરતમાં ફેરફાર કરતાં પહેલાં તબીબી સલાહ લેવી.",
    Skin: "ઘા કે છોલાયેલી ચામડી પર સીધું તેલ કે લેપ ન લગાવો. વધુ પડતી લાલાશ કે રસી થાય તો ડૉક્ટરને બતાવો.",
    Pain: "અસહ્ય કે અચાનક દુખાવામાં તપાસ કરાવો. સોજો કે તાજી ઇજા હોય ત્યાં માલિશ ન કરવી.",
    Women: "ગર્ભાવસ્થા કે સ્તનપાન દરમિયાન કોઈપણ નવી ઔષધિ લેતા પહેલાં ડૉક્ટરની સલાહ અચૂક લેવી.",
    Men: "પેશાબ કે પ્રજનન સંબંધી તકલીફમાં નિષ્ણાત ડૉક્ટરની સલાહ લો. તપાસ વગર કોઈ દવા ન લેવી.",
    Mental: "ગંભીર માનસિક તણાવ કે ડિપ્રેશનમાં મનોચિકિત્સકની સલાહ લો. માત્ર ઘરગથ્થુ ઉપચાર પર નિર્ભર ન રહો.",
    General: "સામાન્ય સલાહને ઉંમર, દવાઓ, ગર્ભાવસ્થા અને શારીરિક સ્થિતિ મુજબ વ્યક્તિગત બનાવવી જરૂરી છે.",
  },
};

export const evidenceI18n: Record<Language, Record<string, string>> = {
  en: {
    "Limited or mixed": "Limited or mixed evidence",
    "Commonly used": "Commonly used traditionally",
    "Professional guidance": "Professional guidance advised",
  },
  hi: {
    "Limited or mixed": "सीमित या मिश्रित साक्ष्य",
    "Commonly used": "पारंपरिक रूप से प्रचलित",
    "Professional guidance": "चिकित्सीय परामर्श आवश्यक",
  },
  gu: {
    "Limited or mixed": "મર્યાદિત અથવા મિશ્ર પુરાવા",
    "Commonly used": "પરંપરાગત રીતે પ્રચલિત",
    "Professional guidance": "તબીબી સલાહ જરૂરી",
  },
};

export const warningsI18n: Record<Language, Record<string, string>> = {
  en: {
    "Severe, sudden, or rapidly worsening symptoms": "Severe, sudden, or rapidly worsening symptoms",
    "Chest pain, difficulty breathing, fainting, or confusion": "Chest pain, difficulty breathing, fainting, or confusion",
    "New weakness, uncontrolled bleeding, or severe allergic reaction": "New weakness, uncontrolled bleeding, or severe allergic reaction",
    "Symptoms that are severe, persistent, unusual, or worsening": "Symptoms that are severe, persistent, unusual, or worsening",
    "Severe pain, uncontrolled bleeding, or signs of dehydration": "Severe pain, uncontrolled bleeding, or signs of dehydration",
  },
  hi: {
    "Severe, sudden, or rapidly worsening symptoms": "गंभीर, अचानक या तेजी से बिगड़ते लक्षण",
    "Chest pain, difficulty breathing, fainting, or confusion": "सीने में दर्द, सांस लेने में तकलीफ, बेहोशी या भ्रम",
    "New weakness, uncontrolled bleeding, or severe allergic reaction": "अचानक कमजोरी, अत्यधिक रक्तस्राव या गंभीर एलर्जी रिएक्शन",
    "Symptoms that are severe, persistent, unusual, or worsening": "लक्षण जो गंभीर, लगातार, असामान्य या बिगड़ते जा रहे हों",
    "Severe pain, uncontrolled bleeding, or signs of dehydration": "असहनीय दर्द, अत्यधिक रक्तस्राव या डिहाइड्रेशन के लक्षण",
  },
  gu: {
    "Severe, sudden, or rapidly worsening symptoms": "ગંભીર, અચાનક અથવા ઝડપથી વધતા લક્ષણો",
    "Chest pain, difficulty breathing, fainting, or confusion": "છાતીમાં દુખાવો, શ્વાસ લેવામાં તકલીફ, બેભાન થવું કે મૂંઝવણ",
    "New weakness, uncontrolled bleeding, or severe allergic reaction": "અચાનક નબળાઈ, વધુ પડતો રક્તસ્ત્રાવ અથવા ગંભીર એલર્જી",
    "Symptoms that are severe, persistent, unusual, or worsening": "લક્ષણો જે ગંભીર, સતત, અસામાન્ય કે વધતા જતાં હોય",
    "Severe pain, uncontrolled bleeding, or signs of dehydration": "અસહ્ય દુખાવો, વધુ પડતો રક્તસ્ત્રાવ કે ડીહાઇડ્રેશનના ચિહ્નો",
  },
};

export interface ConditionI18nDetail {
  perspective?: string;
  safety?: string;
  herbalRemedyTips: string[];
  herbs: Herb[];
}

export const conditionDetailsI18n: Record<
  string,
  {
    hi: ConditionI18nDetail;
    gu: ConditionI18nDetail;
  }
> = fullDetails;
