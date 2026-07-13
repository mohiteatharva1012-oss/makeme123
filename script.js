// Salon Services Database
const servicesData = [
  // ==================== MALE SERVICES ====================
  // HAIR CUT
  { id: 'm1', gender: 'male', category: 'hair-cut', name: 'Beard Grooming', price: 150, duration: 30, desc: 'Detailed trim, beard oil conditioning, razor line styling, and warm neck shave.' },
  { id: 'm2', gender: 'male', category: 'hair-cut', name: 'Hair Cut + Hair Wash', price: 250, duration: 45, desc: 'Premium precision cut, relaxing scalp wash, and professional blow-dry styling.' },
  
  // HAIR COLOUR
  { id: 'm3', gender: 'male', category: 'hair-colour', name: 'Beard Colouring', price: 300, duration: 30, desc: 'Professional grey blending and rich color application for a full, natural beard look.' },
  { id: 'm4', gender: 'male', category: 'hair-colour', name: 'Global Hair Colour', price: 600, duration: 60, desc: 'Full-head rich color application for a consistent, premium shade.' },
  { id: 'm5', gender: 'male', category: 'hair-colour', name: 'Fashion Hair Colour', price: 700, duration: 75, desc: 'Bold, high-fashion statement shades customized for your modern style.' },
  { id: 'm6', gender: 'male', category: 'hair-colour', name: 'Highlight Hair Colour', price: 1000, duration: 90, desc: 'Dimensional multi-tonal highlights to add depth and movement to your hair.' },
  
  // HAIR TREATMENT
  { id: 'm7', gender: 'male', category: 'hair-treatment', name: 'Luxury Hair Spa', price: 500, duration: 45, desc: 'Nourishing oil massage, steam therapy, and custom hair mask for strength and shine.' },
  { id: 'm8', gender: 'male', category: 'hair-treatment', name: 'Keratin Smoothing', price: 2000, duration: 120, desc: 'Frizz-eliminating, deep-conditioning treatment to deliver sleek, smooth hair.' },
  { id: 'm9', gender: 'male', category: 'hair-treatment', name: 'Hair Smoothening', price: 2000, duration: 120, desc: 'Advanced straightening therapy for a sleek, permanent smooth structure.' },
  { id: 'm10', gender: 'male', category: 'hair-treatment', name: 'Temporary Hair Straightening', price: 500, duration: 45, desc: 'Professional flat-iron blowout styling for a smooth, temporary look.' },
  
  // MEN CLEAN UP (FACE)
  { id: 'm11', gender: 'male', category: 'clean-up', name: 'Normal Lemon Clean Up', price: 500, duration: 30, desc: 'Refreshing lemon cleanse, gentle scrub, and cooling mask to remove impurities.' },
  { id: 'm12', gender: 'male', category: 'clean-up', name: 'Normal Mix Fruit Clean Up', price: 500, duration: 30, desc: 'Nourishing organic fruit extracts to revitalize and restore skin hydration.' },
  { id: 'm13', gender: 'male', category: 'clean-up', name: 'Standard Mix Fruit Clean Up', price: 600, duration: 40, desc: 'Deep-cleansing fruit enzymes with steam therapy and blackhead extraction.' },
  { id: 'm14', gender: 'male', category: 'clean-up', name: 'Standard Papaya Clean Up', price: 600, duration: 40, desc: 'Enzyme-rich papaya scrub to fade blemishes, clear pores, and smooth skin texture.' },
  { id: 'm15', gender: 'male', category: 'clean-up', name: 'Standard Whitening Clean Up', price: 700, duration: 40, desc: 'Brightening mask and vitamin-C wash to instantly clear dull skin tone.' },
  { id: 'm16', gender: 'male', category: 'clean-up', name: 'Premium Gold Clean Up', price: 800, duration: 50, desc: 'Luxurious gold dust scrub and radiant gel to boost skin elasticity and glow.' },
  { id: 'm17', gender: 'male', category: 'clean-up', name: 'Premium Diamond Clean Up', price: 850, duration: 50, desc: 'Micro-diamond scrub for advanced exfoliation, revealing a polished, clear skin.' },
  { id: 'm18', gender: 'male', category: 'clean-up', name: 'Premium Pearl Clean Up', price: 900, duration: 50, desc: 'Pearl extract massage cream and cooling pack to hydrate, calm, and brighten.' },
  
  // FACE (BLEACH)
  { id: 'm19', gender: 'male', category: 'bleach', name: 'Normal Herbal Bleach', price: 300, duration: 25, desc: 'Mild herbal bleach to light skin tone, minimize tan lines, and clear dark spots.' },
  { id: 'm20', gender: 'male', category: 'bleach', name: 'Normal Natural Bleach', price: 300, duration: 25, desc: 'Gentle organic bleach to reduce pigmentation without harsh skin reactions.' },
  { id: 'm21', gender: 'male', category: 'bleach', name: 'Standard Charcoal Bleach', price: 500, duration: 30, desc: 'Activated charcoal bleach to deeply purify skin pores and lift heavy sun tan.' },
  { id: 'm22', gender: 'male', category: 'bleach', name: 'Standard Mix Fruit Bleach', price: 500, duration: 30, desc: 'Fruity nutrients combined with safe bleaching agents for an glowing skin.' },
  { id: 'm23', gender: 'male', category: 'bleach', name: 'Premium Gold Bleach', price: 700, duration: 35, desc: 'Luxury gold dust bleach to impart a rich, long-lasting metallic shine.' },
  { id: 'm24', gender: 'male', category: 'bleach', name: 'Premium Diamond Bleach', price: 700, duration: 35, desc: 'Premium micro-polish diamond bleach for ultimate brightness and pore clarity.' },
  { id: 'm25', gender: 'male', category: 'bleach', name: 'Premium Pearl Bleach', price: 700, duration: 35, desc: 'Nourishing pearl essence bleach to achieve a smooth, bright skin complexion.' },
  
  // MEN FACIAL
  { id: 'm26', gender: 'male', category: 'facial', name: 'Normal D-tan Facial', price: 300, duration: 45, desc: 'Specially designed to reverse sun damage, soothe burns, and restore natural skin shade.' },
  { id: 'm27', gender: 'male', category: 'facial', name: 'Mix Fruit Facial', price: 800, duration: 60, desc: 'Multi-vitamin fruit massage, deep steam, exfoliation, and clarifying clay pack.' },
  { id: 'm28', gender: 'male', category: 'facial', name: 'Standard Herbal Facial', price: 800, duration: 60, desc: 'Organic botanical extracts to heal acne, soothe irritation, and detoxify skin.' },
  { id: 'm29', gender: 'male', category: 'facial', name: 'Standard Wine Facial', price: 1000, duration: 60, desc: 'Antioxidant-rich red grape extracts to fight aging signs and tighten pores.' },
  { id: 'm30', gender: 'male', category: 'facial', name: 'Standard Chocolate Facial', price: 1000, duration: 60, desc: 'Rich cocoa butter hydration, deep exfoliation, and relaxing pressure-point massage.' },
  { id: 'm31', gender: 'male', category: 'facial', name: 'Standard Whitening Facial', price: 1000, duration: 60, desc: 'Advanced active-brightening mask to clear blemishes and evening out skin tone.' },
  { id: 'm32', gender: 'male', category: 'facial', name: 'Premium Pearl Facial', price: 1500, duration: 75, desc: 'Luxury pearl dust therapy for deep tissue hydration, whitening, and skin cooling.' },
  { id: 'm33', gender: 'male', category: 'facial', name: 'Premium Gold Facial', price: 1500, duration: 75, desc: '24k gold leaf infusion, high-frequency stimulation, and rich glow mask.' },
  { id: 'm34', gender: 'male', category: 'facial', name: 'Premium Diamond Facial', price: 1500, duration: 75, desc: 'Ultimate microdermabrasion scrub, collagen mask, and cellular repair therapy.' },
  { id: 'm35', gender: 'male', category: 'facial', name: 'Premium Nandini Facial', price: 1500, duration: 75, desc: 'Traditional royal ayurvedic facial incorporating luxury essential oils and herb paste.' },
  { id: 'm41', gender: 'male', category: 'facial', name: 'Premium Lotus Facial', price: 1500, duration: 75, desc: 'Lotus organic pack for deep pore renewal.' },
  { id: 'm42', gender: 'male', category: 'facial', name: 'Premium VLCC Facial', price: 1800, duration: 75, desc: 'VLCC professional skincare facial for deep glow.' },
  { id: 'm43', gender: 'male', category: 'facial', name: 'Premium Shahnaz Facial', price: 2000, duration: 75, desc: 'Shahnaz Husain premium herbal therapy for face.' },
  { id: 'm44', gender: 'male', category: 'facial', name: 'Premium Nandini Gold Facial', price: 2500, duration: 75, desc: 'Nandini Gold dust face mask for shiny skin.' },
  { id: 'm45', gender: 'male', category: 'facial', name: 'Premium Nandini Diamond Facial', price: 2500, duration: 75, desc: 'Nandini Diamond polish mask for ultimate glow.' },
  { id: 'm46', gender: 'male', category: 'facial', name: 'Premium O3+ Facial', price: 3000, duration: 90, desc: 'High-end O3+ oxygenating treatment for face.' },
  { id: 'm47', gender: 'male', category: 'facial', name: 'Premium N-Detan Facial', price: 2500, duration: 75, desc: 'Advanced detanning face therapy for clean skin.' },
  { id: 'm48', gender: 'male', category: 'facial', name: 'Premium Korean Glass Facial', price: 2500, duration: 90, desc: 'Korean skincare facial to achieve a glass skin look.' },
  { id: 'm49', gender: 'male', category: 'facial', name: 'Premium Hydra Facial', price: 2500, duration: 90, desc: 'Multi-step advanced hydradermabrasion facial glow.' },
  { id: 'm50', gender: 'male', category: 'facial', name: 'Premium Vitamin C Facial', price: 2000, duration: 75, desc: 'Active Vitamin C mask to lift brightness.' },
  
  // FACE WAXING
  { id: 'm36', gender: 'male', category: 'waxing', name: 'Normal Honey Face Waxing', price: 200, duration: 20, desc: 'Gentle warm honey wax to remove fine facial hair and dead skin cells.' },
  { id: 'm37', gender: 'male', category: 'waxing', name: 'Standard Chocolate Face Waxing', price: 300, duration: 25, desc: 'Nourishing cocoa wax designed for sensitive facial skin, reducing irritation.' },
  { id: 'm38', gender: 'male', category: 'waxing', name: 'Standard Gold Face Waxing', price: 300, duration: 25, desc: 'Premium gold wax that grips short hairs perfectly and adds a clean skin glow.' },
  { id: 'm39', gender: 'male', category: 'waxing', name: 'Premium Rice Face Waxing', price: 400, duration: 30, desc: 'Skin-soothing rice wax formula with organic pre-wax and post-wax therapies.' },
  { id: 'm40', gender: 'male', category: 'waxing', name: 'Premium Brazil Face Waxing', price: 400, duration: 30, desc: 'Stripless luxury wax specialized for coarse facial and beard contour hairs.' },
  
  // ==================== FEMALE SERVICES ====================
  // HAIR CUT
  { id: 'f1', gender: 'female', category: 'hair-cut', name: 'Straight Cut', price: 250, duration: 30, desc: 'Classic straight edge haircut for a neat, clean, and symmetric look.' },
  { id: 'f2', gender: 'female', category: 'hair-cut', name: 'Deep U-Cut', price: 250, duration: 35, desc: 'Deep U-shaped back contouring to add flow and soft edges to your hair.' },
  { id: 'f3', gender: 'female', category: 'hair-cut', name: 'Mixed Layer Hair Cut', price: 450, duration: 45, desc: 'Dimensional layered cut to create volume, movement, and textured style.' },
  { id: 'f4', gender: 'female', category: 'hair-cut', name: 'Advance Hair Cut (Any)', price: 500, duration: 60, desc: 'High-fashion advanced styling: Pixie, Bob, Shag, or customized trends.' },
  { id: 'f5', gender: 'female', category: 'hair-cut', name: 'Hair Wash + Normal Setting', price: 250, duration: 30, desc: 'Refreshing shampoo wash finished with a standard blow-dry setting.' },
  { id: 'f6', gender: 'female', category: 'hair-cut', name: 'Only Hair Wash + Straight Blow Dry', price: 250, duration: 40, desc: 'Luxury hair wash followed by a sleek, straight blow-dry finish.' },
  { id: 'f7', gender: 'female', category: 'hair-cut', name: 'Hair Wash + Advance Setting', price: 300, duration: 45, desc: 'Shampoo wash finished with volume curls, waves, or specialized settings.' },
  { id: 'f8', gender: 'female', category: 'hair-cut', name: 'Deep Conditioning Treatment', price: 300, duration: 45, desc: 'Intense moisture infusion to repair dry, damaged hair strands.' },
  { id: 'f9', gender: 'female', category: 'hair-cut', name: 'Hair Curling / Straightening', price: 500, duration: 60, desc: 'Professional hot-tool styling for bouncy curls or sleek straightening.' },
  { id: 'f10', gender: 'female', category: 'hair-cut', name: 'Hair Ironing / Straightening', price: 500, duration: 60, desc: 'Precision flat-iron straightening for a ultra-sleek, glossy look.' },

  // HAIR TREATMENT
  // Loreal Spa
  { id: 'f11', gender: 'female', category: 'hair-treatment', name: 'Loreal Spa (Shoulder Length)', price: 800, duration: 45, desc: 'Loreal deep nourishing spa for shoulder length hair.' },
  { id: 'f12', gender: 'female', category: 'hair-treatment', name: 'Loreal Spa (Medium Length)', price: 1000, duration: 45, desc: 'Loreal deep nourishing spa for medium length hair.' },
  { id: 'f13', gender: 'female', category: 'hair-treatment', name: 'Loreal Spa (Long Length)', price: 1200, duration: 50, desc: 'Loreal deep nourishing spa for long length hair.' },
  { id: 'f14', gender: 'female', category: 'hair-treatment', name: 'Loreal Anti-Dandruff Spa', price: 1500, duration: 50, desc: 'Loreal scalp purifying anti-dandruff spa treatment.' },
  // Schwarzkopf Spa
  { id: 'f15', gender: 'female', category: 'hair-treatment', name: 'Schwarzkopf Spa (Shoulder Length)', price: 1000, duration: 45, desc: 'Premium Schwarzkopf therapy for shoulder length hair.' },
  { id: 'f16', gender: 'female', category: 'hair-treatment', name: 'Schwarzkopf Spa (Medium Length)', price: 1200, duration: 45, desc: 'Premium Schwarzkopf therapy for medium length hair.' },
  { id: 'f17', gender: 'female', category: 'hair-treatment', name: 'Schwarzkopf Spa (Long Length)', price: 1500, duration: 50, desc: 'Premium Schwarzkopf therapy for long length hair.' },
  { id: 'f18', gender: 'female', category: 'hair-treatment', name: 'Schwarzkopf Anti-Dandruff Spa', price: 1500, duration: 50, desc: 'Schwarzkopf specialized scalp anti-dandruff therapy.' },
  // Wella Spa
  { id: 'f19', gender: 'female', category: 'hair-treatment', name: 'Wella Spa (Shoulder Length)', price: 1200, duration: 45, desc: 'Luxury Wella hair spa treatment for shoulder length hair.' },
  { id: 'f20', gender: 'female', category: 'hair-treatment', name: 'Wella Spa (Medium Length)', price: 1300, duration: 45, desc: 'Luxury Wella hair spa treatment for medium length hair.' },
  { id: 'f21', gender: 'female', category: 'hair-treatment', name: 'Wella Spa (Long Length)', price: 1500, duration: 50, desc: 'Luxury Wella hair spa treatment for long length hair.' },
  { id: 'f22', gender: 'female', category: 'hair-treatment', name: 'Wella Anti-Dandruff Spa', price: 1700, duration: 50, desc: 'Wella advanced scalp treatment to eliminate dandruff.' },
  // Head Massage
  { id: 'f23', gender: 'female', category: 'hair-treatment', name: 'Head Massage (Normal Oil)', price: 300, duration: 30, desc: 'Relaxing scalp massage with normal nourishing hair oil.' },
  { id: 'f24', gender: 'female', category: 'hair-treatment', name: 'Head Massage (Onion Oil)', price: 400, duration: 30, desc: 'Hair fall control scalp massage with active onion hair oil.' },
  { id: 'f25', gender: 'female', category: 'hair-treatment', name: 'Head Massage (Advance Oil)', price: 500, duration: 30, desc: 'Premium stress-relief scalp massage with advanced herbal oil.' },
  // Smoothening
  { id: 'f26', gender: 'female', category: 'hair-treatment', name: 'Hair Smoothening (Shoulder Length)', price: 4999, duration: 120, desc: 'Sleek permanent hair smoothening for shoulder length.' },
  { id: 'f27', gender: 'female', category: 'hair-treatment', name: 'Hair Smoothening (Medium Length)', price: 5999, duration: 150, desc: 'Sleek permanent hair smoothening for medium length.' },
  { id: 'f28', gender: 'female', category: 'hair-treatment', name: 'Hair Smoothening (Long Length)', price: 7000, duration: 180, desc: 'Sleek permanent hair smoothening for long length.' },
  // Keratin
  { id: 'f29', gender: 'female', category: 'hair-treatment', name: 'Keratin (Shoulder Length)', price: 2499, duration: 120, desc: 'Deep keratin protein reconstruction for shoulder length.' },
  { id: 'f30', gender: 'female', category: 'hair-treatment', name: 'Keratin (Medium Length)', price: 3999, duration: 150, desc: 'Deep keratin protein reconstruction for medium length.' },
  { id: 'f31', gender: 'female', category: 'hair-treatment', name: 'Keratin (Long Length)', price: 4599, duration: 180, desc: 'Deep keratin protein reconstruction for long length.' },
  // Nano Plastia / Botox / Bluetox
  { id: 'f32', gender: 'female', category: 'hair-treatment', name: 'Hair Botox (Shoulder Length)', price: 3999, duration: 120, desc: 'Nano Plastia / Botox anti-aging hair repair for shoulder length.' },
  { id: 'f33', gender: 'female', category: 'hair-treatment', name: 'Hair Botox (Medium Length)', price: 4499, duration: 150, desc: 'Nano Plastia / Botox anti-aging hair repair for medium length.' },
  { id: 'f34', gender: 'female', category: 'hair-treatment', name: 'Hair Botox (Long Length)', price: 4999, duration: 180, desc: 'Nano Plastia / Botox anti-aging hair repair for long length.' },

  // HAIR COLOUR
  // Global Colour
  { id: 'f35', gender: 'female', category: 'hair-colour', name: 'Global Colour (Shoulder Length)', price: 2500, duration: 90, desc: 'Rich full-head global color for shoulder length hair.' },
  { id: 'f36', gender: 'female', category: 'hair-colour', name: 'Global Colour (Medium Length)', price: 3000, duration: 105, desc: 'Rich full-head global color for medium length hair.' },
  { id: 'f37', gender: 'female', category: 'hair-colour', name: 'Global Colour (Long Length)', price: 3500, duration: 120, desc: 'Rich full-head global color for long length hair.' },
  // Fashion Colour
  { id: 'f38', gender: 'female', category: 'hair-colour', name: 'Highlight (Per Strip)', price: 200, duration: 30, desc: 'Single foil highlight accent strip in fashion shades.' },
  { id: 'f39', gender: 'female', category: 'hair-colour', name: 'Root Touch-up (1 inch)', price: 700, duration: 45, desc: 'Root color coverage for up to 1 inch of regrowth.' },
  { id: 'f40', gender: 'female', category: 'hair-colour', name: 'Fashion Colour (Shoulder Length)', price: 2499, duration: 90, desc: 'Vibrant fashion shades global coloring for shoulder length.' },
  { id: 'f41', gender: 'female', category: 'hair-colour', name: 'Fashion Colour (Medium Length)', price: 2999, duration: 105, desc: 'Vibrant fashion shades global coloring for medium length.' },
  { id: 'f42', gender: 'female', category: 'hair-colour', name: 'Fashion Colour (Long Length)', price: 3499, duration: 120, desc: 'Vibrant fashion shades global coloring for long length.' },

  // THREADING & WAX
  // Threading
  { id: 'f43', gender: 'female', category: 'threading-wax', name: 'Threading: Upper Lips', price: 20, duration: 10, desc: 'Precise upper lip hair removal using organic cotton thread.' },
  { id: 'f44', gender: 'female', category: 'threading-wax', name: 'Threading: Forehead', price: 20, duration: 10, desc: 'Forehead contouring and cleaning using organic thread.' },
  { id: 'f45', gender: 'female', category: 'threading-wax', name: 'Threading: Chin', price: 20, duration: 10, desc: 'Chin area hair removal using cotton threading method.' },
  { id: 'f46', gender: 'female', category: 'threading-wax', name: 'Threading: Eye Brow', price: 50, duration: 15, desc: 'Eyebrow shaping and defining by professional brow artists.' },
  // Honey Waxing
  { id: 'f47', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Underarms', price: 70, duration: 15, desc: 'Standard warm honey wax hair removal for underarms.' },
  { id: 'f48', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Upper Lips', price: 50, duration: 10, desc: 'Gentle warm honey wax hair removal for upper lips.' },
  { id: 'f49', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Full Face', price: 120, duration: 25, desc: 'Exfoliating honey wax for a smooth and clear full face.' },
  { id: 'f50', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Hands', price: 200, duration: 30, desc: 'Warm honey waxing for both arms, removing dead skin.' },
  { id: 'f51', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Half Legs', price: 200, duration: 25, desc: 'Warm honey waxing from knee to ankle for smooth legs.' },
  { id: 'f52', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Full Legs', price: 300, duration: 40, desc: 'Full length leg honey waxing for skin exfoliation.' },
  { id: 'f53', gender: 'female', category: 'threading-wax', name: 'Honey Wax: Full Body', price: 1000, duration: 75, desc: 'Complete full body honey waxing and skin smoothing.' },
  // Chocolate & Gold Waxing
  { id: 'f54', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Upper Lips', price: 70, duration: 10, desc: 'Soothing chocolate/gold wax for sensitive upper lips.' },
  { id: 'f55', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Underarms', price: 100, duration: 15, desc: 'Less painful chocolate/gold wax for underarms.' },
  { id: 'f56', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Full Face', price: 150, duration: 25, desc: 'Nourishing chocolate/gold wax for a glowing full face.' },
  { id: 'f57', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Hands', price: 250, duration: 30, desc: 'Deep hydration chocolate/gold wax for both arms.' },
  { id: 'f58', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Half Legs', price: 300, duration: 25, desc: 'Chocolate/gold wax for soft, smooth half legs.' },
  { id: 'f59', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Full Legs', price: 400, duration: 40, desc: 'Chocolate/gold wax to remove tan and hair on full legs.' },
  { id: 'f60', gender: 'female', category: 'threading-wax', name: 'Chocolate/Gold Wax: Full Body', price: 1250, duration: 75, desc: 'Luxury full body chocolate/gold wax for skin health.' },
  // Rica & Brazil Waxing
  { id: 'f61', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Upper Lips', price: 100, duration: 10, desc: 'Stripless organic rica/brazil wax for upper lips.' },
  { id: 'f62', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Underarms', price: 120, duration: 15, desc: 'Premium rica/brazil wax for painless underarms.' },
  { id: 'f63', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Full Face', price: 250, duration: 25, desc: 'Ultra-gentle rica/brazil wax for sensitive face.' },
  { id: 'f64', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Hands', price: 300, duration: 30, desc: 'Premium rica/brazil waxing for silk-smooth arms.' },
  { id: 'f65', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Half Legs', price: 300, duration: 25, desc: 'Rica/brazil waxing to remove tan on half legs.' },
  { id: 'f66', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Full Legs', price: 600, duration: 40, desc: 'Rica/brazil waxing to remove tan on full legs.' },
  { id: 'f67', gender: 'female', category: 'threading-wax', name: 'Rica/Brazil Wax: Full Body', price: 1500, duration: 75, desc: 'Ultimate rica/brazil full body wax for silky skin.' },

  // CLEAN UP
  { id: 'f68', gender: 'female', category: 'clean-up', name: 'Normal Lemon Clean Up', price: 300, duration: 30, desc: 'Refreshing lemon cleanse and cooling pack for face.' },
  { id: 'f69', gender: 'female', category: 'clean-up', name: 'Normal Fruit Clean Up', price: 300, duration: 30, desc: 'Nourishing organic fruit extracts to refresh face.' },
  { id: 'f70', gender: 'female', category: 'clean-up', name: 'Standard Mix Fruit Clean Up', price: 500, duration: 40, desc: 'Deep-cleansing fruit pack, steam, and extraction.' },
  { id: 'f71', gender: 'female', category: 'clean-up', name: 'Standard Papaya Clean Up', price: 500, duration: 40, desc: 'Enzyme-rich papaya clean up to clear pores.' },
  { id: 'f72', gender: 'female', category: 'clean-up', name: 'Standard Whitening Clean Up', price: 500, duration: 40, desc: 'Brightening mask to clear dull skin complexion.' },
  { id: 'f73', gender: 'female', category: 'clean-up', name: 'Premium Gold Clean Up', price: 700, duration: 45, desc: 'Gold dust scrub and gel to boost skin glow.' },
  { id: 'f74', gender: 'female', category: 'clean-up', name: 'Premium Diamond Clean Up', price: 700, duration: 45, desc: 'Diamond polish scrub for advanced skin clarity.' },
  { id: 'f75', gender: 'female', category: 'clean-up', name: 'Premium Pearl Clean Up', price: 700, duration: 45, desc: 'Pearl extract massage cream for deep hydration.' },

  // FACIAL
  // Normal
  { id: 'f76', gender: 'female', category: 'facial', name: 'Normal Mix Fruit Facial', price: 600, duration: 45, desc: 'Standard fruit extract facial for healthy skin.' },
  { id: 'f77', gender: 'female', category: 'facial', name: 'Normal Papaya Facial', price: 600, duration: 45, desc: 'Papaya nutrient facial to clear face pigmentation.' },
  { id: 'f78', gender: 'female', category: 'facial', name: 'Normal Herbal Facial', price: 600, duration: 45, desc: 'Natural herbal ingredients to heal face acne.' },
  { id: 'f79', gender: 'female', category: 'facial', name: 'Normal Natural Facial', price: 600, duration: 45, desc: 'Chemical-free natural facial for basic skin glow.' },
  // Standard
  { id: 'f80', gender: 'female', category: 'facial', name: 'Standard Wine Facial', price: 800, duration: 60, desc: 'Antioxidant grape wine facial to fight aging.' },
  { id: 'f81', gender: 'female', category: 'facial', name: 'Standard Chocolate Facial', price: 800, duration: 60, desc: 'Soothing cocoa butter facial for deep hydration.' },
  { id: 'f82', gender: 'female', category: 'facial', name: 'Standard Whitening Facial', price: 800, duration: 60, desc: 'Active whitening pack to even out face skin tone.' },
  { id: 'f83', gender: 'female', category: 'facial', name: 'Standard Gold Facial', price: 1000, duration: 60, desc: 'Gold scrub and cream for a radiant face glow.' },
  { id: 'f84', gender: 'female', category: 'facial', name: 'Standard Pearl Facial', price: 1000, duration: 60, desc: 'Pearl mineral pack to calm and brighten skin.' },
  { id: 'f85', gender: 'female', category: 'facial', name: 'Standard Diamond Facial', price: 1000, duration: 60, desc: 'Polished diamond scrub to improve skin elasticity.' },
  { id: 'f86', gender: 'female', category: 'facial', name: 'Standard Natural Gold Facial', price: 1000, duration: 60, desc: 'Organic gold extracts facial for a sun-kissed glow.' },
  // Premium
  { id: 'f87', gender: 'female', category: 'facial', name: 'Premium Lotus Facial', price: 1500, duration: 75, desc: 'Lotus organic pack for deep pore renewal.' },
  { id: 'f88', gender: 'female', category: 'facial', name: 'Premium VLCC Facial', price: 1800, duration: 75, desc: 'VLCC professional skincare facial for deep glow.' },
  { id: 'f89', gender: 'female', category: 'facial', name: 'Premium Shahnaz Facial', price: 2000, duration: 75, desc: 'Shahnaz Husain premium herbal therapy for face.' },
  { id: 'f90', gender: 'female', category: 'facial', name: 'Premium Nandini Gold Facial', price: 2500, duration: 75, desc: 'Nandini Gold dust face mask for shiny skin.' },
  { id: 'f91', gender: 'female', category: 'facial', name: 'Premium Nandini Diamond Facial', price: 2500, duration: 75, desc: 'Nandini Diamond polish mask for ultimate glow.' },
  { id: 'f92', gender: 'female', category: 'facial', name: 'Premium O3+ Facial', price: 3000, duration: 90, desc: 'High-end O3+ oxygenating treatment for face.' },
  { id: 'f93', gender: 'female', category: 'facial', name: 'Premium N-Detan Facial', price: 2500, duration: 75, desc: 'Advanced detanning face therapy for clean skin.' },
  { id: 'f94', gender: 'female', category: 'facial', name: 'Premium Korean Glass Facial', price: 2500, duration: 90, desc: 'Korean skincare facial to achieve a glass skin look.' },
  { id: 'f95', gender: 'female', category: 'facial', name: 'Premium Hydra Facial', price: 2500, duration: 90, desc: 'Multi-step advanced hydradermabrasion facial glow.' },
  { id: 'f96', gender: 'female', category: 'facial', name: 'Premium Vitamin C Facial', price: 2000, duration: 75, desc: 'Active Vitamin C mask to lift brightness.' },

  // BLEACH
  // Bleach
  { id: 'f97', gender: 'female', category: 'bleach', name: 'Normal Herbal Bleach', price: 300, duration: 25, desc: 'Herbal bleach to safely lighten facial hair.' },
  { id: 'f98', gender: 'female', category: 'bleach', name: 'Normal Natural Bleach', price: 300, duration: 25, desc: 'Organic natural bleach to reduce tan on face.' },
  { id: 'f99', gender: 'female', category: 'bleach', name: 'Standard Charcoal Bleach', price: 350, duration: 30, desc: 'Activated charcoal bleach to pull out face dirt.' },
  { id: 'f100', gender: 'female', category: 'bleach', name: 'Standard Mix Fruit Bleach', price: 350, duration: 30, desc: 'Mix fruit extracts bleach to lighten face tan.' },
  { id: 'f101', gender: 'female', category: 'bleach', name: 'Premium Gold Bleach', price: 400, duration: 30, desc: 'Luxury gold bleach to add gloss to facial skin.' },
  { id: 'f102', gender: 'female', category: 'bleach', name: 'Premium Diamond Bleach', price: 400, duration: 30, desc: 'Diamond bleach for instant face brightening.' },
  { id: 'f103', gender: 'female', category: 'bleach', name: 'Premium D-tan Bleach', price: 500, duration: 35, desc: 'Advanced D-tan bleach to clear deep pigmentation.' },
  // Full Body
  { id: 'f104', gender: 'female', category: 'bleach', name: 'Full Body Bleach (Herbal/Natural)', price: 1000, duration: 60, desc: 'Herbal full body bleach treatment to clear tan.' },
  { id: 'f105', gender: 'female', category: 'bleach', name: 'Full Body Bleach: Only Hands (Herbal)', price: 250, duration: 30, desc: 'Herbal bleach treatment for hands.' },
  { id: 'f106', gender: 'female', category: 'bleach', name: 'Full Body Bleach: Only Legs (Herbal)', price: 250, duration: 30, desc: 'Herbal bleach treatment for legs.' },
  { id: 'f107', gender: 'female', category: 'bleach', name: 'Full Body Bleach (Standard/Premium)', price: 1250, duration: 60, desc: 'Charcoal/Fruit full body bleach for deep skin clean.' },
  { id: 'f108', gender: 'female', category: 'bleach', name: 'Full Body Bleach: Only Hands (Premium)', price: 350, duration: 30, desc: 'Premium bleach treatment for hands.' },
  { id: 'f109', gender: 'female', category: 'bleach', name: 'Full Body Bleach: Only Legs (Premium)', price: 350, duration: 30, desc: 'Premium bleach treatment for legs.' },

  // MASSAGE & SPA
  // Massage
  { id: 'f110', gender: 'female', category: 'body-care', name: 'Oil Body Massage', price: 1300, duration: 60, desc: 'Normal oil full body massage for deep relaxation.' },
  { id: 'f111', gender: 'female', category: 'body-care', name: 'Aroma Oil Body Massage', price: 1500, duration: 60, desc: 'Aromatic essential oils body massage for stress relief.' },
  { id: 'f112', gender: 'female', category: 'body-care', name: 'Cream Body Massage', price: 2000, duration: 60, desc: 'Rich cream full body massage to hydrate skin.' },
  { id: 'f113', gender: 'female', category: 'body-care', name: 'Only Back Massage', price: 500, duration: 30, desc: 'Targeted massage to relieve back muscle stress.' },
  // Body Spa
  { id: 'f114', gender: 'female', category: 'body-care', name: 'Normal Body Spa', price: 1500, duration: 75, desc: 'Refreshing full body spa massage and steam.' },
  { id: 'f115', gender: 'female', category: 'body-care', name: 'Standard Body Spa', price: 2000, duration: 90, desc: 'Deep-tissue full body spa therapy with body pack.' },
  { id: 'f116', gender: 'female', category: 'body-care', name: 'Premium Body Spa', price: 2500, duration: 105, desc: 'Luxury organic scrubs, oils, and body spa wrap.' },

  // NAIL & HAND SPA
  // Hand Spa
  { id: 'f117', gender: 'female', category: 'hands-legs', name: 'Normal Hand Spa', price: 500, duration: 30, desc: 'Gentle hand scrub, massage, and nail care.' },
  { id: 'f118', gender: 'female', category: 'hands-legs', name: 'Standard Hand Spa', price: 700, duration: 40, desc: 'Hydrating hand scrub, clay mask, and massage.' },
  { id: 'f119', gender: 'female', category: 'hands-legs', name: 'Premium Hand Spa', price: 1000, duration: 50, desc: 'Luxury organic oils, paraffin mask, and massage.' },
  // Leg Spa
  { id: 'f120', gender: 'female', category: 'hands-legs', name: 'Normal Leg Spa', price: 500, duration: 30, desc: 'Gentle foot scrub, massage, and nail care.' },
  { id: 'f121', gender: 'female', category: 'hands-legs', name: 'Standard Leg Spa', price: 700, duration: 40, desc: 'Hydrating foot scrub, clay mask, and massage.' },
  { id: 'f122', gender: 'female', category: 'hands-legs', name: 'Premium Leg Spa', price: 1000, duration: 50, desc: 'Luxury organic oils, hot stone, and massage.' },
  // Manicure/Pedicure
  { id: 'f123', gender: 'female', category: 'hands-legs', name: 'Fruit Manicure & Pedicure', price: 700, duration: 60, desc: 'Organic fruit scrub M&P for hands and feet.' },
  { id: 'f124', gender: 'female', category: 'hands-legs', name: 'Gold Manicure & Pedicure', price: 1000, duration: 75, desc: 'Gold dust scrub and gel therapy M&P.' },
  { id: 'f125', gender: 'female', category: 'hands-legs', name: 'Premium Spa Manicure & Pedicure', price: 1500, duration: 90, desc: 'Luxury spa treatment mask and stone massage M&P.' },
  // Nail Art
  { id: 'f126', gender: 'female', category: 'hands-legs', name: 'Basic Gel Polish (Any Colour)', price: 500, duration: 30, desc: 'Long-lasting premium gel polish application.' },
  { id: 'f127', gender: 'female', category: 'hands-legs', name: 'Advance Gel Polish', price: 700, duration: 40, desc: 'Premium gel polish with chrome/cat-eye effects.' },
  { id: 'f128', gender: 'female', category: 'hands-legs', name: 'Advance Gel Polish Art', price: 800, duration: 50, desc: 'Custom hand-painted gel nail art designs.' },
  { id: 'f129', gender: 'female', category: 'hands-legs', name: 'Polygel Extension', price: 1000, duration: 90, desc: 'Lightweight, strong polygel nail extensions.' },
  { id: 'f130', gender: 'female', category: 'hands-legs', name: 'Extension Nails + Gel Polish', price: 1000, duration: 95, desc: 'Full set nail extensions finished with gel polish.' },
  { id: 'f131', gender: 'female', category: 'hands-legs', name: 'Extension Nails + Art', price: 1200, duration: 110, desc: 'Full set nail extensions with custom nail art.' },
  { id: 'f132', gender: 'female', category: 'hands-legs', name: 'Gel Extension + Art', price: 1300, duration: 115, desc: 'Full set gel nail extensions with custom art.' },
  { id: 'f133', gender: 'female', category: 'hands-legs', name: 'Acrylic Extension Art', price: 1500, duration: 120, desc: 'Full set durable acrylic extensions with custom art.' },
  { id: 'f134', gender: 'female', category: 'hands-legs', name: 'Engagement/Bridal Nail Extension', price: 1500, duration: 120, desc: 'Specialized bridal themed extensions with art.' },
  { id: 'f135', gender: 'female', category: 'hands-legs', name: 'Bridal Nail Art Extension', price: 1700, duration: 135, desc: 'Full premium luxury bridal extensions and stones.' }
];

// Stylists Database
const stylistsData = [
  { id: 'st1', name: 'MUKESH SIR', role: 'Director and Hair Artist', avatar: 'assets/mukesh_sir.jpeg', rating: 5.0, reviews: 412 },
  { id: 'st2', name: 'AMAR SIR', role: 'Master Hair Stylist', avatar: 'assets/amar_sir.jpeg', rating: 4.9, reviews: 328 },
  { id: 'st3', name: 'BALAJI SIR', role: 'Junior Artist', avatar: 'assets/balaji_sir.jpeg', rating: 4.8, reviews: 290 },
  { id: 'st4', name: 'SAMARTH SIR', role: 'Creative Hair Artist', avatar: 'assets/samarth_sir.jpeg', rating: 4.9, reviews: 185 },
  { id: 'st5', name: 'PRATIKSHA MAM', role: 'Senior Skincare Artist', avatar: 'assets/pratiksha_mam.jpeg', rating: 4.9, reviews: 298 },
  { id: 'st6', name: 'COMING SOON', role: 'Skincare & Makeup Expert', avatar: 'assets/coming_soon.png', rating: 5.0, reviews: 100 }
];

// State Management
let selectedServices = [];
let currentWizardStep = 1;
let selectedStylist = null;
let selectedDate = null;
let selectedTime = null;
let activeGender = 'male';
let activeCategory = 'all';

// Gender Subcategories Mapping
const genderCategories = {
  male: {
    'all': 'All Services',
    'hair-cut': 'Hair Cut',
    'hair-colour': 'Hair Colour',
    'hair-treatment': 'Hair Treatment',
    'clean-up': 'Face Clean Up',
    'bleach': 'Face Bleach',
    'facial': 'Men Facial',
    'waxing': 'Face Waxing'
  },
  female: {
    'all': 'All Services',
    'hair-cut': 'Hair Cut',
    'hair-colour': 'Hair Colour',
    'hair-treatment': 'Hair Treatment',
    'threading-wax': 'Threading & Wax',
    'clean-up': 'Clean Up',
    'facial': 'Facial',
    'bleach': 'Bleach',
    'body-care': 'Massage & Spa',
    'hands-legs': 'Nail & Hand Spa'
  }
};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initLiveHours();
  initStickyHeader();
  initMobileMenu();
  initScrollReveal();
  initStatsCounter();
  initGenderSelector();
  renderCategoryFilters();
  renderServices('all');
  initServiceSearch();
  initLookbookLightbox();
  initFranchiseForm();
  initContactForm();
  initBookingWizard();
  initHeroVideoAudio();

  // Load and sync live data from Firebase
  syncFirebaseData();
});

// 1. Live Hours Status
function initLiveHours() {
  const statusBadge = document.getElementById('live-status');
  if (!statusBadge) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 2 is Tuesday, 6 is Saturday
  const hour = now.getHours();
  
  // Salon hours: 11 AM to 10 PM (11:00 - 22:00), Tuesday closed
  const openHour = 11;
  const closeHour = 22;

  if (day === 2) {
    statusBadge.className = 'live-status-badge closed';
    statusBadge.innerHTML = '<span class="status-dot"></span>Closed Today (Weekly Holiday)';
  } else if (hour >= openHour && hour < closeHour) {
    statusBadge.className = 'live-status-badge open';
    statusBadge.innerHTML = '<span class="status-dot"></span>Open Now (Closes at 10:00 PM)';
  } else {
    statusBadge.className = 'live-status-badge closed';
    statusBadge.innerHTML = '<span class="status-dot"></span>Closed (Opens at 11:00 AM)';
  }
}

// 2. Sticky Header & Active Nav Links
function initStickyHeader() {
  const header = document.querySelector('.header');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Header class scroll toggle
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll Spy active nav links
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 3. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('nav-active');
    const icon = toggleBtn.querySelector('i');
    if (header.classList.contains('nav-active')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

  // Close mobile menu when nav links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-active');
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

// 4. Scroll Reveal Animations
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve once revealed
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

// 4b. Stats Count-Up Animation
function initStatsCounter() {
  const statsSection = document.querySelector('.hero-stats');
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statsSection || statNumbers.length === 0) return;

  const animateCounters = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'), 10);
      const suffix = stat.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000; // 2 seconds animation duration
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing: easeOutQuad
        const easeProgress = progress * (2 - progress);
        
        current = Math.floor(easeProgress * target);
        stat.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target + suffix;
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(statsSection);
}

// 5. Services Rendering & Filtering
function renderServices(category = 'all', searchTerm = '') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = '';

  const categoriesList = { ...genderCategories[activeGender] };
  delete categoriesList['all'];

  let categoriesToRender = [];
  if (category === 'all') {
    categoriesToRender = Object.keys(categoriesList);
  } else {
    categoriesToRender = [category];
  }

  let totalVisibleServices = 0;
  const isSearchView = searchTerm.trim().length > 0;

  categoriesToRender.forEach(catKey => {
    const catLabel = categoriesList[catKey];
    
    const catServices = servicesData.filter(service => {
      const matchesGender = service.gender === activeGender;
      const matchesCategory = service.category === catKey;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            service.desc.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGender && matchesCategory && matchesSearch;
    });

    if (catServices.length === 0) return;

    totalVisibleServices += catServices.length;

    const catSection = document.createElement('div');
    catSection.className = 'services-cat-section';
    catSection.style.gridColumn = '1 / -1';
    catSection.style.marginBottom = '20px';

    const catHeader = document.createElement('div');
    catHeader.className = 'services-cat-header';
    catHeader.style.display = 'flex';
    catHeader.style.justifyContent = 'space-between';
    catHeader.style.alignItems = 'center';
    catHeader.style.padding = '15px 20px';
    catHeader.style.background = 'var(--bg-secondary)';
    catHeader.style.border = '1px solid var(--border-color)';
    catHeader.style.borderRadius = '8px';
    catHeader.style.cursor = 'pointer';
    catHeader.style.transition = 'var(--transition-fast)';

    const headerTitle = document.createElement('div');
    headerTitle.style.display = 'flex';
    headerTitle.style.alignItems = 'center';
    headerTitle.style.gap = '10px';

    const titleText = document.createElement('h3');
    titleText.style.margin = '0';
    titleText.style.fontSize = '1.1rem';
    titleText.style.color = 'var(--text-light)';
    titleText.textContent = catLabel;

    const badge = document.createElement('span');
    badge.className = 'cat-badge';
    badge.style.fontSize = '0.75rem';
    badge.style.fontWeight = '600';
    badge.style.padding = '3px 8px';
    badge.style.borderRadius = '20px';
    badge.textContent = `${catServices.length} Service${catServices.length > 1 ? 's' : ''}`;

    headerTitle.appendChild(titleText);
    headerTitle.appendChild(badge);

    const toggleIcon = document.createElement('i');
    toggleIcon.className = 'fas fa-chevron-down';
    toggleIcon.style.transition = 'transform 0.3s ease';
    toggleIcon.style.color = 'var(--text-muted)';

    catHeader.appendChild(headerTitle);
    catHeader.appendChild(toggleIcon);

    const gridContainer = document.createElement('div');
    gridContainer.className = 'services-cat-grid';
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
    gridContainer.style.gap = '30px';
    gridContainer.style.marginTop = '25px';

    const isExpanded = (category !== 'all') || isSearchView;
    if (isExpanded) {
      gridContainer.style.display = 'grid';
      toggleIcon.style.transform = 'rotate(180deg)';
      catHeader.style.borderColor = 'var(--gold-primary)';
    } else {
      gridContainer.style.display = 'none';
    }

    catServices.forEach(service => {
      const isAdded = selectedServices.some(s => s.id === service.id);
      const card = document.createElement('div');
      card.className = 'service-card glass-card reveal';
      card.innerHTML = `
        <div class="service-header">
          <h3 class="service-title">${service.name}</h3>
          <span class="service-price">₹${service.price}</span>
        </div>
        <div class="service-meta">
          <span><i class="far fa-clock"></i> ${service.duration} Mins</span>
        </div>
        <p class="service-desc">${service.desc}</p>
        <div class="service-action">
          <button class="service-add-btn ${isAdded ? 'added' : ''}" data-id="${service.id}">
            <i class="fas ${isAdded ? 'fa-check' : 'fa-plus'}"></i> 
            <span>${isAdded ? 'Selected' : 'Add to Booking'}</span>
          </button>
        </div>
      `;

      const addBtn = card.querySelector('.service-add-btn');
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleServiceSelection(service, addBtn);
      });

      gridContainer.appendChild(card);
    });

    catSection.appendChild(catHeader);
    catSection.appendChild(gridContainer);

    catHeader.addEventListener('click', () => {
      const isCurrentlyCollapsed = gridContainer.style.display === 'none';
      if (isCurrentlyCollapsed) {
        gridContainer.style.display = 'grid';
        toggleIcon.style.transform = 'rotate(180deg)';
        catHeader.style.borderColor = 'var(--gold-primary)';
      } else {
        gridContainer.style.display = 'none';
        toggleIcon.style.transform = 'rotate(0deg)';
        catHeader.style.borderColor = 'var(--border-color)';
      }
    });

    catHeader.addEventListener('mouseenter', () => {
      catHeader.style.background = 'rgba(255, 255, 255, 0.03)';
      if (gridContainer.style.display === 'none') {
        catHeader.style.borderColor = 'rgba(197, 168, 128, 0.4)';
      }
    });
    catHeader.addEventListener('mouseleave', () => {
      catHeader.style.background = 'var(--bg-secondary)';
      if (gridContainer.style.display === 'none') {
        catHeader.style.borderColor = 'var(--border-color)';
      }
    });

    container.appendChild(catSection);
  });

  if (totalVisibleServices === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px; display: block; color: var(--gold-primary);"></i>
        No services found matching your criteria.
      </div>
    `;
  } else {
    initScrollReveal();
  }
}

function toggleServiceSelection(service, buttonElement) {
  const index = selectedServices.findIndex(s => s.id === service.id);

  if (index === -1) {
    selectedServices.push(service);
    buttonElement.classList.add('added');
    buttonElement.querySelector('i').className = 'fas fa-check';
    buttonElement.querySelector('span').textContent = 'Selected';
  } else {
    selectedServices.splice(index, 1);
    buttonElement.classList.remove('added');
    buttonElement.querySelector('i').className = 'fas fa-plus';
    buttonElement.querySelector('span').textContent = 'Add to Booking';
  }

  updateBookingBar();
}

function updateBookingBar() {
  const bar = document.getElementById('booking-bar');
  const summaryCount = document.getElementById('booking-count');
  const summaryPrice = document.getElementById('booking-total-price');

  if (!bar) return;

  if (selectedServices.length > 0) {
    const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
    summaryCount.textContent = `${selectedServices.length} Service${selectedServices.length > 1 ? 's' : ''}`;
    summaryPrice.textContent = total;
    bar.classList.add('visible');
  } else {
    bar.classList.remove('visible');
  }
}

function renderCategoryFilters() {
  const container = document.getElementById('services-filter-container');
  if (!container) return;

  container.innerHTML = '';
  
  const categories = genderCategories[activeGender];
  
  Object.entries(categories).forEach(([key, label]) => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${key === activeCategory ? 'active' : ''}`;
    btn.setAttribute('data-filter', key);
    btn.textContent = label;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = key;
      
      const searchVal = document.getElementById('service-search-input').value;
      renderServices(activeCategory, searchVal);
    });
    
    container.appendChild(btn);
  });
}

function initGenderSelector() {
  const maleBtn = document.getElementById('gender-male-btn');
  const femaleBtn = document.getElementById('gender-female-btn');
  if (!maleBtn || !femaleBtn) return;

  maleBtn.addEventListener('click', () => {
    if (activeGender === 'male') return;
    maleBtn.classList.add('active');
    femaleBtn.classList.remove('active');
    activeGender = 'male';
    activeCategory = 'all';
    renderCategoryFilters();
    renderServices('all');
  });

  femaleBtn.addEventListener('click', () => {
    if (activeGender === 'female') return;
    femaleBtn.classList.add('active');
    maleBtn.classList.remove('active');
    activeGender = 'female';
    activeCategory = 'all';
    renderCategoryFilters();
    renderServices('all');
  });
}

function initServiceSearch() {
  const searchInput = document.getElementById('service-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    renderServices(activeCategory, searchInput.value);
  });
}

// 6. Lookbook Lightbox Modal
function initLookbookLightbox() {
  const lookbookItems = document.querySelectorAll('.lookbook-item');
  const lightbox = document.getElementById('lightbox-modal');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxVideo = lightbox.querySelector('.lightbox-video');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  lookbookItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('.lookbook-title').textContent;
      const videoUrl = item.getAttribute('data-video-url');
      
      if (videoUrl) {
        if (lightboxImg) lightboxImg.style.display = 'none';
        if (lightboxVideo) {
          lightboxVideo.src = videoUrl;
          lightboxVideo.style.display = 'block';
          lightboxVideo.play();
        }
      } else {
        const img = item.querySelector('.lookbook-img');
        if (lightboxVideo) {
          lightboxVideo.style.display = 'none';
          lightboxVideo.pause();
          lightboxVideo.src = '';
        }
        if (lightboxImg && img) {
          lightboxImg.src = img.src;
          lightboxImg.style.display = 'block';
        }
      }
      
      lightboxCaption.textContent = title;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
    }
    document.body.style.overflow = 'auto';
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // ESC key to close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// 7. Franchise Application Form Submission
function initFranchiseForm() {
  const form = document.getElementById('salon-franchise-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('franchise-name').value.trim();
    const email = document.getElementById('franchise-email').value.trim();
    const phone = document.getElementById('franchise-phone').value.trim();
    const city = document.getElementById('franchise-city').value.trim();
    const investment = document.getElementById('franchise-investment').value;
    const experience = document.getElementById('franchise-experience').value;
    const message = document.getElementById('franchise-message').value.trim() || 'None';
    
    const text = `*New Franchise Application - MAKE ME*\n\n` +
                 `*Name:* ${name}\n` +
                 `*Email:* ${email}\n` +
                 `*Phone:* ${phone}\n` +
                 `*City & State:* ${city}\n` +
                 `*Investment Budget:* ${investment}\n` +
                 `*Experience:* ${experience}\n` +
                 `*Details:* ${message}`;
                 
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting Application...';
    
    // Send to both WhatsApp numbers
    sendWhatsAppMessage(text);
    
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Application Submitted!';
      submitBtn.style.background = '#128C7E';
      submitBtn.style.color = '#ffffff';
      
      form.reset();
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 3500);
    }, 1200);
  });
}

// 8. Contact Form Placeholder Validation
function initContactForm() {
  const form = document.getElementById('salon-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const message = document.getElementById('contact-message').value.trim();
    
    const text = `*New Inquiry from MAKE ME Website*\n\n` +
                 `*Name:* ${name}\n` +
                 `*Phone:* ${phone}\n` +
                 `*Message:* ${message}`;
                 
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening WhatsApp...';
    
    // Send to both WhatsApp numbers
    sendWhatsAppMessage(text);
    
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Redirected to WhatsApp!';
      submitBtn.style.background = '#128C7E';
      submitBtn.style.color = '#ffffff';
      
      form.reset();
      
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
      }, 3500);
    }, 1200);
  });
}

// 9. Interactive Multi-Step Booking Wizard
function initBookingWizard() {
  const openBtns = document.querySelectorAll('.book-now-trigger');
  const closeBtn = document.getElementById('close-booking-modal');
  const modal = document.getElementById('booking-modal');
  const overlay = document.getElementById('booking-modal-overlay');

  if (!modal) return;

  // Open modal triggers
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal();
    });
  });

  // Close triggers
  closeBtn.addEventListener('click', closeBookingModal);
  overlay.addEventListener('click', closeBookingModal);

  // Next & Back button controls
  document.getElementById('wizard-next-btn').addEventListener('click', handleWizardNext);
  document.getElementById('wizard-back-btn').addEventListener('click', handleWizardBack);

  // Stylist pick handlers
  initStylistSelection();

  // Date and Time picker rendering
  initCalendar();
  initTimePicker();
}

function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  const overlay = document.getElementById('booking-modal-overlay');
  
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  currentWizardStep = 1;
  goToStep(1);
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  const overlay = document.getElementById('booking-modal-overlay');
  
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function goToStep(step) {
  currentWizardStep = step;
  
  // Update step panels visibility
  const panels = document.querySelectorAll('.wizard-step-panel');
  panels.forEach(p => p.classList.remove('active'));
  document.getElementById(`step-${step}-panel`).classList.add('active');

  // Update step progress breadcrumbs
  const breadcrumbs = document.querySelectorAll('.wizard-step');
  breadcrumbs.forEach((bc, idx) => {
    bc.classList.remove('active', 'completed');
    if (idx + 1 === step) {
      bc.classList.add('active');
    } else if (idx + 1 < step) {
      bc.classList.add('completed');
    }
  });

  // Control bottom navigation buttons
  const backBtn = document.getElementById('wizard-back-btn');
  const nextBtn = document.getElementById('wizard-next-btn');

  if (step === 1) {
    backBtn.style.visibility = 'hidden';
  } else {
    backBtn.style.visibility = 'visible';
  }

  if (step === 4) {
    nextBtn.textContent = 'Confirm Booking';
  } else if (step === 5) {
    // Success screen has no buttons
    document.querySelector('.booking-modal-footer').style.display = 'none';
  } else {
    nextBtn.textContent = 'Continue';
    document.querySelector('.booking-modal-footer').style.display = 'flex';
  }

  // Pre-step renders
  if (step === 1) {
    renderStep1Services();
  } else if (step === 4) {
    renderStep4Confirmation();
  }
}

// Wizard Step 1: Render selected services & cart control
function renderStep1Services() {
  const container = document.getElementById('step-1-services-list');
  if (!container) return;

  container.innerHTML = '';

  if (selectedServices.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px; color: var(--text-muted);">
        <i class="fas fa-shopping-bag" style="font-size: 2rem; margin-bottom: 15px; display: block;"></i>
        No services selected. Go back to our menu to add services, or select some below.
      </div>
    `;
    
    // Render Quick Add recommendations inside step 1
    const quickAddWrap = document.createElement('div');
    quickAddWrap.style.marginTop = '20px';
    quickAddWrap.innerHTML = '<h4 style="margin-bottom:15px; font-size: 1rem;">Recommended Services</h4>';
    
    servicesData.filter(s => s.gender === activeGender).slice(0, 4).forEach(service => {
      const item = document.createElement('div');
      item.className = 'stylist-picker-item';
      item.style.marginBottom = '10px';
      item.innerHTML = `
        <div style="flex-grow:1;">
          <div style="font-weight:500;">${service.name}</div>
          <div style="font-size:0.8rem; color:var(--text-muted);">₹${service.price} • ${service.duration} mins</div>
        </div>
        <button class="btn btn-secondary" style="padding: 6px 12px; font-size:0.75rem;" data-quick-id="${service.id}">Add</button>
      `;

      item.querySelector('button').addEventListener('click', () => {
        selectedServices.push(service);
        updateBookingBar();
        // Rerender services grid in main layout if present
        const activeFilter = document.querySelector('.filter-btn.active');
        const category = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
        const searchInput = document.getElementById('service-search-input');
        renderServices(category, searchInput ? searchInput.value : '');
        renderStep1Services();
      });

      quickAddWrap.appendChild(item);
    });

    container.appendChild(quickAddWrap);
    return;
  }

  // Render list of selected services in step 1 panel
  selectedServices.forEach((service, index) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.padding = '12px 16px';
    row.style.border = '1px solid var(--glass-border)';
    row.style.borderRadius = '8px';
    row.style.marginBottom = '10px';
    row.style.background = 'rgba(255,255,255,0.01)';
    row.innerHTML = `
      <div>
        <div style="font-weight:500;">${service.name}</div>
        <div style="font-size:0.8rem; color:var(--gold-primary);">₹${service.price} • ${service.duration} Mins</div>
      </div>
      <button style="background:none; border:none; color:#e57373; cursor:pointer;" data-remove-idx="${index}">
        <i class="far fa-trash-alt"></i>
      </button>
    `;

    row.querySelector('button').addEventListener('click', () => {
      selectedServices.splice(index, 1);
      updateBookingBar();
      // Sync list
      const activeFilter = document.querySelector('.filter-btn.active');
      const category = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
      const searchInput = document.getElementById('service-search-input');
      renderServices(category, searchInput ? searchInput.value : '');
      renderStep1Services();
    });

    container.appendChild(row);
  });

  const totalsSummary = document.createElement('div');
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);
  
  totalsSummary.style.marginTop = '20px';
  totalsSummary.style.textAlign = 'right';
  totalsSummary.style.fontSize = '0.95rem';
  totalsSummary.innerHTML = `
    <div>Total Time: <strong style="color:var(--text-light);">${totalDuration} mins</strong></div>
    <div style="margin-top:6px; font-size:1.1rem;">Estimated Total: <strong style="color:var(--gold-primary);">₹${totalPrice}</strong></div>
  `;
  container.appendChild(totalsSummary);
}

// Wizard Step 2: Select Stylist
function initStylistSelection() {
  const container = document.getElementById('step-2-stylists-list');
  if (!container) return;

  container.innerHTML = '';

  // Render "Any Stylist Available" option first
  const anyOption = document.createElement('div');
  anyOption.className = 'stylist-picker-item selected';
  anyOption.setAttribute('data-stylist-id', 'any');
  anyOption.innerHTML = `
    <div class="info-icon" style="margin-right:20px; background:var(--bg-tertiary);"><i class="fas fa-users"></i></div>
    <div class="stylist-picker-info">
      <div class="stylist-picker-name">Any Stylist Available</div>
      <div class="stylist-picker-role">We will pair you with the best specialist for your time slot</div>
    </div>
    <div class="stylist-picker-select"><i class="fas fa-check-circle"></i></div>
  `;
  selectedStylist = { id: 'any', name: 'Any Stylist Available' };

  anyOption.addEventListener('click', () => {
    selectStylistDOM(anyOption, { id: 'any', name: 'Any Stylist Available' });
  });
  container.appendChild(anyOption);

  // Render lists of experts
  stylistsData.forEach(st => {
    const option = document.createElement('div');
    option.className = 'stylist-picker-item';
    option.setAttribute('data-stylist-id', st.id);
    option.innerHTML = `
      <img src="${st.avatar}" class="stylist-picker-avatar" alt="${st.name}">
      <div class="stylist-picker-info">
        <div class="stylist-picker-name">${st.name}</div>
        <div class="stylist-picker-role">${st.role}</div>
      </div>
      <div class="stylist-picker-select"><i class="far fa-circle"></i></div>
    `;

    option.addEventListener('click', () => {
      selectStylistDOM(option, st);
    });
    container.appendChild(option);
  });
}

function selectStylistDOM(element, stylist) {
  document.querySelectorAll('.stylist-picker-item').forEach(item => {
    item.classList.remove('selected');
    item.querySelector('.stylist-picker-select i').className = 'far fa-circle';
  });

  element.classList.add('selected');
  element.querySelector('.stylist-picker-select i').className = 'fas fa-check-circle';
  selectedStylist = stylist;

  // If the currently selected date is blocked for the new stylist, clear selectedDate
  if (selectedDate) {
    const dateObj = selectedDate;
    const yearStr = dateObj.getFullYear();
    const monthStr = String(dateObj.getMonth() + 1).padStart(2, '0');
    const dayStr = String(dateObj.getDate()).padStart(2, '0');
    const formattedDateStr = `${yearStr}-${monthStr}-${dayStr}`;
    
    // Check if this date is blocked for the new stylist
    let blockedHolidays = [];
    try {
      blockedHolidays = JSON.parse(localStorage.getItem('makeme_holidays') || '[]');
    } catch (e) {}

    const isSalonClosed = blockedHolidays.some(h => {
      if (typeof h === 'string') return h === formattedDateStr;
      return h && h.date === formattedDateStr && (h.stylistId === 'all' || h.stylistId === 'salon');
    });

    let isBlocked = false;
    if (isSalonClosed) {
      isBlocked = true;
    } else if (stylist.id === 'any') {
      const blockedStylists = new Set();
      blockedHolidays.forEach(h => {
        if (h && typeof h === 'object' && h.date === formattedDateStr) {
          blockedStylists.add(h.stylistId);
        }
      });
      if (blockedStylists.size >= stylistsData.length) {
        isBlocked = true;
      }
    } else {
      isBlocked = blockedHolidays.some(h => {
        return h && typeof h === 'object' && h.date === formattedDateStr && h.stylistId === stylist.id;
      });
    }

    if (isBlocked) {
      selectedDate = null;
    }
  }

  // Refresh calendar and time slot availability since stylist changed
  selectedTime = null;
  initCalendar();
  initTimePicker();
}

// Wizard Step 3: Calendar rendering
function initCalendar() {
  const grid = document.getElementById('calendar-days-grid');
  const monthLabel = document.getElementById('calendar-current-month');
  
  if (!grid) return;

  const now = new Date();
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const renderMonth = (m, y) => {
    monthLabel.textContent = `${months[m]} ${y}`;
    grid.innerHTML = '';

    // Load blocked holiday dates
    let blockedHolidays = [];
    try {
      blockedHolidays = JSON.parse(localStorage.getItem('makeme_holidays') || '[]');
    } catch (e) {
      console.error('Error parsing holidays in calendar:', e);
    }

    // First day of month
    const firstDay = new Date(y, m, 1).getDay();
    const totalDays = new Date(y, m + 1, 0).getDate();

    // Fill blank prefix spaces
    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement('div');
      grid.appendChild(blank);
    }

    // Fill month days
    for (let d = 1; d <= totalDays; d++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';
      dayCell.textContent = d;

      const dateObj = new Date(y, m, d);
      
      // Disable past dates
      const compareDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      if (dateObj < compareDate) {
        dayCell.classList.add('disabled');
      }

      // Format as YYYY-MM-DD
      const yearStr = dateObj.getFullYear();
      const monthStr = String(dateObj.getMonth() + 1).padStart(2, '0');
      const dayStr = String(dateObj.getDate()).padStart(2, '0');
      const formattedDateStr = `${yearStr}-${monthStr}-${dayStr}`;

      // Disable holiday dates (salon-wide or stylist-specific)
      const isSalonClosed = blockedHolidays.some(h => {
        if (typeof h === 'string') return h === formattedDateStr;
        return h && h.date === formattedDateStr && (h.stylistId === 'all' || h.stylistId === 'salon');
      });

      let isBlockedForSelected = false;
      let blockReason = '';

      if (isSalonClosed) {
        isBlockedForSelected = true;
        blockReason = 'Salon is closed (Holiday)';
      } else if (selectedStylist) {
        if (selectedStylist.id === 'any') {
          // Check if ALL stylists are blocked on this date
          const blockedStylists = new Set();
          blockedHolidays.forEach(h => {
            if (h && typeof h === 'object' && h.date === formattedDateStr) {
              blockedStylists.add(h.stylistId);
            }
          });
          if (blockedStylists.size >= stylistsData.length) {
            isBlockedForSelected = true;
            blockReason = 'No stylists available on this day';
          }
        } else {
          // Specific stylist selected
          const isStylistOnLeave = blockedHolidays.some(h => {
            return h && typeof h === 'object' && h.date === formattedDateStr && h.stylistId === selectedStylist.id;
          });
          if (isStylistOnLeave) {
            isBlockedForSelected = true;
            blockReason = `${selectedStylist.name} is on leave`;
          }
        }
      }

      if (isBlockedForSelected) {
        dayCell.classList.add('disabled');
        dayCell.title = blockReason;
      }

      // Check if selected
      if (selectedDate && 
          selectedDate.getDate() === d && 
          selectedDate.getMonth() === m && 
          selectedDate.getFullYear() === y) {
        dayCell.classList.add('selected');
      }

      dayCell.addEventListener('click', () => {
        if (dayCell.classList.contains('disabled')) return;
        
        document.querySelectorAll('.calendar-day').forEach(cell => cell.classList.remove('selected'));
        dayCell.classList.add('selected');
        selectedDate = new Date(y, m, d);
        
        // Refresh time slot selections
        selectedTime = null;
        initTimePicker();
      });

      grid.appendChild(dayCell);
    }
  };

  renderMonth(currentMonth, currentYear);

  // Month navigation (limit to current month and next month)
  document.getElementById('calendar-next').addEventListener('click', () => {
    if (currentMonth === now.getMonth()) {
      currentMonth = (currentMonth + 1) % 12;
      if (currentMonth === 0) currentYear++;
      renderMonth(currentMonth, currentYear);
    }
  });

  document.getElementById('calendar-prev').addEventListener('click', () => {
    if (currentMonth !== now.getMonth()) {
      currentMonth = (currentMonth - 1 + 12) % 12;
      if (currentMonth === 11) currentYear--;
      renderMonth(currentMonth, currentYear);
    }
  });
}

function initTimePicker() {
  const timeSlotsContainer = document.getElementById('time-slots-container');
  if (!timeSlotsContainer) return;

  // 1-hour slots from 11:00 AM to 10:00 PM (last slot starts at 9:00 PM)
  const slots = [
    '11:00 AM', 
    '12:00 PM', 
    '01:00 PM', 
    '02:00 PM', 
    '03:00 PM', 
    '04:00 PM', 
    '05:00 PM', 
    '06:00 PM', 
    '07:00 PM', 
    '08:00 PM', 
    '09:00 PM'
  ];
  
  timeSlotsContainer.innerHTML = '';

  // Get current active bookings to check for overlaps
  let bookings = [];
  try {
    bookings = JSON.parse(localStorage.getItem('makeme_bookings') || '[]');
  } catch (e) {
    console.error('Error reading bookings for overlap check:', e);
  }

  // Get selected date formatted as YYYY-MM-DD
  const selectedDateStr = selectedDate ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}` : '';

  slots.forEach(slot => {
    const slotEl = document.createElement('div');
    slotEl.className = 'time-slot';
    slotEl.textContent = slot;

    // Overlap checking logic
    let isUnavailable = false;
    if (selectedDateStr && selectedStylist) {
      const activeBookingsAtSlot = bookings.filter(b => 
        b.status !== 'cancelled' && 
        b.appointmentDate === selectedDateStr && 
        b.appointmentTime === slot
      );

      if (selectedStylist.id === 'any') {
        // If all 6 stylists are booked, then no one is available
        if (activeBookingsAtSlot.length >= 6) {
          isUnavailable = true;
        }
      } else {
        // If the selected specific stylist is booked, or if all stylists are booked
        const isStylistBusy = activeBookingsAtSlot.some(b => b.stylistId === selectedStylist.id);
        if (isStylistBusy || activeBookingsAtSlot.length >= 6) {
          isUnavailable = true;
        }
      }
    }

    if (isUnavailable) {
      slotEl.classList.add('disabled');
      slotEl.title = 'This slot is already booked';
    } else {
      slotEl.addEventListener('click', () => {
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
        slotEl.classList.add('selected');
        selectedTime = slot;
      });
    }

    timeSlotsContainer.appendChild(slotEl);
  });
}

// Wizard Step 4: Booking summary confirmation details
function renderStep4Confirmation() {
  const container = document.getElementById('booking-summary-receipt-container');
  if (!container) return;

  const total = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected';
  const timeStr = selectedTime || 'No time selected';

  let servicesHTML = '';
  selectedServices.forEach(s => {
    servicesHTML += `
      <div class="receipt-service-item">
        <span>${s.name}</span>
        <span>₹${s.price}</span>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="booking-summary-receipt">
      <div class="receipt-title">Appointment Ticket</div>
      
      <div class="receipt-row">
        <span class="receipt-label">Stylist:</span>
        <span class="receipt-value">${selectedStylist ? selectedStylist.name : 'Not selected'}</span>
      </div>
      
      <div class="receipt-row">
        <span class="receipt-label">Date:</span>
        <span class="receipt-value">${formattedDate}</span>
      </div>
      
      <div class="receipt-row">
        <span class="receipt-label">Time:</span>
        <span class="receipt-value">${timeStr}</span>
      </div>
      
      <div class="receipt-row">
        <span class="receipt-label">Duration:</span>
        <span class="receipt-value">${totalDuration} Mins</span>
      </div>
      
      <div class="receipt-services-list">
        <div style="font-weight: 500; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--gold-primary); margin-bottom: 10px;">Services Booked</div>
        ${servicesHTML}
      </div>
      
      <div class="receipt-total">
        <span>Total Estimated:</span>
        <span class="text-gradient" style="font-family:var(--font-serif);">₹${total}</span>
      </div>
    </div>
  `;
}

// Wizard Step Navigation Logic & Validation
function handleWizardNext() {
  if (currentWizardStep === 1) {
    if (selectedServices.length === 0) {
      alert('Please select at least one service before continuing.');
      return;
    }
    goToStep(2);
  } else if (currentWizardStep === 2) {
    if (!selectedStylist) {
      alert('Please select a stylist before continuing.');
      return;
    }
    goToStep(3);
  } else if (currentWizardStep === 3) {
    if (!selectedDate) {
      alert('Please select an appointment date from the calendar.');
      return;
    }
    if (!selectedTime) {
      alert('Please choose a time slot for your appointment.');
      return;
    }
    goToStep(4);
  } else if (currentWizardStep === 4) {
    // Validate Step 4 Form Details
    const nameInput = document.getElementById('booking-client-name');
    const phoneInput = document.getElementById('booking-client-phone');
    const dobInput = document.getElementById('booking-client-dob');

    if (!nameInput.value.trim()) {
      alert('Please enter your full name.');
      nameInput.focus();
      return;
    }
    if (!phoneInput.value.trim() || phoneInput.value.length < 9) {
      alert('Please enter a valid phone number.');
      phoneInput.focus();
      return;
    }
    if (!dobInput.value) {
      alert('Please select your Date of Birth (DOB).');
      dobInput.focus();
      return;
    }

    submitBookingForm();
  }
}

function handleWizardBack() {
  if (currentWizardStep > 1) {
    goToStep(currentWizardStep - 1);
  }
}

function submitBookingForm() {
  // Simulate API network submission
  const nextBtn = document.getElementById('wizard-next-btn');
  const backBtn = document.getElementById('wizard-back-btn');
  
  nextBtn.disabled = true;
  nextBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Confirming...';
  backBtn.style.visibility = 'hidden';

  // Gather booking details before resetting/clearing selectedServices
  const clientName = document.getElementById('booking-client-name').value.trim();
  const clientPhone = document.getElementById('booking-client-phone').value.trim();
  const clientDob = document.getElementById('booking-client-dob').value;
  const clientNotes = document.getElementById('booking-client-notes').value.trim() || 'None';
  
  const stylistName = selectedStylist ? selectedStylist.name : 'Any Available Expert';
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'No date selected';
  const timeStr = selectedTime || 'No time selected';
  
  const servicesList = selectedServices.map(s => `• ${s.name} (₹${s.price})`).join('\n');
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => sum + s.duration, 0);
  
  const ticketId = `MM-${Math.floor(100000 + Math.random() * 900000)}`;

  // Save booking payload to localStorage database
  const newBooking = {
    ticketId: ticketId,
    clientName: clientName,
    clientPhone: clientPhone,
    clientDob: clientDob,
    stylistName: stylistName,
    stylistId: selectedStylist ? selectedStylist.id : 'any',
    appointmentDate: selectedDate ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}` : '',
    appointmentTime: timeStr,
    services: selectedServices.map(s => ({ id: s.id, name: s.name, price: s.price, duration: s.duration })),
    totalPrice: totalPrice,
    totalDuration: totalDuration,
    notes: clientNotes,
    createdAt: new Date().toISOString()
  };

  try {
    const existingBookings = JSON.parse(localStorage.getItem('makeme_bookings') || '[]');
    existingBookings.push(newBooking);
    localStorage.setItem('makeme_bookings', JSON.stringify(existingBookings));
  } catch (e) {
    console.error('Error saving booking to localStorage:', e);
  }

  // Upload booking directly to Cloud Firestore Database
  if (window.db) {
    window.db.collection('bookings').doc(newBooking.ticketId).set(newBooking)
      .then(() => console.log("Booking successfully synced to Cloud Firestore."))
      .catch(err => console.error("Error uploading booking to Firebase:", err));
  }

  const text = `*New Appointment Booking - MAKE ME*\n\n` +
               `*Ticket ID:* ${ticketId}\n` +
               `*Client Name:* ${clientName}\n` +
               `*Client Phone:* ${clientPhone}\n\n` +
               `*Appointment Details:*\n` +
               `*Stylist:* ${stylistName}\n` +
               `*Date:* ${formattedDate}\n` +
               `*Time:* ${timeStr}\n\n` +
               `*Services Selected:*\n${servicesList}\n\n` +
               `*Total Price:* ₹${totalPrice}\n` +
               `*Total Duration:* ${totalDuration} mins\n` +
               `*Special Notes:* ${clientNotes}`;

  setTimeout(() => {
    // Open WhatsApp windows
    sendWhatsAppMessage(text);

    // Clear selections
    selectedServices = [];
    updateBookingBar();
    
    // Reset service grid buttons in main screen layout
    document.querySelectorAll('.service-add-btn').forEach(btn => {
      btn.classList.remove('added');
      btn.querySelector('i').className = 'fas fa-plus';
      btn.querySelector('span').textContent = 'Add to Booking';
    });

    // Set Ticket ID dynamically
    const ticketIdEl = document.getElementById('success-ticket-id');
    if (ticketIdEl) {
      ticketIdEl.textContent = ticketId;
    }

    // Add WhatsApp backup and user reminder buttons dynamically onto the success container
    const successMsgEl = document.querySelector('.booking-success-message');
    if (successMsgEl) {
      const existingBackup = document.getElementById('wa-backup-container');
      if (existingBackup) existingBackup.remove(); // clear if already exists
      
      const phone1 = "919370756017";
      const phone2 = "919021816517";
      const url1 = `https://api.whatsapp.com/send?phone=${phone1}&text=${encodeURIComponent(text)}`;
      const url2 = `https://api.whatsapp.com/send?phone=${phone2}&text=${encodeURIComponent(text)}`;
      
      const clientText = `*Your MAKE ME Salon Appointment Confirmed!* 💈✨\n\n` +
                         `Dear *${clientName}*,\n` +
                         `Your appointment at MAKE ME Unisex Salon has been confirmed. Here are your details:\n\n` +
                         `*Ticket ID:* ${ticketId}\n` +
                         `*Stylist:* ${stylistName}\n` +
                         `*Date:* ${formattedDate}\n` +
                         `*Time:* ${timeStr}\n\n` +
                         `*Services:* \n${servicesList}\n\n` +
                         `*Total Price:* ₹${totalPrice}\n` +
                         `*Duration:* ${totalDuration} mins\n\n` +
                         `📍 *Location:* MAKE ME Unisex Salon, Pune\n` +
                         `📞 *Support:* +91 93707 56017\n\n` +
                         `We look forward to pampering you!`;
                         
      const clientUrl = `https://api.whatsapp.com/send?phone=91${clientPhone}&text=${encodeURIComponent(clientText)}`;
      const googleCalUrl = getGoogleCalendarUrl(newBooking);
      
      const backupDiv = document.createElement('div');
      backupDiv.id = 'wa-backup-container';
      backupDiv.style.marginTop = '24px';
      backupDiv.innerHTML = `
        <!-- Salon Backup Notification -->
        <p class="success-text" style="font-size: 0.85rem; margin-bottom: 10px; opacity:0.85;">
          Booking sent to salon. If the chats did not open automatically, send via backup:
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px;">
          <a href="${url1}" target="_blank" class="btn btn-secondary btn-reminder-wa" style="padding: 8px 14px; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 6px; border-radius: 40px; text-decoration: none;">
            <i class="fab fa-whatsapp"></i> Send to Line 1
          </a>
          <a href="${url2}" target="_blank" class="btn btn-secondary btn-reminder-wa" style="padding: 8px 14px; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 6px; border-radius: 40px; text-decoration: none;">
            <i class="fab fa-whatsapp"></i> Send to Line 2
          </a>
        </div>

        <!-- User Reminder & Confirmation -->
        <p class="success-text" style="font-size: 0.85rem; margin-bottom: 10px; font-weight: 600; color: var(--gold-primary); text-transform: uppercase; letter-spacing: 0.05em;">
          Set Reminder & Save Appointment:
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
          <a href="${googleCalUrl}" target="_blank" class="btn btn-reminder-google" style="padding: 8px 14px; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 6px; border-radius: 40px; text-decoration: none;">
            <i class="fab fa-google"></i> Google Calendar
          </a>
          <button id="download-ics-btn" class="btn btn-reminder-ics" style="padding: 8px 14px; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 6px; border-radius: 40px; cursor: pointer;">
            <i class="far fa-calendar-alt"></i> Apple/Outlook (.ics)
          </button>
          <a href="${clientUrl}" target="_blank" class="btn btn-reminder-wa" style="padding: 8px 14px; font-size: 0.72rem; display: inline-flex; align-items: center; gap: 6px; border-radius: 40px; text-decoration: none;">
            <i class="fab fa-whatsapp"></i> Save to My WhatsApp
          </a>
        </div>
      `;
      
      const reloadBtn = successMsgEl.querySelector('button');
      successMsgEl.insertBefore(backupDiv, reloadBtn);
      
      // Attach event listener for ICS download
      const icsBtn = backupDiv.querySelector('#download-ics-btn');
      if (icsBtn) {
        icsBtn.addEventListener('click', () => {
          downloadIcsFile(newBooking);
        });
      }
    }

    // Reset wizard input fields
    document.getElementById('booking-client-name').value = '';
    document.getElementById('booking-client-phone').value = '';
    document.getElementById('booking-client-dob').value = '';
    document.getElementById('booking-client-notes').value = '';

    // Push state step to 5 (success)
    goToStep(5);
  }, 2000);
}

// 9. Background Video Audio Toggle
function initHeroVideoAudio() {
  const video = document.getElementById('hero-video');
  const toggleBtn = document.getElementById('video-audio-toggle');
  if (!video || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (video.muted) {
      video.muted = false;
      toggleBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
      toggleBtn.setAttribute('aria-label', 'Mute Video Audio');
    } else {
      video.muted = true;
      toggleBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      toggleBtn.setAttribute('aria-label', 'Unmute Video Audio');
    }
  });
}

// 10. Welcome Loader Screen Animation
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-bar');
  const emojiEl = document.getElementById('preloader-emoji');
  const textEl = document.getElementById('preloader-status-text');
  if (!preloader || !bar) return;

  // Emojis and status steps
  const steps = [
    { emoji: '💈', text: 'Powering up barber poles...' },
    { emoji: '✂️', text: 'Sterilizing scissors...' },
    { emoji: '🧴', text: 'Blending organic serums...' },
    { emoji: '💅', text: 'Preparing gel art paints...' },
    { emoji: '💇‍♀️', text: 'Warming up styling seats...' },
    { emoji: '✨', text: 'Ready to glow!' }
  ];

  const duration = 3000; // 3 seconds
  const startTime = performance.now();

  function updateLoader(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Update bar width
    bar.style.width = `${progress * 100}%`;

    // Update step text and emoji
    const currentStepIdx = Math.min(Math.floor(progress * steps.length), steps.length - 1);
    const step = steps[currentStepIdx];
    if (emojiEl.textContent !== step.emoji) {
      emojiEl.textContent = step.emoji;
      textEl.textContent = step.text;
    }

    if (progress < 1) {
      requestAnimationFrame(updateLoader);
    } else {
      // Finished! Fade out preloader
      setTimeout(() => {
        preloader.classList.add('fade-out');
        // Re-enable scroll on body
        document.body.style.overflow = '';
      }, 200);
    }
  }

  // Prevent scrolling while loading
  document.body.style.overflow = 'hidden';
  
  requestAnimationFrame(updateLoader);
}

// Helper to send formatted WhatsApp message to two phone lines
function sendWhatsAppMessage(text) {
  const phone1 = "919370756017";
  const phone2 = "919021816517";
  
  const url1 = `https://api.whatsapp.com/send?phone=${phone1}&text=${encodeURIComponent(text)}`;
  const url2 = `https://api.whatsapp.com/send?phone=${phone2}&text=${encodeURIComponent(text)}`;
  
  // Open line 1 in a new tab
  window.open(url1, '_blank');
  
  // Open line 2 in a new tab after a brief delay to bypass browser popup blockers
  setTimeout(() => {
    window.open(url2, '_blank');
  }, 400);
}

// Sync Firebase Firestore data to LocalStorage cache
function syncFirebaseData() {
  if (!window.db) return;

  // 1. Sync Holidays
  window.db.collection('settings').doc('holidays').get().then(doc => {
    if (doc.exists) {
      const dates = doc.data().dates || [];
      localStorage.setItem('makeme_holidays', JSON.stringify(dates));
      // Re-render calendar to reflect holiday blocks
      initCalendar();
    }
  }).catch(e => console.error("Firebase holidays fetch failed:", e));

  // 2. Sync Bookings for overlap check
  window.db.collection('bookings').get().then(querySnapshot => {
    const liveBookings = [];
    querySnapshot.forEach(doc => {
      liveBookings.push(doc.data());
    });
    localStorage.setItem('makeme_bookings', JSON.stringify(liveBookings));
    // If user is currently picking a time slot, update UI
    if (selectedDate && selectedTime === null) {
      initTimePicker();
    }
  }).catch(e => console.error("Firebase bookings fetch failed:", e));
}

// Translate 12h time to 24h for calendar formatting
function convertTimeTo24(timeStr) {
  const [time, modifier] = timeStr.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
}

// Generate Google Calendar Link for Booking
function getGoogleCalendarUrl(booking) {
  const title = `MAKE ME Salon Appointment (Ticket: ${booking.ticketId})`;
  const details = `Hi ${booking.clientName},\nThis is your booking reminder for MAKE ME Unisex Salon.\n\nServices: ${booking.services.map(s => s.name).join(', ')}\nTotal Price: ₹${booking.totalPrice}\nDuration: ${booking.totalDuration} mins\nNotes: ${booking.notes}`;
  const location = `MAKE ME Unisex Salon, Pune`;
  
  const time24 = booking.appointmentTime.includes('AM') || booking.appointmentTime.includes('PM') 
    ? convertTimeTo24(booking.appointmentTime) 
    : '12:00';
  const [year, month, day] = booking.appointmentDate.split('-');
  const [hours, minutes] = time24.split(':');
  
  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate.getTime() + booking.totalDuration * 60 * 1000);
  
  const formatISO = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const dates = `${formatISO(startDate)}/${formatISO(endDate)}`;
  
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
}

// Generate and trigger download of .ics calendar file with alert reminder
function downloadIcsFile(booking) {
  const time24 = booking.appointmentTime.includes('AM') || booking.appointmentTime.includes('PM') 
    ? convertTimeTo24(booking.appointmentTime) 
    : '12:00';
  const [year, month, day] = booking.appointmentDate.split('-');
  const [hours, minutes] = time24.split(':');
  
  const startDate = new Date(year, month - 1, day, hours, minutes);
  const endDate = new Date(startDate.getTime() + booking.totalDuration * 60 * 1000);
  
  const formatICS = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  const icsContent = 
    "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    `SUMMARY:MAKE ME Salon Appointment (Ticket: ${booking.ticketId})\n` +
    `DTSTART:${formatICS(startDate)}\n` +
    `DTEND:${formatICS(endDate)}\n` +
    `DESCRIPTION:Hi ${booking.clientName}\\, this is your booking reminder for MAKE ME Unisex Salon.\\n\\nServices: ${booking.services.map(s => s.name).join(', ')}\\nTotal Price: INR ${booking.totalPrice}\\nDuration: ${booking.totalDuration} mins\\nNotes: ${booking.notes}\n` +
    "LOCATION:MAKE ME Unisex Salon, Pune\n" +
    "BEGIN:VALARM\n" +
    "TRIGGER:-PT1H\n" +
    "ACTION:DISPLAY\n" +
    "DESCRIPTION:Reminder: MAKE ME Salon Appointment\n" +
    "END:VALARM\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";
    
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `makeme_booking_${booking.ticketId}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Trigger Instagram popup modal after 5 seconds
const initInstaPopup = () => {
  setTimeout(() => {
    const popup = document.getElementById('insta-popup');
    const overlay = document.getElementById('insta-popup-overlay');
    if (popup && overlay) {
      popup.classList.add('active');
      overlay.classList.add('active');
      popup.setAttribute('aria-hidden', 'false');
    }
  }, 5000);

  const closePopup = () => {
    const popup = document.getElementById('insta-popup');
    const overlay = document.getElementById('insta-popup-overlay');
    if (popup && overlay) {
      popup.classList.remove('active');
      overlay.classList.remove('active');
      popup.setAttribute('aria-hidden', 'true');
    }
  };

  const closeBtn = document.getElementById('close-insta-popup');
  const overlay = document.getElementById('insta-popup-overlay');
  const followBtn = document.getElementById('insta-popup-follow-btn');

  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  if (overlay) overlay.addEventListener('click', closePopup);
  if (followBtn) followBtn.addEventListener('click', closePopup);
};

// Guarantee execution whether DOM is loading or already parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInstaPopup);
} else {
  initInstaPopup();
}
