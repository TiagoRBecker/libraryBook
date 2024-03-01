import { getServerSession } from "next-auth/next";
import ReadBook from "../../../../components/Read";
import { baseUrl } from "../../../../utils/api";
import { authOptions } from "../../../../utils/authOptions";
import { Suspense } from "react";
import Loading from "../../../loading";
const getBookID = async (id) => {
  const request = await fetch(
    `${baseUrl}/library/book/${id}`,
    {
      method: "GET",
    }
  );
  const response = await request.json();
  return response;
};
const BookID = async ({ params }) => {
  const session = await getServerSession(authOptions);
  
  const id = params.id;
  const data = await getBookID(id);


  return (
    <Suspense fallback={<Loading/>}>
    <section className="w-full min-h-screen">
      <ReadBook url={data?.magazine_pdf} />
    </section>
    </Suspense>
  );
};

export default BookID;
