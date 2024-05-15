document.addEventListener('DOMContentLoaded', function() {
    var translationButton = document.querySelector('.translation-button');
    var translationDropdown = document.getElementById('dropdown-content');

    translationButton.addEventListener('click', function() {
        translationDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.dropdown-content a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var language = link.getAttribute('onclick').replace("Translate('", "").replace("')", "");
            translateTo(language);
            translationDropdown.classList.remove('show');
        });
    });
});

function translateTo(language) {
    var translatedContent;

    if (language === 'en') {
        translatedContent = {
            header: {
                title: "Welcome to Cafe Arabesque",
                subtitle: "Explore our delicious offerings",
                back: "Back"
            },
            sections: {
                hotBeverages: "Hot Beverages",
                coldBeverages: "Cold Beverages",
                snacks: "Snacks"
            },
            items: {
                cafeExpress: {
                    name: "Expresso",
                    description: "Description: Strong brewed coffee",
                    price: "Price: 1.300 DT"
                },
                cafeCreme: {
                    name: "Cream coffee",
                    description: "Description: Coffee with milk",
                    price: "Price: 1.500 DT"
                },
                hotChocolate: {
                    name: "Hot Chocolate",
                    description: "Description: Delicious hot chocolate",
                    price: "Price: 2.500 DT"
                },
                mintTea: {
                    name: "Mint Tea",
                    description: "Description: Refreshing mint tea",
                    price: "Price: 1.000 DT"
                },
                chocolateMilk: {
                    name: "Chocolate Milk",
                    description: "Description: Creamy chocolate milk",
                    price: "Price: 1.500 DT"
                },
                specialCream: {
                    name: "Special Cream",
                    description: "Description: Indulgent special cream",
                    price: "Price: 1.800 DT"
                },
                strawberryGranite: {
                    name: "Fresh Strawberry Granite",
                    description: "Description: Refreshing strawberry granite",
                    price: "Price: 2.500 DT"
                },
                softDrink: {
                    name: "Soft Drink (Soda)",
                    description: "Description: Carbonated soft drink",
                    price: "Price: 1.500 DT"
                },
                bogaMint: {
                    name: "Boga Mint",
                    description: "Description: Mint-flavored drink",
                    price: "Price: 1.700 DT"
                },
                orangeJuice: {
                    name: "Orange Juice",
                    description: "Description: Freshly squeezed orange juice",
                    price: "Price: 1.500 DT"
                },
                samssa: {
                    name: "Samssa",
                    description: "Description: Traditional savory pastry",
                    price: "Price: 1.200 DT"
                },
                cake: {
                    name: "Cake",
                    description: "Description: Delicious cake",
                    price: "Price: 1.200 DT"
                }
            }
        };
    } else if (language === 'ar') {
        translatedContent = {
            header: {
                title: "مرحبًا بكم في كافيه أرابيسك",
                subtitle: "اكتشف عروضنا اللذيذة",
                back: "رجوع"
            },
            sections: {
                hotBeverages: "المشروبات الساخنة",
                coldBeverages: "المشروبات الباردة",
                snacks: "وجبات خفيفة"
            },
            items: {
                cafeExpress: {
                    name: "قهوة إكسبرس",
                    description: "الوصف: قهوة قوية مخمرة",
                    price: "السعر: 1.300 د.ت"
                },
                cafeCreme: {
                    name: "قهوة بالكريمة",
                    description: "الوصف: قهوة بالحليب",
                    price: "السعر: 1.500 د.ت"
                },
                hotChocolate: {
                    name: "شوكولاتة ساخنة",
                    description: "الوصف: شوكولاتة ساخنة لذيذة",
                    price: "السعر: 2.500 د.ت"
                },
                mintTea: {
                    name: "شاي بالنعناع",
                    description: "الوصف: شاي بالنعناع المنعش",
                    price: "السعر: 1.000 د.ت"
                },
                chocolateMilk: {
                    name: "حليب بالشوكولاتة",
                    description: "الوصف: حليب بالشوكولاتة الكريمي",
                    price: "السعر: 1.500 د.ت"
                },
                specialCream: {
                    name: "كريمة خاصة",
                    description: "الوصف: كريمة خاصة فاخرة",
                    price: "السعر: 1.800 د.ت"
                },
                strawberryGranite: {
                    name: "جرانيت الفراولة الطازجة",
                    description: "الوصف: جرانيت الفراولة المنعش",
                    price: "السعر: 2.500 د.ت"
                },
                softDrink: {
                    name: "مشروب غازي",
                    description: "الوصف: مشروب غازي",
                    price: "السعر: 1.500 د.ت"
                },
                bogaMint: {
                    name: "بوغا بالنعناع",
                    description: "الوصف: مشروب بنكهة النعناع",
                    price: "السعر: 1.700 د.ت"
                },
                orangeJuice: {
                    name: "عصير البرتقال",
                    description: "الوصف: عصير برتقال طازج",
                    price: "السعر: 1.500 د.ت"
                },
                samssa: {
                    name: "سمسة",
                    description: "الوصف: معجنات تقليدية لذيذة",
                    price: "السعر: 1.200 د.ت"
                },
                cake: {
                    name: "كيك",
                    description: "الوصف: كيك لذيذ",
                    price: "السعر: 1.200 د.ت"
                }
            }
        };
    } else if (language === 'fr') {
        translatedContent = {
            header: {
                title: "Bienvenue au Café Arabesque",
                subtitle: "Découvrez nos délicieuses offres",
                back: "Retour"
            },
            sections: {
                hotBeverages: "Boissons Chaudes",
                coldBeverages: "Boissons Froides",
                snacks: "Snacks"
            },
            items: {
                cafeExpress: {
                    name: "Café Express",
                    description: "Description: Café fort infusé",
                    price: "Prix: 1.300 DT"
                },
                cafeCreme: {
                    name: "Café Crème",
                    description: "Description: Café au lait",
                    price: "Prix: 1.500 DT"
                },
                hotChocolate: {
                    name: "Chocolat Chaud",
                    description: "Description: Délicieux chocolat chaud",
                    price: "Prix: 2.500 DT"
                },
                mintTea: {
                    name: "Thé à la Menthe",
                    description: "Description: Thé à la menthe rafraîchissant",
                    price: "Prix: 1.000 DT"
                },
                chocolateMilk: {
                    name: "Lait au Chocolat",
                    description: "Description: Lait au chocolat crémeux",
                    price: "Prix: 1.500 DT"
                },
                specialCream: {
                    name: "Crème Spéciale",
                    description: "Description: Crème spéciale gourmande",
                    price: "Prix: 1.800 DT"
                },
                strawberryGranite: {
                    name: "Granité de Fraise Fraîche",
                    description: "Description: Granité de fraise rafraîchissant",
                    price: "Prix: 2.500 DT"
                },
                softDrink: {
                    name: "Boisson Gazeuse (Soda)",
                    description: "Description: Boisson gazeuse",
                    price: "Prix: 1.500 DT"
                },
                bogaMint: {
                    name: "Boga à la Menthe",
                    description: "Description: Boisson à la menthe",
                    price: "Prix: 1.700 DT"
                },
                orangeJuice: {
                    name: "Jus d'Orange",
                    description: "Description: Jus d'orange fraîchement pressé",
                    price: "Prix: 1.500 DT"
                },
                samssa: {
                    name: "Samssa",
                    description: "Description: Pâtisserie salée traditionnelle",
                    price: "Prix: 1.200 DT"
                },
                cake: {
                    name: "Gâteau",
                    description: "Description: Délicieux gâteau",
                    price: "Prix: 1.200 DT"
                }
            }
        };
    }

    updateContent(translatedContent);
}

function updateContent(translatedContent) {
   
    document.querySelector('header h1').textContent = translatedContent.header.title;
    document.querySelector('header p').textContent = translatedContent.header.subtitle;
    document.querySelector('.back-button').textContent = translatedContent.header.back;

    var sections = document.querySelectorAll('.menu-section h2');
    sections[0].textContent = translatedContent.sections.hotBeverages;
    sections[1].textContent = translatedContent.sections.coldBeverages;
    sections[2].textContent = translatedContent.sections.snacks;

    var items = document.querySelectorAll('.menu-item');
    items[0].querySelector('h3').textContent = translatedContent.items.cafeExpress.name;
    items[0].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.cafeExpress.description;
    items[0].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.cafeExpress.price;

    items[1].querySelector('h3').textContent = translatedContent.items.cafeCreme.name;
    items[1].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.cafeCreme.description;
    items[1].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.cafeCreme.price;

    items[2].querySelector('h3').textContent = translatedContent.items.hotChocolate.name;
    items[2].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.hotChocolate.description;
    items[2].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.hotChocolate.price;

    items[3].querySelector('h3').textContent = translatedContent.items.mintTea.name;
    items[3].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.mintTea.description;
    items[3].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.mintTea.price;

    items[4].querySelector('h3').textContent = translatedContent.items.chocolateMilk.name;
    items[4].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.chocolateMilk.description;
    items[4].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.chocolateMilk.price;

    items[5].querySelector('h3').textContent = translatedContent.items.specialCream.name;
    items[5].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.specialCream.description;
    items[5].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.specialCream.price;

    items[6].querySelector('h3').textContent = translatedContent.items.strawberryGranite.name;
    items[6].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.strawberryGranite.description;
    items[6].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.strawberryGranite.price;

    items[7].querySelector('h3').textContent = translatedContent.items.softDrink.name;
    items[7].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.softDrink.description;
    items[7].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.softDrink.price;

    items[8].querySelector('h3').textContent = translatedContent.items.bogaMint.name;
    items[8].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.bogaMint.description;
    items[8].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.bogaMint.price;

    items[9].querySelector('h3').textContent = translatedContent.items.orangeJuice.name;
    items[9].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.orangeJuice.description;
    items[9].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.orangeJuice.price;

    items[10].querySelector('h3').textContent = translatedContent.items.samssa.name;
    items[10].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.samssa.description;
    items[10].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.samssa.price;

    items[11].querySelector('h3').textContent = translatedContent.items.cake.name;
    items[11].querySelector('p:nth-of-type(1)').textContent = translatedContent.items.cake.description;
    items[11].querySelector('p:nth-of-type(2)').textContent = translatedContent.items.cake.price;
}
