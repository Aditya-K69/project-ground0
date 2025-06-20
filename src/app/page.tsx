//This is Home Function which returns <div>. This div is what will be injected as children in the <body> tag of layout.tsx
//Ithe me CSS override kelay, so even though layout.tsx madhe mentioned ki bg-black text-white, i have turned text-green ( ik it looks ugly pan samajnya sathi kelay fakt)
export default function Home() {
  return (
    <div className="flex justify-center text-3xl text-green-500">
      This is ArthaSetu Landing Page
    </div>
  );
}
