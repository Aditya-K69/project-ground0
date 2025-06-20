#ArthaSetu

-------------- Step 1 : Project Initialization --------------


 || ">>" symbol is terminal / command line ||

1) >> npx create-next-app@latest
After this, the project configuration is done, the config for this project is as follows :

✔ Would you like to use TypeScript? ... Yes -------------------> the configuration is present in tsconfig.json, basically behaviour of typescript in this project

✔ Would you like to use ESLint? … Yes -------------------> Linting is basically a tool that checks whether the code follows a standard (trailing commas, bracket spacing vagere aslya goshti astat tya)

✔ Would you like to use Tailwind CSS? … Yes -------------------> Absolute cinema , Best way to use CSS, few months ago configuration file used to be talwindconfig.css. Now it is in postcss.config.mjs

✔ Would you like your code inside a `src/` directory? … Yes -------------------> All code will be located in "src" Folder, so code will be organised and anything outside src will mostly be NextJS generated and we wont have to edit anything ( extra plugins tailwind sathi , middleware file, env file vagere are exceptions)

✔ Would you like to use App Router? (recommended) … Yes -------------------> This is the main feature. The reason we used NextJS is app router, folder-wise routes organized + api routes also done in same way. Instead of configuring and matching every route like Express framework, we only need to make "page.tsx" in desired folder and "route.ts" in api folder
For example : URL : arthasetu.com/portfolio/abc1243
            in our project we only need to make " src/portfolio/[id]/page.tsx " , id variable field ahe and pratyek user cha vegla ahe, pan NextJS automatically handles that.

✔ Would you like to use Turbopack for `next dev`? … Yes -------------------> Basically for faster compilation of project, development tool ahe as far as i know

✔ Would you like to customize the import alias (`@/*` by default)? … No -------------------> "@" is basically root of our project (src in this case)
We're using React so imagine we have a components folder in which we have written code for components.
Ex : Chart Component ahe, placed in src/Components/UserComponents/Chart.tsx
    aplyala ha component import karaycha ahe src/UserPage/Portfolio/Data/page.tsx madhe ( for example actual asa nahi karnar )

    normally, aplyala jithe import karaychay tya directory pasun backtrack karat basava lagla asta
    mhnjech " import { Chart } from "../../../Components/UserComponents/Chart.tsx " asa karava lagla asta
    ".." is previous directory ( cd .. karto magchya directory madhe jayla tasach )
    "." (single dot) is current directory

    ata we are using import alias("@" symbol asto genrally pan change pan karta yeto )
    since import alias ahe we dont need to do "../" vagere
    we can use @ which means root directory
    so import kartana we can directly say " import {Chart} from "@/Components/UserComponents/Chart.tsx" 


-x-x-x-x-x-x-x-x-x-x-x-x- Step 1 : Project Initialization End -x-x-x-x-x-x-x-x-x-x-x-x-




-------------- Step 2 : Editing Basics + Creating Basic Landing Page --------------


Firstly, NextJS che basics :

Apla sagla kahi asnar ahe te App folder madhe asnar src chya ( mhnunach app router mhntat )

3 prakar che files we have to edit :
    1) page.tsx  -----> actual page
    2) layout.tsx -----> layout same thevayla across varoius pages
    3) route.ts -----> api sathi jithe GET,POST,PUT,DELETE vagere janar

    ata the first route the user will hit is "arthasetu.com/"
    "/" route is the first route, ani all code for this is in "src/" chya page.tsx madhe
    so basically
    "src/page.tsx" is Landing Page/Home Page
    "src/layout.tsx" is layout page, ha layout will be followed for every page we define

    ata pahile layout.tsx ugdha then tithle comments vacha
    and then page.tsx ugdhun tyatle comments

    >> npm run dev
    website view karayla

-x-x-x-x-x-x-x-x-x-x-x-x- Step 2 : Editing Basics + Creating Basic Landing Page End -x-x-x-x-x-x-x-x-x-x-x-x-