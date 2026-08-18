export type Render = {
  src: string;
  title: string;
  caption: string;
  details: string[];
};

export type Room = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  palette: string[];
  renders: Render[];
};

export const rooms: Room[] = [
  {
    id: 'master-bedroom',
    name: 'Master Bedroom',
    tagline: 'Warm neutrals, fluted walnut and sculpted light.',
    description:
      'The primary suite balances soft beige upholstery against deep walnut fluting, with a red-veined marble media wall and layered cove lighting that shifts the mood from bright morning to warm evening.',
    palette: ['Beige upholstery', 'Fluted walnut', 'Veined marble', 'Brushed gold'],
    renders: [
      {
        src: '/renders/master-1.jpeg',
        title: 'Headboard Elevation',
        caption: 'Upholstered bed framed by fluted walnut and a sculpted teal relief panel.',
        details: [
          'Beige leather-finish headboard with slim gold inlay',
          'Vertical fluted walnut column with brass reading light',
          'Teal faceted 3D wall art as the room’s focal accent',
          'Paired glass pendants replacing conventional table lamps',
        ],
      },
      {
        src: '/renders/master-2.jpeg',
        title: 'Suite Overview',
        caption: 'Full-room view linking the sleeping zone to the vanity corner.',
        details: [
          'Recessed cove ceiling with warm perimeter lighting',
          'Oval backlit mirror over a wall-mounted vanity',
          'Textured abstract canvas on the neutral wall',
          'Statuario-look marble flooring with a patterned area rug',
        ],
      },
      {
        src: '/renders/master-3.jpeg',
        title: 'Media Wall',
        caption: 'Red-veined marble slab anchoring the television and floating console.',
        details: [
          'Book-matched marble feature strip behind the TV',
          'Floating console with concealed under-lighting',
          'Backlit oval vanity mirror with pendant drop',
          'Walk-through opening to the wardrobe corridor',
        ],
      },
      {
        src: '/renders/master-4.jpeg',
        title: 'Window Aspect',
        caption: 'Floor-to-ceiling glazing with sheer and blackout drapery layers.',
        details: [
          'Full-height sliding glazing to the garden',
          'Dual-layer sheer and opaque curtains on a walnut pelmet',
          'Concealed split air-conditioning within the pelmet line',
          'Matte-finish wardrobe shutters with gold pull handles',
        ],
      },
      {
        src: '/renders/master-5.jpeg',
        title: 'Wardrobe Run',
        caption: 'Full-height storage detailed with a geometric groove pattern.',
        details: [
          'Floor-to-ceiling wardrobe with loft storage above',
          'Angular groove detailing with slim brass handles',
          'Warm cove lighting washing the ceiling plane',
          'Sculptural coral accent piece on the console',
        ],
      },
      {
        src: '/renders/master-6.jpeg',
        title: 'Entry Vista',
        caption: 'The view on entry — art, vanity and media wall in one frame.',
        details: [
          'Flush door with walnut and black inset banding',
          'Framed abstract artwork centred on the neutral wall',
          'Pendant-lit vanity ledge with a soft-close drawer',
          'Recessed spotlights aligned to the wall panels',
        ],
      },
      {
        src: '/renders/master-7.jpeg',
        title: 'Corridor View',
        caption: 'Long axis toward the wardrobe passage and daylight beyond.',
        details: [
          'Layered ceiling with a stepped cove profile',
          'Marble media panel continuing to the ceiling line',
          'Sightline through to the dressing corridor',
          'Textured relief artwork on the far wall',
        ],
      },
      {
        src: '/renders/master-8.jpeg',
        title: 'Ceiling Detail',
        caption: 'Square cove with a recessed profile and slim-blade fan.',
        details: [
          'Square false-ceiling cove with continuous LED perimeter',
          'Three-blade low-profile fan finished in white',
          'Symmetrical spotlight grid on all four sides',
          'Crisp shadow gap where the ceiling meets the panelling',
        ],
      },
      {
        src: '/renders/master-9.jpeg',
        title: 'Dressing Corridor',
        caption: 'Wardrobe elevation set against soft felt wall art.',
        details: [
          'Tall shutters with contrasting black groove lines',
          'Elongated brushed-gold handles',
          'Sculptural grey felt panel for acoustic softening',
          'Sheer curtain filtering daylight across the shutters',
        ],
      },
    ],
  },
  {
    id: 'bedroom-1',
    name: 'Bedroom 1',
    tagline: 'Rich walnut, arched forms and gold inlay.',
    description:
      'A deeper, more classical palette — full walnut headboard panelling, arched niches and gold arc inlays on the wardrobe give this room a formal, jewel-box character.',
    palette: ['Dark walnut', 'Warm grey', 'Antique gold', 'Marble'],
    renders: [
      {
        src: '/renders/bedroom1-1.jpeg',
        title: 'Headboard Wall',
        caption: 'Walnut feature wall with an arched mirror niche and linear light.',
        details: [
          'Full-height walnut veneer headboard panelling',
          'Arched mirror inset flanked by a slim linear light',
          'Roman blind in a woven gold-toned fabric',
          'Wardrobe shutters with concentric gold arc inlays',
        ],
      },
      {
        src: '/renders/bedroom1-2.jpeg',
        title: 'Window Side',
        caption: 'Daylight axis with vanity and media wall opposite the bed.',
        details: [
          'Full-height curtains on a walnut-clad pelmet',
          'Oval backlit mirror above a compact vanity',
          'Wall-mounted television on a light panelled backdrop',
          'Veined marble flooring with a banded runner rug',
        ],
      },
      {
        src: '/renders/bedroom1-3.jpeg',
        title: 'Media Elevation',
        caption: 'Alternating walnut and light panels framing the television.',
        details: [
          'Vertical walnut bands breaking the panelled wall',
          'Floating console with integrated drawer storage',
          'Oval LED mirror with a rounded vanity ledge',
          'Small framed artwork for a pop of blue',
        ],
      },
      {
        src: '/renders/bedroom1-4.jpeg',
        title: 'Wardrobe Detail',
        caption: 'Arc-inlay shutters and the passage to the bathroom.',
        details: [
          'Gold arc inlay motif repeated across shutters',
          'Loft storage integrated above the wardrobe',
          'Flush doors with walnut and brass banding',
          'Recessed ceiling spots washing the shutter faces',
        ],
      },
      {
        src: '/renders/bedroom1-5.jpeg',
        title: 'Bed Elevation',
        caption: 'Symmetrical composition centred on the walnut headboard.',
        details: [
          'Slim black metal-framed headboard against walnut',
          'Matching bedside tables with sculpted lamps',
          'Arched wall light in a walnut recess',
          'Layered grey and taupe bed linen',
        ],
      },
      {
        src: '/renders/bedroom1-6.jpeg',
        title: 'Corner Aspect',
        caption: 'Bed, window and vanity captured in a single sweep.',
        details: [
          'Window with roman blind plus full-height drapes',
          'Concealed air-conditioning within the pelmet',
          'Vanity ledge with cosmetics staging',
          'Swirled marble floor pattern anchoring the bed',
        ],
      },
      {
        src: '/renders/bedroom1-7.jpeg',
        title: 'Ceiling Detail',
        caption: 'Rectangular cove profile with a central fan.',
        details: [
          'Rectangular cove with continuous warm LED',
          'Low-profile three-blade fan',
          'Perimeter spotlights on all sides',
          'Clean shadow gap against the walnut panelling',
        ],
      },
    ],
  },
  {
    id: 'bedroom-2',
    name: 'Bedroom 2',
    tagline: 'Forest green, blush accents and crisp white joinery.',
    description:
      'The lightest room of the set — crisp white wardrobes and pale marble offset by a forest-green fluted headboard wall, a blush vanity and a textured brick-relief panel.',
    palette: ['Forest green', 'Blush pink', 'Crisp white', 'Walnut trim'],
    renders: [
      {
        src: '/renders/bedroom2-1.jpeg',
        title: 'Headboard Wall',
        caption: 'Green fabric panels framing a large floral canvas.',
        details: [
          'Forest-green upholstered panels with walnut dividers',
          'Oversized floral artwork as the centrepiece',
          'Fluted walnut band running below the art',
          'Chocolate leather platform bed',
        ],
      },
      {
        src: '/renders/bedroom2-2.jpeg',
        title: 'Wardrobe Run',
        caption: 'Full white wardrobe wall with slim black handles.',
        details: [
          'Floor-to-ceiling white shutters with loft storage',
          'Elongated matte-black handle bars',
          'Cove-lit ceiling softening the white joinery',
          'Marble flooring with a woven area rug',
        ],
      },
      {
        src: '/renders/bedroom2-3.jpeg',
        title: 'Entry View',
        caption: 'First impression from the door — green, white and texture.',
        details: [
          'Brick-relief textured panel on the side wall',
          'Wall-mounted air-conditioning above the panel',
          'Sheer curtain diffusing daylight',
          'High-gloss marble floor reflecting the window',
        ],
      },
      {
        src: '/renders/bedroom2-4.jpeg',
        title: 'Media Wall',
        caption: 'Taupe panel with a rounded TV recess and wavy mirror.',
        details: [
          'Soft-cornered television recess with backlighting',
          'Organic wavy-edge mirror in a slim frame',
          'Blush pink vanity with a matching upholstered stool',
          'Textured brick-relief panel continuing the theme',
        ],
      },
      {
        src: '/renders/bedroom2-5.jpeg',
        title: 'Media Angle',
        caption: 'Wardrobe and media wall meeting at the corner.',
        details: [
          'Rounded TV panel juxtaposed with square joinery',
          'Brick relief panel lit from above',
          'Blush console with white countertop',
          'Sheer curtain layered against white walls',
        ],
      },
      {
        src: '/renders/bedroom2-6.jpeg',
        title: 'Vanity Detail',
        caption: 'Close study of the media unit and sculptural mirror.',
        details: [
          'Rounded-corner media niche with concealed LED',
          'Curved white console with a blush base',
          'Wavy mirror reflecting the green headboard wall',
          'Ribbed upholstered stool tucked beneath',
        ],
      },
      {
        src: '/renders/bedroom2-7.jpeg',
        title: 'Storage Elevation',
        caption: 'Wardrobe bank viewed across the bed.',
        details: [
          'Six-shutter wardrobe with uniform loft line',
          'Floral canvas anchoring the opposite wall',
          'Flush door with walnut inset banding',
          'Warm ceiling cove balancing the cool whites',
        ],
      },
      {
        src: '/renders/bedroom2-8.jpeg',
        title: 'Window Corner',
        caption: 'Daylight through sheers onto the brick-relief panel.',
        details: [
          'Full-height striped sheer curtains',
          'Brick-relief panel with directional wall-washers',
          'Blush vanity ledge with a wavy mirror',
          'Bedside table with integrated charging surface',
        ],
      },
      {
        src: '/renders/bedroom2-9.jpeg',
        title: 'Ceiling Detail',
        caption: 'Wide rectangular cove with even spot distribution.',
        details: [
          'Rectangular cove with continuous warm LED',
          'Three-blade fan centred in the recess',
          'Spot grid aligned to the room axis',
          'Green panelling visible at the ceiling junction',
        ],
      },
    ],
  },
  {
    id: 'bedroom-3',
    name: 'Bedroom 3',
    tagline: 'A playful room — aviation motifs and soft terracotta.',
    description:
      'Designed as a child’s room without losing the scheme’s sophistication: an arched aviation-print niche, fluted arch panelling and terracotta bedding against warm greige joinery.',
    palette: ['Terracotta', 'Warm greige', 'Soft grey', 'Natural oak'],
    renders: [
      {
        src: '/renders/bedroom3-1.jpeg',
        title: 'Feature Arch',
        caption: 'Aviation-print arch paired with a fluted panel and drop pendant.',
        details: [
          'Arched niche in a hand-drawn aeroplane wallpaper',
          'Fluted arch panel echoing the curve',
          'Textured glass pendant suspended beside the bed',
          'Grey upholstered bed with terracotta bedding',
        ],
      },
      {
        src: '/renders/bedroom3-2.jpeg',
        title: 'Garden Aspect',
        caption: 'Wide view with full-height glazing and layered drapery.',
        details: [
          'Floor-to-ceiling glazing framing garden greenery',
          'Sheer plus opaque curtain layers on a walnut pelmet',
          'Sculptural vase staging in the foreground',
          'Banded rug grounding the bed within the room',
        ],
      },
      {
        src: '/renders/bedroom3-3.jpeg',
        title: 'Bed and Vanity',
        caption: 'Sleeping zone flowing into the study-vanity corner.',
        details: [
          'Arched mirror above a compact walnut vanity',
          'Open oak shelving integrated into the wardrobe',
          'Slim cylindrical wall light beside the mirror',
          'Flush door with walnut and brass banding',
        ],
      },
      {
        src: '/renders/bedroom3-4.jpeg',
        title: 'Media Wall',
        caption: 'Beige panelling with black reveals and a floating console.',
        details: [
          'Vertical black reveals breaking the beige panel',
          'Fluted strip detail beside the television',
          'Long white floating console with drawers',
          'Framed landscape artwork on the return wall',
        ],
      },
      {
        src: '/renders/bedroom3-5.jpeg',
        title: 'Storage Detail',
        caption: 'Wardrobe with open display shelving and arched mirror.',
        details: [
          'Greige shutters with slim rose-gold handles',
          'Arched open shelving in natural oak',
          'Full-height mirror integrated into the run',
          'Pendant drop lighting the vanity surface',
        ],
      },
      {
        src: '/renders/bedroom3-6.jpeg',
        title: 'Room Overview',
        caption: 'The complete composition — arch, bed, vanity and storage.',
        details: [
          'Aviation arch anchoring the headboard wall',
          'Vanity nook tucked between bed and wardrobe',
          'Ribbed stool in a warm neutral weave',
          'Recessed spots aligned along the joinery',
        ],
      },
      {
        src: '/renders/bedroom3-7.jpeg',
        title: 'Ceiling Detail',
        caption: 'Square cove profile with a playful reflected view.',
        details: [
          'Square cove with a soft warm LED perimeter',
          'Three-blade fan centred within the recess',
          'Dense spotlight grid for even task lighting',
          'Aviation wallpaper visible at the ceiling junction',
        ],
      },
    ],
  },
];

export const totalRenders = rooms.reduce((sum, room) => sum + room.renders.length, 0);
