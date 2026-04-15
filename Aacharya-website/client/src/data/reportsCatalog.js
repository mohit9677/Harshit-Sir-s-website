export const REPORTS_CATALOG = [
    {
        id: 'love-relationship',
        shortTitle: 'Love Report',
        title: 'Love & Relationship Report',
        desc: 'Compatibility, timing, and relationship clarity based on Vedic principles.',
        price: '₹499',
        image: 'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=900&q=80',
        iconKey: 'heart',
    },
    {
        id: 'career-growth',
        shortTitle: 'Career Report',
        title: 'Career Growth Report',
        desc: 'Career direction, opportunities, and favorable decision windows.',
        price: '₹799',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
        iconKey: 'briefcase',
    },
    {
        id: 'finance-wealth',
        shortTitle: 'Finance Report',
        title: 'Finance & Wealth Report',
        desc: 'Income cycles, investment timing, and financial stability insights.',
        price: '₹999',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=80',
        iconKey: 'dollar',
    },
    {
        id: 'yearly-prediction',
        shortTitle: 'Yearly Report',
        title: 'Yearly Prediction Report',
        desc: 'A complete yearly map of major planetary influences in your life.',
        price: '₹1199',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
        iconKey: 'sun',
    },
    {
        id: 'life-journey',
        shortTitle: 'Life Path Report',
        title: 'Life Journey Report',
        desc: 'A deeper roadmap of life phases, strengths, and karmic themes.',
        price: '₹1399',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
        iconKey: 'compass',
    },
    {
        id: 'kundli-analysis',
        title: 'Kundli Analysis Report',
        desc: 'Detailed birth chart interpretation with practical remedies.',
        price: '₹899',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80',
        iconKey: 'moon',
    },
    {
        id: 'marriage-compatibility',
        title: 'Marriage Compatibility Report',
        desc: 'Comprehensive kundli matching for harmony and long-term balance.',
        price: '₹1499',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
        iconKey: 'users',
    },
    {
        id: 'business-success',
        title: 'Business Success Report',
        desc: 'Business potential, expansion timing, and strategic guidance.',
        price: '₹1799',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        iconKey: 'trending',
    },
]

export const HERO_FLOATING_IDS = ['love-relationship', 'career-growth', 'finance-wealth', 'life-journey']

export function getReportById(id) {
    return REPORTS_CATALOG.find((r) => r.id === id)
}
