import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "hi" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LANGUAGE_KEY = "sattva-language";

export const translations = {
  en: {
    // Navigation
    home: "Home",
    conditions: "Conditions",
    wellness: "Wellness",
    bookmarks: "Bookmarks",
    brand_subtitle: "Everyday Wellness",

    // Hero
    hero_title: "Your wellness dashboard",
    hero_desc: "A calm, single-page guide to Ayurvedic wisdom, herbal preparations, and complementary holistic care.",
    quick_conditions_title: "Condition Guides",
    quick_conditions_sub: "All 49 flash cards & herbal tips",
    quick_wellness_title: "Holistic Wellness",
    quick_wellness_sub: "16 modalities & daily rhythms",
    quick_bookmarks_title: "Bookmarks",
    quick_bookmarks_sub: "Saved guides on this device",
    daily_note_title: "Daily Ayurvedic Note",

    // Search
    search_badge: "Ayurvedic Smart Search & Remedial Engine",
    search_heading: "Personalized Ayurvedic Guidance for Any Symptom",
    search_desc: "Search remedies, herbs, and dosha balancing protocols or tap a commonly-searched topic below for instant clinical insights.",
    search_placeholder: "Search e.g. insomnia, acidity, ashwagandha, joint stiffness, bloating...",
    search_button: "Get Guidance",
    search_button_loading: "Analyzing...",
    common_queries_title: "Commonly-Used Health Queries:",
    filter_all: "All",
    filter_mind_sleep: "Mind & Sleep",
    filter_digestion: "Digestion",
    filter_pain_mobility: "Pain & Mobility",
    filter_immunity_skin: "Immunity & Skin",
    remedy_tag: "Remedy",
    unable_to_search: "Unable to process search query",
    guidance_insights_fallback: "Ayurvedic Guidance & Remedial Insights",
    clear_query: "Clear query",

    // Guidance Result
    guidance_eyebrow: "Personalized Remedial Insights",
    guidance_for: "Ayurvedic Guidance",
    guidance_sub: "Personalized constitutional remedies & daily Dinacharya protocol.",
    explore_full_guide: "Explore Full Guide",
    traditional_concept: "Traditional Concept:",
    herbal_formulations_title: "Targeted Herbal Formulations & Kitchen Pharmacy",
    dinacharya_title: "Personalized Daily Routine (Dinacharya Protocol)",
    morning_protocol: "Morning Protocol",
    midday_protocol: "Midday Assimilation",
    evening_protocol: "Evening Wind-Down",
    dietary_title: "Dietary Prescriptions (Ahara · Pathya & Apathya)",
    foods_to_favor: "Foods & Habits to Favor (Pathya)",
    foods_to_avoid: "Foods & Habits to Minimize (Apathya)",
    safety_considerations: "Safety Considerations:",
    serious_notice: "⚠️ This condition warrants qualified clinical assessment and should not be managed with home remedies alone.",
    explore_related_guides: "Explore Related Condition Guides:",
    educational_disclaimer: "Educational support only. It does not replace clinical diagnosis, prescribed treatment, or urgent medical care.",

    // Slider
    slider_badge: "Interactive Guide Directory",
    slider_title: "Herbal Remedies & Disease Flash Cards",
    slider_desc: "Swipe or use arrow buttons/keys to browse clinical Ayurvedic guides.",
    guides_count: "guides",
    guide_count: "guide",
    search_condition_placeholder: "Search disease or herb...",
    clear_filters: "Clear Filters",
    no_conditions_found: "No condition guides found",
    no_conditions_desc: "No health guides match your current filter.",
    keyboard_scroll_hint: "Use keyboard arrow keys to scroll",
    swipe_sideways: "Swipe sideways",

    // Categories
    cat_all: "All",
    cat_digestive: "Digestive",
    cat_respiratory: "Respiratory",
    cat_lifestyle: "Lifestyle",
    cat_skin: "Skin",
    cat_pain: "Pain",
    cat_women: "Women’s",
    cat_men: "Men’s",
    cat_mental: "Mental",
    cat_general: "General",

    // Card & Modal
    explore_guide_btn: "Explore Guide",
    save_guide_btn: "Save Guide",
    saved_in_bookmarks: "Saved in Favorites ✓",
    notice_badge: "Notice",
    method_label: "Method:",
    safety_label: "Safety:",
    done_btn: "Done",
    tip_1_title: "Tip 1 · Home Preparation",
    tip_2_title: "Tip 2 · Daily Routine",
    tip_3_title: "Tip 3 · Classical Formula",
    key_herbs_title: "Key Ayurvedic Herbs & Classical Formulations",
    herbal_tips_title: "Herbal Remedial Tips",
    home_remedies_for: "Practical, time-tested home remedies for",

    // Wellness Section
    explore_tradition_innovation: "Explore Tradition & Innovation ↗",
    wellness_traditions_badge: "Complementary Traditions",
    wellness_modalities_title: "16 Holistic Modalities Explained",
    wellness_modalities_desc: "Understand complementary wellness approaches, traditional applications, and evidence-informed safety limits.",
    dinacharya_flow_badge: "Ayurvedic Daily Flow",
    dinacharya_heading: "Dinacharya · Circadian Wellness Rhythm",
    dinacharya_subheading: "Aligning daily activities with nature's biological rhythms optimizes digestion, energy, and peace of mind.",
    tridosha_badge: "Tridosha Theory",
    tridosha_heading: "Understanding Your Ayurvedic Constitution",
    tridosha_subheading: "Ayurveda classifies the body and mind into three fundamental energies. Discover how to balance each dosha.",
    out_of_balance: "When Out of Balance:",
    how_to_balance: "How to Restore Balance:",
    integrative_safety_title: "Integrative Wellness & Medical Safety",
    integrative_safety_desc: "Always inform your healthcare team about herbs, dietary supplements, and alternative therapies you use. This prevents drug-herb interactions and ensures safe, coordinated healthcare. Sattva provides educational guidance and is not a substitute for qualified medical diagnosis.",

    // Bookmarks Section
    bookmarks_badge: "Your Saved Guides",
    bookmarks_title: "Bookmarked Health Conditions & Remedies",
    bookmarks_empty_title: "No saved guides yet",
    bookmarks_empty_desc: "Tap the bookmark button in the top-right of any flash card or inside the 'Explore Guide' pop-up to save remedies for offline reference.",
    browse_cards_btn: "Browse Condition Flash Cards",
    explore_all_guides_btn: "Explore all 49 guides",
    no_saved_guides_sub: "No saved guides yet. Bookmark conditions to access them quickly anytime.",
  },

  hi: {
    // Navigation
    home: "होम",
    conditions: "रोग व उपचार",
    wellness: "समग्र स्वास्थ्य",
    bookmarks: "बुकमार्क",
    brand_subtitle: "दैनिक आयुर्वेद",

    // Hero
    hero_title: "आपका स्वास्थ्य डैशबोर्ड",
    hero_desc: "आयुर्वेदिक ज्ञान, जड़ी-बूटियों की तैयारी और समग्र प्राकृतिक उपचार के लिए एक शांत मार्गदर्शिका।",
    quick_conditions_title: "रोग व उपचार गाइड",
    quick_conditions_sub: "सभी 49 स्वास्थ्य कार्ड और घरेलू नुस्खे",
    quick_wellness_title: "समग्र स्वास्थ्य पद्धतियाँ",
    quick_wellness_sub: "16 समग्र पद्धतियाँ और दिनचर्या",
    quick_bookmarks_title: "सहेजे गए गाइड",
    quick_bookmarks_sub: "इस डिवाइस पर सुरक्षित गाइड",
    daily_note_title: "दैनिक आयुर्वेदिक विचार",

    // Search
    search_badge: "आयुर्वेदिक स्मार्ट खोज एवं उपचार इंजन",
    search_heading: "किसी भी लक्षण के लिए व्यक्तिगत आयुर्वेदिक मार्गदर्शन",
    search_desc: "आयुर्वेदिक उपचार, जड़ी-बूटियों और त्रिदोष संतुलन के लिए खोजें या नीचे दिए गए सामान्य विषयों पर टैप करें।",
    search_placeholder: "खोजें: जैसे अनिद्रा, एसिडिटी, अश्वगंधा, जोड़ों का दर्द, गैस...",
    search_button: "मार्गदर्शन पाएं",
    search_button_loading: "विश्लेषण हो रहा है...",
    common_queries_title: "अक्सर पूछे जाने वाले स्वास्थ्य प्रश्न:",
    filter_all: "सभी",
    filter_mind_sleep: "मन और निद्रा",
    filter_digestion: "पाचन तंत्र",
    filter_pain_mobility: "दर्द और जोड़",
    filter_immunity_skin: "रोग प्रतिरोधक व त्वचा",
    remedy_tag: "उपचार",
    unable_to_search: "खोज संसाधित करने में असमर्थ",
    guidance_insights_fallback: "आयुर्वेदिक मार्गदर्शन एवं उपचारात्मक अंतर्दृष्टि",
    clear_query: "खोज हटाएं",

    // Guidance Result
    guidance_eyebrow: "व्यक्तिगत उपचारात्मक अंतर्दृष्टि",
    guidance_for: "आयुर्वेदिक मार्गदर्शन",
    guidance_sub: "सटीक त्रिदोष संतुलन और दैनिक दिनचर्या प्रोटोकॉल।",
    explore_full_guide: "संपूर्ण गाइड देखें",
    traditional_concept: "पारंपरिक आयुर्वेदिक दृष्टिकोण:",
    herbal_formulations_title: "लक्षित जड़ी-बूटी औषधियां व घरेलू नुस्खे",
    dinacharya_title: "व्यक्तिगत दैनिक दिनचर्या (Dinacharya)",
    morning_protocol: "प्रातःकालीन नियम (Morning)",
    midday_protocol: "मध्याह्न पाचन (Midday)",
    evening_protocol: "सायंकालीन विश्राम (Evening)",
    dietary_title: "आहार नियम (पथ्य एवं अपथ्य)",
    foods_to_favor: "लाभकारी आहार (पथ्य)",
    foods_to_avoid: "त्याज्य आहार (अपथ्य)",
    safety_considerations: "सुरक्षा सावधानियां:",
    serious_notice: "⚠️ यह स्थिति योग्य चिकित्सक द्वारा चिकित्सकीय परामर्श की मांग करती है। केवल घरेलू नुस्खों पर निर्भर न रहें।",
    explore_related_guides: "संबंधित रोग गाइड देखें:",
    educational_disclaimer: "यह केवल शैक्षणिक जानकारी है। यह चिकित्सीय निदान, उपचार या आपातकालीन देखभाल का विकल्प नहीं है।",

    // Slider
    slider_badge: "इंटरैक्टिव गाइड निर्देशिका",
    slider_title: "आयुर्वेदिक उपचार एवं स्वास्थ्य फ्लैश कार्ड",
    slider_desc: "सभी प्रामाणिक आयुर्वेदिक स्वास्थ्य गाइड देखने के लिए स्वाइप करें या तीर के बटनों का उपयोग करें।",
    guides_count: "गाइड",
    guide_count: "गाइड",
    search_condition_placeholder: "रोग या जड़ी-बूटी खोजें...",
    clear_filters: "फ़िल्टर हटाएं",
    no_conditions_found: "कोई स्वास्थ्य गाइड नहीं मिला",
    no_conditions_desc: "आपके वर्तमान फ़िल्टर से कोई मेल नहीं मिला।",
    keyboard_scroll_hint: "स्क्रॉल करने के लिए कीबोर्ड तीर कुंजियों का उपयोग करें",
    swipe_sideways: "बाएं-दाएं स्वाइप करें",

    // Categories
    cat_all: "सभी",
    cat_digestive: "पाचन",
    cat_respiratory: "श्वसन",
    cat_lifestyle: "जीवनशैली",
    cat_skin: "त्वचा",
    cat_pain: "दर्द व जोड़",
    cat_women: "महिला स्वास्थ्य",
    cat_men: "पुरुष स्वास्थ्य",
    cat_mental: "मानसिक",
    cat_general: "सामान्य",

    // Card & Modal
    explore_guide_btn: "गाइड देखें",
    save_guide_btn: "सहेजें (Bookmark)",
    saved_in_bookmarks: "सहेजा गया ✓",
    notice_badge: "सूचना",
    method_label: "विधि:",
    safety_label: "सुरक्षा:",
    done_btn: "पूर्ण",
    tip_1_title: "नुस्खा 1 · घरेलू तैयारी",
    tip_2_title: "नुस्खा 2 · दैनिक नियम",
    tip_3_title: "नुस्खा 3 · शास्त्रीय योग",
    key_herbs_title: "प्रमुख आयुर्वेदिक जड़ी-बूटियाँ एवं शास्त्रीय योग",
    herbal_tips_title: "घरेलू उपचारात्मक नुस्खे",
    home_remedies_for: "समय-परीक्षित घरेलू नुस्खे:",

    // Wellness Section
    explore_tradition_innovation: "परंपरा और नवाचार देखें ↗",
    wellness_traditions_badge: "पारंपरिक समग्र पद्धतियाँ",
    wellness_modalities_title: "16 समग्र स्वास्थ्य पद्धतियों की व्याख्या",
    wellness_modalities_desc: "पूरक स्वास्थ्य पद्धतियों, पारंपरिक उपयोग और साक्ष्य-आधारित सीमाओं को समझें।",
    dinacharya_flow_badge: "आयुर्वेदिक दैनिक लय",
    dinacharya_heading: "दिनचर्या · प्राकृतिक जैविक लय",
    dinacharya_subheading: "दैनिक गतिविधियों को प्रकृति की जैविक लय के साथ संरेखित करने से पाचन, ऊर्जा और मानसिक शांति अनुकूलित होती है।",
    tridosha_badge: "त्रिदोष सिद्धांत",
    tridosha_heading: "अपनी आयुर्वेदिक प्रकृति को समझें",
    tridosha_subheading: "आयुर्वेद शरीर और मन को तीन मूलभूत ऊर्जाओं (वात, पित्त, कफ) में वर्गीकृत करता है। संतुलन बनाने के उपाय जानें।",
    out_of_balance: "असंतुलन के लक्षण:",
    how_to_balance: "संतुलन कैसे बनाएं:",
    integrative_safety_title: "समग्र स्वास्थ्य एवं चिकित्सीय सुरक्षा",
    integrative_safety_desc: "जड़ी-बूटियों, सप्लीमेंट्स या वैकल्पिक उपचारों के उपयोग से पहले अपने चिकित्सक को अवश्य सूचित करें ताकि सुरक्षित उपचार सुनिश्चित हो सके।",

    // Bookmarks Section
    bookmarks_badge: "आपके सहेजे गए गाइड",
    bookmarks_title: "सहेजे गए स्वास्थ्य रोग एवं उपचार",
    bookmarks_empty_title: "अभी तक कोई गाइड सहेजा नहीं गया",
    bookmarks_empty_desc: "किसी भी कार्ड के ऊपर दाईं ओर या 'गाइड देखें' पॉप-अप में बुकमार्क बटन दबाकर यहाँ सहेजें।",
    browse_cards_btn: "स्वास्थ्य फ्लैश कार्ड देखें",
    explore_all_guides_btn: "सभी 49 गाइड देखें",
    no_saved_guides_sub: "अभी तक कोई गाइड सहेजा नहीं गया। तुरंत देखने के लिए किसी भी कार्ड को बुकमार्क करें।",
  },

  gu: {
    // Navigation
    home: "હોમ",
    conditions: "રોગ અને ઉપચાર",
    wellness: "સમગ્ર સ્વાસ્થ્ય",
    bookmarks: "બુકમાર્ક્સ",
    brand_subtitle: "દૈનિક આયુર્વેદ",

    // Hero
    hero_title: "તમારું સ્વાસ્થ્ય ડેશબોર્ડ",
    hero_desc: "આયુર્વેદિક જ્ઞાન, ઔષધિઓ અને કુદરતી ઉપચાર માટે એક શાંત અને વિશ્વસનીય માર્ગદર્શિકા.",
    quick_conditions_title: "રોગ ઉપચાર ગાઈડ",
    quick_conditions_sub: "બધા 49 આરોગ્ય કાર્ડ્સ અને ઘરગથ્થુ નુસ્ખા",
    quick_wellness_title: "સમગ્ર સ્વાસ્થ્ય પદ્ધતિઓ",
    quick_wellness_sub: "16 કુદરતી પદ્ધતિઓ અને દિનચર્યા",
    quick_bookmarks_title: "સેવ કરેલ ગાઈડ",
    quick_bookmarks_sub: "આ ડિવાઇસ પર સાચવેલ માર્ગદર્શિકાઓ",
    daily_note_title: "દૈનિક આયુર્વેદિક સુવિચાર",

    // Search
    search_badge: "આયુર્વેદિક સ્માર્ટ સર્ચ અને ઉપચાર એન્જિન",
    search_heading: "કોઈપણ લક્ષણ માટે વ્યક્તિગત આયુર્વેદિક માર્ગદર્શન",
    search_desc: "આયુર્વેદિક ઉપચારો, જડીબુટ્ટીઓ અને ત્રિદોષ સંતુલન શોધો અથવા નીચેના લોકપ્રિય વિષયો પર ટેપ કરો.",
    search_placeholder: "શોધો: જેમ કે અનિદ્રા, એસિડિટી, અશ્વગંધા, સાંધાનો દુખાવો, ગેસ...",
    search_button: "માર્ગદર્શન મેળવો",
    search_button_loading: "વિશ્લેષણ ચાલુ છે...",
    common_queries_title: "વારંવાર પૂછાતા સ્વાસ્થ્ય પ્રશ્નો:",
    filter_all: "બધા",
    filter_mind_sleep: "મન અને ઊંઘ",
    filter_digestion: "પાચનતંત્ર",
    filter_pain_mobility: "દુખાવો અને સાંધા",
    filter_immunity_skin: "રોગપ્રતિકારક અને ત્વચા",
    remedy_tag: "ઉપચાર",
    unable_to_search: "સર્ચ પ્રક્રિયા કરવામાં અસમર્થ",
    guidance_insights_fallback: "આયુર્વેદિક માર્ગદર્શન અને ઉપચારાત્મક અંતર્દ્રષ્ટિ",
    clear_query: "સર્ચ સાફ કરો",

    // Guidance Result
    guidance_eyebrow: "વ્યક્તિગત ઉપચારાત્મક અંતર્દ્રષ્ટિ",
    guidance_for: "આયુર્વેદિક માર્ગદર્શન",
    guidance_sub: "સચોટ ત્રિદોષ સંતુલન અને દૈનિક દિનચર્યા પ્રોટોકોલ.",
    explore_full_guide: "સંપૂર્ણ ગાઈડ જુઓ",
    traditional_concept: "પરંપરાગત આયુર્વેદિક દ્રષ્ટિકોણ:",
    herbal_formulations_title: "લક્ષિત ઔષધિઓ અને રસોડાના દેશી નુસ્ખા",
    dinacharya_title: "વ્યક્તિગત દૈનિક દિનચર્યા (Dinacharya)",
    morning_protocol: "સવારનો ક્રમ (Morning)",
    midday_protocol: "બપોરનું પાચન (Midday)",
    evening_protocol: "સાંજનો આરામ (Evening)",
    dietary_title: "આહાર નિયમો (પથ્ય અને અપથ્ય)",
    foods_to_favor: "ફાયદાકારક આહાર (પથ્ય)",
    foods_to_avoid: "ત્યાજ્ય આહાર (અપથ્ય)",
    safety_considerations: "સુરક્ષા સાવચેતીઓ:",
    serious_notice: "⚠️ આ સ્થિતિમાં લાયકાત ધરાવતા તબીબની સલાહ લેવી જરૂરી છે. માત્ર ઘરગથ્થુ ઉપચાર પર નિર્ભર ન રહો.",
    explore_related_guides: "સંબંધિત રોગ ગાઈડ જુઓ:",
    educational_disclaimer: "આ માત્ર શૈક્ષણિક માહિતી છે. તે ડૉક્ટરના નિદાન કે સારવારનો વિકલ્પ નથી.",

    // Slider
    slider_badge: "ઇન્ટરેક્ટિવ ગાઈડ ડિરેક્ટરી",
    slider_title: "આયુર્વેદિક ઉપચાર અને ફ્લેશ કાર્ડ્સ",
    slider_desc: "બધા પ્રમાણિત આયુર્વેદિક ગાઈડ જોવા માટે સ્વાઇપ કરો અથવા એરો બટનનો ઉપયોગ કરો.",
    guides_count: "ગાઈડ્સ",
    guide_count: "ગાઈડ",
    search_condition_placeholder: "રોગ અથવા ઔષધિ શોધો...",
    clear_filters: "ફિલ્ટર દૂર કરો",
    no_conditions_found: "કોઈ ગાઈડ મળ્યો નથી",
    no_conditions_desc: "તમારા વર્તમાન ફિલ્ટર સાથે કોઈ પરિણામ મળ્યું નથી.",
    keyboard_scroll_hint: "સ્ક્રોલ કરવા માટે કીબોર્ડ એરો કીનો ઉપયોગ કરો",
    swipe_sideways: "ડાબે-જમણે સ્વાઇપ કરો",

    // Categories
    cat_all: "બધા",
    cat_digestive: "પાચન",
    cat_respiratory: "શ્વસન",
    cat_lifestyle: "જીવનશૈલી",
    cat_skin: "ત્વચા",
    cat_pain: "દુખાવો અને સાંધા",
    cat_women: "મહિલા સ્વાસ્થ્ય",
    cat_men: "પુરુષ સ્વાસ્થ્ય",
    cat_mental: "માનસિક",
    cat_general: "સામાન્ય",

    // Card & Modal
    explore_guide_btn: "ગાઈડ જુઓ",
    save_guide_btn: "સેવ કરો (Bookmark)",
    saved_in_bookmarks: "સેવ કરેલ છે ✓",
    notice_badge: "સૂચના",
    method_label: "બનાવવાની રીત:",
    safety_label: "સુરક્ષા:",
    done_btn: "પૂર્ણ",
    tip_1_title: "નુસ્ખો 1 · ઘરગથ્થુ તૈયારી",
    tip_2_title: "નુસ્ખો 2 · દૈનિક નિયમ",
    tip_3_title: "નુસ્ખો 3 · શાસ્ત્રીય ઔષધિ",
    key_herbs_title: "મુખ્ય આયુર્વેદિક જડીબુટ્ટીઓ અને શાસ્ત્રીય યોગ",
    herbal_tips_title: "ઘરગથ્થુ ઉપચારાત્મક નુસ્ખા",
    home_remedies_for: "પરંપરાગત ઘરગથ્થુ ઉપચારો:",

    // Wellness Section
    explore_tradition_innovation: "પરંપરા અને આધુનિકતા જુઓ ↗",
    wellness_traditions_badge: "પરંપરાગત કુદરતી પદ્ધતિઓ",
    wellness_modalities_title: "16 સમગ્ર સ્વાસ્થ્ય પદ્ધતિઓની સમજણ",
    wellness_modalities_desc: "કુદરતી સારવાર પદ્ધતિઓ, પરંપરાગત ઉપયોગો અને પુરાવા-આધારિત મર્યાદાઓને સમજો.",
    dinacharya_flow_badge: "આયુર્વેદિક દૈનિક લય",
    dinacharya_heading: "દિનચર્યા · કુદરતી જૈવિક લય",
    dinacharya_subheading: "રોજિંદી પ્રવૃત્તિઓને કુદરતની જૈવિક લય સાથે જોડવાથી પાચન, ઊર્જા અને માનસિક શાંતિ મળે છે.",
    tridosha_badge: "ત્રિદોષ સિદ્ધાંત",
    tridosha_heading: "તમારી આયુર્વેદિક પ્રકૃતિને ઓળખો",
    tridosha_subheading: "આયુર્વેદ શરીર અને મનને ત્રણ મૂળભૂત ઊર્જાઓ (વાત, પિત્ત, કફ) માં વર્ગીકૃત કરે છે. સંતુલન જાળવવાની રીતો જાણો.",
    out_of_balance: "અસંતુલનના લક્ષણો:",
    how_to_balance: "સંતુલન કેવી રીતે રાખવું:",
    integrative_safety_title: "સમગ્ર સ્વાસ્થ્ય અને તબીબી સુરક્ષા",
    integrative_safety_desc: "કોઈપણ નવી ઔષધિ કે સપ્લિમેન્ટ્સ લેતા પહેલા હંમેશા તમારા ડૉક્ટરની સલાહ લો જેથી સુરક્ષિત અને સંકલિત સારવાર થઈ શકે.",

    // Bookmarks Section
    bookmarks_badge: "તમારા સેવ કરેલ ગાઈડ્સ",
    bookmarks_title: "સાચવેલ સ્વાસ્થ્ય રોગો અને ઉપચારો",
    bookmarks_empty_title: "હજી સુધી કોઈ ગાઈડ સેવ કરેલ નથી",
    bookmarks_empty_desc: "કોઈપણ કાર્ડની જમણી બાજુના બુકમાર્ક બટન અથવા 'ગાઈડ જુઓ' પૉપ-અપમાંથી અહીં સેવ કરો.",
    browse_cards_btn: "સ્વાસ્થ્ય ફ્લેશ કાર્ડ્સ જુઓ",
    explore_all_guides_btn: "બધા 49 ગાઈડ જુઓ",
    no_saved_guides_sub: "હજી સુધી કોઈ ગાઈડ સેવ કરેલ નથી. ઝડપી એક્સેસ માટે કોઈપણ કાર્ડને બુકમાર્ક કરો.",
  },
} as const;

export const commonQueriesI18n: Record<Language, Record<string, string>> = {
  en: {
    "Better Sleep & Insomnia": "Better Sleep & Insomnia",
    "Acidity & Heartburn": "Acidity & Heartburn",
    "Stress & Anxiety Calm": "Stress & Anxiety Calm",
    "Ashwagandha Uses": "Ashwagandha Uses",
    "Triphala & Digestion": "Triphala & Digestion",
    "Joint Pain & Arthritis": "Joint Pain & Arthritis",
    "Gas & Bloating": "Gas & Bloating",
    "Cough & Cold Relief": "Cough & Cold Relief",
    "Clear Skin & Eczema": "Clear Skin & Eczema",
    "Low Energy & Fatigue": "Low Energy & Fatigue",
    "Neck & Back Stiffness": "Neck & Back Stiffness",
    "Headache & Migraine": "Headache & Migraine",
  },
  hi: {
    "Better Sleep & Insomnia": "अच्छी नींद और अनिद्रा",
    "Acidity & Heartburn": "एसिडिटी और सीने में जलन",
    "Stress & Anxiety Calm": "तनाव और मानसिक शांति",
    "Ashwagandha Uses": "अश्वगंधा के उपयोग व लाभ",
    "Triphala & Digestion": "त्रिफला और पाचन शुद्धि",
    "Joint Pain & Arthritis": "जोड़ों का दर्द और गठिया",
    "Gas & Bloating": "गैस और पेट फूलना",
    "Cough & Cold Relief": "खांसी और जुकाम से राहत",
    "Clear Skin & Eczema": "साफ त्वचा और एक्जिमा",
    "Low Energy & Fatigue": "थकान और कमजोरी दूर करें",
    "Neck & Back Stiffness": "गर्दन व कमर का दर्द",
    "Headache & Migraine": "सिरदर्द और माइग्रेन",
  },
  gu: {
    "Better Sleep & Insomnia": "સારી ઊંઘ અને અનિદ્રા",
    "Acidity & Heartburn": "એસિડિટી અને છાતીમાં બળતરા",
    "Stress & Anxiety Calm": "તણાવ અને માનસિક શાંતિ",
    "Ashwagandha Uses": "અશ્વગંધાના ઉપયોગો અને ફાયદા",
    "Triphala & Digestion": "ત્રિફળા અને પાચન શુદ્ધિ",
    "Joint Pain & Arthritis": "સાંધાનો દુખાવો અને સંધિવા",
    "Gas & Bloating": "ગેસ અને પેટ ફૂલવું",
    "Cough & Cold Relief": "ખાંસી અને શરદીમાં રાહત",
    "Clear Skin & Eczema": "ચમકદાર ત્વચા અને ખરજવું",
    "Low Energy & Fatigue": "થાક અને નબળાઈ દૂર કરો",
    "Neck & Back Stiffness": "ગરદન અને કમરનો દુખાવો",
    "Headache & Migraine": "માથાનો દુખાવો અને આધાશીશી",
  },
};

export const dailyTipsI18n: Record<Language, string[]> = {
  en: [
    "Step into morning daylight to support your natural sleep–wake rhythm.",
    "Pause for three slow breaths before your next meal to prime digestion.",
    "A short, comfortable walk can be a meaningful form of restorative movement.",
    "Build today’s plate around color, variety, and foods you digest comfortably.",
    "A consistent bedtime often matters more than a complex nighttime routine.",
    "Hydration needs vary—let thirst, climate, and physical activity guide you.",
    "Small mindful routines practiced consistently create lasting vital health.",
  ],
  hi: [
    "प्रातःकाल की धूप में जाएं ताकि आपकी प्राकृतिक नींद-जागने की जैविक लय संतुलित रहे।",
    "भोजन करने से पहले तीन गहरी और शांत सांसें लें ताकि पाचन अग्नि सक्रिय हो सके।",
    "भोजन के बाद 100 कदम की शांत सैर पाचन और ऊर्जा के लिए अत्यंत लाभकारी है।",
    "आज की थाली में विविध रंगों और आसानी से पचने वाले ताजे भोजन को शामिल करें।",
    "रात को सोने का एक निश्चित समय रखना अत्यधिक जटिल दिनचर्या से कहीं अधिक प्रभावी है।",
    "पानी की आवश्यकता शरीर, मौसम और गतिविधि के अनुसार बदलती है—प्यास के अनुसार जल पिएं।",
    "कठिन उपवासों की तुलना में छोटे-छोटे दैनिक नियम निरंतर अपनाना अधिक टिकाऊ और स्वास्थ्यवर्धक है।",
  ],
  gu: [
    "સવારના કુદરતી તડકામાં થોડો સમય વિતાવો જેથી ઊંઘ અને જાગવાની જૈવિક લય બરાબર રહે.",
    "જમતા પહેલા ત્રણ ઊંડા અને શાંત શ્વાસ લો જેથી જઠરાગ્નિ સારી રીતે સક્રિય થાય.",
    "જમ્યા પછી ૧૦૦ ડગલાં શાંતિથી ચાલવું એ પાચન અને સ્ફૂર્તિ માટે ખૂબ ગુણકારી છે.",
    "આજના ભોજનમાં વિવિધ રંગો અને સરળતાથી પચી શકે તેવા તાજા ખોરાકનો સમાવેશ કરો.",
    "રાત્રે સૂવાનો ચોક્કસ સમય રાખવો એ કોઈ પણ અઘરી દિનચર્યા કરતાં વધારે લાભદાયી છે.",
    "પાણીની જરૂરિયાત ઋતુ અને શરીર મુજબ બદલાય છે—તરસ લાગે તે મુજબ શુદ્ધ પાણી પીવો.",
    "કઠિન ઉપવાસો કરતાં રોજિંદા નાના સારા નિયમો સતત પાળવા વધુ ફાયદાકારક છે.",
  ],
};

export const modalitiesI18n: Record<Language, Array<[string, string, string, string]>> = {
  en: [
    ["🌿", "Ayurveda", "A traditional Indian system emphasizing individualized routines, food, movement, and balance.", "Evidence varies by practice; traditional concepts are not medical diagnoses."],
    ["🍵", "Herbal traditions", "Plants and spices are used across cultures as foods, teas, and preparations.", "Quality and evidence vary. Herbs can interact with medicines."],
    ["🧘", "Yoga", "Postures and mindful movement may support mobility, balance, and stress management.", "Adapt practice for pain, pregnancy, injury, or medical conditions."],
    ["🪷", "Meditation", "Attention practices may help some people manage stress and build awareness.", "Not a substitute for mental health treatment or crisis support."],
    ["🌬️", "Breathing exercises", "Slow, comfortable breathing can offer a brief relaxation practice.", "Stop with dizziness; avoid forceful breath holding without guidance."],
    ["🥗", "Nutrition", "A varied eating pattern can support broad health needs.", "Needs differ with allergies, culture, medicines, and medical conditions."],
    ["💧", "Hydration", "Regular fluid intake supports normal body functions.", "Some heart or kidney conditions require individualized fluid limits."],
    ["😴", "Sleep & recovery", "Consistent timing and a calm routine can support restorative sleep.", "Persistent insomnia or daytime sleepiness deserves assessment."],
    ["🏃", "Exercise & movement", "Regular, suitable movement supports physical and mental wellbeing.", "Build gradually and seek advice for new or concerning symptoms."],
    ["🌱", "Naturopathy", "A broad approach often focused on lifestyle and non-drug therapies.", "Training and evidence vary; it should complement qualified care."],
    ["🌸", "Aromatherapy", "Some people use aromas as part of relaxation rituals.", "Do not ingest essential oils; diluted products can still cause reactions."],
    ["💆", "Massage", "Touch and soft-tissue work may offer short-term relaxation or comfort.", "Avoid over injuries, clots, infections, or when medically contraindicated."],
    ["👐", "Acupressure", "Pressure at specific points is used in several traditional practices.", "Evidence is mixed and it is not appropriate over injured tissue."],
    ["☯️", "Traditional Chinese Medicine", "Includes traditional frameworks, movement, acupuncture, and herbal practice.", "Seek appropriately credentialed care; herbal interactions are possible."],
    ["🛀", "Hydrotherapy", "Warm or cool water may be used for comfort and recovery.", "Avoid unsafe temperatures, especially with reduced sensation."],
    ["🌞", "Lifestyle & sunlight", "Daily rhythm, outdoor time, connection, and movement can support wellbeing.", "Protect skin and consider heat, medications, and individual risk."],
  ],
  hi: [
    ["🌿", "आयुर्वेद", "व्यक्तिगत प्रकृति, आहार, दिनचर्या और त्रिदोष संतुलन पर आधारित प्राचीन भारतीय चिकित्सा विज्ञान।", "पारंपरिक अवधारणाएं व्यक्तिगत हैं; यह आपातकालीन निदान का विकल्प नहीं हैं।"],
    ["🍵", "हर्बल परंपराएं", "विभिन्न संस्कृतियों में पौधों, पत्तियों व मसालों का औषधीय चाय व चूर्ण के रूप में उपयोग।", "जड़ी-बूटियों की गुणवत्ता महत्वपूर्ण है। दवाओं के साथ इनके परस्पर प्रभाव की जांच करें।"],
    ["🧘", "योग विज्ञान", "आसन और सूक्ष्म व्यायाम जो शरीर के लचीलेपन, रीढ़ की शक्ति और मानसिक शांति को बढ़ाते हैं।", "चोट, गर्भावस्था या गंभीर जोड़ों के दर्द में विशेष मार्गदर्शन आवश्यक है।"],
    ["🪷", "ध्यान (मेडिटेशन)", "एकाग्रता और साक्षी भाव का अभ्यास जो तनाव दूर कर मानसिक स्पष्टता लाता है।", "गंभीर मानसिक विकारों में योग्य चिकित्सक की सलाह का विकल्प नहीं।"],
    ["🌬️", "प्राणायाम व श्वास अभ्यास", "धीमी और नियंत्रित श्वास क्रियाएं जो तंत्रिका तंत्र को तुरंत शांत करती हैं।", "चक्कर आने पर रुकें; बिना अभ्यास के जबरन श्वास न रोकें।"],
    ["🥗", "आहार एवं पोषण", "ताजा, सात्विक और मौसम के अनुकूल संतुलित भोजन जो अग्नि और ओजस को बढ़ाता है।", "व्यक्तिगत एलर्जी और पाचन शक्ति के अनुसार आहार तय करें।"],
    ["💧", "जल सेवन व हाइड्रेशन", "नियमित गुनगुने या ताजे जल का सेवन जो शरीर से विषाक्त तत्व बाहर निकालता है।", "गुर्दे या हृदय रोग में पानी की मात्रा चिकित्सक के अनुसार रखें।"],
    ["😴", "निद्रा एवं विश्राम", "नियमित समय पर गहरी नींद जो शरीर के ऊतकों की मरम्मत और मस्तिष्क विश्राम कराती है।", "लगातार अनिद्रा होने पर चिकित्सकीय मूल्यांकन आवश्यक है।"],
    ["🏃", "व्यायाम एवं गतिशीलता", "दैनिक हल्का या मध्यम शारीरिक श्रम जो रक्तसंचार और मेटाबॉलिज्म को सुचारु रखता है।", "अपनी क्षमता अनुसार धीरे-धीरे अभ्यास बढ़ाएं।"],
    ["🌱", "प्राकृतिक चिकित्सा", "दवा रहित जीवनशैली, मिट्टी-जल-धूप चिकित्सा जो शरीर की स्वयं ठीक होने की क्षमता जगाती है।", "योग्य प्राकृतिक चिकित्सक के मार्गदर्शन में ही अपनाएं।"],
    ["🌸", "सुगंध चिकित्सा (Aromatherapy)", "प्राकृतिक फूलों व औषधीय तेलों की सुगंध से तनावमुक्ति और मन की शांति।", "एसेंशियल ऑयल का सीधे सेवन न करें; त्वचा पर हमेशा मिलाकर लगाएं।"],
    ["💆", "अभ्यंग व मालिश", "गर्म तिल या औषधीय तेलों से मालिश जो वात दोष शांत कर जोड़ों को पोषण देती है।", "सूजन, घाव या बुखार की अवस्था में मालिश न करें।"],
    ["👐", "एक्यूप्रेशर", "विशेष ऊर्जा बिंदुओं पर दबाव देकर दर्द से राहत और ऊर्जा प्रवाह को सुगम बनाना।", "चोटग्रस्त या सूजे हुए हिस्से पर दबाव न दें।"],
    ["☯️", "पारंपरिक चीनी चिकित्सा", "यिन-यांग और ची ऊर्जा के संतुलन पर आधारित एक्यूपंक्चर और हर्बल पद्धति।", "लाइसेंस प्राप्त विशेषज्ञ से ही उपचार कराएं।"],
    ["🛀", "जल चिकित्सा (Hydrotherapy)", "गर्म और ठंडे पानी के स्नान या भाप से रक्तसंचार और मांसपेशियों की शिथिलता दूर करना।", "अत्यधिक तापमान से बचें, विशेषकर संवेदनशील त्वचा में।"],
    ["🌞", "दिनचर्या व सूर्यप्रकाश", "सुबह की धूप, खुली हवा और प्रकृति से जुड़ाव जो मेलाटोनिन और विटामिन डी को संतुलित करता है।", "अत्यधिक तेज धूप से त्वचा की रक्षा करें।"],
  ],
  gu: [
    ["🌿", "આયુર્વેદ", "વ્યક્તિગત પ્રકૃતિ, ખોરાક, દિનચર્યા અને ત્રિદોષ સંતુલન પર આધારિત પ્રાચીન ભારતીય વિજ્ઞાન.", "પરંપરાગત ઉપચારો વ્યક્તિગત છે; તે ઈમરજન્સી મેડિકલ સારવારનો વિકલ્પ નથી."],
    ["🍵", "વનસ્પતિ પરંપરાઓ", "વનસ્પતિઓ, પાંદડા અને મસાલાઓનો ઘરગથ્થુ ઔષધિ કે ઉકાળા તરીકે ઉપયોગ.", "જડીબુટ્ટીઓની ગુણવત્તા મહત્વની છે. દવાઓ સાથે તેના રિએક્શનની કાળજી રાખો."],
    ["🧘", "યોગ વિજ્ઞાન", "આસનો અને હળવી કસરતો જે શરીરની લચીલાપણું અને માનસિક શાંતિ જાળવે છે.", "ઈજા કે ગર્ભાવસ્થા દરમિયાન નિષ્ણાતની દેખરેખ હેઠળ જ યોગ કરો."],
    ["🪷", "ધ્યાન (મેડિટેશન)", "એકાગ્રતા અને મનની સ્થિરતાનો અભ્યાસ જે ચિંતા અને તણાવ દૂર કરે છે.", "ગંભીર માનસિક સમસ્યાઓમાં ડૉક્ટરની સલાહ જરૂરી છે."],
    ["🌬️", "પ્રાણાયામ અને શ્વાસની કસરત", "ધીમા અને નિયંત્રિત શ્વાસ લેવાથી નર્વસ સિસ્ટમ શાંત થાય છે અને પ્રાણવાયુ વધે છે.", "ચક્કર આવે તો તરત અટકી જાવ; બળપૂર્વક શ્વાસ ન રોકો."],
    ["🥗", "આહાર અને પોષણ", "તાજો, સાત્વિક અને પચી શકે તેવો પૌષ્ટિક ખોરાક જે ઓજસ અને રોગપ્રતિકારક શક્તિ વધારે છે.", "શરીરની પ્રકૃતિ અને એલર્જી ધ્યાનમાં રાખીને ખોરાક લો."],
    ["💧", "પાણી અને જળસંચય", "સમયસર હૂંફાળા કે સાદા પાણીનું સેવન જે શરીરના કચરાને બહાર ફેંકે છે.", "હૃદય કે કિડનીના રોગોમાં ડૉક્ટરના કહ્યા મુજબ જ પાણી પીવું."],
    ["😴", "ઊંઘ અને આરામ", "નિયમિત સમયે ગાઢ ઊંઘ જે શરીરને નવી ઊર્જા આપે છે અને મગજ તાજું કરે છે.", "સતત ઊંઘ ન આવતી હોય તો તપાસ કરાવો."],
    ["🏃", "વ્યાયામ અને શારીરિક શ્રમ", "દરરોજ હળવી કસરત કે ઝડપી ચાલવું જે પાચન અને રક્તસંચાર સુધારે છે.", "પોતાની ક્ષમતા મુજબ ધીમે ધીમે કસરત વધારવી."],
    ["🌱", "કુદરતી ઉપચાર (નેચરોપેથી)", "દવા વગર કુદરતી તત્વો (માટી, પાણી, સૂર્યપ્રકાશ) દ્વારા શરીરને સ્વસ્થ રાખવાની રીત.", "યોગ્ય કુદરતી ચિકિત્સકની સલાહ મુજબ જ અપનાવો."],
    ["🌸", "સુગંધ ચિકિત્સા", "સુગંધિત વનસ્પતિ તેલ દ્વારા તણાવ મુક્તિ અને તાજગી મેળવવાનો પ્રયોગ.", "તેલ પીવું નહીં; ચામડી પર યોગ્ય રીતે મિક્સ કરીને જ લગાડવું."],
    ["💆", "અભ્યંગ અને માલિશ", "હૂંફાળા તલ કે સરસવના તેલથી માલિશ જે વાયુ શાંત કરે છે અને સાંધા મજબૂત બનાવે છે.", "સોજો, તાવ કે ઇજા હોય ત્યારે માલિશ ન કરવી."],
    ["👐", "એક્યુપ્રેશર", "શરીરના ચોક્કસ પોઇન્ટ્સ દબાવીને દુખાવામાં રાહત મેળવવાની પરંપરાગત કળા.", "સોજો કે ઘા વાળી જગ્યાએ દબાણ ન આપવું."],
    ["☯️", "પરંપરાગત ચાઈનીઝ ચિકિત્સા", "યિન-યાંગ અને એક્યુપંક્ચર પર આધારિત પ્રાચીન સારવાર પદ્ધતિ.", "પ્રમાણિત નિષ્ણાત પાસે જ સારવાર લેવી."],
    ["🛀", "જળ ચિકિત્સા", "ગરમ-ઠંડા પાણીના સ્નાન કે શેક દ્વારા થાક અને સ્નાયુઓનો દુખાવો દૂર કરવો.", "વધારે પડતા ગરમ પાણીથી બચવું."],
    ["🌞", "દિનચર્યા અને સૂર્યપ્રકાશ", "સવારનો કુદરતી તડકો અને ખુલ્લી હવા જે વિટામિન ડી અને માનસિક ઉલ્લાસ આપે છે.", "બપોરના આકરા તડકાથી ત્વચાનું રક્ષણ કરો."],
  ],
};

export const dinacharyaStepsI18n: Record<
  Language,
  Array<{ phase: string; tips: string[] }>
> = {
  en: [
    {
      phase: "Morning Ritual (Brahma Muhurta · 6:00 AM – 10:00 AM)",
      tips: [
        "Awaken near dawn before 6 AM to absorb Sattvic lightness.",
        "Scrape tongue gently with copper/steel and drink 1-2 cups of warm water with lemon or ginger to ignite Agni.",
        "Practice 15 minutes of gentle Surya Namaskar (Sun Salutations) followed by Nadi Shodhana (Alternate Nostril Breath).",
      ],
    },
    {
      phase: "Midday Rhythm (Peak Agni · 10:00 AM – 2:00 PM)",
      tips: [
        "Digestive fire is at its peak; make lunch the most nourishing and substantial meal of your day.",
        "Eat mindfully without screens; favor cooked, spiced, vibrant vegetables and grains.",
        "Take a peaceful 100-step stroll after eating to encourage optimal assimilation and prevent lethargy.",
      ],
    },
    {
      phase: "Evening & Wind Down (Restorative · 6:00 PM – 10:00 PM)",
      tips: [
        "Enjoy a light, easily digestible dinner at least 3 hours before sleep (by 7:00 PM).",
        "Digital sunset: disconnect from screens 1 hour before bed to allow melatonin production.",
        "Sip warm chamomile or golden milk with a pinch of nutmeg, and sleep before 10:00 PM to protect Vata.",
      ],
    },
  ],
  hi: [
    {
      phase: "प्रातःकालीन नियम (ब्रह्म मुहूर्त · प्रातः 6:00 – 10:00)",
      tips: [
        "सूर्योदय से पूर्व जागें ताकि सात्विक ऊर्जा और ताजगी प्राप्त हो सके।",
        "तांबे या स्टील के छिलनी से जीभ साफ करें और जठराग्नि प्रदीप्त करने के लिए 1-2 गिलास गुनगुना पानी पिएं।",
        "15 मिनट सूर्य नमस्कार और नाड़ी शोधन प्राणायाम का अभ्यास करें जिससे मन और नसें शांत रहें।",
      ],
    },
    {
      phase: "मध्याह्न पाचन (दीप्त अग्नि काल · 10:00 – दोपहर 2:00)",
      tips: [
        "पाचन अग्नि दोपहर में अपने चरम पर होती है; दिन का मुख्य और पौष्टिक भोजन दोपहर में ही करें।",
        "भोजन करते समय स्क्रीन बंद रखें; ताजा, पकाया हुआ और पाचक मसालों से युक्त आहार लें।",
        "भोजन के बाद 100 कदम की शांत सैर करें ताकि भोजन आसानी से पचे और आलस्य न आए।",
      ],
    },
    {
      phase: "सायंकालीन विश्राम (पुनर्स्थापन काल · सायं 6:00 – रात्रि 10:00)",
      tips: [
        "सोने से कम से कम 3 घंटे पहले हल्का और सुपाच्य भोजन (शाम 7-8 बजे तक) कर लें।",
        "डिजिटल सूर्यास्त: सोने से 1 घंटा पहले मोबाइल और टीवी से दूरी बनाएं।",
        "हल्दी वाला गुनगुना दूध पिएं और वात दोष को शांत रखने के लिए रात्रि 10 बजे तक सो जाएं।",
      ],
    },
  ],
  gu: [
    {
      phase: "સવારનો ક્રમ (બ્રહ્મ મુહૂર્ત · સવારે 6:00 થી 10:00)",
      tips: [
        "સૂર્યોદય પહેલા જાગો જેથી સાત્વિક ઊર્જા અને આખો દિવસ તાજગી રહે.",
        "તાંબા કે સ્ટીલની ઉલિયાથી જીભ સાફ કરો અને જઠરાગ્નિ જગાડવા ૧-૨ ગ્લાસ નવશેકું પાણી પીવો.",
        "૧૫ મિનિટ હળવા સૂર્ય નમસ્કાર અને અનુલોમ-વિલોમ પ્રાણાયામ કરો જેથી મન સ્થિર બને.",
      ],
    },
    {
      phase: "બપોરની લય (પ્રદીપ્ત અગ્નિ · સવારે 10:00 થી બપોરે 2:00)",
      tips: [
        "બપોરે પાચન અગ્નિ સૌથી તેજ હોય છે; દિવસનું મુખ્ય અને પૌષ્ટિક ભોજન બપોરે જ લો.",
        "મોબાઈલ કે ટીવી જોયા વગર શાંતિથી જમો; તાજો, ગરમ અને મસાલેદાર રાંધેલો ખોરાક લો.",
        "જમ્યા પછી ૧૦૦ ડગલાં શાંતિથી ચાલો જેથી ખોરાક સરસ રીતે પચી જાય અને સુસ્તી ન ચડે.",
      ],
    },
    {
      phase: "સાંજનો આરામ (ઊંઘની તૈયારી · સાંજે 6:00 થી રાત્રે 10:00)",
      tips: [
        "સૂવાના ઓછામાં ઓછા ૩ કલાક પહેલા હળવું અને જલદી પચી જાય તેવું ભોજન કરી લો.",
        "ડિજિટલ સૂર્યાસ્ત: સૂવાના ૧ કલાક પહેલા મોબાઇલ અને સ્ક્રીન બંધ કરી દો.",
        "રાત્રે હૂંફાળું હળદરવાળું દૂધ પીવો અને વાયુ દોષથી બચવા રાત્રે ૧૦ વાગ્યા સુધીમાં સૂઈ જાઓ.",
      ],
    },
  ],
};

export const doshasI18n: Record<
  Language,
  Array<{
    name: string;
    element: string;
    characteristics: string;
    imbalance: string;
    balancing: string;
  }>
> = {
  en: [
    {
      name: "Vata (Air & Space)",
      element: "Wind & Ether",
      characteristics: "Governs movement, circulation, and nerve impulses. Quick, creative, and enthusiastic.",
      imbalance: "Anxiety, dry skin, constipation, racing thoughts, and sleep disturbance.",
      balancing: "Warm, oily, grounding cooked meals (soups, stews, root vegetables), warm sesame oil massage, and soothing routine.",
    },
    {
      name: "Pitta (Fire & Water)",
      element: "Fire & Water",
      characteristics: "Governs digestion, metabolism, body temperature, and intellect. Sharp, purposeful, and ambitious.",
      imbalance: "Acidity, heartburn, skin inflammation, irritability, and impatience.",
      balancing: "Cooling foods (cucumber, coconut, sweet fruits), moderate exercise, fresh air, coriander water, and meditation.",
    },
    {
      name: "Kapha (Earth & Water)",
      element: "Earth & Water",
      characteristics: "Governs body structure, lubrication, immunity, and stamina. Calm, loving, patient, and grounded.",
      imbalance: "Sluggishness, weight gain, congestion, attachment, and lethargy.",
      balancing: "Light, dry, warm spiced foods (ginger, black pepper), vigorous physical exercise, variety, and avoiding heavy sweets.",
    },
  ],
  hi: [
    {
      name: "वात (वायु एवं आकाश)",
      element: "वायु और आकाश",
      characteristics: "गति, रक्तसंचार और तंत्रिका तंत्र का संचालन करता है। चंचल, रचनात्मक और ऊर्जावान।",
      imbalance: "चिंता, रूखी त्वचा, कब्ज, अनियंत्रित विचार और अनिद्रा।",
      balancing: "गर्म, तैलीय, ताजा पका हुआ भोजन (सूप, खिचड़ी), तिल के तेल की मालिश और शांत दिनचर्या।",
    },
    {
      name: "पित्त (अग्नि एवं जल)",
      element: "अग्नि और जल",
      characteristics: "पाचन, मेटाबॉलिज्म, शरीर का तापमान और बुद्धि का नियंत्रण। तीक्ष्ण, केंद्रित और साहसी।",
      imbalance: "एसिडिटी, सीने में जलन, त्वचा में लालिमा, गुस्सा और चिड़चिड़ापन।",
      balancing: "शीतल आहार (खीरा, नारियल पानी, मीठे फल), धनिया जल, खुली हवा और नियमित ध्यान।",
    },
    {
      name: "कफ (पृथ्वी एवं जल)",
      element: "पृथ्वी और जल",
      characteristics: "शारीरिक संरचना, चिकनाई, रोग प्रतिरोधक क्षमता और स्थिरता। शांत, स्नेही और धैर्यवान।",
      imbalance: "आलस्य, भारीपन, वजन बढ़ना, बलगम और अत्यधिक मोह।",
      balancing: "हल्का, गर्म व तीखा भोजन (अदरक, काली मिर्च), सक्रिय व्यायाम और भारी मीठे व्यंजनों से बचाव।",
    },
  ],
  gu: [
    {
      name: "વાત (વાયુ અને આકાશ)",
      element: "વાયુ અને આકાશ",
      characteristics: "હલનચલન, રક્તસંચાર અને નર્વસ સિસ્ટમનું સંચાલન કરે છે. ચપળ, રચનાત્મક અને ઉત્સાહી.",
      imbalance: "ચિંતા, સુકી ચામડી, કબજિયાત, વિચારોનો વંટોળ અને અનિદ્રા.",
      balancing: "ગરમ, તેલીય, રાંધેલો ખોરાક (સૂપ, ખીચડી), તલના તેલની માલિશ અને નિયમિત આરામ.",
    },
    {
      name: "પિત્ત (અગ્નિ અને જળ)",
      element: "અગ્નિ અને જળ",
      characteristics: "પાચન, મેટાબોલિઝમ, શરીરનું તાપમાન અને બુદ્ધિનું નિયંત્રણ. તેજસ્વી, હિંમતવાન અને નિર્ણયક્ષમ.",
      imbalance: "એસિડિટી, છાતીમાં બળતરા, ત્વચા પર લાલાશ, ક્રોધ અને અધીરાઈ.",
      balancing: "ઠંડા ખોરાક (કાકડી, નાળિયેર પાણી, મીઠા ફળો), ધાણાજીરું પાણી, ખુલ્લી હવા અને ધ્યાન.",
    },
    {
      name: "કફ (પૃથ્વી અને જળ)",
      element: "પૃથ્વી અને જળ",
      characteristics: "શરીરનું બંધારણ, સ્નિગ્ધતા, રોગપ્રતિકારક શક્તિ અને સ્થિરતા. શાંત, પ્રેમાળ અને ધીરજવાન.",
      imbalance: "સુસ્તી, વજન વધવું, કફ ભરાવો અને આળસ.",
      balancing: "હળવો, સૂકો અને મસાલેદાર ગરમ ખોરાક (આદુ, કાળા મરી), સક્રિય કસરત અને ભારે મીઠાઈથી પરેજી.",
    },
  ],
};

export const conditionTranslations: Record<
  string,
  Partial<Record<Language, { name: string; summary: string }>>
> = {
  "acidity-heartburn": {
    hi: { name: "एसिडिटी और सीने में जलन", summary: "अत्यधिक पित्त दोष के कारण सीने में जलन और खट्टी डकारें। ठंडे घरेलू उपचारों से शांति मिलती है।" },
    gu: { name: "એસિડિટી અને છાતીમાં બળતરા", summary: "વધારે પડતા પિત્ત દોષને કારણે છાતીમાં બળતરા અને ખાટા ઓડકાર. ઠંડા દેશી ઉપચારોથી રાહત મળે છે." },
  },
  "indigestion": {
    hi: { name: "अपच और मंदाग्नि", summary: "कमजोर जठराग्नि के कारण भारीपन और पेट फूलना। पाचक मसालों से तुरंत राहत मिलती है।" },
    gu: { name: "અપચો અને મંદાગ્નિ", summary: "નબળી જઠરાગ્નિને લીધે પેટ ભારે લાગવું. પાચક મસાલાથી ઝડપી રાહત મળે છે." },
  },
  "constipation": {
    hi: { name: "कब्ज (मलावरोध)", summary: "आंतों में रूखापन और अपान वात की रुकावट। त्रिफला और गर्म पानी लाभकारी है।" },
    gu: { name: "કબજિયાત", summary: "આંતરડામાં સુકાપણું અને અપાન વાયુનો અવરોધ. ત્રિફળા અને ગરમ પાણી ખૂબ ફાયદાકારક છે." },
  },
  "gas-bloating": {
    hi: { name: "पेट फूलना और गैस (आध्मान)", summary: "पेट में फंसी वायु और मंद पाचन। हींग, अजवाइन और सौंफ के सेवन से राहत मिलती है।" },
    gu: { name: "પેટ ફૂલવું અને ગેસ", summary: "પેટમાં ભરાયેલ વાયુ અને ધીમું પાચન. હિંગ, અજમો અને વરિયાળીથી આરામ મળે છે." },
  },
  "diarrhea": {
    hi: { name: "दस्त और अतिसार", summary: "पतले दस्त और पित्त का असंतुलन। बेल का शरबत, छाछ और कुटज से आंतों को बल मिलता है।" },
    gu: { name: "ઝાડા અને અતિસાર", summary: "પાતળા ઝાડા અને પિત્તનું અસંતુલન. બીલીનું શરબત, છાશ અને કુટજથી આંતરડા મજબૂત બને છે." },
  },
  "irritable-bowel-syndrome": {
    hi: { name: "संग्रहणी (IBS)", summary: "पाचन तंत्र की संवेदनशीलता और अनियमित मलत्याग। तक्र (छाछ) और सोंठ का सेवन लाभकारी है।" },
    gu: { name: "સંગ્રહણી (IBS)", summary: "પાચનતંત્રની સંવેદનશીલતા અને અનિયમિત મળત્યાગ. છાશ અને સૂંઠનું સેવન ગુણકારી છે." },
  },
  "nausea": {
    hi: { name: "जी मिचलाना (उबकाई)", summary: "उल्टी जैसा लगना और कफ-पित्त प्रकोप। अदरक का रस और नींबू-सेंधा नमक तुरंत राहत देते हैं।" },
    gu: { name: "ઉબકા અને ઊલટી જેવું થવું", summary: "કફ અને પિત્તના પ્રકોપથી ઉબકા આવવા. આદુનો રસ અને લીંબુ-સિંધવ મીઠું તુરંત રાહત આપે છે." },
  },
  "common-cold": {
    hi: { name: "सामान्य जुकाम व प्रतिश्याय", summary: "कफ और वात का प्रकोप, छींकें और बहती नाक। तुलसी, अदरक और काली मिर्च की चाय लाभकारी है।" },
    gu: { name: "સામાન્ય શરદી અને સળેખમ", summary: "કફ અને વાયુનો પ્રકોપ, છીંકો અને વહેતું નાક. તુલસી, આદુ અને મરીવાળી ચા ગુણકારી છે." },
  },
  "cough": {
    hi: { name: "खांसी और कास", summary: "सूखी या बलगम वाली खांसी। सितोपलादि चूर्ण, शहद और मुलेठी से गले को आराम मिलता है।" },
    gu: { name: "ખાંસી અને ઉધરસ", summary: "સૂકી કે કફવાળી ખાંસી. સિતોપલાદિ ચૂર્ણ, મધ અને જેઠીમધથી ગળાને તરત આરામ મળે છે." },
  },
  "sore-throat": {
    hi: { name: "गले में खराश और दर्द", summary: "गले में जलन और निगलने में तकलीफ। हल्दी-नमक के गरारे और मुलेठी का काढ़ा गुणकारी है।" },
    gu: { name: "ગળામાં ખારાશ અને દુખાવો", summary: "ગળામાં બળતરા અને સોજો. હળદર-મીઠાના કોગળા અને જેઠીમધનો ઉકાળો ખૂબ ફાયદાકારક છે." },
  },
  "seasonal-allergies": {
    hi: { name: "मौसमी एलर्जी और छींकें", summary: "कफ और वात का असंतुलन। हरिद्रा खंड, तुलसी और अदरक से श्वसन मार्ग साफ होता है।" },
    gu: { name: "મોસમી એલર્જી અને છીંકો", summary: "કફ અને વાયુનું અસંતુલન. હળદર, તુલસી અને આદુથી શ્વાસનળીઓ સાફ થાય છે." },
  },
  "sinus-congestion": {
    hi: { name: "साइनस और बंद नाक (पीनस)", summary: "सिर में भारीपन और नासिका अवरोध। नीलगिरी भाप और अणु तैल नस्य से मार्ग खुलता है।" },
    gu: { name: "સાઇનસ અને બંધ નાક", summary: "માથામાં ભારેપણું અને નાક બંધ થવું. નીલગિરીનો નાસ અને અણુ તેલ નસ્યથી રસ્તો ખુલે છે." },
  },
  "asthma": {
    hi: { name: "दमा और श्वास रोग (अस्थमा)", summary: "श्वासनलियों में सूजन और सांस लेने में कठिनाई। वासा, कंटकारी और प्राणायाम से फेफड़े सुधरते हैं।" },
    gu: { name: "દમ અને શ્વાસની તકલીફ (અસ્થમા)", summary: "શ્વાસનળીમાં સોજો અને કફ. અરડૂસી, કંટાકારી અને પ્રાણાયામથી ફેફસાં મજબૂત બને છે." },
  },
  "type-2-diabetes": {
    hi: { name: "मधुमेह (टाइप-2 डायबिटीज)", summary: "कफ प्रधान प्रमेह विकार। जामुन की गुठली, करेला, मेथी दाना और विजयसार से शर्करा नियंत्रित रहती है।" },
    gu: { name: "ડાયાબિટીસ (પ્રમેહ)", summary: "શરીરમાં કફ પ્રકોપ અને વધતી ખાંડ. જાંબુના ઠળિયા, કારેલા, મેથી અને વિજયસારથી સુગર કંટ્રોલમાં રહે છે." },
  },
  "high-blood-pressure": {
    hi: { name: "उच्च रक्तचाप (हाई बीपी)", summary: "वात और पित्त का दबाव। सर्पगंधा, अर्जुन की छाल और ब्राह्मी से धमनियों को शांति मिलती है।" },
    gu: { name: "હાઈ બ્લડ પ્રેશર (ઉચ્ચ રક્તચાપ)", summary: "વાયુ અને પિત્તનું દબાણ. અર્જુનની છાલ, સર્પગંધા અને બ્રાહ્મીથી હૃદય અને નસો શાંત થાય છે." },
  },
  "high-cholesterol": {
    hi: { name: "हाई कोलेस्ट्रॉल (मेदो रोग)", summary: "धमनियों में जमा आम और मेद। गुग्गुलु, लहसुन और त्रिफला से रक्तवाहिकाएं शुद्ध होती हैं।" },
    gu: { name: "હાઈ કોલેસ્ટ્રોલ (મેદ વૃદ્ધિ)", summary: "નસોમાં જામતી ચરબી. ગૂગળ, લસણ અને ત્રિફળાથી લોહી સાફ થાય છે અને ચરબી ઘટે છે." },
  },
  "weight-management": {
    hi: { name: "वजन नियंत्रण और स्थौल्य", summary: "अत्यधिक कफ और मंद मेदोधातु। गुनगुने पानी में शहद-नींबू, मेथी दाना और नियमित व्यायाम जरूरी है।" },
    gu: { name: "વજન નિયંત્રણ (મેદસ્વીતા)", summary: "વધતો કફ અને ધીમું મેટાબોલિઝમ. નવશેકા પાણીમાં મધ-લીંબુ, મેથી અને ચાલવાથી વજન નિયંત્રિત થાય છે." },
  },
  "fatty-liver": {
    hi: { name: "फैटी लिवर (यकृत वृद्धि)", summary: "यकृत में पित्त और कफ की विकृति। भूमि आंवला, कालमेघ और पुनर्नवा लिवर कोशिकाओं को नया जीवन देते हैं।" },
    gu: { name: "ફેટી લિવર (યકૃત રોગ)", summary: "લિવરમાં ચરબી અને પિત્તનો બગાડ. ભોંય આમળા, કાલમેઘ અને પુનર્નવા લિવરને નવી શક્તિ આપે છે." },
  },
  "metabolic-wellness": {
    hi: { name: "मेटाबॉलिक स्वास्थ्य", summary: "जठराग्नि और धातुओं का संतुलन। त्रिकटु, हरितकी और ताजे संतुलित आहार से ऊर्जा स्थिर रहती है।" },
    gu: { name: "મેટાબોલિક સ્વાસ્થ્ય", summary: "જઠરાગ્નિ અને ધાતુઓનું સંતુલન. ત્રિકટુ, હરડે અને તાજા ખોરાકથી શરીરમાં ચપળતા રહે છે." },
  },
  "acne": {
    hi: { name: "मुंहासे और पिंपल्स (युवानपिड़का)", summary: "रक्त और पित्त की अशुद्धि। नीम, मंजिष्ठा और चंदन का लेप चेहरे को साफ करता है।" },
    gu: { name: "ખીલ અને મોં પર ફોડલીઓ", summary: "લોહી અને પિત્તની ગરમી. લીમડો, મંજીષ્ઠા અને ચંદનનો લેપ ચહેરો નિખારે છે." },
  },
  "eczema": {
    hi: { name: "एक्जिमा और त्वचा विकार (विचर्चिका)", summary: "रक्त में पित्त की अधिकता और त्वचा में खुजली। नीम और मंजिष्ठा रक्त शोधन करते हैं।" },
    gu: { name: "ધાધર અને ખરજવું (એક્ઝિમા)", summary: "લોહીમાં પિત્તનો બગાડ અને ખંજવાળ. લીમડો અને મંજીષ્ઠા લોહી શુદ્ધ કરે છે." },
  },
  "dry-skin": {
    hi: { name: "रूखी त्वचा (वात विकार)", summary: "त्वचा में नमी की कमी और वात प्रकोप। नारियल तेल, तिल का तेल और एलोवेरा से त्वचा मुलायम होती है।" },
    gu: { name: "સુકી ત્વચા (વાયુ પ્રકોપ)", summary: "ત્વચામાં ભેજનો અભાવ. કોપરેલ, તલનું તેલ અને એલોવેરા ત્વચાને મુલાયમ રાખે છે." },
  },
  "psoriasis": {
    hi: { name: "सोरायसिस और किटिभ", summary: "वात-कफ की विकृति और त्वचा पर पपड़ी। खदिरारिष्ट, नीम का तेल और शोधन चिकित्सा उपयोगी है।" },
    gu: { name: "સોરાયસિસ (ખીલવાળી ત્વચા)", summary: "વાયુ અને કફની વિકૃતિ. ખદિરારિષ્ટ, લીમડાનું તેલ અને પંચકર્મથી મોટી રાહત મળે છે." },
  },
  "dandruff": {
    hi: { name: "रूसी और डैंड्रफ (दारुणक)", summary: "सिर की त्वचा में रूखापन या कफ फंगस। भृंगराज तेल, मेथी का लेप और खट्टी छाछ से सिर साफ होता है।" },
    gu: { name: "ખોડો અને ડેન્ડ્રફ", summary: "માથામાં ખોડો અને ખંજવાળ. ભૃંગરાજ તેલ, મેથીનો લેપ અને ખાટી છાશથી માથું સાફ થાય છે." },
  },
  "hair-fall": {
    hi: { name: "बाल झड़ना (खालित्य)", summary: "अस्थि धातु और पित्त दोष से बाल कमजोर होते हैं। भृंगराज, आंवला और ब्राह्मी तेल से बाल घने बनते हैं।" },
    gu: { name: "વાળ ખરવા (ખાલિત્ય)", summary: "પિત્તની ગરમીથી વાળના મૂળ નબળા પડવા. ભૃંગરાજ, આમળાં અને બ્રાહ્મી તેલ વાળને મજબૂત કરે છે." },
  },
  "back-pain": {
    hi: { name: "कमर और पीठ का दर्द (कटिशूल)", summary: "रीढ़ में वात का संचय और जकड़न। महानारायण तेल से मालिश और कटि बस्ती से आराम मिलता है।" },
    gu: { name: "કમર અને પીઠનો દુખાવો", summary: "કરોડરજ્જુમાં વાયુ અને જકડન. મહાનારાયણ તેલથી માલિશ અને શેક કરવાથી પીડા મટે છે." },
  },
  "neck-pain": {
    hi: { name: "गर्दन का दर्द और सर्वाइकल (मन्यास्तम्भ)", summary: "गर्दन की नसों में खिंचाव और वात। तिल तेल मालिश, ग्रीवा बस्ती और अश्वगंधा से राहत मिलती है।" },
    gu: { name: "ગરદનનો દુખાવો (સર્વાઇકલ)", summary: "ગરદનની નસો ખેંચાવી અને વાયુ. તલના તેલની માલિશ અને અશ્વગંધાથી જકડન દૂર થાય છે." },
  },
  "joint-pain": {
    hi: { name: "जोड़ों का दर्द (संधिशूल)", summary: "जोड़ों में जमा आम (विषाक्त पदार्थ) और वात प्रकोप। शल्लकी, निर्गुंडी और सोंठ से सूजन घटती है।" },
    gu: { name: "સાંધાનો દુખાવો અને સંધિવા", summary: "સાંધામાં વાયુ અને આમનો પ્રકોપ. શલ્લકી, નગોડ અને સૂંઠથી સોજો અને દુખાવો ઘટે છે." },
  },
  "arthritis": {
    hi: { name: "गठिया और आमवात (आर्थराइटिस)", summary: "जोड़ों में सूजन, अकड़न और तीव्र दर्द। दशमूल काढ़ा, योगराज गुग्गुलु और सोंठ का लेप लाभकारी है।" },
    gu: { name: "ગઠિયો વા (સંધિવા)", summary: "સાંધામાં સોજો અને ચાલવામાં મુશ્કેલી. દશમૂળ ક્વાથ, યોગરાજ ગૂગળ અને સૂંઠનો લેપ ખૂબ ફાયદાકારક છે." },
  },
  "muscle-soreness": {
    hi: { name: "मांसपेशियों का दर्द और थकान", summary: "व्यायाम के बाद लैक्टिक एसिड और वात संचय। गर्म पानी से स्नान और अश्वगंधा से मांसपेशियां ठीक होती हैं।" },
    gu: { name: "સ્નાયુઓનો દુખાવો અને થાક", summary: "સ્નાયુઓમાં ખેંચાણ અને વાયુ. ગરમ પાણીનો શેક અને અશ્વગંધાથી સ્નાયુઓ રિલેક્સ થાય છે." },
  },
  "stiffness": {
    hi: { name: "शरीर की अकड़न (स्तम्भ)", summary: "सुबह शरीर में जकड़न और आम दोष। सोंठ-अजवाइन की चाय और हल्के योग से लचीलापन लौटता है।" },
    gu: { name: "શરીરની જકડન (અકડાઈ જવું)", summary: "સવારે શરીરમાં જકડન અને વાયુ. સૂંઠ-અજમાની ચા અને હળવા આસનોથી શરીર હળવું બને છે." },
  },
  "menstrual-cramps": {
    hi: { name: "मासिक धर्म का दर्द (कष्टार्तव)", summary: "अपान वात का अवरोध और गर्भाशय में ऐंठन। तिल तेल की सिंकाई, दशमूलारिष्ट और सोंठ से राहत मिलती है।" },
    gu: { name: "માસિકનો દુખાવો (પીરિયડ્સ ક્રૅમ્પ્સ)", summary: "અપાન વાયુનો અવરોધ. પેટ પર ગરમ પાણીની થેલીનો શેક અને અશોકારિષ્ટથી દર્દ ઓછું થાય છે." },
  },
  "pms": {
    hi: { name: "पीएमएस (मासिक पूर्व तनाव)", summary: "हार्मोनल असंतुलन और वात-पित्त की चंचलता। शतावरी, ब्राह्मी और कैमोमाइल चाय से मन शांत रहता है।" },
    gu: { name: "પીએમએસ (PMS લક્ષણો)", summary: "હોર્મોનલ ફેરફારો અને માનસિક ચિડચિડાપણું. શતાવરી, બ્રાહ્મી અને હૂંફાળા દૂધથી મન શાંત રહે છે." },
  },
  "menopause-support": {
    hi: { name: "मेनोपॉज (रजोनिवृत्ति सहायता)", summary: "शरीर में गर्मी, पसीना और वात वृद्धि। शतावरी, मुलेठी और घी का सेवन हड्डियों व मन को शक्ति देता है।" },
    gu: { name: "મેનોપોઝ (રજોનિવૃત્તિ સપોર્ટ)", summary: "અચાનક ગરમી લાગવી અને અસ્વસ્થતા. શતાવરી, જેઠીમધ અને દેશી ઘીથી હાડકાં અને મન મજબૂત રહે છે." },
  },
  "womens-wellness": {
    hi: { name: "महिला समग्र स्वास्थ्य", summary: "सभी उम्र में हार्मोन और ऊर्जा का संतुलन। शतावरी, लोध्र और अशोक के सेवन से संपूर्ण स्वास्थ्य खिलता है।" },
    gu: { name: "મહિલા સમગ્ર સ્વાસ્થ્ય", summary: "બધી ઉંમરે હોર્મોન્સ અને ઊર્જાનું સંતુલન. શતાવરી, લોધ્ર અને અશોકથી ઉત્તમ સ્વાસ્થ્ય જળવાય છે." },
  },
  "mens-wellness": {
    hi: { name: "पुरुष समग्र स्वास्थ्य", summary: "ऊर्जा, स्टैमिना और ओजस की वृद्धि। अश्वगंधा, कौंच बीज और सफेद मूसली से शक्ति बढ़ती है।" },
    gu: { name: "પુરુષ સમગ્ર સ્વાસ્થ્ય", summary: "ઊર્જા, સ્ટેમિના અને ઓજસની વૃદ્ધિ. અશ્વગંધા, કૌંચા બીજ અને સફેદ મૂસળીથી શક્તિ વધે છે." },
  },
  "mens-stress": {
    hi: { name: "पुरुष तनाव और कार्यभार", summary: "कार्यस्थल का तनाव और मानसिक थकावट। ब्राह्मी, अश्वगंधा और प्राणायाम से मस्तिष्क को शांति मिलती है।" },
    gu: { name: "પુરુષ તણાવ અને થાક", summary: "કામનું ભારણ અને માનસિક થાક. બ્રાહ્મી, અશ્વગંધા અને ઊંડા શ્વાસ લેવાથી મગજ ફ્રેશ રહે છે." },
  },
  "reproductive-wellness": {
    hi: { name: "प्रजनन स्वास्थ्य और वीर्य पुष्टि", summary: "शुक्र धातु की पुष्टि और जीवन शक्ति। शतावरी, गोक्षुर और स्वर्ण भस्म योग से धातु पुष्ट होती है।" },
    gu: { name: "પ્રજનન સ્વાસ્થ્ય અને શક્તિ", summary: "શુક્ર ધાતુની વૃદ્ધિ અને જીવનશક્તિ. શતાવરી, ગોખરુ અને અશ્વગંધાથી ધાતુ પુષ્ટ બને છે." },
  },
  "stress": {
    hi: { name: "तनाव और मानसिक थकान", summary: "दैनिक जीवन का तनाव और मानसिक भार। ब्राह्मी और अश्वगंधा से मन शांत और स्थिर होता है।" },
    gu: { name: "તણાવ અને માનસિક થાક", summary: "રોજિંદા જીવનનો તણાવ અને માનસિક ભારણ. બ્રાહ્મી અને અશ્વગંધાથી મન શાંત બને છે." },
  },
  "sleep-problems": {
    hi: { name: "अनिद्रा और नींद की समस्या", summary: "अनियंत्रित वात और अतिसक्रिय मन के कारण नींद न आना। जायफल और तगरा से शांत नींद आती है।" },
    gu: { name: "અનિદ્રા અને ઊંઘની સમસ્યા", summary: "અસંતુલિત વાયુ અને અશાંત મનને કારણે ઊંઘ ન આવવી. જાયફળ અને તગરથી ગાઢ ઊંઘ આવે છે." },
  },
  "mild-anxiety": {
    hi: { name: "घबराहट और चिंता", summary: "मन में भय और बेचैनी। शंखपुष्पी और नस्य चिकित्सा से तंत्रिका तंत्र शांत होता है।" },
    gu: { name: "ગભરામણ અને ચિંતા", summary: "મનમાં ડર અને બેચેની. શંખપુષ્પી અને નસ્યથી નર્વસ સિસ્ટમ શાંત થાય છે." },
  },
  "relaxation": {
    hi: { name: "विश्राम और मानसिक शांति", summary: "शरीर और मन को शिथिल करने की पद्धतियाँ। शवासन, अभ्यंग और सुगंधित स्नान से शांति मिलती है।" },
    gu: { name: "વિશ્રામ અને મનની શાંતિ", summary: "શરીર અને મનને હળવું કરવાની પદ્ધતિઓ. શવાસન, તેલ માલિશ અને ઊંડા શ્વાસથી ઊર્જા તાજી થાય છે." },
  },
  "mental-fatigue": {
    hi: { name: "मानसिक थकान और भारीपन", summary: "लगातार सोचने से मन की ऊर्जा खत्म होना। ब्राह्मी घृत और बादाम दूध से एकाग्रता लौटती है।" },
    gu: { name: "માનસિક થાક અને નબળાઈ", summary: "સતત વિચારવાથી મનની શક્તિ ઘટવી. બ્રાહ્મી ઘી અને બદામવાળા દૂધથી એકાગ્રતા વધે છે." },
  },
  "seasonal-wellness": {
    hi: { name: "ऋतुचर्या और रोग प्रतिरोधक क्षमता", summary: "ऋतु परिवर्तन के समय इम्युनिटी बढ़ाना। च्यवनप्राश, गिलोय और तुलसी का काढ़ा संक्रमण से बचाता है।" },
    gu: { name: "ઋતુચર્યા અને રોગપ્રતિકારક શક્તિ", summary: "ઋતુ બદલાતા ઇમ્યુનિટી વધારવી. ચ્યવનપ્રાશ, ગળો અને તુલસીનો ઉકાળો ચેપથી બચાવે છે." },
  },
  "energy-fatigue": {
    hi: { name: "थकान और ऊर्जा की कमी (ओजस क्षय)", summary: "ओजस की कमी और पुरानी थकावट। अश्वगंधा, आंवला और खजूर से नई ऊर्जा और स्फूर्ति मिलती है।" },
    gu: { name: "થાક અને અશક્તિ (ઓજસની કમી)", summary: "શરીરમાં તાજગીનો અભાવ. અશ્વગંધા, આમળાં અને ખજૂર ખાવાથી નવી ઊર્જાનો સંચાર થાય છે." },
  },
  "headache": {
    hi: { name: "सिरदर्द और सिर में भारीपन", summary: "तनाव, पित्त या वात से होने वाला सिरदर्द। बादाम तेल नस्य, चंदन लेप और जलपान से आराम मिलता है।" },
    gu: { name: "માથાનો દુખાવો અને ભારેપણું", summary: "તણાવ, પિત્ત કે વાયુથી થતો માથાનો દુખાવો. બદામ તેલનું નસ્ય અને ચંદનનો લેપ રાહત આપે છે." },
  },
  "oral-health": {
    hi: { name: "मुख एवं दंत स्वास्थ्य (दंत सुरक्षा)", summary: "मसूड़ों की मजबूती और सांसों की ताजगी। तिल तेल से गंडूष (ऑयल पुलिंग) और बबूल दंतमंजन लाभकारी है।" },
    gu: { name: "મોં અને દાંતનું સ્વાસ્થ્ય", summary: "પેઢાની મજબૂતી અને શ્વાસની તાજગી. તલના તેલથી ઓઇલ પુલિંગ અને બાવળનું દાંતણ ગુણકારી છે." },
  },
  "healthy-aging": {
    hi: { name: "स्वस्थ दीर्घायु और रसायन चिकित्सा", summary: "उम्र बढ़ने के साथ शक्ति और स्मृति बनाए रखना। रसायन चूर्ण, आंवला, घी और प्राणायाम से शरीर स्वस्थ रहता है।" },
    gu: { name: "સ્વસ્થ દીર્ઘાયુ અને રસાયન ચિકિત્સા", summary: "ઉંમર વધવા છતાં સ્મૃતિ અને શક્તિ જળવાઈ રહે. આમળાં, દેશી ઘી અને પ્રાણાયામથી આયુષ્ય લંબાય છે." },
  },
  "lifestyle-reset": {
    hi: { name: "प्राकृतिक शुद्धि एवं जीवनशैली सुधार", summary: "शरीर से विषैले तत्व (आम) बाहर निकालना। उपवास, हल्का मूंग सूप और गुनगुना पानी शरीर शुद्ध करते हैं।" },
    gu: { name: "કુદરતી ડીટોક્સ અને જીવનશૈલી સુધાર", summary: "શરીરમાંથી ટોક્સિન્સ (આમ) બહાર કાઢવા. ઉપવાસ, મગનું સૂપ અને ગરમ પાણીથી શરીર સાફ થાય છે." },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => {
    const enDict = translations.en as Record<string, string>;
    return enDict[key] || key;
  },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(LANGUAGE_KEY) as Language | null;
      if (saved && (saved === "en" || saved === "hi" || saved === "gu")) {
        setLanguageState(saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  };

  const t = (key: string): string => {
    const langDict = translations[language] as Record<string, string>;
    if (langDict && langDict[key]) return langDict[key];
    const enDict = translations.en as Record<string, string>;
    return enDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
