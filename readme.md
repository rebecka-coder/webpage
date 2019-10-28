# Manual för webbapplikation

## Paket och verktyg

Har använt Node.js för uppgiften, som har ett pakethanteringssystem som heter npm. Jag har använt Visual studio Code (editor)
för att kunna skapa mina kataloger med filer för mitt projekt. För att kunna automatisera har jag använt mig av 
Gulp där många paket kan användas. Som t ex med Gulp-concat har jag kunnat sammanslå JS-filer och med Gulp-uglify har jag 
kunnat minifiera JavaScript. Samma sak med Gulp concatCss och Gulp-uglifycss. Paket för att kunna använda sass för css hämtades
paketet sass-compiler. För att slippa uppdatera webbläsaren hela tiden så fort man gör en ändring i utvecklingsfilerna, fanns ett 
paket för detta som hette browserSync. Ett annat paket som hette babel hämtades för att kunna konvertera Ecmascript, som är en 
version av JavaScript som gör det möjligt användas för både nuvarande och äldre webbläsare. 

## Mappar och filer

För denna webbapplikation skapades följande mappar och filer:

- Node modules som följde med gulp paketet. En gitignore mapp skapades för att tidsbespara undan dessa node-modules filer. 
- En gulpfile.js för att installera mina paket, och skapade sedan flera olika tasks (funktioner) för att köra paketen samt 
kalla på dem.
- En src mapp där all kod skapas för webbapplikationen och sedan förs över till min pub mapp för utskrift till webbläsaren.
I src-mappen finns en index.html fil, en babel-fil för ecmascript och en scss-fil för min sass kod (som är uppdelat i två andra filer,
en reset-fil och en main.scss fil). Sedan finns en js-fil innehåller en main.js. I denna fil finns all kod som får webbapplikationen
att interagera med min webbtjänst. Den har händelsehanterare för knapp och formulär, länk till webbtjänsten samt funktioner 
för alla metoder.


## Länk till webpage

[Webbapplikation]()