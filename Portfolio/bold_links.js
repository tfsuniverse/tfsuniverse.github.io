const fs = require('fs');

let html = fs.readFileSync('portfolio.html', 'utf8');

const replacements = [
    { target: 'Founder & Managing Director', wrap: 'strong' },
    { target: 'Oza Motorsports Pvt. Ltd.', wrap: 'a', url: 'https://www.ozamotorsports.com/' },
    { target: 'TFS Universe', wrap: 'a', url: 'https://tfsuniverse.github.io/HTML/Home1.html' },
    { target: 'Soochh', wrap: 'a', url: 'https://tfsuniverse.github.io/HTML/Soochh.html' },
    { target: 'The Flying Shirt', wrap: 'a', url: 'https://www.youtube.com/@theflyingshirt' },
    { target: 'Mr. Oza', wrap: 'strong' },
    { target: 'exceptional Polymath', wrap: 'strong' },
    { target: 'Story, Journey & Ideology', wrap: 'em', additionalWrap: 'strong' },
    { target: 'over 30+ professional domains across 6 major industries', wrap: 'strong' },
    { target: 'more than a decade of multidisciplinary professional experience.', wrap: 'strong' },
    { target: '60+ certifications', wrap: 'strong' },
    { target: 'awards recognizing excellence', wrap: 'strong' },
    { target: '68 professional skills', wrap: 'strong' },
    { target: 'as a true and a modern-day Polymath.', wrap: 'strong' },
    { target: '9 Intellectual Property Rights (IPRs)', wrap: 'strong' },
    { target: '6 Government Innovation Grants', wrap: 'strong' },
    { target: 'ICSII, GUSEC, SUSEC, and i-Hub Gujarat', wrap: 'strong' },
    { target: 'Belgium Government', wrap: 'strong' },
    { target: 'Marshal of BMW Motorrad Gujarat region and one of the top-performing Sales Executives', wrap: 'strong' },
    { target: '69 bookings, 64 retail deliveries, and an average customer satisfaction score of 9.8 out of 10', wrap: 'strong' },
    { target: '400+ candidates', wrap: 'strong' },
    { target: '25 universities', wrap: 'strong' },
    { target: '50 students', wrap: 'strong' },
    { target: 'BuyItOnline', wrap: 'a', url: 'https://buyitonline.org/' },
    { target: '780+ products', wrap: 'strong' },
    { target: 'Album MANZIL', wrap: 'a', url: 'https://youtube.com/playlist?list=OLAK5uy_l2Ppcv5CDqeBjZ6HZ6PxwTVrOLHGxAmPE' },
    { target: 'World TV Premiere, Radio networks, National Television', wrap: 'strong' },
    { target: '150 digital platforms & 1,250+ commercial outlets', wrap: 'strong' },
    
    // Group A
    { target: 'Som-Lalit School', wrap: 'strong' },
    { target: 'High performance Supercars & Superbikes', wrap: 'strong' },
    { target: 'SSC', wrap: 'strong' },
    { target: 'Machines & Vehicles', wrap: 'strong' },
    { target: 'Diploma in Automobile Engineering at Parul University', wrap: 'strong' },
    { target: 'Hyperactive student', wrap: 'strong' },
    { target: 'Automotive engineering', wrap: 'strong' },
    { target: 'multiple Automotive giants such as Mercedes - benz, MV Agusta, Benelli, Hyosung & Honda', wrap: 'strong' },
    { target: 'Internal Combustion (IC) Engines & Modern Automotive Technologies', wrap: 'strong' },
    { target: 'Internship at MV Agusta, Benelli & Hyosung', wrap: 'strong' },
    { target: 'B.Tech in Automobile Engineering at Indus University', wrap: 'strong' },
    { target: 'Standard & Innovative High performance IC Engines & its Technologies', wrap: 'strong' },
    { target: 'Interior designing', wrap: 'strong' },
    { target: 'Studio', wrap: 'strong' },
    { target: 'Designing Engineer', wrap: 'strong' },
    { target: 'SE1', wrap: 'strong' },
    { target: 'Hybrid design of Bobber & Brat Style Motorcycles which itself was an innovation', wrap: 'strong' },
    { target: 'BobArt', wrap: 'strong' },
    { target: 'Designs Act, 2000', wrap: 'strong' },
    { target: 'V.ODNE1s High-Performance Engine Platform', wrap: 'a', url: 'https://www.ozamotorsports.com/services' },
    { target: 'proprietary design methodology that unlocked V-engine configurations in multiples of three', wrap: 'strong' },
    { target: 'beyond conventional V-engine architecture', wrap: 'strong' },
    { target: 'LTB Valve Technology—a Camless Valve Mechanism', wrap: 'a', url: 'https://www.ozamotorsports.com/services' },
    { target: 'only two automotive organizations globally to own this advanced valve actuation technology', wrap: 'strong' },
    { target: 'Scientist', wrap: 'strong' },
    { target: 'innovations in IC engines & its technologies', wrap: 'strong' },
    { target: 'Government grant (from the Indian Government)', wrap: 'strong' },
    { target: 'SSIP', wrap: 'strong' },
    { target: 'ICSII', wrap: 'strong' },
    { target: 'conducted multiple Interviews with highly experienced Engineers', wrap: 'strong' },
    { target: 'Head of his own (R&D) Research & Development Programs', wrap: 'strong' },
    { target: 'course on IPR - Intellectual Property Rights', wrap: 'strong' },
    { target: 'filed 9 different IPRs', wrap: 'strong' },
    { target: 'pitching steadily to incubation committees', wrap: 'strong' },
    { target: 'ICSII - Indus Center for Startups, Incubation & Innovation', wrap: 'strong' },
    { target: 'GUSEC - Gujarat University Startup & Entrepreneurship Council', wrap: 'strong' },
    { target: 'SUSEC - Saurashtra University Startup & Entrepreneurship Council', wrap: 'strong' },
    { target: 'Registered & Founded', wrap: 'strong' },
    { target: 'Hyper Performance Automotive Vehicle Manufacturing company', wrap: 'strong' },
    { target: 'i-Hub Gujarat', wrap: 'strong' },
    { target: 'Non returnable Government Grant of 7,75,000/- INR', wrap: 'strong' },
    { target: 'Offer from Belgium Government', wrap: 'strong' },
    { target: 'Re-locate his company to Brussels', wrap: 'strong' },
    { target: 'total of Six Government Grants', wrap: 'strong' },
    { target: 'MBA program in Innovation & Entrepreneurship at the International University of Applied Sciences in Germany', wrap: 'strong' },
    { target: 'revoke four of those early grants', wrap: 'strong' },
    { target: 'sum of non-refundable grants', wrap: 'strong' },
    { target: 'Oza Motorsports Private Limited', wrap: 'strong' },
    { target: 'well-organized corporate entity in India', wrap: 'strong' },
    { target: 'i-Hub', wrap: 'strong' },
    { target: 'formal offer from the Government of Belgium', wrap: 'strong' },
    { target: 'local engineering student to an internationally recognized Automotive inventor', wrap: 'strong' },

    // Group B
    { target: 'career in premium automotive sales at just the age of 16', wrap: 'strong' },
    { target: 'premium Pre-owned Superbike market', wrap: 'strong' },
    { target: 'sold his first superbike, which was a Benelli 600i', wrap: 'strong' },
    { target: 'sale of numerous motorcycles', wrap: 'strong' },
    { target: 'extensive technical and market knowledge', wrap: 'strong' },
    { target: 'young but reliable premium Superbike Seller', wrap: 'strong' },
    { target: 'well-known premium pre-owned superbike dealer', wrap: 'strong' },
    { target: 'specific sales, valuation, and insurance consultation skills needed for global brands', wrap: 'strong' },
    { target: 'how premium dealerships operate', wrap: 'strong' },
    { target: 'insurance consulting', wrap: 'strong' },
    { target: 'protecting high-value Superbikes', wrap: 'strong' },
    { target: 'corporate world to gain practical experience', wrap: 'strong' },
    { target: 'delivery of a BMW 740Li', wrap: 'strong' },
    { target: 'BMW Sales Executive', wrap: 'strong' },
    { target: 'interview with the dealership', wrap: 'strong' },
    { target: 'over eight premium dealerships in a single day', wrap: 'strong' },
    { target: 'offers from two leading automotive companies', wrap: 'strong' },
    { target: 'name and value he has created by his hard work', wrap: 'strong' },
    { target: 'undergoing a major revival in the Indian market', wrap: 'strong' },
    { target: 'transformative journey', wrap: 'strong' },
    { target: 'continuous learning', wrap: 'strong' },
    { target: '17 days later', wrap: 'strong' },
    { target: 'call from BMW Motorrad', wrap: 'strong' },
    { target: 'successful interview', wrap: 'strong' },
    { target: 'joined BMW Motorrad', wrap: 'strong' },
    { target: 'independent premium superbike dealer to the corporate luxury automotive industry', wrap: 'strong' },
    { target: 'one of only four Sales Executives', wrap: 'strong' },
    { target: '69 bookings and completed 64 successful retail deliveries', wrap: 'strong' },
    { target: 'average customer satisfaction rating of 9.8/10', wrap: 'strong' },
    { target: '18 Number of Online Training', wrap: 'strong' },
    { target: 'in-depth technical knowledge', wrap: 'strong' },
    { target: 'elevation beyond conventional sales responsibilities', wrap: 'strong' },
    { target: 'Regional Marshal for BMW Motorrad', wrap: 'strong' },
    { target: 'Gujarat territory', wrap: 'strong' },
    { target: 'supervised premium customer events', wrap: 'strong' },
    { target: "key ambassador for BMW Motorrad's rides", wrap: 'strong' }
];

// Helper to escape regex
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

for (const rep of replacements) {
    let target = rep.target;
    const regex = new RegExp('(?<!>)' + escapeRegExp(target) + '(?!<)', 'g');
    
    let replacementHtml = target;
    
    if (rep.wrap === 'strong') {
        replacementHtml = `<strong>${target}</strong>`;
    } else if (rep.wrap === 'em') {
        replacementHtml = `<em>${target}</em>`;
        if (rep.additionalWrap) {
             replacementHtml = `<strong>${replacementHtml}</strong>`;
        }
    } else if (rep.wrap === 'a') {
        replacementHtml = `<a href="${rep.url}" target="_blank" style="color:var(--accent-1); text-decoration:none; font-weight:600;" class="external-link">${target}</a>`;
    }
    
    html = html.replace(regex, replacementHtml);
}

fs.writeFileSync('portfolio.html', html);
console.log('Successfully formatted text!');
