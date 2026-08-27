import { TransitionDay, Recipe, Testimonial, FaqItem } from '../types';

export const CANADIAN_PET_CARE_FACTS = [
  {
    title: 'Cold Weather Calorie Adjustments',
    desc: 'Dogs burn up to 15-20% more calories during cold winter months maintaining core body temperature and vitality.',
    icon: 'Thermometer'
  },
  {
    title: 'Indoor Heating Skin & Coat Care',
    desc: 'Dry forced-air indoor heating during winter exacerbates kibble-related skin itching and dull fur. Whole foods restore omega moisture.',
    icon: 'Sparkles'
  },
  {
    title: 'Locally Available Fresh Proteins',
    desc: 'Formulated with wholesome proteins easily found at standard grocers: Wild Pacific Salmon, Lean Beef, Canadian Turkey, and Pumpkin.',
    icon: 'MapPin'
  },
  {
    title: 'Veterinarian Reviewed Standards',
    desc: 'Aligned with NRC & AAFCO canine nutrient profiles adapted for high-quality pet care standards.',
    icon: 'ShieldCheck'
  }
];

export const TRANSITION_SCHEDULE: TransitionDay[] = [
  {
    day: 1,
    naturalPct: 10,
    kibblePct: 90,
    title: 'Introduction & Aroma Sensory',
    instructions: 'Mix 10% lightly warm cooked natural food into your dog\'s current kibble. Focus on introducing aroma and taste without overloading digestion.',
    bowelCheck: 'Normal stool expected. Your dog will likely lick the natural food first!',
    vetTip: 'Always serve food lukewarm, never piping hot or straight from frozen.'
  },
  {
    day: 2,
    naturalPct: 15,
    kibblePct: 85,
    title: 'Gentle Microbial Awakening',
    instructions: 'Maintain 15% natural food. Your dog\'s gut enzymes begin producing specialized digestive secretors for whole proteins.',
    bowelCheck: 'Stool remains solid. Mild increase in appetite excitement.',
    vetTip: 'Keep fresh Canadian tap water available at all times.'
  },
  {
    day: 3,
    naturalPct: 20,
    kibblePct: 80,
    title: 'Microbiota Conditioning',
    instructions: 'Slightly step up natural food. If adding pumpkin or carrots, mash lightly for effortless nutrient absorption.',
    bowelCheck: 'Normal stool. Stool volume may start reducing slightly.',
    vetTip: 'Do not add seasonings, onion, or garlic.'
  },
  {
    day: 4,
    naturalPct: 25,
    kibblePct: 75,
    title: 'Quarter Milestone',
    instructions: '25% natural food, 75% kibble. Excellent phase to introduce crushing finely ground eggshell powder for balanced calcium.',
    bowelCheck: 'Stool is firmer with far less odor compared to 100% kibble.',
    vetTip: 'If stool softens slightly, hold at 25% for an extra day before advancing.'
  },
  {
    day: 5,
    naturalPct: 30,
    kibblePct: 70,
    title: 'Progressive Absorption',
    instructions: '30% natural meal. Your dog\'s energy levels during walks will feel noticeably more sustained.',
    bowelCheck: 'Firm stool with natural color variations based on veggies.',
    vetTip: 'Stool odor reduction is a direct sign of higher protein bioavailability.'
  },
  {
    day: 6,
    naturalPct: 35,
    kibblePct: 65,
    title: 'Metabolic Balance',
    instructions: '35% natural meal. Great time to mix in a tiny drizzle of Canadian Wild Salmon Oil for extra EPA/DHA Omega-3s.',
    bowelCheck: 'Solid, clean bowel movement.',
    vetTip: 'Omega-3s support joint mobility during chilly Canadian morning walks.'
  },
  {
    day: 7,
    naturalPct: 40,
    kibblePct: 60,
    title: 'Halfway Assessment',
    instructions: '40% natural food. Assess coat softness, breath freshness, and general digestive comfort.',
    bowelCheck: 'Consistently firm, small, easily cleaned up stool.',
    vetTip: 'You are now halfway through the safe 14-day progressive transition protocol.'
  },
  {
    day: 8,
    naturalPct: 50,
    kibblePct: 50,
    title: 'The 50/50 Equal Blend',
    instructions: 'Half natural bowl, half kibble. Gut flora is now fully adapted to handling cooked whole meat and gentle fiber.',
    bowelCheck: 'Noticeably less bloating and flatulence after meals.',
    vetTip: 'Divide daily portion evenly into morning and evening meals.'
  },
  {
    day: 9,
    naturalPct: 60,
    kibblePct: 40,
    title: 'Majority Natural Whole Food',
    instructions: '60% natural food. The majority of nutrient intake now comes from bioavailable muscle meat and antioxidant-rich greens.',
    bowelCheck: 'Healthy, dark brown, compact stool.',
    vetTip: 'Observe eye brightness and eagerness at mealtime.'
  },
  {
    day: 10,
    naturalPct: 70,
    kibblePct: 30,
    title: 'Gastrointestinal Equilibrium',
    instructions: '70% natural food. Your dog\'s coat will begin showing natural oils and shine within 7-10 days.',
    bowelCheck: 'Regular 1-2 times daily solid movements.',
    vetTip: 'Batch prep your recipes every 3-4 days and freeze portioned packs.'
  },
  {
    day: 11,
    naturalPct: 75,
    kibblePct: 25,
    title: 'Three-Quarter Transition',
    instructions: '75% natural food, only 25% kibble remaining. High nutrient density keeps your dog satisfied longer without filler bloating.',
    bowelCheck: 'Firm, healthy stool with minimal waste volume.',
    vetTip: 'Ensure proper portion weight according to the Excel Calculator Workbook.'
  },
  {
    day: 12,
    naturalPct: 80,
    kibblePct: 20,
    title: 'Near-Total Whole Food',
    instructions: '80% natural food. Ideal time to rotate protein sources (e.g., swapping chicken for turkey or wild salmon).',
    bowelCheck: 'Consistently clean and firm.',
    vetTip: 'Protein rotation prevents food sensitivities and keeps meals exciting.'
  },
  {
    day: 13,
    naturalPct: 90,
    kibblePct: 10,
    title: 'Final Kibble Phase-Out',
    instructions: '90% natural food with just a sprinkle of kibble. Your dog\'s oral hygiene and breath will smell cleaner.',
    bowelCheck: 'Perfectly formed stool with zero intestinal strain.',
    vetTip: 'Congratulate yourself! You are 24 hours away from 100% natural nutrition.'
  },
  {
    day: 14,
    naturalPct: 100,
    kibblePct: 0,
    title: '100% Natural Whole Food Triumph!',
    instructions: 'Congratulations! Your dog is now enjoying a 100% real, fresh, natural whole food diet!',
    bowelCheck: 'Compact, low-odor, easy-cleanup stool. Optimal vitality and coat health.',
    vetTip: 'Maintain exact daily portion grams using our downloadable Excel workbook.'
  }
];

export const SAMPLE_RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Wild Pacific Salmon & Pumpkin Warm Bowl',
    category: 'sensitive',
    prepTime: '15 Mins',
    canadianIngredients: [
      'Wild Pacific Salmon / Whitefish',
      'Canned Pure Pumpkin Purée (Unsweetened)',
      'Cooked Sweet Potato or Brown Rice',
      'Finely ground eggshell calcium',
      'Drizzle of Salmon Oil'
    ],
    benefits: 'High in EPA/DHA Omega-3 fatty acids to soothe itchy skin and restore winter coat shine. Ultra-gentle on sensitive stomachs.',
    portionGuidance: 'Ideal for dogs with poultry allergies or dry winter skin.',
    image: '/wild-pacific-salmon-pumpkin-warm-bowl.jpg'
  },
  {
    id: 'rec-2',
    title: 'Lean Beef & Garden Carrot Feast',
    category: 'adult',
    prepTime: '12 Mins',
    canadianIngredients: [
      'Extra-Lean Ground Beef (90%+ lean)',
      'Diced Fresh Carrots & Zucchini',
      'Steamed Green Peas',
      'Boiled Potato / Sweet Potato',
      'Calcium carbonate or eggshell powder'
    ],
    benefits: 'Rich in natural bioavailable iron, zinc, and B-vitamins for active dogs needing high stamina during trail hikes and outdoor walks.',
    portionGuidance: 'Mainstay recipe for active adult dogs of all sizes.',
    image: '/lean-beef-garden-carrot-feast.jpg'
  },
  {
    id: 'rec-3',
    title: 'Gentle Turkey & Spinach Comfort Stew',
    category: 'weight',
    prepTime: '18 Mins',
    canadianIngredients: [
      'Skinless Ground Turkey Breast',
      'Chopped Baby Spinach & Green Beans',
      'Diced Zucchini',
      'Rolled Oats or Quinoa',
      'Omega-3 Fish Oil'
    ],
    benefits: 'Low calorie density, high satiety fiber formula engineered for weight management without leaving your dog feeling hungry or begging.',
    portionGuidance: 'Ideal for senior dogs, overweight pups, or less active indoor winter routines.',
    image: '/gentle-turkey-spinach-comfort-stew.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah & Cooper',
    location: 'Vancouver, BC 🇨🇦',
    dogName: 'Cooper',
    dogBreed: 'Golden Retriever (4 yrs)',
    rating: 5,
    quote: 'Cooper suffered from red, itchy paws every winter. Within 3 weeks of starting the Salmon & Pumpkin recipe and using the Excel calculator, his itching completely stopped and his coat looks like silk!',
    result: '100% Skin Itching Eliminated & Silky Coat',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Marc-André & Winston',
    location: 'Montreal, QC 🇨🇦',
    dogName: 'Winston',
    dogBreed: 'French Bulldog (2 yrs)',
    rating: 5,
    quote: 'Winston had terrible gas and loose stools on premium $110/bag kibble. The 14-day transition schedule made switching foolproof. His stool is now firm, small, and clean. Best $27 CAD I have ever spent!',
    result: 'Zero Bloating & Firm Digestion',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Heather, Mark & Maple',
    location: 'Calgary, AB 🇨🇦',
    dogName: 'Maple',
    dogBreed: 'Labrador Mix (8 yrs)',
    rating: 5,
    quote: 'Maple was getting heavy and sluggish during winter. The Senior Portion Formula in the workbook showed us we were overfeeding kibble fillers by 35%! She lost 6 lbs healthily and has her puppy energy back.',
    result: 'Healthy 6 lb Weight Loss & High Energy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Ingredients & Availability',
    question: 'Are the ingredients easy to find in standard grocery stores?',
    answer: 'Yes, 100%! All 30 recipes are specifically formatted around ingredients you can purchase at any standard supermarket or local grocery store—such as ground turkey, lean beef, wild salmon, canned pumpkin purée, carrots, sweet potatoes, and eggs.'
  },
  {
    category: 'Cost & Savings',
    question: 'Is natural dog food more expensive than commercial kibble?',
    answer: 'When you buy whole proteins in batch at local supermarkets or wholesale stores, fresh home-cooked natural food frequently costs LESS or EQUAL to ultra-premium $110-$140 CAD kibble bags per month, while saving you thousands in prospective veterinary bills for allergies, ear infections, and digestive issues.'
  },
  {
    category: 'Transition & Safety',
    question: 'Will changing my dog’s food cause diarrhea or stomach upset?',
    answer: 'Not if you follow our gentle 14-Day Transition Schedule! By stepping up the natural ratio by 5-10% every day or two, your dog’s gut microbiome adapts smoothly with zero diarrhea or vomiting. The guide also includes troubleshooting steps for sensitive dogs.'
  },
  {
    category: 'Portion Formulas & Download',
    question: 'How do I access the Excel Portion Calculator workbook?',
    answer: 'You can download the downloadable `.xlsx` workbook directly on this page for FREE using the download button, and you will also receive instant digital access to the full eBook suite and interactive calculator immediately after checkout.'
  },
  {
    category: 'Veterinary Approval',
    question: 'Do I need to give cooked or raw meat?',
    answer: 'Our main guide focuses on Gentle Cooked Natural Food, which is the safest, most digestible, and vet-recommended entry point for pet parents. It eliminates bacterial risks while preserving maximum nutrient integrity.'
  }
];
