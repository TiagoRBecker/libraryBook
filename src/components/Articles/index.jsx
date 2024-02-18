const getArticle = async ({id}) => {
  const getArticleId = await fetch(
    `${baseUrl}/article/${id}?status=free`,
    {
      method: "GET",
    }
  );
  const response = await getArticleId.json();
   return response

};
const ArticleID = async () => {
  const data = await getArticle()
  return data
 


};

export default ArticleID;

