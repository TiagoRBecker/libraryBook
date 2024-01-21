import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  
  session: {
    strategy: "jwt",
  },

  pages: {
    signOut: "/",
    signIn:"/aut/signin"
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
   
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        
          if(credentials.email != "leonardopaiva@gmail.com"  || credentials.password != "123456"){
            throw new Error("E-mail ou senha  inválido");
           
          }
          
        const user ={
            id:1,
            name: "Leonardo Paiva",
            email:"leonardopaiva@gmail.com",
            avatar:"/user.png"
        }
       
        
        return {
          id: user?.id,
          name: user?.name,
          email: user?.email,
          image: user?.image,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user })=> {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token })=> {
      if (token) {
        session.user = token.user
      }
      return session;
    },
  },
};
