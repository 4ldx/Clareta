const menuData = {
    "Calientes": [
        { n: "Expresso", v: [{t: "Tradicional", p: "$20"}] },
        { n: "Americano Caliente", v: [{t: "Chico", p: "$30"}, {t: "Grande", p: "$35"}, {t: "Extra Grande", p: "$40"}] },
        { n: "San Juan Jalisco", v: [{t: "Chico", p: "$40"}, {t: "Grande", p: "$45"}, {t: "Extra Grande", p: "$50"}] },
        { n: "Cappuccino", v: [{t: "Chico", p: "$45"}, {t: "Grande", p: "$50"}, {t: "Extra Grande", p: "$60"}] },
        { n: "Moka", v: [{t: "Chico", p: "$50"}, {t: "Grande", p: "$55"}, {t: "Extra Grande", p: "$65"}] },
        { n: "Chocolate", v: [{t: "Chico", p: "$40"}, {t: "Grande", p: "$45"}, {t: "Extra Grande", p: "$50"}] },
        { n: "Matcha Caliente", v: [{t: "Chico", p: "$50"}, {t: "Grande", p: "$60"}, {t: "Extra Grande", p: "$70"}] },
        { n: "Latte", v: [{t: "Chico", p: "$45"}, {t: "Grande", p: "$50"}, {t: "Extra Grande", p: "$60"}] },
        { n: "Latte Especial", v: [{t: "Chico", p: "$55"}, {t: "Grande", p: "$60"}, {t: "Extra Grande", p: "$70"}] }
    ],
    "Frappes": [
        { n: "Frappe Oreo", v: [{t: "Chico", p: "$70"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$85"}, {t: "Extra Grande", p: "$95"}] },
        { n: "Frappe Hershey's", v: [{t: "Chico", p: "$70"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$85"}] },
        { n: "Frappe Biscoff", v: [{t: "Chico", p: "$75"}, {t: "Mediano", p: "$85"}, {t: "Grande", p: "$95"}, {t: "Extra Grande", p: "$110"}] },
        { n: "Frappe Matcha", v: [{t: "Chico", p: "$75"}, {t: "Mediano", p: "$85"}, {t: "Grande", p: "$90"}, {t: "Extra Grande", p: "$95"}] },
        { n: "Frappe Café", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$70"}, {t: "Grande", p: "$75"}, {t: "Extra Grande", p: "$80"}] },
        { n: "Frappe Mazapán", v: [{t: "Chico", p: "$70"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Frappe Caracaje", v: [{t: "Chico", p: "$70"}, {t: "Mediano", p: "$80"}, {t: "Grande", p: "$90"}, {t: "Extra Grande", p: "$95"}] }
    ],
    "Frías": [
        { n: "Americano Frío", v: [{t: "Chico", p: "$35"}, {t: "Mediano", p: "$40"}, {t: "Grande", p: "$45"}, {t: "Extra Grande", p: "$55"}] },
        { n: "Matcha", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte", v: [{t: "Chico", p: "$60"}, {t: "Mediano", p: "$70"}, {t: "Grande", p: "$75"}, {t: "Extra Grande", p: "$80"}] }
    ],
    "Cold Foam": [
        { n: "Lates Cold Foam", v: [{t: "Chico", p: "$70"}, {t: "Mediano", p: "$80"}, {t: "Grande", p: "$90"}, {t: "Extra Grande", p: "$100"}] }
    ],
    "Lates Especiales": [
        { n: "Latte Biscoff", v: [{t: "Chico", p: "$75"}, {t: "Mediano", p: "$80"}, {t: "Grande", p: "$85"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte Duvalin", v: [{t: "Chico", p: "$55"}, {t: "Mediano", p: "$65"}, {t: "Grande", p: "$75"}, {t: "Extra Grande", p: "$85"}] },
        { n: "Latte Mazapán", v: [{t: "Chico", p: "$60"}, {t: "Mediano", p: "$70"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte Crema Irlandesa", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte Caramelo", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte Vainilla", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] },
        { n: "Latte Avellana", v: [{t: "Chico", p: "$65"}, {t: "Mediano", p: "$75"}, {t: "Grande", p: "$80"}, {t: "Extra Grande", p: "$90"}] }
    ],
    "Té": [
        { n: "Té Frutos Rojos", v: [{t: "Tradicional", p: "$20"}, {t: "Chico", p: "$25"}, {t: "Grande", p: "$30"}] },
        { n: "Té Limón", v: [{t: "Tradicional", p: "$20"}, {t: "Chico", p: "$25"}, {t: "Grande", p: "$30"}] },
        { n: "Té Manzanilla", v: [{t: "Tradicional", p: "$20"}, {t: "Chico", p: "$25"}, {t: "Grande", p: "$30"}] },
        { n: "Té Jengibre", v: [{t: "Tradicional", p: "$20"}, {t: "Chico", p: "$25"}, {t: "Grande", p: "$30"}] },
        { n: "Té Canela", v: [{t: "Tradicional", p: "$20"}, {t: "Chico", p: "$25"}, {t: "Grande", p: "$30"}] }
    ]
};

function render(cat) {
    const container = document.getElementById('menu-container');
    
    // Reinicio de animación
    container.style.animation = 'none';
    container.offsetHeight; 
    container.style.animation = 'fadeInSlide 0.6s ease-out';
    
    container.innerHTML = menuData[cat].map(item => `
        <div class="item">
            <div class="item-header" onclick="toggleItem(this)">
                <h3>${item.n}</h3><span>▼</span>
            </div>
            <div class="variaciones">
                ${item.v.map(varp => `<div class="row"><span>${varp.t}</span> <span>${varp.p}</span></div>`).join('')}
            </div>
        </div>
    `).join('');
}

function toggleItem(el) {
    const allVariations = document.querySelectorAll('.variaciones');
    const target = el.nextElementSibling;
    
    allVariations.forEach(v => { if(v !== target) v.classList.remove('active'); });
    target.classList.toggle('active');
}

const tabs = document.getElementById('tabs');
Object.keys(menuData).forEach((cat) => {
    tabs.innerHTML += `<button onclick="render('${cat}')">${cat}</button>`;
});

render("Calientes");
