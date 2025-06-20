//import globals.css nahi kela tar tailwind apply nahi honar, since saglya pages la tailwind vapraychay we add it in layout.tsx
import "@/app/globals.css"
/* RootLayout navacha function ahe which takes children navacha argument, children cha type is React.ReactNode
    ReactNode is nothing but Type of react component, since apan typescript use kartoy we had to mention React.ReactNode tithe.
    So basically, function ReactNode gheto ani toh body madhe inject karun return karto just like React.
    */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
//Ithe ata return kartana body la bg-black and text-white apply kelay, so bg-black and text-white will be applied to every single page on our site unless page.tsx madhe te CSS override karu apan
  return (
    <html lang="en">
      <body className="bg-black text-white"> 
        {children}
      </body>
    </html>
  );
}
