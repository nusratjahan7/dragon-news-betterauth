
import { redirect } from "next/navigation";


const defaultCategoryId = "01";

export default async function Home() {
  

  return (
    redirect(`/category/${defaultCategoryId}`)
    
  );
}
