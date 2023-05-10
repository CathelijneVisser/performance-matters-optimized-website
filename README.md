# Coding the Curbs website
Een website om een smartzone te zoeken en boeken.

## Inhoudsopgave

  * [📄 Beschrijving](#-beschrijving)
  * [💻 Gebruik](#-gebruik)
  * [📌 Kenmerken](#-kenmerken)
  * [⚙️ Installatie](#%EF%B8%8F-installatie)
  * [📁 Bronnen](#-bronnen)
  * [🔒 Licentie](#-licentie)

## 📄 Beschrijving
Deze pagina is gemaakt voor de volgende userstory's:
* "Als vervoerder wil ik een overzicht van smartzones in een stad kunnen bekijken, zodat ik kan zien waar ik kan parkeren om mijn goederen te laden/lossen"
* "Als vervoerder wil ik onderweg vanuit mijn voertuig meer informatie over een smartzone kunnen bekijken, zodat ik kan zien of de zone geschikt is om mijn goederen te laden en/of lossen"
* "Als vervoerder wil een smart zone kunnen reserveren, zodat ik mijn plek kan bevestigen"

De eerste pagina is een overzichtspagina met de verschillende smartzones, die ook hun eigen detailslide hebben. Verder is een kaart te zien met de locaties van de zones. De tweede pagina is een pagina waar een reserveerformulier staat waar je de gewenste smartzone kunt boeken en je gegevens invuld.

<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/da9639fa-216a-4ab3-a232-b5a8f689b395" alt="Desktop search pagina" width=100%><br>
<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/3711dd7c-5ec1-4b6a-92db-1f158b923396" alt="Desktop book pagina" width=100%>

De website vind je [hier](https://erin-cheerful-cobra.cyclic.app).

## 💻 Gebruik
Deze website bestaat uit meerdere delen. Aan de linkerkant staat een overzicht van alle smartzones. Aan de rechterkant staat de kaart of het formulier om te kunnen reserveren.

Elke smartzone heeft een eigen tegel en ziet er als volgt uit:

<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/3752bcb9-5816-4495-bcfe-05bd4a9a1ac9" alt="" width=25%>

Er is meer informatie beschikbaar per smartzone als je op het i-icoontje klikt:

<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/6e463dc9-e114-4078-b671-38e0ed40e8e9" alt="" width=25%>

Het logo en de navigatiebar blijven in beeld staan als je scrollt:

<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/5211031c-6e75-4482-912f-89708620bf10" alt="" height=400px>

De navigatiebar bevat de volgende pagina's:

<img src="https://user-images.githubusercontent.com/112859814/225850302-d20bc7fe-85ff-4ba7-8da9-976c6d91de6e.jpg" alt="" width=25%>

De kaart heeft markers die gelinkt zijn aan de zones en ziet er als volgt uit:

<img src="https://github.com/CathelijneVisser/performance-matters-optimized-website/assets/112859814/2aed387b-678a-482a-a7a8-7430a7ba5f7a" alt="" width=35%>

Het formulier om te reserveren bevat de volgende velden:

<img src="https://user-images.githubusercontent.com/112859814/230346385-455f642b-8d06-422b-b6fc-8cdcb3ae71ef.jpg" alt="" width=25%>

Er zijn drie manieren om met het formulier te beginnen:
1. Op de 'Book' knop uit de navigatie klikken. Het formulier begint dan helemaal leeg.
2. Op de 'Book now' knop van een smartzone klikken. In het formulier worden al de smartzone en de start datum ingevuld.
3. Op de 'Book later' knop van een smartzone klikken. In het formulier wordt al de smartzone ingevuld.

## 📌 Kenmerken
Voor dit project heb ik met node.js, express en ejs gewerkt. Daarnaast heb ik ook gebruik gemaakt van een client side css en js document.

Ook heb ik progressive enhancement toegepast. Progressive enhancement is een (coding) strategy waarmee je er voor kan zorgen dat je website het altijd doet.

<ol>
 <li> Content: De html structuur is zorgvuldig opgebouwd. Hierbij is ook gelet op de semantische waarde van elementen.
 <li> Presentation layer: Met css heb ik alles opgemaakt. Ook heb ik hiermee de positie van bepaalde onderdelen bepaald.
 <li> Client-side scripting: Met client-side js heb ik er bijvoorbeeld voor gezorgd dat de datum automatisch wordt ingevuld en dat je geen datum in het verleden kan selecteren.
</ol>

## ⚙️ Installatie
Om (verder) te kunnen werken aan dit project, moet je de volgende stappen volgen:

<ol>
 <li> Clone deze repository
 <li> Open de terminal (CTRL + `)
 <li> Type 'npm install'
 <li> Je ziet nu de node_modules map
 <li> Kijk eventueel in het .gitignore document of je nog iets mist
</ol>

Let op, er is gebruik gemaakt van een .env bestand.

## 📁 Bronnen
* [Leaflet](https://leafletjs.com/)
* [Maptiler](https://www.maptiler.com/)
* [Front-End Performance Checklist](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/)
* Informatie uit de colleges van FDND

## 🔒 Licentie
This project is licensed under the terms of the [MIT license](./LICENSE).
